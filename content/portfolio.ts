export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type HeroCtaItem = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  download?: string;
  external?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  engagement: string;
  description: string;
  highlights: string[];
};

export type CaseStudyItem = {
  name: string;
  context: string;
  problem: string;
  role: string;
  implementation: string[];
  outcomes: string[];
  stack: string[];
  links: LinkItem[];
};

export type ImpactStat = {
  value: string;
  label: string;
  note: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  outcomes: string[];
};

export const portfolioContent = {
  site: {
    url: "https://klajdi-portfolio.vercel.app",
    canonicalUrl: "https://klajdi-portfolio.vercel.app",
    title: "Klajdi Kolaj | Senior Full-Stack & AI Product Engineer",
    shortTitle: "Klajdi Kolaj",
    description:
      "Portfolio of Klajdi Kolaj — Senior Full-Stack and AI Product Engineer focused on reliable product delivery, automation, and production systems.",
    keywords: [
      "Klajdi Kolaj",
      "Senior Full-Stack Engineer",
      "AI Product Engineer",
      "TypeScript",
      "Next.js",
      "Node.js",
      "NestJS",
      "Go",
      "PostgreSQL",
      "PostGIS",
      "Docker",
      "CI/CD",
      "n8n",
    ],
    ogImage: "/klajdi-profile.jpg",
    profilePageName: "Klajdi Kolaj Portfolio",
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "Go",
      "PostgreSQL",
      "PostGIS",
      "Docker",
      "CI/CD",
      "n8n",
      "AI workflow engineering",
      "Agentic systems",
    ],
  },

  person: {
    name: "Klajdi Kolaj",
    role: "Senior Full-Stack & AI Product Engineer",
    location: "Remote (EU-based)",
    email: "kljdkolaj@gmail.com",
    github: "https://github.com/klajdikkolaj",
    linkedin: "https://www.linkedin.com/in/klajdi-kolaj-a1864377/",
    resume: {
      label: "Download Resume",
      href: "/resume/klajdi-kolaj-resume.pdf",
      downloadFileName: "Klajdi-Kolaj-Resume.pdf",
      updateNote:
        "Replace public/resume/klajdi-kolaj-resume.pdf with your latest CV PDF when available.",
    },
    photo: {
      src: "/klajdi-profile.jpg",
      alt: "Portrait of Klajdi Kolaj",
      width: 800,
      height: 1200,
    },
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as LinkItem[],

  hero: {
    eyebrow: "Senior Full-Stack Engineering • AI Product Delivery",
    headline: "Senior Full-Stack & AI Product Engineer for production-grade teams.",
    supportingText:
      "I build dependable web and AI-powered product systems across frontend, backend, and automation layers — with clear ownership from architecture to shipped outcomes.",
    availability:
      "Open to senior full-time roles and selective fractional contracts.",
    ctas: [
      {
        label: "Download Resume",
        href: "/resume/klajdi-kolaj-resume.pdf",
        variant: "primary",
        download: "Klajdi-Kolaj-Resume.pdf",
      },
      {
        label: "View Case Studies",
        href: "#case-studies",
        variant: "secondary",
      },
      {
        label: "Email Me",
        href: "mailto:kljdkolaj@gmail.com",
        variant: "ghost",
      },
    ] as HeroCtaItem[],
    trustLine: [
      "6+ years in software engineering delivery (2020—present)",
      "Built across security, ISP systems, Web3 infrastructure, SaaS, and geospatial platforms",
      "Current 2026 work includes concurrent fractional contracts",
    ],
  },

  impact: {
    sectionTitle: "Impact Snapshot",
    intro: "A recruiter-friendly view of scope, stack, and delivery style.",
    stats: [
      {
        value: "6+ years",
        label: "Professional software delivery",
        note: "Backend + full-stack execution across multiple production domains since 2020",
      },
      {
        value: "5 domains",
        label: "Industry exposure",
        note: "Security, telecom, Web3 infrastructure, SaaS, and GIS data systems",
      },
      {
        value: "2026",
        label: "Concurrent contract model",
        note: "Managing two fractional engagements in parallel with clear delivery boundaries",
      },
      {
        value: "Reliability-first",
        label: "Engineering principle",
        note: "Maintainable architecture, observability, and reversible rollout decisions",
      },
    ] as ImpactStat[],
  },

  about: {
    sectionTitle: "About",
    paragraphs: [
      "I am a senior full-stack engineer with strong backend depth, focused on building software teams can operate with confidence after launch.",
      "My work style is product-oriented and execution-heavy: align requirements, design pragmatic architecture, ship increments, and harden for production reliability.",
      "I am currently targeting senior full-stack and AI product engineering roles where ownership, system thinking, and dependable execution are core expectations.",
    ],
  },

  capabilities: {
    sectionTitle: "Capabilities",
    services: [
      {
        title: "AI Product & Workflow Engineering",
        description:
          "Design and implementation of LLM-enabled product workflows with guardrails, tool contracts, and operational observability.",
        outcomes: [
          "Agent workflows mapped to real business operations",
          "Predictable prompt and decision logic",
          "Monitoring hooks for debugging and iterative improvement",
        ],
      },
      {
        title: "Full-Stack Product Delivery",
        description:
          "End-to-end implementation in modern TypeScript stacks across Next.js frontends, API layers, and production data systems.",
        outcomes: [
          "Production-ready features in Next.js + React",
          "Stable backend integrations in Node/NestJS and Go services",
          "Refactors that reduce complexity without slowing delivery",
        ],
      },
      {
        title: "Automation, Platform & DevOps",
        description:
          "Automation and internal platform work to reduce repetitive operations and improve release confidence.",
        outcomes: [
          "n8n and cron-based operational pipelines",
          "Dockerized services and CI/CD delivery workflows",
          "Documented playbooks for repeatable execution",
        ],
      },
    ] as ServiceItem[],
  },

  skills: {
    sectionTitle: "Core Stack",
    groups: [
      {
        title: "Frontend & Product",
        skills: [
          "TypeScript",
          "Next.js (App Router)",
          "React",
          "Tailwind CSS",
          "UX implementation",
          "Performance tuning",
        ],
      },
      {
        title: "Backend & Data",
        skills: [
          "Node.js",
          "NestJS",
          "Go",
          "REST APIs",
          "PostgreSQL",
          "PostGIS",
          "Caching & pagination",
        ],
      },
      {
        title: "Automation & Delivery",
        skills: [
          "Docker",
          "CI/CD",
          "n8n",
          "Cron orchestration",
          "AI agent workflows",
          "Production debugging",
        ],
      },
    ] as SkillGroup[],
  },

  work: {
    sectionTitle: "Case Studies & Experience",
    caseStudiesTitle: "Selected Case Studies",
    experienceTitle: "Professional Experience",
    caseStudies: [
      {
        name: "ISP Provisioning & Operations Platform",
        context: "CDLAN (06/2023 — 03/2026)",
        problem:
          "Provisioning and partner/customer operations required heavy manual coordination across multiple systems.",
        role:
          "Full Stack Developer owning workflow automation, internal tooling, and delivery quality.",
        implementation: [
          "Built automated provisioning flows across Appsmith, Hostbill, and Timoo",
          "Implemented partner/customer hierarchy models and operational dashboards",
          "Orchestrated n8n jobs with Dockerized services and CI/CD-managed releases",
        ],
        outcomes: [
          "Reduced repetitive manual operational steps through automation-first flows",
          "Improved consistency of provisioning and partner workflows",
          "Created maintainable internal tooling with documented handoff paths",
        ],
        stack: [
          "TypeScript",
          "React",
          "Node.js",
          "PostgreSQL",
          "Docker",
          "CI/CD",
          "n8n",
        ],
        links: [
          {
            label: "GitHub Profile",
            href: "https://github.com/klajdikkolaj",
            external: true,
          },
        ],
      },
      {
        name: "Decentralized RPC Monitoring Platform",
        context: "Lava (06/2022 — 05/2023)",
        problem:
          "Operations teams needed clearer, faster visibility into node telemetry, usage, and network health.",
        role:
          "Full Stack Developer building dashboards, backend services, and data delivery patterns.",
        implementation: [
          "Built React/Next.js dashboards for real-time operational visibility",
          "Implemented Go telemetry services and NestJS APIs for live data delivery",
          "Added caching and pagination patterns for large telemetry datasets",
        ],
        outcomes: [
          "Enabled more reliable day-to-day monitoring for infrastructure teams",
          "Improved responsiveness in high-volume telemetry views",
          "Strengthened backend/frontend contract quality for faster iteration",
        ],
        stack: [
          "Next.js",
          "React",
          "Go",
          "NestJS",
          "Node.js",
          "PostgreSQL",
        ],
        links: [
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/klajdi-kolaj-a1864377/",
            external: true,
          },
        ],
      },
      {
        name: "AI Research & Opportunity Automation",
        context: "Independent product workflow (2025 — 2026)",
        problem:
          "Manual research pipelines were time-intensive and inconsistent for recurring opportunity discovery.",
        role:
          "Product engineer designing and operating orchestrator + specialist agent workflows.",
        implementation: [
          "Implemented cron-driven research orchestration with strict filtering",
          "Structured outputs into actionable markdown reporting and git-synced history",
          "Built reliability guardrails around workflow steps for repeatable operation",
        ],
        outcomes: [
          "Converted recurring manual research into scheduled, reviewable reports",
          "Improved traceability with versioned outputs and explicit workflow structure",
          "Created reusable automation patterns transferable to other internal pipelines",
        ],
        stack: [
          "OpenClaw",
          "TypeScript",
          "Automation workflows",
          "Cron",
          "Markdown reporting",
          "Git",
        ],
        links: [
          {
            label: "Request walkthrough",
            href: "mailto:kljdkolaj@gmail.com?subject=Case%20study%20request",
          },
        ],
      },
    ] as CaseStudyItem[],
    experience: [
      {
        title: "Full Stack Developer",
        organization: "Mars / PgFlow GIS",
        period: "03/2026 — Present",
        engagement: "Concurrent fractional contract",
        description:
          "Building production GIS and geospatial data systems with PostgreSQL/PostGIS, internal tools, and performant APIs.",
        highlights: [
          "Designed Postgres/PostGIS schemas and spatial indexing strategies",
          "Built ingestion and validation APIs for reliable dataset operations",
          "Used AI-assisted refactoring and debugging while keeping production stability",
        ],
      },
      {
        title: "Full Stack Developer",
        organization: "VSL Platform",
        period: "02/2026 — Present",
        engagement: "Concurrent fractional contract",
        description:
          "Building conversion-focused product surfaces and resilient user flows with Next.js App Router + TypeScript.",
        highlights: [
          "Implemented high-impact frontend flows in modern Next.js",
          "Improved reliability across key user journeys",
          "Hardened edge-case behavior for stable production UX",
        ],
      },
      {
        title: "Full Stack Developer",
        organization: "CDLAN (ISP Platform)",
        period: "06/2023 — 03/2026",
        engagement: "Full-time role",
        description:
          "Built multi-tenant provisioning, partner/customer operations, and workflow automation across ISP tooling.",
        highlights: [
          "Developed automated provisioning across Appsmith, Hostbill, and Timoo",
          "Built partner/customer hierarchy models and internal dashboards",
          "Orchestrated n8n flows and deployed services with Docker, Postgres, and CI/CD",
        ],
      },
      {
        title: "Full Stack Developer",
        organization: "Lava (Decentralized RPC Gateway)",
        period: "06/2022 — 05/2023",
        engagement: "Full-time role",
        description:
          "Shipped dashboards and backend services for node telemetry, network health, and usage monitoring.",
        highlights: [
          "Built React/Next.js dashboards for real-time operations visibility",
          "Implemented Go telemetry services and NestJS APIs for live data delivery",
          "Improved responsiveness with caching and pagination for large datasets",
        ],
      },
      {
        title: "Backend Developer & Integration Engineer",
        organization: "Siemplify (Google)",
        period: "03/2020 — 06/2022",
        engagement: "Full-time role",
        description:
          "Developed backend integrations and automation for security workflows in a production SOAR environment.",
        highlights: [
          "Built integration logic for third-party security systems",
          "Improved reliability through automated integration testing",
          "Strengthened orchestration pipelines with better observability and failure handling",
        ],
      },
    ] as ExperienceItem[],
  },

  cta: {
    title: "Hiring for a senior engineer who can ship across stack and AI workflows?",
    description:
      "If you are hiring for Senior Full-Stack or AI Product Engineering, I can contribute from architecture through production delivery.",
    primary: { label: "Email Me", href: "mailto:kljdkolaj@gmail.com" },
    secondary: {
      label: "Download Resume",
      href: "/resume/klajdi-kolaj-resume.pdf",
    },
  },

  contact: {
    sectionTitle: "Contact",
    heading: "Let’s discuss your role or roadmap.",
    description:
      "Best for recruiter outreach, hiring conversations, and collaboration on production-grade full-stack or AI product work.",
    email: "kljdkolaj@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/klajdikkolaj", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/klajdi-kolaj-a1864377/",
        external: true,
      },
    ] as LinkItem[],
  },

  footer: {
    text: "© 2026 Klajdi Kolaj. Built with Next.js, TypeScript, and Tailwind CSS.",
  },
} as const;
