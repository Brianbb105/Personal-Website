import Link from "next/link";
import type { ReactNode } from "react";
import { GlassButton, GlassPill } from "@/components/glass";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/photos", label: "Photos" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
] as const;

type NavPath = (typeof navItems)[number]["href"];

type AppShellProps = {
  activePath: NavPath;
  children: ReactNode;
};

export default function AppShell({ activePath, children }: AppShellProps) {
  return (
    <div className="app-frame">
      <GlassPill as="header" className="top-nav reveal delay-1">
        <div className="top-nav-brand">
          <Link href="/" className="brand-badge" aria-label="Go to homepage">
            BW.
          </Link>

          <div className="brand-copy">
            <p className="brand-name">Brian Wumutijiang</p>
            <p className="brand-location">Santa Barbara, California</p>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`glass-button nav-link${activePath === item.href ? " is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="quick-actions" aria-label="Quick actions">
          <GlassButton href="/projects" className="quick-action" tone="soft">
            Latest Builds
          </GlassButton>
          <GlassButton href="/blogs" className="quick-action icon-action" aria-label="Open latest writing">
            <span aria-hidden className="icon-glyph">
              ✦
            </span>
          </GlassButton>
        </div>
      </GlassPill>

      <main className="page-content">{children}</main>

      <footer className="site-foot reveal delay-6">
        Built with curiosity, consistency, and late-night notes.
      </footer>
    </div>
  );
}
