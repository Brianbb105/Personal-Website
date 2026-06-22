"use client";

import { useEffect, useRef } from "react";

type BlogAnalyticsProps = {
  category: string;
  slug: string;
  title: string;
};

type GAEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GAEventParams) => void;
  }
}

const SCROLL_DEPTHS = [25, 50, 75, 90] as const;
const ENGAGED_SECONDS = 20;
const ENGAGED_SCROLL_DEPTH = 50;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function sendBlogEvent(eventName: string, params: GAEventParams, attempt = 0): void {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }

  if (attempt < 20) {
    window.setTimeout(() => sendBlogEvent(eventName, params, attempt + 1), 250);
  }
}

function getBlogScrollDepth(): number {
  const content = document.querySelector<HTMLElement>("[data-blog-content]");

  if (!content) {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    return scrollableHeight <= 0 ? 100 : clamp(Math.round((window.scrollY / scrollableHeight) * 100), 0, 100);
  }

  const rect = content.getBoundingClientRect();
  const contentTop = window.scrollY + rect.top;
  const contentHeight = content.scrollHeight;

  if (contentHeight <= 0) {
    return 0;
  }

  const viewportBottom = window.scrollY + window.innerHeight;
  return clamp(Math.round(((viewportBottom - contentTop) / contentHeight) * 100), 0, 100);
}

export default function BlogAnalytics({ category, slug, title }: BlogAnalyticsProps) {
  const secondsVisible = useRef(0);
  const maxScrollDepth = useRef(0);
  const sentScrollDepths = useRef(new Set<number>());
  const sentEngagedRead = useRef(false);
  const sentCompleteRead = useRef(false);

  useEffect(() => {
    const baseParams = {
      blog_category: category,
      blog_slug: slug,
      blog_title: title,
    };

    const sendMilestoneEvents = () => {
      const scrollDepth = getBlogScrollDepth();
      maxScrollDepth.current = Math.max(maxScrollDepth.current, scrollDepth);

      SCROLL_DEPTHS.forEach((depth) => {
        if (scrollDepth >= depth && !sentScrollDepths.current.has(depth)) {
          sentScrollDepths.current.add(depth);
          sendBlogEvent(`blog_scroll_${depth}`, {
            ...baseParams,
            scroll_depth: depth,
          });
        }
      });

      if (
        !sentEngagedRead.current &&
        secondsVisible.current >= ENGAGED_SECONDS &&
        maxScrollDepth.current >= ENGAGED_SCROLL_DEPTH
      ) {
        sentEngagedRead.current = true;
        sendBlogEvent("blog_engaged_read", {
          ...baseParams,
          engaged_seconds: secondsVisible.current,
          max_scroll_depth: maxScrollDepth.current,
        });
      }

      if (!sentCompleteRead.current && maxScrollDepth.current >= 90) {
        sentCompleteRead.current = true;
        sendBlogEvent("blog_read_complete", {
          ...baseParams,
          engaged_seconds: secondsVisible.current,
          max_scroll_depth: maxScrollDepth.current,
        });
      }
    };

    sendBlogEvent("blog_read_start", baseParams);
    sendMilestoneEvents();

    let animationFrameId = 0;
    const handleScroll = () => {
      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = 0;
        sendMilestoneEvents();
      });
    };

    const timerId = window.setInterval(() => {
      if (document.visibilityState !== "visible") {
        return;
      }

      secondsVisible.current += 1;
      sendMilestoneEvents();
    }, 1000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", sendMilestoneEvents);

    return () => {
      window.clearInterval(timerId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", sendMilestoneEvents);

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [category, slug, title]);

  return null;
}
