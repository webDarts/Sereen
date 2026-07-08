import type { Locale } from "../data/portfolio";
import { content } from "../data/portfolio";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

export default function Site({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <main lang={locale}>
      <ScrollProgress />
      <Nav ui={c.ui} />
      <Hero ui={c.ui} />
      <About ui={c.ui} about={c.about} />
      <Education ui={c.ui} education={c.education} skills={c.skills} />
      <Experience ui={c.ui} experience={c.experience} />
      <Projects ui={c.ui} projects={c.projects} />
      <Footer ui={c.ui} />
    </main>
  );
}
