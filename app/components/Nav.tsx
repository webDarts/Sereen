import Link from "next/link";
import type { Content } from "../data/portfolio";
import { asset } from "../lib/asset";
import { contact } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ ui }: { ui: Content["ui"] }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-surface/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-bold tracking-tight text-blue">
          sereen madi<span className="text-ink">.</span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-6">
            {ui.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink/70 transition-colors hover:text-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={asset(contact.cv)}
            download
            className="rounded-full bg-blue px-4 py-1.5 text-sm font-semibold text-surface transition-opacity hover:opacity-85"
          >
            {ui.downloadCv}
          </a>
          <Link
            href={ui.langSwitch.href}
            title={ui.langSwitch.title}
            className="text-sm font-semibold text-ink/60 transition-colors hover:text-blue"
          >
            {ui.langSwitch.label}
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 sm:hidden">
          <a
            href={asset(contact.cv)}
            download
            className="rounded-full bg-blue px-3 py-1 text-xs font-semibold text-surface"
          >
            CV
          </a>
          <Link
            href={ui.langSwitch.href}
            title={ui.langSwitch.title}
            className="text-sm font-semibold text-ink/60"
          >
            {ui.langSwitch.label}
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
