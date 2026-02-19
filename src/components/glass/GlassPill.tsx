import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type GlassPillProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "header" | "nav" | "section";
  children: ReactNode;
};

export default function GlassPill({ as: Tag = "div", className, children, ...props }: GlassPillProps) {
  return (
    <Tag className={cn("glass-pill", className)} {...props}>
      {children}
    </Tag>
  );
}
