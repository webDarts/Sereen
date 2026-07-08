import type { Content } from "../data/portfolio";
import { contact } from "../data/portfolio";
import { asset } from "../lib/asset";
import Reveal from "./Reveal";

export default function Footer({ ui }: { ui: Content["ui"] }) {
  return (
    <footer id="contact" className="scroll-mt-20 bg-panel px-6 py-24 text-cream">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            {ui.thanks.replace(/\.$/, "")}
            <span className="text-blue-soft">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-cream/80">{ui.contactText}</p>
          <p className="mt-3 max-w-xl text-sm text-cream/60">{ui.availability}</p>
          <div className="mt-10 flex flex-col gap-3 text-lg font-semibold sm:flex-row sm:flex-wrap sm:gap-x-10">
            <a className="transition-opacity hover:opacity-75" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="transition-opacity hover:opacity-75" href={`tel:${contact.phoneHref}`}>
              {contact.phone}
            </a>
            <a
              className="transition-opacity hover:opacity-75"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="transition-opacity hover:opacity-75" href={asset(contact.cv)} download>
              {ui.downloadCv}
            </a>
          </div>
        </Reveal>
        <p className="mt-16 border-t border-cream/20 pt-6 text-sm text-cream/60">
          © {new Date().getFullYear()} {contact.name} — {ui.tagline}
        </p>
      </div>
    </footer>
  );
}
