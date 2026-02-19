import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type GlassTileProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "section" | "div";
  children: ReactNode;
};

export default function GlassTile({ as: Tag = "article", className, children, ...props }: GlassTileProps) {
  return (
    <Tag className={cn("glass-tile", className)} {...props}>
      {children}
    </Tag>
  );
}
