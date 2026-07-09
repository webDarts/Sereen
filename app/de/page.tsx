import type { Metadata } from "next";
import Site from "../components/Site";
import { SITE_URL } from "../data/portfolio";

export const metadata: Metadata = {
  title: "Sereen Madi — Grafikdesign-Portfolio",
  description:
    "Portfolio von Sereen Madi, Studentin für Design und Visuelle Kommunikation — Grafikdesign, arabische Typografie, Illustration, Verpackungs- und Produktdesign. Offen für Praktika in Deutschland.",
  alternates: {
    canonical: `${SITE_URL}de/`,
    languages: {
      en: `${SITE_URL}`,
      de: `${SITE_URL}de/`,
    },
  },
  openGraph: {
    title: "Sereen Madi — Grafikdesign-Portfolio",
    description:
      "Grafikdesign, arabische Typografie, Illustration, Verpackungs- und Produktdesign.",
    url: `${SITE_URL}de/`,
    images: [`${SITE_URL}og.png`],
    locale: "de_DE",
    type: "website",
  },
};

export default function HomeDe() {
  return <Site locale="de" />;
}
