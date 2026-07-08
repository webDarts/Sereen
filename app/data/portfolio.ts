export const contact = {
  name: "Sereen Madi",
  email: "sereenzaid0@gmail.com",
  phone: "+49 152 157 703 14",
  phoneHref: "+4915215770314",
  linkedin: "https://www.linkedin.com/in/sereen-madi-2b6116362",
  linkedinLabel: "linkedin.com/in/sereen-madi",
};

export const about = {
  greeting: "Hello, I'm Sereen Madi!",
  text: "I am a creative and motivated student in the field of Design and Visual Communication with a passion for graphic design, typography, and creative ideas. I enjoy experimenting with concepts and transforming them into clear visual communication. I am looking to further develop my skills and gain more experience in the field of design.",
  photo: "/images/about-sereen.jpeg",
};

export const education = [
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
];

export const skills = {
  tools: [
    { name: "Adobe Illustrator", level: "very good knowledge" },
    { name: "Adobe Photoshop", level: "good knowledge" },
    { name: "Adobe InDesign", level: "good knowledge" },
    { name: "MS PowerPoint", level: "good knowledge" },
  ],
  languages: [
    { name: "Arabic", level: "native language" },
    { name: "English", level: "fluent in speaking and writing" },
    { name: "German", level: "B1 level" },
  ],
  competencies: [
    "Creative thinking",
    "Concept development",
    "Visual communication",
    "Storytelling through image and design",
  ],
};

export const experience = [
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
];

export type Project = {
  id: string;
  category: string;
  title: string;
  arabicTitle?: string;
  description: string[];
  images: { src: string; alt: string; width: number; height: number }[];
};

export const projects: Project[] = [
  {
    id: "logo-design",
    category: "Logo Design",
    title: "Fund for Supporting the Cultural and Artistic Movement",
    description: [
      "The flowing line represents people coming together, showing connection, community, and ongoing support — just like the fund's role in bringing individuals together through culture and art. The geometric shapes reflect the variety of artistic and cultural fields, and the way they interact highlights collaboration, creativity, and the constant movement within the cultural scene.",
      "The colors are taken from the Jordanian flag, adding a strong sense of national identity and belonging.",
    ],
    images: [
      { src: "/images/logo-paper.jpeg", alt: "Logo printed on paper", width: 800, height: 600 },
      { src: "/images/logo-keychain.jpeg", alt: "Logo applied to a leather keychain", width: 800, height: 600 },
    ],
  },
  {
    id: "illustration",
    category: "Illustration · Poster",
    title: "My Home in My Bag",
    arabicTitle: "بيتي في حقيبتي",
    description: [
      "This illustration explores the theme of personal memory and belonging. Inspired by my move to Germany, I imagined my home as a portable space that carries the memories, objects, and emotions that shape my identity.",
      "The central house, emerging from a suitcase, symbolizes the idea of carrying home wherever life takes me. Each side of the house contains meaningful elements from my daily life in Jordan — family traditions, books, plants, coffee, neighborhood references, and personal belongings that evoke comfort and familiarity. The colorful composition reflects the richness of these memories, while the collage technique creates a dreamlike atmosphere where reality and imagination coexist.",
    ],
    images: [
      { src: "/images/illustration-poster.jpeg", alt: "Poster of a collaged house emerging from a suitcase", width: 800, height: 600 },
      { src: "/images/illustration-moodboard.png", alt: "Moodboard of collage references", width: 560, height: 560 },
    ],
  },
  {
    id: "product-design",
    category: "Product Design",
    title: "Bloom Pot for Peace Lily",
    description: [
      "This project explores how product design can improve plant care through passive environmental control. The objective was to design a ceramic pot specifically for a peace lily, a plant that thrives in a consistently humid environment.",
      "The design features a rectangular form with integrated curved chambers at the base that function as a built-in water reservoir. As the stored water gradually evaporates, it creates a humid microclimate around the plant. Carefully positioned drainage holes regulate the water level and prevent overwatering while preserving humidity.",
      "I developed the concept, explored form iterations through sketching and prototyping, and produced the final clay model — combining functionality with a clean, minimal aesthetic.",
    ],
    images: [
      { src: "/images/bloompot-poster.jpeg", alt: "Bloom Pot poster with peace lily", width: 565, height: 800 },
      { src: "/images/bloompot-process.png", alt: "Sketches and clay form iterations of the pot", width: 800, height: 593 },
      { src: "/images/bloompot-detail-1.jpeg", alt: "Detail of the ceramic pot rim and soil", width: 427, height: 640 },
      { src: "/images/bloompot-detail-2.jpeg", alt: "Detail of the double-walled ceramic pot", width: 533, height: 800 },
    ],
  },
  {
    id: "arabic-typography",
    category: "Typography",
    title: "Arabic Typography: Personality Through Form",
    description: [
      "This project explores how typography can communicate meaning beyond written language. Using Arabic letterforms, I translated personal characteristics into visual compositions, allowing the form of each word to reinforce its meaning.",
      "“Ambitious” (طموحة) extends vertically to express aspiration and growth, while “Understanding” (متفهمة) uses interconnected letterforms to convey empathy and connection. “Clear” (واضحة) emphasizes simplicity through clean spacing, and “Sensitive” (حساسة) is expressed through softer forms and a delicate visual rhythm.",
    ],
    images: [
      { src: "/images/typography-trifold.jpeg", alt: "Trifold card with expressive Arabic letterforms", width: 800, height: 600 },
      { src: "/images/typography-clear-sensitive.jpeg", alt: "Cards showing the words clear and sensitive", width: 800, height: 600 },
      { src: "/images/typography-worried.jpeg", alt: "Card showing the word worried in sketched letterforms", width: 800, height: 600 },
    ],
  },
  {
    id: "packaging",
    category: "Packaging",
    title: "SAJ Zinger Packaging",
    description: [
      "Developed for a packaging design course in collaboration with the restaurant SAJ, the goal was to redesign the traditional zinger sandwich packaging with a practical solution that improves storage and usability.",
      "Instead of a disposable wrap, I designed a reusable box that protects the sandwich and lets customers store leftovers in the refrigerator without transferring the food. A dedicated compartment keeps the dipping sauce secure and easily accessible — a functional, user-centered design for a cleaner, more organized dining experience.",
    ],
    images: [
      { src: "/images/packaging-closed.jpeg", alt: "Closed SAJ sandwich box", width: 533, height: 800 },
      { src: "/images/packaging-open.jpeg", alt: "Open SAJ box with sandwich inside", width: 533, height: 800 },
      { src: "/images/packaging-sauce.jpeg", alt: "Sauce compartment detail", width: 480, height: 720 },
      { src: "/images/packaging-hand.jpeg", alt: "Hand opening the SAJ box", width: 480, height: 720 },
    ],
  },
  {
    id: "calligraphy",
    category: "Calligraphy · Ornaments",
    title: "Ornament Design",
    description: [
      "This project explored ornament design within a calligraphy course. I developed three different ornaments, each based on three variations of pattern exploration.",
      "Through sketching and experimentation I tested different compositions and refined the most successful ideas, then enhanced the final three designs through color. In the last step, the colored ornaments were printed as gift wrapping paper — turning abstract patterns into a functional, personal application.",
    ],
    images: [
      { src: "/images/ornament-blue.jpeg", alt: "Blue geometric ornament printed as wrapping paper", width: 800, height: 600 },
      { src: "/images/ornament-pink.jpeg", alt: "Pink and teal ornament wrapping paper roll", width: 800, height: 600 },
      { src: "/images/ornament-notebook.jpeg", alt: "Ornament pattern applied to a notebook cover", width: 800, height: 600 },
    ],
  },
  {
    id: "khat-khabar",
    category: "Arabic Typeface Design",
    title: "Khat Khabar",
    arabicTitle: "خط خبر",
    description: [
      "Designed as part of an Arabic Typography course, Khat Khabar is a semi-geometric Arabic typeface created using Glyphs. Inspired by the modular structure and readability of Verdana, I adapted its design principles to create a contemporary Arabic typeface while preserving the unique characteristics of Arabic script.",
      "Designed for newspaper and digital headlines, the typeface combines strong visual presence with clear legibility. The project involved developing the complete character set, refining proportions and spacing, and building a cohesive type system for editorial use.",
    ],
    images: [
      { src: "/images/khatkhabar-poster.jpeg", alt: "Khat Khabar specimen poster with paper tube", width: 800, height: 600 },
      { src: "/images/khatkhabar-glyphs.png", alt: "Complete Arabic character set of Khat Khabar", width: 800, height: 618 },
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];
