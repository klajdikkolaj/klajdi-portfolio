import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { MotionEffects } from "@/components/motion-effects";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionReveal } from "@/components/section-reveal";
import { portfolioContent } from "@/content/portfolio";

const heroCtaClassMap = {
  primary:
    "inline-flex items-center justify-center rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_12px_34px_rgba(34,211,238,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
  secondary:
    "inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
  ghost:
    "inline-flex items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/[0.08] px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200/55 hover:bg-cyan-200/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
} as const;

export default function Home() {
  const { person, navigation, hero, impact, about, capabilities, skills, work, cta, contact, footer } =
    portfolioContent;

  return (
    <>
      <MotionEffects />
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-100 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>

      <div className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div data-parallax-strength="10" className="parallax absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl" />
          <div data-parallax-strength="18" className="parallax absolute top-[26rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-violet-400/10 blur-3xl" />
          <div data-parallax-strength="14" className="parallax absolute bottom-[-10rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-emerald-300/10 blur-3xl" />
        </div>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <a href="#main-content" className="group rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-400 transition group-hover:text-cyan-200">
                Portfolio
              </p>
              <p className="text-sm font-semibold text-slate-100">{person.name}</p>
            </a>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-2 lg:gap-3">
                {navigation.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="nav-link inline-flex rounded-lg px-3 py-2 text-sm text-slate-200 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${person.email}`}
                className="hidden rounded-xl border border-white/20 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:inline-flex"
              >
                Email
              </a>
              <MobileNav links={navigation} email={person.email} />
            </div>
          </div>
        </header>

        <main id="main-content" className="mx-auto w-full max-w-7xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16 lg:px-8">
          <SectionReveal>
            <section className="premium-panel premium-outline relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(167,139,250,0.14),transparent_40%),linear-gradient(160deg,rgba(15,23,42,0.9),rgba(2,6,23,0.98))]" />

              <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
                <div>
                  <p className="hero-anim inline-flex rounded-full border border-cyan-200/35 bg-cyan-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                    {hero.eyebrow}
                  </p>
                  <h1 className="hero-anim hero-delay-1 mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.35rem]">
                    {hero.headline}
                  </h1>
                  <p className="hero-anim hero-delay-2 mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    {hero.supportingText}
                  </p>

                  <div className="hero-anim hero-delay-3 mt-8 flex flex-wrap gap-3">
                    {hero.ctas.map((heroCta) => (
                      <a
                        key={heroCta.label}
                        href={heroCta.href}
                        download={heroCta.download}
                        target={heroCta.external ? "_blank" : undefined}
                        rel={heroCta.external ? "noreferrer" : undefined}
                        className={`${heroCtaClassMap[heroCta.variant]} magnetic-btn`}
                      >
                        {heroCta.label}
                      </a>
                    ))}
                  </div>

                  <p className="hero-anim hero-delay-4 mt-8 text-sm font-medium text-cyan-100">{hero.availability}</p>

                  <ul className="mt-5 grid gap-3 text-sm text-slate-300 sm:text-[0.95rem]">
                    {hero.trustLine.map((line) => (
                      <li key={line} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="space-y-4">
                  <div className="premium-panel premium-outline overflow-hidden rounded-2xl p-3">
                    <div className="overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={person.photo.src}
                        alt={person.photo.alt}
                        width={person.photo.width}
                        height={person.photo.height}
                        priority
                        className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 30vw, 90vw"
                      />
                    </div>
                  </div>

                  <div className="premium-panel premium-outline rounded-2xl p-5">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Professional profile
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{person.name}</p>
                    <p className="mt-1 text-sm text-cyan-200">{person.role}</p>
                    <p className="mt-2 text-sm text-slate-300">{person.location}</p>
                    <div className="mt-5 grid gap-2 text-sm">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-white/12 bg-white/[0.02] px-3 py-2 text-slate-200 transition hover:border-cyan-200/55 hover:bg-white/[0.05]"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={person.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-white/12 bg-white/[0.02] px-3 py-2 text-slate-200 transition hover:border-cyan-200/55 hover:bg-white/[0.05]"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-10 sm:mt-12">
            <section aria-label="Kinetic highlights" className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 py-3">
              <div className="marquee-track">
                <div className="marquee-content text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/90">
                  <span>Senior Full-Stack & AI Product Engineer</span>
                  <span>•</span>
                  <span>TypeScript / Next.js / Go / PostgreSQL</span>
                  <span>•</span>
                  <span>Production-safe AI workflows</span>
                  <span>•</span>
                  <span>Open to remote senior roles</span>
                  <span>•</span>
                </div>
                <div className="marquee-content text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/90" aria-hidden="true">
                  <span>Senior Full-Stack & AI Product Engineer</span>
                  <span>•</span>
                  <span>TypeScript / Next.js / Go / PostgreSQL</span>
                  <span>•</span>
                  <span>Production-safe AI workflows</span>
                  <span>•</span>
                  <span>Open to remote senior roles</span>
                  <span>•</span>
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-16 sm:mt-20">
            <section aria-label={impact.sectionTitle}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-label">{impact.sectionTitle}</p>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{impact.intro}</p>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {impact.stats.map((stat) => (
                  <article
                    key={stat.label}
                    className="premium-panel premium-outline card-lift rounded-2xl p-5"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-white">{stat.value}</p>
                    <p className="mt-2 text-sm font-semibold text-cyan-200">{stat.label}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{stat.note}</p>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-16 sm:mt-20">
            <section id="about" className="scroll-mt-28">
              <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">
                <article className="premium-panel premium-outline rounded-2xl p-6 sm:p-8">
                  <h2 className="text-3xl font-semibold tracking-tight text-white">{about.sectionTitle}</h2>
                  <div className="mt-5 space-y-4 text-slate-300">
                    {about.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-8">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>

                <article className="premium-panel premium-outline rounded-2xl p-6 sm:p-8">
                  <p className="section-label">Contact</p>
                  <p className="mt-3 text-base text-slate-300">Recruiter or team lead? Reach out directly.</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    {contact.email}
                  </a>
                  <div className="mt-4 grid gap-2 text-sm">
                    {contact.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className="rounded-lg border border-white/12 bg-white/[0.03] px-3 py-2 text-slate-200 transition hover:border-cyan-200/55 hover:bg-white/[0.06]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-16 sm:mt-20">
            <section id="capabilities" className="scroll-mt-28">
              <p className="section-label">{capabilities.sectionTitle}</p>
              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                {capabilities.services.map((service) => (
                  <article key={service.title} className="premium-panel premium-outline card-lift rounded-2xl p-6">
                    <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>

                    <ul className="mt-5 space-y-2 text-sm text-slate-300">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-16 sm:mt-20">
            <section>
              <p className="section-label">{skills.sectionTitle}</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {skills.groups.map((group) => (
                  <article key={group.title} className="premium-panel premium-outline rounded-2xl p-6">
                    <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-cyan-100">{group.title}</h2>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-16 sm:mt-20">
            <section id="case-studies" className="scroll-mt-28" aria-label={work.sectionTitle}>
              <div className="mb-6">
                <p className="section-label">{work.sectionTitle}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {work.caseStudiesTitle}
                </h2>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {work.caseStudies.map((caseStudy) => (
                  <article
                    key={caseStudy.name}
                    className="premium-panel premium-outline card-lift rounded-2xl p-6"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-cyan-200/90">
                      {caseStudy.context}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{caseStudy.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      <span className="font-semibold text-slate-100">Problem:</span> {caseStudy.problem}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      <span className="font-semibold text-slate-100">Role:</span> {caseStudy.role}
                    </p>

                    <div className="mt-5">
                      <p className="text-sm font-semibold text-cyan-100">Implementation</p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {caseStudy.implementation.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <p className="text-sm font-semibold text-cyan-100">Outcomes</p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {caseStudy.outcomes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {caseStudy.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-cyan-300/35 bg-cyan-400/8 px-2 py-1 text-xs text-cyan-100"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {caseStudy.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer" : undefined}
                          className="rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-200/55 hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-16 sm:mt-20">
            <section id="experience" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {work.experienceTitle}
              </h2>
              <div className="mt-6 space-y-4">
                {work.experience.map((item) => (
                  <article
                    key={`${item.title}-${item.organization}-${item.period}`}
                    className="premium-panel premium-outline rounded-2xl p-6"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-cyan-200/90">
                        {item.period}
                      </p>
                      <p className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-200">
                        {item.engagement}
                      </p>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.organization}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-16 sm:mt-20">
            <section>
              <div className="premium-panel premium-outline relative overflow-hidden rounded-3xl p-7 sm:p-10">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(34,211,238,0.12),rgba(15,23,42,0.95)_40%,rgba(52,211,153,0.12))]" />
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-[2.1rem]">
                  {cta.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-7 text-slate-200">{cta.description}</p>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <a
                    href={cta.primary.href}
                    className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    {cta.primary.label}
                  </a>
                  <a
                    href={cta.secondary.href}
                    download={person.resume.downloadFileName}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    {cta.secondary.label}
                  </a>
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal className="mt-16 sm:mt-20">
            <section id="contact" className="scroll-mt-28">
              <div className="premium-panel premium-outline rounded-3xl p-7 sm:p-10">
                <h2 className="text-3xl font-semibold tracking-tight text-white">{contact.sectionTitle}</h2>
                <p className="mt-3 text-xl text-cyan-100">{contact.heading}</p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">{contact.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    {contact.email}
                  </a>
                  {contact.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/60 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </SectionReveal>
        </main>

        <footer className="border-t border-white/10 py-8">
          <p className="mx-auto w-full max-w-7xl px-4 text-sm text-slate-400 sm:px-6 lg:px-8">{footer.text}</p>
        </footer>
      </div>
    </>
  );
}
