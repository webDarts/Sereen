import Image from "next/image";
import type { Content } from "../data/portfolio";
import { asset } from "../lib/asset";
import Reveal from "./Reveal";

export default function About({
  ui,
  about,
}: {
  ui: Content["ui"];
  about: Content["about"];
}) {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-blue-mist" />
            <Image
              src={asset(about.photo)}
              alt="Portrait of Sereen Madi"
              width={1600}
              height={1200}
              className="relative rounded-2xl object-cover shadow-sm"
              priority
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue">
            {ui.aboutKicker}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {about.greeting}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">{about.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
