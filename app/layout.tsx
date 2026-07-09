import type { Metadata } from "next";
import { Poppins, IBM_Plex_Sans_Arabic } from "next/font/google";
import { SITE_URL, contact } from "./data/portfolio";
import LangSetter from "./components/LangSetter";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sereen Madi — Graphic Design Portfolio",
  description:
    "Portfolio of Sereen Madi, Design & Visual Communication student — graphic design, Arabic typography, illustration, packaging and product design. Open to internships in Germany.",
  keywords: [
    "graphic design",
    "Arabic typography",
    "packaging design",
    "illustration",
    "portfolio",
    "Sereen Madi",
  ],
  openGraph: {
    title: "Sereen Madi — Graphic Design Portfolio",
    description:
      "Graphic design, Arabic typography, illustration, packaging and product design.",
    url: `${SITE_URL}`,
    siteName: "Sereen Madi — Portfolio",
    images: [`${SITE_URL}og.png`],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sereen Madi — Graphic Design Portfolio",
    description:
      "Graphic design, Arabic typography, illustration, packaging and product design.",
    images: [`${SITE_URL}og.png`],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contact.name,
  jobTitle: "Graphic Designer",
  url: `${SITE_URL}`,
  email: `mailto:${contact.email}`,
  sameAs: [contact.linkedin],
  knowsLanguage: ["ar", "en", "de"],
  knowsAbout: [
    "Graphic Design",
    "Arabic Typography",
    "Packaging Design",
    "Illustration",
    "Type Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LangSetter />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
