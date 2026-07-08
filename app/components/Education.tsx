import { education, skills } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-blue px-6 py-24 text-cream">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-soft">
            Background
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Education &amp; Skills
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <ol className="relative space-y-10 border-l border-cream/25 pl-8">
              {education.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-cream" />
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-soft">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mt-1 text-sm text-cream/70">{item.place}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-10">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-soft">
                  Computer Skills
                </h3>
                <ul className="mt-4 space-y-2">
                  {skills.tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-baseline justify-between gap-4 border-b border-cream/15 pb-2"
                    >
                      <span className="font-semibold">{tool.name}</span>
                      <span className="text-sm text-cream/70">{tool.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-soft">
                  Languages
                </h3>
                <ul className="mt-4 space-y-2">
                  {skills.languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-baseline justify-between gap-4 border-b border-cream/15 pb-2"
                    >
                      <span className="font-semibold">{lang.name}</span>
                      <span className="text-sm text-cream/70">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-soft">
                  Core Competencies
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.competencies.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-cream/30 px-4 py-1.5 text-sm font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
