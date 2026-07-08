import { navLinks } from "../data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-surface/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-bold tracking-tight text-blue">
          sereen madi<span className="text-ink">.</span>
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
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
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <a href="#work" className="text-sm font-semibold text-blue">
            Work ↓
          </a>
        </div>
      </nav>
    </header>
  );
}
