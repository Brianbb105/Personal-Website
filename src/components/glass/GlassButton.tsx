import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

type SharedProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "soft";
};

type GlassButtonLinkProps = SharedProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">;

type GlassButtonElementProps = SharedProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type GlassButtonProps = GlassButtonLinkProps | GlassButtonElementProps;

function isLinkProps(props: GlassButtonProps): props is GlassButtonLinkProps {
  return typeof (props as GlassButtonLinkProps).href === "string";
}

export default function GlassButton(props: GlassButtonProps) {
  const toneClass = props.tone === "soft" ? "glass-button--soft" : undefined;

  if (isLinkProps(props)) {
    const { href, className, children, tone, ...rest } = props;
    void tone;

    return (
      <Link href={href} className={cn("glass-button", toneClass, className)} {...rest}>
        {children}
      </Link>
    );
  }

  const { className, children, type = "button", tone, ...rest } = props;
  void tone;

  return (
    <button type={type} className={cn("glass-button", toneClass, className)} {...rest}>
      {children}
    </button>
  );
}
