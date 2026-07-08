import type { Content } from "../data/portfolio";
import { contact } from "../data/portfolio";
import { asset } from "../lib/asset";

const echoLayers = [
  { y: "-1.65em", opacity: 0.14 },
  { y: "-1.1em", opacity: 0.24 },
  { y: "-0.55em", opacity: 0.38 },
  { y: "0.55em", opacity: 0.38 },
  { y: "1.1em", opacity: 0.24 },
  { y: "1.65em", opacity: 0.14 },
];

export default function Hero({ ui }: { ui: Content["ui"] }) {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.35em] text-ink/60">
          {contact.name} — {ui.tagline}
        </p>

        {/* Layered wordmark, echoing the PDF cover */}
        <div className="relative select-none py-[1.6em] text-[clamp(3rem,10.5vw,8.5rem)] font-extrabold leading-none tracking-tight text-blue">
          {echoLayers.map((layer, i) => (
            <span
              key={i}
              aria-hidden
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 whitespace-nowrap"
              style={{ transform: `translateY(calc(-50% + ${layer.y}))`, opacity: layer.opacity }}
            >
              portfolio
            </span>
          ))}
          <h1 className="relative whitespace-nowrap">portfolio</h1>
        </div>

        <p className="text-base font-semibold text-ink/80">{ui.focusLine}</p>
        <p className="mt-3 flex items-center gap-2 text-sm text-ink/60">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          {ui.availability}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={asset(contact.cv)}
            download
            className="rounded-full bg-blue px-6 py-2.5 text-sm font-semibold text-surface shadow-sm transition-opacity hover:opacity-85"
          >
            {ui.downloadCv} ↓
          </a>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-blue">
            <a className="transition-colors hover:text-blue-deep" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="transition-colors hover:text-blue-deep" href={`tel:${contact.phoneHref}`}>
              {contact.phone}
            </a>
            <a
              className="transition-colors hover:text-blue-deep"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedinLabel}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-ink/40 transition-colors hover:text-blue"
        aria-label="Scroll down"
      >
        ↓
      </a>
    </section>
  );
}
