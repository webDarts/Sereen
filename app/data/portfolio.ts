export type Locale = "en" | "de";

export const SITE_URL = "https://webdarts.github.io/Serren";

export const contact = {
  name: "Sereen Madi",
  email: "sereenzaid0@gmail.com",
  phone: "+49 152 157 703 14",
  phoneHref: "+4915215770314",
  linkedin: "https://www.linkedin.com/in/sereen-madi-2b6116362",
  linkedinLabel: "linkedin.com/in/sereen-madi",
  cv: "/Sereen-Madi-CV.pdf",
};

export type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Project = {
  id: string;
  category: string;
  title: string;
  arabicTitle?: string;
  context: string;
  tools: string[];
  description: string[];
  images: ProjectImage[];
};

export type Content = {
  ui: {
    nav: { href: string; label: string }[];
    downloadCv: string;
    tagline: string;
    focusLine: string;
    availability: string;
    aboutKicker: string;
    eduKicker: string;
    eduTitle: string;
    softwareTitle: string;
    languagesTitle: string;
    focusTitle: string;
    expKicker: string;
    expTitle: string;
    workKicker: string;
    workTitle: string;
    thanks: string;
    contactText: string;
    langSwitch: { href: string; label: string; title: string };
  };
  about: { greeting: string; text: string; photo: string };
  education: { period: string; title: string; place: string }[];
  skills: {
    tools: { name: string; level: string }[];
    languages: { name: string; level: string }[];
    focus: string[];
  };
  experience: { year: string; role: string; place: string; points: string[] }[];
  projects: Project[];
};

const images = {
  logo: [
    { src: "/images/logo-paper.jpeg", width: 800, height: 600 },
    { src: "/images/logo-keychain.jpeg", width: 800, height: 600 },
  ],
  illustration: [
    { src: "/images/illustration-poster.jpeg", width: 800, height: 600 },
    { src: "/images/illustration-moodboard.png", width: 560, height: 560 },
  ],
  bloompot: [
    { src: "/images/bloompot-poster.jpeg", width: 565, height: 800 },
    { src: "/images/bloompot-process.png", width: 800, height: 593 },
    { src: "/images/bloompot-detail-1.jpeg", width: 427, height: 640 },
    { src: "/images/bloompot-detail-2.jpeg", width: 533, height: 800 },
  ],
  typography: [
    { src: "/images/typography-trifold.jpeg", width: 800, height: 600 },
    { src: "/images/typography-clear-sensitive.jpeg", width: 800, height: 600 },
    { src: "/images/typography-worried.jpeg", width: 800, height: 600 },
  ],
  packaging: [
    { src: "/images/packaging-closed.jpeg", width: 533, height: 800 },
    { src: "/images/packaging-open.jpeg", width: 533, height: 800 },
    { src: "/images/packaging-sauce.jpeg", width: 480, height: 720 },
    { src: "/images/packaging-hand.jpeg", width: 480, height: 720 },
  ],
  ornaments: [
    { src: "/images/ornament-blue.jpeg", width: 800, height: 600 },
    { src: "/images/ornament-pink.jpeg", width: 800, height: 600 },
    { src: "/images/ornament-notebook.jpeg", width: 800, height: 600 },
  ],
  khat: [
    { src: "/images/khatkhabar-poster.jpeg", width: 800, height: 600 },
    { src: "/images/khatkhabar-glyphs.png", width: 800, height: 618 },
  ],
};

const withAlts = (
  imgs: { src: string; width: number; height: number }[],
  alts: string[]
): ProjectImage[] => imgs.map((img, i) => ({ ...img, alt: alts[i] ?? "" }));

export const content: Record<Locale, Content> = {
  en: {
    ui: {
      nav: [
        { href: "#about", label: "About" },
        { href: "#education", label: "Education" },
        { href: "#experience", label: "Experience" },
        { href: "#work", label: "Work" },
        { href: "#contact", label: "Contact" },
      ],
      downloadCv: "Download CV",
      tagline: "Design & Visual Communication",
      focusLine: "Graphic Design · Arabic Typography · Packaging · Illustration",
      availability:
        "Open to internships and working student positions in graphic design — based in Gießen, Germany.",
      aboutKicker: "About me",
      eduKicker: "Background",
      eduTitle: "Education & Skills",
      softwareTitle: "Software",
      languagesTitle: "Languages",
      focusTitle: "Focus Areas",
      expKicker: "Experience",
      expTitle: "Work Experience",
      workKicker: "Selected Work",
      workTitle: "Projects",
      thanks: "thank you.",
      contactText: "Interested in working together or want to see more? Get in touch.",
      langSwitch: { href: "/de", label: "DE", title: "Deutsche Version" },
    },
    about: {
      greeting: "Hello, I'm Sereen Madi!",
      text: "I am a creative and motivated student in the field of Design and Visual Communication with a passion for graphic design, typography, and creative ideas. I enjoy experimenting with concepts and transforming them into clear visual communication. I am looking to further develop my skills and gain more experience in the field of design.",
      photo: "/images/about-sereen.jpeg",
    },
    education: [
      {
        period: "Feb 2026 – Aug 2026",
        title: "Exchange Semester, B.A. Design and Visual Communication",
        place: "Technische Hochschule Mittelhessen (THM), Gießen, Germany",
      },
      {
        period: "Since Sep 2022",
        title: "Studies in Design and Visual Communication",
        place: "German-Jordanian University (GJU), Jabal Amman, Jordan",
      },
      {
        period: "Jun 2022",
        title: "Jordanian General Secondary Education Certificate (Tawjihi)",
        place: "Universal Civilization Academy, Amman, Jordan",
      },
    ],
    skills: {
      tools: [
        { name: "Adobe Illustrator", level: "very good knowledge" },
        { name: "Adobe Photoshop", level: "good knowledge" },
        { name: "Adobe InDesign", level: "good knowledge" },
        { name: "Glyphs", level: "type design" },
        { name: "MS PowerPoint", level: "good knowledge" },
      ],
      languages: [
        { name: "Arabic", level: "native language" },
        { name: "English", level: "fluent in speaking and writing" },
        { name: "German", level: "B1 level" },
      ],
      focus: [
        "Brand Identity",
        "Arabic Typography",
        "Packaging Design",
        "Illustration",
        "Editorial & Type Design",
        "Concept Development",
      ],
    },
    experience: [
      {
        year: "2025",
        role: "Internship",
        place: "Estudio — Commercial Photography Studio",
        points: [
          "Assisted with photoshoots",
          "Created moodboards",
          "Wrote social media content",
          "Captured behind-the-scenes material",
          "Worked as part of a team",
        ],
      },
      {
        year: "2025",
        role: "Participant",
        place: "Photography Workshop, Estudio",
        points: [
          "Learned basics of photography and camera use",
          "Explored different lighting techniques",
          "Understood the effect of light in images",
        ],
      },
      {
        year: "2025",
        role: "Head of Volunteer Team",
        place: "GJU Fashion Show “Stitched Cities”",
        points: [
          "Coordinated the volunteer team",
          "Organized backstage operations",
          "Supported a smooth and timely fashion show schedule",
        ],
      },
    ],
    projects: [
      {
        id: "logo-design",
        category: "Logo Design",
        title: "Fund for Supporting the Cultural and Artistic Movement",
        context: "University project · GJU",
        tools: ["Adobe Illustrator"],
        description: [
          "The flowing line represents people coming together, showing connection, community, and ongoing support — just like the fund's role in bringing individuals together through culture and art. The geometric shapes reflect the variety of artistic and cultural fields, and the way they interact highlights collaboration, creativity, and the constant movement within the cultural scene.",
          "The colors are taken from the Jordanian flag, adding a strong sense of national identity and belonging.",
        ],
        images: withAlts(images.logo, [
          "Final logo printed on paper",
          "Logo applied to a leather keychain",
        ]),
      },
      {
        id: "illustration",
        category: "Illustration · Poster",
        title: "My Home in My Bag",
        arabicTitle: "بيتي في حقيبتي",
        context: "Personal project",
        tools: ["Adobe Photoshop", "Collage"],
        description: [
          "This illustration explores the theme of personal memory and belonging. Inspired by my move to Germany, I imagined my home as a portable space that carries the memories, objects, and emotions that shape my identity.",
          "The central house, emerging from a suitcase, symbolizes the idea of carrying home wherever life takes me. Each side of the house contains meaningful elements from my daily life in Jordan — family traditions, books, plants, coffee, neighborhood references, and personal belongings that evoke comfort and familiarity. The colorful composition reflects the richness of these memories, while the collage technique creates a dreamlike atmosphere where reality and imagination coexist.",
        ],
        images: withAlts(images.illustration, [
          "Final poster — a collaged house emerging from a suitcase",
          "Process — moodboard of collage references",
        ]),
      },
      {
        id: "product-design",
        category: "Product Design",
        title: "Bloom Pot for Peace Lily",
        context: "Product design course · GJU",
        tools: ["Sketching & prototyping", "Clay modelling"],
        description: [
          "This project explores how product design can improve plant care through passive environmental control. The objective was to design a ceramic pot specifically for a peace lily, a plant that thrives in a consistently humid environment.",
          "The design features a rectangular form with integrated curved chambers at the base that function as a built-in water reservoir. As the stored water gradually evaporates, it creates a humid microclimate around the plant. Carefully positioned drainage holes regulate the water level and prevent overwatering while preserving humidity.",
          "I developed the concept, explored form iterations through sketching and prototyping, and produced the final clay model — combining functionality with a clean, minimal aesthetic.",
        ],
        images: withAlts(images.bloompot, [
          "Final poster — Bloom Pot with peace lily",
          "Process — sketches and clay form iterations",
          "Detail — pot rim and soil",
          "Detail — double-walled ceramic reservoir",
        ]),
      },
      {
        id: "arabic-typography",
        category: "Typography",
        title: "Arabic Typography: Personality Through Form",
        context: "Typography course · GJU",
        tools: ["Hand lettering", "Adobe Illustrator"],
        description: [
          "This project explores how typography can communicate meaning beyond written language. Using Arabic letterforms, I translated personal characteristics into visual compositions, allowing the form of each word to reinforce its meaning.",
          "“Ambitious” (طموحة) extends vertically to express aspiration and growth, while “Understanding” (متفهمة) uses interconnected letterforms to convey empathy and connection. “Clear” (واضحة) emphasizes simplicity through clean spacing, and “Sensitive” (حساسة) is expressed through softer forms and a delicate visual rhythm.",
        ],
        images: withAlts(images.typography, [
          "Trifold card with expressive Arabic letterforms",
          "Cards showing the words “clear” and “sensitive”",
          "Card showing the word “worried” in sketched letterforms",
        ]),
      },
      {
        id: "packaging",
        category: "Packaging",
        title: "SAJ Zinger Packaging",
        context: "Packaging course · with restaurant SAJ",
        tools: ["Adobe Illustrator", "Prototyping"],
        description: [
          "Developed for a packaging design course in collaboration with the restaurant SAJ, the goal was to redesign the traditional zinger sandwich packaging with a practical solution that improves storage and usability.",
          "Instead of a disposable wrap, I designed a reusable box that protects the sandwich and lets customers store leftovers in the refrigerator without transferring the food. A dedicated compartment keeps the dipping sauce secure and easily accessible — a functional, user-centered design for a cleaner, more organized dining experience.",
        ],
        images: withAlts(images.packaging, [
          "Closed SAJ sandwich box",
          "Open box with sandwich inside",
          "Detail — integrated sauce compartment",
          "The box in use",
        ]),
      },
      {
        id: "calligraphy",
        category: "Calligraphy · Ornaments",
        title: "Ornament Design",
        context: "Calligraphy course · GJU",
        tools: ["Adobe Illustrator"],
        description: [
          "This project explored ornament design within a calligraphy course. I developed three different ornaments, each based on three variations of pattern exploration.",
          "Through sketching and experimentation I tested different compositions and refined the most successful ideas, then enhanced the final three designs through color. In the last step, the colored ornaments were printed as gift wrapping paper — turning abstract patterns into a functional, personal application.",
        ],
        images: withAlts(images.ornaments, [
          "Blue geometric ornament printed as wrapping paper",
          "Pink and teal ornament wrapping paper roll",
          "Ornament pattern applied to a notebook cover",
        ]),
      },
      {
        id: "khat-khabar",
        category: "Arabic Typeface Design",
        title: "Khat Khabar",
        arabicTitle: "خط خبر",
        context: "Arabic typography course · GJU",
        tools: ["Glyphs"],
        description: [
          "Designed as part of an Arabic Typography course, Khat Khabar is a semi-geometric Arabic typeface created using Glyphs. Inspired by the modular structure and readability of Verdana, I adapted its design principles to create a contemporary Arabic typeface while preserving the unique characteristics of Arabic script.",
          "Designed for newspaper and digital headlines, the typeface combines strong visual presence with clear legibility. The project involved developing the complete character set, refining proportions and spacing, and building a cohesive type system for editorial use.",
        ],
        images: withAlts(images.khat, [
          "Specimen poster with paper tube",
          "Complete character set of Khat Khabar",
        ]),
      },
    ],
  },

  de: {
    ui: {
      nav: [
        { href: "#about", label: "Über mich" },
        { href: "#education", label: "Ausbildung" },
        { href: "#experience", label: "Erfahrung" },
        { href: "#work", label: "Arbeiten" },
        { href: "#contact", label: "Kontakt" },
      ],
      downloadCv: "Lebenslauf (PDF)",
      tagline: "Design & Visuelle Kommunikation",
      focusLine: "Grafikdesign · Arabische Typografie · Verpackung · Illustration",
      availability:
        "Offen für Praktika und Werkstudentenstellen im Grafikdesign — wohnhaft in Gießen.",
      aboutKicker: "Über mich",
      eduKicker: "Werdegang",
      eduTitle: "Ausbildung & Fähigkeiten",
      softwareTitle: "Software",
      languagesTitle: "Sprachen",
      focusTitle: "Schwerpunkte",
      expKicker: "Erfahrung",
      expTitle: "Berufserfahrung",
      workKicker: "Ausgewählte Arbeiten",
      workTitle: "Projekte",
      thanks: "danke.",
      contactText:
        "Interesse an einer Zusammenarbeit oder Lust, mehr zu sehen? Schreiben Sie mir gern.",
      langSwitch: { href: "/", label: "EN", title: "English version" },
    },
    about: {
      greeting: "Hallo, ich bin Sereen Madi!",
      text: "Ich bin eine kreative und motivierte Studentin im Bereich Design und Visuelle Kommunikation mit einer Leidenschaft für Grafikdesign, Typografie und kreative Ideen. Ich experimentiere gerne mit Konzepten und übersetze sie in klare visuelle Kommunikation. Ich möchte meine Fähigkeiten weiterentwickeln und mehr Erfahrung im Designbereich sammeln.",
      photo: "/images/about-sereen.jpeg",
    },
    education: [
      {
        period: "Feb. 2026 – Aug. 2026",
        title: "Auslandssemester, B.A. Design und Visuelle Kommunikation",
        place: "Technische Hochschule Mittelhessen (THM), Gießen",
      },
      {
        period: "Seit Sep. 2022",
        title: "Studium Design und Visuelle Kommunikation",
        place: "German-Jordanian University (GJU), Jabal Amman, Jordanien",
      },
      {
        period: "Juni 2022",
        title: "Jordanische Allgemeine Hochschulreife (Tawjihi)",
        place: "Universal Civilization Academy, Amman, Jordanien",
      },
    ],
    skills: {
      tools: [
        { name: "Adobe Illustrator", level: "sehr gute Kenntnisse" },
        { name: "Adobe Photoshop", level: "gute Kenntnisse" },
        { name: "Adobe InDesign", level: "gute Kenntnisse" },
        { name: "Glyphs", level: "Schriftgestaltung" },
        { name: "MS PowerPoint", level: "gute Kenntnisse" },
      ],
      languages: [
        { name: "Arabisch", level: "Muttersprache" },
        { name: "Englisch", level: "fließend in Wort und Schrift" },
        { name: "Deutsch", level: "Niveau B1" },
      ],
      focus: [
        "Markenidentität",
        "Arabische Typografie",
        "Verpackungsdesign",
        "Illustration",
        "Editorial- & Schriftdesign",
        "Konzeptentwicklung",
      ],
    },
    experience: [
      {
        year: "2025",
        role: "Praktikum",
        place: "Estudio — kommerzielles Fotostudio",
        points: [
          "Unterstützung bei Fotoshootings",
          "Erstellung von Moodboards",
          "Verfassen von Social-Media-Inhalten",
          "Aufnahme von Behind-the-Scenes-Material",
          "Arbeit im Team",
        ],
      },
      {
        year: "2025",
        role: "Teilnehmerin",
        place: "Fotografie-Workshop, Estudio",
        points: [
          "Grundlagen der Fotografie und Kamerabedienung",
          "Erprobung verschiedener Beleuchtungstechniken",
          "Verständnis der Wirkung von Licht im Bild",
        ],
      },
      {
        year: "2025",
        role: "Leitung des Freiwilligenteams",
        place: "GJU Fashion Show „Stitched Cities“",
        points: [
          "Koordination des Freiwilligenteams",
          "Organisation des Backstage-Bereichs",
          "Unterstützung eines reibungslosen, pünktlichen Ablaufs",
        ],
      },
    ],
    projects: [
      {
        id: "logo-design",
        category: "Logodesign",
        title: "Fonds zur Förderung der Kultur- und Kunstszene",
        context: "Studienprojekt · GJU",
        tools: ["Adobe Illustrator"],
        description: [
          "Die fließende Linie steht für Menschen, die zusammenkommen — für Verbindung, Gemeinschaft und kontinuierliche Unterstützung, ganz wie die Rolle des Fonds, Menschen durch Kultur und Kunst zusammenzubringen. Die geometrischen Formen spiegeln die Vielfalt der künstlerischen und kulturellen Bereiche wider; ihr Zusammenspiel steht für Kollaboration, Kreativität und die ständige Bewegung in der Kulturszene.",
          "Die Farben stammen aus der jordanischen Flagge und vermitteln ein starkes Gefühl von nationaler Identität und Zugehörigkeit.",
        ],
        images: withAlts(images.logo, [
          "Finales Logo auf Papier gedruckt",
          "Logo auf einem Leder-Schlüsselanhänger",
        ]),
      },
      {
        id: "illustration",
        category: "Illustration · Plakat",
        title: "Mein Zuhause in meiner Tasche",
        arabicTitle: "بيتي في حقيبتي",
        context: "Persönliches Projekt",
        tools: ["Adobe Photoshop", "Collage"],
        description: [
          "Diese Illustration beschäftigt sich mit persönlicher Erinnerung und Zugehörigkeit. Inspiriert von meinem Umzug nach Deutschland stellte ich mir mein Zuhause als tragbaren Raum vor, der die Erinnerungen, Objekte und Gefühle trägt, die meine Identität prägen.",
          "Das zentrale Haus, das aus einem Koffer wächst, symbolisiert die Idee, das Zuhause überallhin mitzunehmen. Jede Seite des Hauses zeigt bedeutungsvolle Elemente aus meinem Alltag in Jordanien — Familientraditionen, Bücher, Pflanzen, Kaffee und persönliche Gegenstände. Die farbenfrohe Komposition spiegelt den Reichtum dieser Erinnerungen wider, während die Collagetechnik eine traumhafte Atmosphäre schafft, in der Realität und Fantasie nebeneinander bestehen.",
        ],
        images: withAlts(images.illustration, [
          "Finales Plakat — ein collagiertes Haus wächst aus einem Koffer",
          "Prozess — Moodboard mit Collage-Referenzen",
        ]),
      },
      {
        id: "product-design",
        category: "Produktdesign",
        title: "Bloom Pot für die Friedenslilie",
        context: "Produktdesign-Kurs · GJU",
        tools: ["Skizzieren & Prototyping", "Tonmodellierung"],
        description: [
          "Dieses Projekt untersucht, wie Produktdesign die Pflanzenpflege durch passive Klimaregulierung verbessern kann. Ziel war ein Keramiktopf speziell für eine Friedenslilie — eine Pflanze, die eine konstant hohe Luftfeuchtigkeit benötigt.",
          "Der rechteckige Topf besitzt integrierte, gebogene Kammern am Boden, die als Wasserreservoir dienen. Durch die allmähliche Verdunstung entsteht ein feuchtes Mikroklima um die Pflanze; gezielt platzierte Drainagelöcher regulieren den Wasserstand und verhindern Staunässe.",
          "Ich entwickelte das Konzept, erprobte Formvarianten durch Skizzen und Prototypen und fertigte das finale Tonmodell — Funktionalität kombiniert mit einer klaren, minimalistischen Ästhetik.",
        ],
        images: withAlts(images.bloompot, [
          "Finales Plakat — Bloom Pot mit Friedenslilie",
          "Prozess — Skizzen und Formvarianten in Ton",
          "Detail — Topfrand und Erde",
          "Detail — doppelwandiges Keramikreservoir",
        ]),
      },
      {
        id: "arabic-typography",
        category: "Typografie",
        title: "Arabische Typografie: Persönlichkeit durch Form",
        context: "Typografie-Kurs · GJU",
        tools: ["Handlettering", "Adobe Illustrator"],
        description: [
          "Dieses Projekt zeigt, wie Typografie Bedeutung jenseits der geschriebenen Sprache vermitteln kann. Mit arabischen Buchstabenformen übersetzte ich persönliche Eigenschaften in visuelle Kompositionen, bei denen die Form jedes Wortes seine Bedeutung verstärkt.",
          "„Ambitioniert“ (طموحة) streckt sich vertikal nach oben und steht für Streben und Wachstum, „Verständnisvoll“ (متفهمة) nutzt verbundene Buchstaben als Zeichen von Empathie, „Klar“ (واضحة) betont Einfachheit durch ruhige Abstände, und „Sensibel“ (حساسة) zeigt sich in weichen Formen und einem feinen visuellen Rhythmus.",
        ],
        images: withAlts(images.typography, [
          "Leporello mit expressiven arabischen Buchstabenformen",
          "Karten mit den Wörtern „klar“ und „sensibel“",
          "Karte mit dem Wort „besorgt“ in skizzierten Buchstaben",
        ]),
      },
      {
        id: "packaging",
        category: "Verpackungsdesign",
        title: "SAJ Zinger-Verpackung",
        context: "Verpackungsdesign-Kurs · mit Restaurant SAJ",
        tools: ["Adobe Illustrator", "Prototyping"],
        description: [
          "Im Rahmen eines Verpackungsdesign-Kurses in Zusammenarbeit mit dem Restaurant SAJ entstand eine praktische Neugestaltung der klassischen Zinger-Sandwich-Verpackung mit Fokus auf Aufbewahrung und Benutzerfreundlichkeit.",
          "Statt einer Einwegfolie entwarf ich eine wiederverwendbare Box, die das Sandwich schützt und Reste ohne Umfüllen im Kühlschrank aufbewahrt. Ein eigenes Fach hält die Dip-Sauce sicher und griffbereit — ein funktionales, nutzerzentriertes Design für ein saubereres, besser organisiertes Essenserlebnis.",
        ],
        images: withAlts(images.packaging, [
          "Geschlossene SAJ-Sandwichbox",
          "Geöffnete Box mit Sandwich",
          "Detail — integriertes Saucenfach",
          "Die Box in Benutzung",
        ]),
      },
      {
        id: "calligraphy",
        category: "Kalligrafie · Ornamente",
        title: "Ornament-Design",
        context: "Kalligrafie-Kurs · GJU",
        tools: ["Adobe Illustrator"],
        description: [
          "Dieses Projekt entstand in einem Kalligrafie-Kurs und widmet sich dem Ornament-Design. Ich entwickelte drei verschiedene Ornamente, jeweils auf Basis von drei Mustervariationen.",
          "Durch Skizzieren und Experimentieren testete ich verschiedene Kompositionen, wählte die stärksten Entwürfe aus und verfeinerte sie farblich. Im letzten Schritt wurden die Ornamente als Geschenkpapier gedruckt — abstrakte Muster wurden so zur funktionalen, persönlichen Anwendung.",
        ],
        images: withAlts(images.ornaments, [
          "Blaues geometrisches Ornament als Geschenkpapier",
          "Geschenkpapierrolle mit rosa-türkisem Ornament",
          "Ornamentmuster auf einem Notizbuchumschlag",
        ]),
      },
      {
        id: "khat-khabar",
        category: "Arabisches Schriftdesign",
        title: "Khat Khabar",
        arabicTitle: "خط خبر",
        context: "Arabische-Typografie-Kurs · GJU",
        tools: ["Glyphs"],
        description: [
          "Khat Khabar ist eine semi-geometrische arabische Schrift, die im Rahmen eines Arabische-Typografie-Kurses mit Glyphs entstand. Inspiriert von der modularen Struktur und Lesbarkeit der Verdana übertrug ich deren Gestaltungsprinzipien auf eine zeitgenössische arabische Schrift, ohne den besonderen Charakter der arabischen Schrift zu verlieren.",
          "Die für Zeitungs- und Digital-Headlines entworfene Schrift verbindet starke visuelle Präsenz mit klarer Lesbarkeit. Das Projekt umfasste die Entwicklung des kompletten Zeichensatzes, die Verfeinerung von Proportionen und Abständen sowie den Aufbau eines kohärenten Schriftsystems für den Editorial-Einsatz.",
        ],
        images: withAlts(images.khat, [
          "Schriftmusterplakat mit Papprolle",
          "Vollständiger Zeichensatz von Khat Khabar",
        ]),
      },
    ],
  },
};
