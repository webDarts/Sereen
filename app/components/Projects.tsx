import Image from "next/image";
import { projects } from "../data/portfolio";
import { asset } from "../lib/asset";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue">
            Selected Work
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Projects
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
                  </div>

                  <div
                    className={`grid gap-4 lg:col-span-3 ${
                      project.images.length > 1 ? "sm:grid-cols-2" : ""
                    }`}
                  >
                    {project.images.map((img, j) => (
                      <Image
                        key={img.src}
                        src={asset(img.src)}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className={`w-full rounded-xl border border-ink/5 object-cover shadow-sm ${
                          project.images.length % 2 === 1 && j === 0
                            ? "sm:col-span-2"
                            : ""
                        }`}
                      />
                    ))}
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
