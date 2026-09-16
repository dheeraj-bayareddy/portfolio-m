export type Language = "en" | "de";

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
    resume: string;
  };
  hero: {
    downloadResume: string;
    viewResume: string;
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    problem: string;
    approach: string;
    result: string;
    code: string;
    liveDemo: string;
    noRepo: string;
    placeholderTitle: string;
    placeholderBody: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    stat1: string;
    stat2: string;
    stat3: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
    languages: string;
    mlDl: string;
    dataEngineering: string;
    backendApis: string;
    tools: string;
  };
  contact: {
    heading: string;
    introLine1: string;
    introLine2: string;
    emailMe: string;
  };
  footer: {
    builtWith: string;
  };
}

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    downloadResume: "Download Resume",
    viewResume: "View Resume",
  },
  projects: {
    eyebrow: "Selected Work",
    heading: "Projects",
    intro: "A selection of applied ML and data engineering work.",
    problem: "Problem",
    approach: "Approach",
    result: "Result",
    code: "Code",
    liveDemo: "Live Demo",
    noRepo: "Case study — no public repo yet",
    placeholderTitle: "More projects on the way",
    placeholderBody: "Currently building the next one. Check back soon.",
  },
  about: {
    eyebrow: "About",
    heading: "Who I Am",
    stat1: "Years Backend Engineering",
    stat2: "Data Science, UE Potsdam",
    stat3: "Open to Roles Across Europe",
  },
  skills: {
    eyebrow: "Toolkit",
    heading: "Skills",
    languages: "Languages",
    mlDl: "ML / Deep Learning",
    dataEngineering: "Data Engineering",
    backendApis: "Backend & APIs",
    tools: "Tools & Collaboration",
  },
  contact: {
    heading: "Let's Work Together",
    introLine1: "Open to internships and working-student roles in Data Science,",
    introLine2: "ML, and software engineering across Europe.",
    emailMe: "Email Me",
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind CSS.",
  },
};

const de: Dictionary = {
  nav: {
    home: "Start",
    about: "Über mich",
    projects: "Projekte",
    skills: "Fähigkeiten",
    contact: "Kontakt",
    resume: "Lebenslauf",
  },
  hero: {
    downloadResume: "Lebenslauf herunterladen",
    viewResume: "Lebenslauf ansehen",
  },
  projects: {
    eyebrow: "Ausgewählte Arbeiten",
    heading: "Projekte",
    intro: "Eine Auswahl angewandter ML- und Data-Engineering-Arbeiten.",
    problem: "Problem",
    approach: "Ansatz",
    result: "Ergebnis",
    code: "Code",
    liveDemo: "Live-Demo",
    noRepo: "Fallstudie — noch kein öffentliches Repo",
    placeholderTitle: "Weitere Projekte folgen",
    placeholderBody: "Das nächste Projekt entsteht gerade. Schau bald wieder vorbei.",
  },
  about: {
    eyebrow: "Über mich",
    heading: "Wer ich bin",
    stat1: "Jahre Backend-Entwicklung",
    stat2: "Data Science, UE Potsdam",
    stat3: "Offen für Rollen in ganz Europa",
  },
  skills: {
    eyebrow: "Werkzeuge",
    heading: "Fähigkeiten",
    languages: "Sprachen",
    mlDl: "ML / Deep Learning",
    dataEngineering: "Data Engineering",
    backendApis: "Backend & APIs",
    tools: "Tools & Zusammenarbeit",
  },
  contact: {
    heading: "Lass uns zusammenarbeiten",
    introLine1: "Offen für Praktika und Werkstudentenstellen in Data Science,",
    introLine2: "ML und Softwareentwicklung in ganz Europa.",
    emailMe: "E-Mail senden",
  },
  footer: {
    builtWith: "Erstellt mit Next.js & Tailwind CSS.",
  },
};

export const dictionaries: Record<Language, Dictionary> = { en, de };
