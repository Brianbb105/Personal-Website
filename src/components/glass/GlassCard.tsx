import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type GlassCardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "section" | "div" | "figure";
  children: ReactNode;
};

export default function GlassCard({ as: Tag = "article", className, children, ...props }: GlassCardProps) {
  return (
    <Tag className={cn("glass-card", className)} {...props}>
      {children}
    </Tag>
  );
}
