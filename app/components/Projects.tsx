import type { Content } from "../data/portfolio";
import { asset } from "../lib/asset";
import Gallery from "./Gallery";
import Reveal from "./Reveal";

export default function Projects({
  ui,
  projects,
}: {
  ui: Content["ui"];
  projects: Content["projects"];
}) {
  return (
    <section id="work" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue">
            {ui.workKicker}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {ui.workTitle}
          </h2>
        </Reveal>

        <div className="mt-16 space-y-28">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={project.id}>
                <article
                  id={project.id}
                  className="grid items-start gap-10 lg:grid-cols-5"
                >
                  <div
                    className={`lg:col-span-2 lg:sticky lg:top-28 ${
                      flipped ? "lg:order-2" : ""
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue">
                      {String(i + 1).padStart(2, "0")} · {project.category}
                    </p>
                    <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink">
                      {project.title}
                    </h3>
                    {project.arabicTitle && (
                      <p
                        lang="ar"
                        dir="rtl"
                        className="mt-2 text-right text-2xl font-semibold text-blue sm:text-left"
                      >
                        {project.arabicTitle}
                      </p>
                    )}
                    {project.description.map((para) => (
                      <p
                        key={para.slice(0, 32)}
                        className="mt-4 text-[15px] leading-relaxed text-ink/75"
                      >
                        {para}
                      </p>
                    ))}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-mist px-3 py-1 text-xs font-semibold text-ink/80">
                        {project.context}
                      </span>
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`lg:col-span-3 ${flipped ? "lg:order-1" : ""}`}>
                    <Gallery
                      images={project.images.map((img) => ({
                        ...img,
                        src: asset(img.src),
                      }))}
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
