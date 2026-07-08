import type { Metadata } from "next";
import { Poppins, IBM_Plex_Sans_Arabic } from "next/font/google";
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
  title: "Sereen Madi — Portfolio",
  description:
    "Portfolio of Sereen Madi, Design & Visual Communication student — graphic design, typography, illustration, packaging and product design.",
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
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()',
          }}
        />
        {children}
      </body>
    </html>
  );
}
