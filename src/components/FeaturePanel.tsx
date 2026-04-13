import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/components/glass/cn";

type FeaturePanelProps = {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
  children?: ReactNode;
  id?: string;
};

export default function FeaturePanel({
  title,
  description,
  href,
  linkLabel,
  className,
  children,
  id,
}: FeaturePanelProps) {
  return (
    <section id={id} className={cn("liquid-panel section-panel", className)}>
      <div className={cn("section-panel-grid", !children && "section-panel-grid--single")}>
        <div className="section-copy">
          <h2 className="panel-heading">{title}</h2>
          {description ? <p className="panel-description">{description}</p> : null}
          {href && linkLabel ? (
            <Link href={href} className="glass-inline-link">
              {linkLabel}
            </Link>
          ) : null}
        </div>

        {children ? <div className="section-media">{children}</div> : null}
      </div>
    </section>
  );
}
