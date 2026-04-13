import Link from "next/link";
import type { ReactNode } from "react";
import { navItems } from "@/content/siteContent";

type NavPath = (typeof navItems)[number]["href"];

type AppShellProps = {
  activePath: NavPath;
  children: ReactNode;
};

export default function AppShell({ activePath, children }: AppShellProps) {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="top-nav reveal delay-1">
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${activePath === item.href ? " is-active" : ""}`}
              aria-current={activePath === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="page-main">{children}</main>

      <footer className="site-footer reveal delay-6">© {copyrightYear} Brian Wumutijiang. All rights reserved.</footer>
    </div>
  );
}
