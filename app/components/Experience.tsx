import Image from "next/image";
import type { Content } from "../data/portfolio";
import { asset } from "../lib/asset";
import Reveal from "./Reveal";

export default function Experience({
  ui,
  experience,
}: {
  ui: Content["ui"];
  experience: Content["experience"];
}) {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue">
            {ui.expKicker}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {ui.expTitle}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {experience.map((item, i) => (
            <Reveal key={item.place} delay={i * 120}>
              <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-card p-7 shadow-sm">
                <p className="text-sm font-bold text-blue">{item.year}</p>
                <h3 className="mt-2 text-xl font-bold leading-snug text-ink">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink/60">{item.place}</p>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink/75">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-soft" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <Image
              src={asset("/images/experience-studio.jpeg")}
              alt="Commercial photography studio with lighting equipment"
              width={1787}
              height={1192}
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
