export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  tags: string[];
}

export const experience: Experience[] = [
  {
    company: "Paktolus",
    companyUrl: "https://www.paktolus.com",
    role: "Software Engineer",
    duration: "Nov 2022 – Feb 2026",
    location: "Remote",
    description:
      "Built and maintained backend systems in C# and .NET as a consultant on the Bolt Insurance account, specializing in RESTful API development, scalable services, and SQL-heavy data logic — delivering production-ready code under real delivery pressure.",
    tags: [
      "C#",
      ".NET Core",
      "ASP.NET Web API",
      "REST APIs",
      "Microsoft SQL Server",
      "Microservices",
    ],
  },
];
