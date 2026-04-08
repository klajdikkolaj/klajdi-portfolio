import Image from "next/image";
import { portfolioContent } from "@/content/portfolio";

const heroCtaClassMap = {
  primary:
    "rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
  secondary:
    "rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
  ghost:
    "rounded-xl border border-cyan-300/30 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300",
} as const;

export default function Home() {
  const { person, navigation, hero, impact, about, capabilities, skills, work, cta, contact, footer } =
    portfolioContent;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-100 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>

      <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.24),transparent_60%)]" />
          <div className="absolute inset-x-0 top-[28rem] h-[420px] bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.14),transparent_60%)]" />
          <div className="absolute inset-x-0 top-[72rem] h-[420px] bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1),transparent_65%)]" />
        </div>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio</p>
                <p className="text-sm font-semibold text-slate-100">{person.name}</p>
              </div>
              <a
                href={`mailto:${person.email}`}
                className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:text-sm"
              >
                Email
              </a>
            </div>

            <nav aria-label="Primary" className="mt-4">
              <ul className="flex items-center gap-2 overflow-x-auto pb-1 text-sm text-slate-200 [scrollbar-width:none] sm:gap-3 lg:justify-end">
                {navigation.map((link) => (
                  <li key={link.href} className="shrink-0">
                    <a
                      href={link.href}
                      className="inline-flex rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-white/30 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main id="main-content" className="mx-auto w-full max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pt-16">
          <section className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-7 shadow-2xl shadow-cyan-950/30 sm:p-12 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {hero.eyebrow}
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  {hero.headline}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  {hero.supportingText}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {hero.ctas.map((heroCta) => (
                    <a
                      key={heroCta.label}
                      href={heroCta.href}
                      download={heroCta.download}
                      target={heroCta.external ? "_blank" : undefined}
                      rel={heroCta.external ? "noreferrer" : undefined}
                      className={heroCtaClassMap[heroCta.variant]}
                    >
                      {heroCta.label}
                    </a>
                  ))}
                </div>

                <p className="mt-7 text-sm font-medium text-cyan-200">{hero.availability}</p>

                <ul className="mt-6 space-y-3 text-sm text-slate-300 sm:text-base">
                  {hero.trustLine.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/30">
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={person.photo.src}
                    alt={person.photo.alt}
                    width={person.photo.width}
                    height={person.photo.height}
                    priority
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 32vw, 90vw"
                  />
                </div>
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-white">{person.name}</p>
                  <p className="mt-1 text-sm text-cyan-200">{person.role}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                    {person.location}
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section className="mt-20" aria-label={impact.sectionTitle}>
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                {impact.sectionTitle}
              </p>
              <p className="mt-2 text-slate-300">{impact.intro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {impact.stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-cyan-200">{stat.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{stat.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{about.sectionTitle}</h2>
            <div className="mt-6 max-w-4xl space-y-5 text-slate-300">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section id="capabilities" className="mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              {capabilities.sectionTitle}
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {capabilities.services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <h3 className="text-lg font-semibold text-cyan-200">{service.title}</h3>
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

          <section className="mt-20">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{skills.sectionTitle}</h2>
            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {skills.groups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <h3 className="text-base font-semibold text-cyan-200">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="case-studies" className="mt-20 scroll-mt-28" aria-label={work.sectionTitle}>
            <h2 className="text-3xl font-semibold tracking-tight text-white">{work.caseStudiesTitle}</h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {work.caseStudies.map((caseStudy) => (
                <article
                  key={caseStudy.name}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {caseStudy.context}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{caseStudy.name}</h3>

                  <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                    <p>
                      <span className="font-semibold text-slate-100">Problem:</span> {caseStudy.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Role:</span> {caseStudy.role}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-semibold text-cyan-200">Implementation</p>
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
                    <p className="text-sm font-semibold text-cyan-200">Outcomes</p>
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
                        className="rounded-md border border-cyan-300/30 bg-cyan-400/5 px-2 py-1 text-xs text-cyan-100"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {caseStudy.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className="rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="mt-20 scroll-mt-28">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{work.experienceTitle}</h2>
            <div className="mt-6 space-y-4">
              {work.experience.map((item) => (
                <article
                  key={`${item.title}-${item.organization}-${item.period}`}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {item.period}
                    </p>
                    <p className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-200">
                      {item.engagement}
                    </p>
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
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

          <section className="mt-20">
            <div className="rounded-3xl border border-cyan-300/25 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-emerald-400/10 p-8 sm:p-10">
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white">{cta.title}</h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-200">{cta.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={cta.primary.href}
                  className="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  {cta.primary.label}
                </a>
                <a
                  href={cta.secondary.href}
                  download={person.resume.downloadFileName}
                  className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  {cta.secondary.label}
                </a>
              </div>
            </div>
          </section>

          <section id="contact" className="mt-20 scroll-mt-28">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 sm:p-10">
              <h2 className="text-3xl font-semibold tracking-tight text-white">{contact.sectionTitle}</h2>
              <p className="mt-3 text-xl text-cyan-200">{contact.heading}</p>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">{contact.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  {contact.email}
                </a>
                {contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-8">
          <p className="mx-auto w-full max-w-6xl px-4 text-sm text-slate-400 sm:px-6">{footer.text}</p>
        </footer>
      </div>
    </>
  );
}
