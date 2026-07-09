"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const lang = pathname?.startsWith("/de") ? "de" : "en";
    document.documentElement.lang = lang;
  }, [pathname]);

  return null;
}
