import type { Metadata } from "next";
import Site from "./components/Site";
import { SITE_URL } from "./data/portfolio";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}`,
    languages: {
      en: `${SITE_URL}`,
      de: `${SITE_URL}de/`,
    },
  },
};

export default function Home() {
  return <Site locale="en" />;
}
