import Link from "next/link";
import type { ReactNode } from "react";

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
      <header className="top-nav reveal delay-1">
        <Link href="/" className="brand">
          BW.
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${activePath === item.href ? " is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="page-content">{children}</main>

      <footer className="site-foot reveal delay-6">
        Built with curiosity, consistency, and late-night notes.
      </footer>
    </div>
  );
}
