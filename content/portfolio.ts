export type LinkItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  summary: string;
  stack: string[];
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

export type SocialProofItem = {
  label: string;
  quote: string;
  attribution: string;
  placeholder: boolean;
};

export const portfolioContent = {
  site: {
    url: "https://klajdi-portfolio.vercel.app",
    title: "Klajdi Kolaj | AI Automation & Agentic Systems",
    shortTitle: "Klajdi Kolaj",
    description:
      "Portfolio of Klajdi Kolaj — full-stack engineer focused on AI automation, agentic systems, and production-ready delivery.",
    keywords: [
      "Klajdi Kolaj",
      "AI Automation Engineer",
      "Agentic Systems",
      "Next.js",
      "TypeScript",
      "LLM Applications",
    ],
    ogImage: "/klajdi-profile.jpg",
  },

  person: {
    name: "Klajdi Kolaj",
    role: "AI Automation & Full-Stack Engineer",
    location: "Remote (EU-based)",
    email: "kljdkolaj@gmail.com",
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
    { label: "Work", href: "#work" },
    { label: "Proof", href: "#social-proof" },
    { label: "Contact", href: "#contact" },
  ] as LinkItem[],

  hero: {
    eyebrow: "AI Automation • Agentic Systems • Product Engineering",
    headline:
      "I build practical AI systems that teams can trust in production.",
    supportingText:
      "I help teams move from prototypes to dependable systems through clear architecture, execution discipline, and measurable delivery.",
    availability:
      "Available for remote contracts and long-term product roles.",
    primaryCta: { label: "Book a conversation", href: "#contact" },
    secondaryCta: { label: "Explore projects", href: "#work" },
    trustLine: [
      "6+ years in software delivery (2020—present)",
      "Cross-domain background: Security, Web3, ISP, SaaS, GIS",
      "Hands-on with Next.js, TypeScript, automation pipelines, and agent workflows",
    ],
  },

  impact: {
    sectionTitle: "Impact Snapshot",
    intro:
      "A concise view of the environments and outcomes I focus on.",
    stats: [
      {
        value: "2020—Now",
        label: "Professional engineering track record",
        note: "Backend + full-stack roles across multiple product domains",
      },
      {
        value: "5",
        label: "Production teams and ecosystems",
        note: "Security, telecom, web3 infrastructure, SaaS, and geospatial systems",
      },
      {
        value: "Remote-first",
        label: "Collaboration model",
        note: "Used to async workflows, documentation, and distributed execution",
      },
      {
        value: "Reliability-first",
        label: "Delivery principle",
        note: "Maintainable architecture, observability, and reversible decisions",
      },
    ] as ImpactStat[],
  },

  about: {
    sectionTitle: "About",
    paragraphs: [
      "I am a full-stack engineer with strong backend foundations, focused on turning complex AI and automation concepts into useful software that teams can actually operate.",
      "My approach prioritizes reliability over hype: clear requirements, strong implementation patterns, and measurable outcomes. I care about systems that continue to work after launch — not just demo-day results.",
      "I am currently focused on AI automation and agentic product work, especially where companies need a builder who can bridge product thinking, engineering detail, and execution speed.",
    ],
  },

  capabilities: {
    sectionTitle: "Capabilities",
    services: [
      {
        title: "AI Workflow Engineering",
        description:
          "Design and implementation of practical LLM-powered workflows with guardrails, clear tool interfaces, and monitoring hooks.",
        outcomes: [
          "Agent and automation flows mapped to real business operations",
          "Structured prompts and decision logic for predictable outputs",
          "Operational visibility for failure handling and iteration",
        ],
      },
      {
        title: "Full-Stack Product Delivery",
        description:
          "End-to-end implementation of product features in modern TypeScript stacks, with attention to UX, performance, and maintainability.",
        outcomes: [
          "Production-ready features in Next.js + TypeScript",
          "Reliable API and data integration patterns",
          "Refactors that reduce complexity without slowing delivery",
        ],
      },
      {
        title: "Automation & Internal Systems",
        description:
          "Design of internal workflows and research pipelines that reduce repetitive work and improve team responsiveness.",
        outcomes: [
          "Cron-based research and reporting pipelines",
          "Better signal-to-noise in operational updates",
          "Documented workflows for repeatable execution",
        ],
      },
    ] as ServiceItem[],
  },

  skills: {
    sectionTitle: "Core Stack",
    groups: [
      {
        title: "Engineering",
        skills: [
          "TypeScript",
          "Next.js",
          "React",
          "Node.js",
          "Tailwind CSS",
          "REST APIs",
          "PostgreSQL",
        ],
      },
      {
        title: "AI & Automation",
        skills: [
          "Agent orchestration",
          "Prompt workflow design",
          "Tool integration",
          "Structured memory systems",
          "Cron automation",
          "Operational reporting",
        ],
      },
      {
        title: "Execution",
        skills: [
          "System design",
          "Technical documentation",
          "Production debugging",
          "Performance tuning",
          "Incremental rollout mindset",
        ],
      },
    ] as SkillGroup[],
  },

  work: {
    sectionTitle: "Selected Work & Experience",
    projectsTitle: "Selected Projects",
    experienceTitle: "Professional Experience",
    projects: [
      {
        name: "Eternia",
        summary:
          "Long-horizon AI ecosystem focused on coherent memory, safe collaboration, and structured evolution of agent capabilities.",
        stack: [
          "AI agents",
          "Workflow automation",
          "Structured memory",
          "Prompt engineering",
        ],
      },
      {
        name: "Job Research Orchestrator",
        summary:
          "Cron-driven job research system using orchestrator + specialist agents, strict filters, and actionable reporting.",
        stack: [
          "OpenClaw",
          "Cron automation",
          "Agent orchestration",
          "Web research",
          "Reporting",
        ],
      },
      {
        name: "Public Procurement Automation",
        summary:
          "Automated weekly procurement research pipeline for software opportunities with filtering, report generation, and git sync.",
        stack: [
          "Automation",
          "Data filtering",
          "Markdown reporting",
          "Git workflows",
        ],
      },
    ] as ProjectItem[],
    experience: [
      {
        title: "Full Stack Developer (Contract)",
        organization: "Mars / PgFlow GIS",
        period: "03/2026 — Present",
        description:
          "Building production GIS and geospatial data systems with PostgreSQL/PostGIS, internal tools, and performant APIs.",
        highlights: [
          "Designed Postgres/PostGIS schemas and spatial indexing strategies",
          "Built ingestion and validation APIs for reliable dataset operations",
          "Used AI-assisted refactoring and debugging while keeping delivery production-safe",
        ],
      },
      {
        title: "Full Stack Developer (Contract)",
        organization: "VSL Platform",
        period: "02/2026 — Present",
        description:
          "Built conversion-focused product surfaces and resilient user flows with Next.js App Router + TypeScript.",
        highlights: [
          "Implemented high-impact frontend flows in modern Next.js",
          "Improved reliability across key user journeys",
          "Hardened edge-case behavior for production UX stability",
        ],
      },
      {
        title: "Full Stack Developer",
        organization: "CDLAN (ISP Platform)",
        period: "06/2023 — 03/2026",
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

  socialProof: {
    sectionTitle: "Social Proof",
    sectionNote:
      "This section currently uses placeholders. Client-approved testimonials can be added here once publication consent is provided.",
    items: [
      {
        label: "Placeholder reference",
        quote:
          "Client testimonial slot: add a specific, approved quote that describes delivery quality, ownership, and collaboration.",
        attribution: "Pending client approval",
        placeholder: true,
      },
      {
        label: "Placeholder reference",
        quote:
          "Team lead testimonial slot: add a quote focused on technical judgment, reliability, and communication in remote teams.",
        attribution: "Pending manager approval",
        placeholder: true,
      },
      {
        label: "Placeholder reference",
        quote:
          "Product stakeholder testimonial slot: add a quote tied to measurable impact once approved for public use.",
        attribution: "Pending stakeholder approval",
        placeholder: true,
      },
    ] as SocialProofItem[],
  },

  cta: {
    title: "Need a builder who can ship AI features responsibly?",
    description:
      "If you are evaluating candidates for AI automation, LLM applications, or full-stack product execution, I can help move from concept to production with clear delivery discipline.",
    primary: { label: "Start a conversation", href: "#contact" },
    secondary: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/klajdi-kolaj-a1864377/",
    },
  },

  contact: {
    sectionTitle: "Contact",
    heading: "Let’s discuss your roadmap.",
    description:
      "Best for hiring conversations, contract opportunities, and collaboration on AI automation or product engineering initiatives.",
    email: "kljdkolaj@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/klajdikkolaj" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/klajdi-kolaj-a1864377/",
      },
    ] as LinkItem[],
  },

  footer: {
    text: "© 2026 Klajdi Kolaj. Built with Next.js, TypeScript, and Tailwind CSS.",
  },
} as const;
