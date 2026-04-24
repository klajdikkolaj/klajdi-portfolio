import Image from "next/image";
import { HeroSceneLoader } from "@/components/hero-scene-loader";
import { LocalTime } from "@/components/local-time";
import { MobileNav } from "@/components/mobile-nav";
import { MotionEffects } from "@/components/motion-effects";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionReveal } from "@/components/section-reveal";
import { portfolioContent } from "@/content/portfolio";

export default function Home() {
  const { person, navigation, hero, impact, about, capabilities, skills, work, cta, contact, footer } =
    portfolioContent;

  return (
    <>
      <MotionEffects />
      <ScrollProgress />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-white/20 focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div className="site-shell min-h-screen overflow-x-hidden bg-black text-white">
        <header className="fixed inset-x-0 top-0 z-50 px-4 py-5 sm:px-7 lg:px-10">
          <div className="grid items-start gap-5 md:grid-cols-[0.8fr_1.25fr_0.9fr_0.55fr]">
            <a href="#main-content" className="brand-lockup focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <span>KLAJDI</span>
              <span>KOLAJ</span>
            </a>

            <p className="hidden max-w-64 font-mono text-[0.78rem] leading-5 text-white/58 md:block">
              Available for senior product engineering:
              <br />
              <a className="link-underline text-white" href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </p>

            <p className="hidden font-mono text-[0.78rem] leading-5 text-white/70 lg:block">
              <strong className="block text-white">Next.js, React, R3F</strong>
              AI workflows, Node, Go
              <br />
              PostgreSQL, PostGIS
            </p>

            <div className="flex justify-end md:block">
              <nav aria-label="Primary" className="hidden text-right font-mono text-[0.82rem] leading-6 md:block">
                <ul>
                  {navigation.slice(0, 4).map((link, index) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`nav-text-link ${index === 0 ? "text-white" : "text-white/48"}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <MobileNav links={navigation} email={person.email} />
            </div>
          </div>
        </header>

        <main id="main-content">
          <section className="avant-hero">
            <Image
              src="/generated/portfolio-orb-terrain.png"
              alt=""
              fill
              priority
              className="hero-generated-backdrop"
              sizes="100vw"
            />
            <div className="hero-scene-shell" aria-hidden="true">
              <HeroSceneLoader />
            </div>
            <div className="hero-noise" aria-hidden="true" />
            <div className="hero-eclipse" aria-hidden="true" />

            <div className="hero-composition">
              <div className="hero-title-block">
                <p className="hero-anim hero-kicker">{hero.eyebrow}</p>
                <h1 className="hero-anim hero-delay-1 hero-heading" aria-label={`${person.name}, creative developer`}>
                  <span className="hero-script">{person.name}</span>
                  <span className="hero-main-word">CREATIVE</span>
                  <span className="hero-main-word">DEVELOPER.</span>
                </h1>
              </div>

              <aside className="hero-anim hero-delay-3 hero-bio" aria-label="Intro">
                <p>
                  Hi, I&apos;m <strong>{person.name}</strong>, an EU-based{" "}
                  <strong>full-stack and AI product engineer</strong>.
                </p>
                <p>
                  I build production systems, automation workflows, and kinetic interfaces with the stack behind this
                  scene: React, Next.js, WebGL, Node, Go, and PostgreSQL.
                </p>
                <div className="hero-actions" aria-label="Primary actions">
                  {hero.ctas.map((heroCta) => (
                    <a
                      key={heroCta.label}
                      href={heroCta.href}
                      download={heroCta.download}
                      target={heroCta.external ? "_blank" : undefined}
                      rel={heroCta.external ? "noreferrer" : undefined}
                      className="link-underline"
                    >
                      {heroCta.label}
                    </a>
                  ))}
                </div>
              </aside>
            </div>

            <div className="hero-bottom-rail hero-anim hero-delay-4">
              <p className="font-mono text-[0.75rem] leading-5 text-white/52">
                Local time
                <br />
                <LocalTime />
              </p>

              <ul className="hidden gap-3 font-mono text-[0.78rem] leading-6 text-white/58 sm:grid">
                {contact.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="nav-text-link">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${contact.email}`} className="nav-text-link">
                    Email
                  </a>
                </li>
              </ul>

              <p className="hidden max-w-44 text-right font-mono text-[0.68rem] font-bold uppercase leading-4 text-white md:block">
                © 2026
                <br />
                {person.name}
              </p>
            </div>
          </section>

          <SectionReveal>
            <section aria-label="Kinetic highlights" className="marquee-band">
              <div className="marquee-track">
                {[0, 1].map((item) => (
                  <div key={item} className="marquee-content">
                    <span>Senior Full-Stack & AI Product Engineer</span>
                    <span>React Three Fiber</span>
                    <span>Production Automation</span>
                    <span>Geospatial Systems</span>
                    <span>Open to senior roles</span>
                  </div>
                ))}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section className="image-story-band" aria-label="Portfolio visual identity">
              <div className="image-story-media">
                <Image
                  src="/generated/portfolio-orb-terrain.png"
                  alt="Abstract iridescent sphere representing Klajdi's product and engineering style"
                  fill
                  className="image-story-img"
                  sizes="100vw"
                />
              </div>
              <div className="image-story-copy">
                <p className="section-label">Visual Identity</p>
                <h2>Precision engineering with a modern product aesthetic.</h2>
                <p>
                  This visual language reflects how I build: reliable systems, thoughtful automation, and polished product
                  interfaces that are designed for real-world use.
                </p>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section className="content-band border-y border-white/12" aria-label={impact.sectionTitle}>
              <div className="content-grid">
                <div>
                  <p className="section-label">{impact.sectionTitle}</p>
                  <p className="mt-4 max-w-xl text-balance text-xl leading-8 text-white/78">{impact.intro}</p>
                </div>
                <div className="stat-grid">
                  {impact.stats.map((stat) => (
                    <article key={stat.label} className="stat-cell">
                      <p className="stat-value">{stat.value}</p>
                      <h2 className="mt-2 text-sm font-semibold text-white">{stat.label}</h2>
                      <p className="mt-3 text-sm leading-6 text-white/50">{stat.note}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section id="about" className="content-band scroll-mt-24">
              <div className="content-grid">
                <div>
                  <p className="section-label">{about.sectionTitle}</p>
                  <h2 className="section-title">Systems thinking with a front-of-house finish.</h2>
                </div>
                <div className="space-y-5 text-lg leading-8 text-white/68">
                  {about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section id="capabilities" className="content-band scroll-mt-24 border-t border-white/12">
              <div className="content-grid">
                <div>
                  <p className="section-label">{capabilities.sectionTitle}</p>
                  <h2 className="section-title">From AI orchestration to production product surfaces.</h2>
                </div>
                <div className="divide-y divide-white/12">
                  {capabilities.services.map((service) => (
                    <article key={service.title} className="service-row">
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                      <p className="mt-4 text-base leading-7 text-white/62">{service.description}</p>
                      <ul className="mt-5 grid gap-2 font-mono text-xs leading-5 text-white/52 sm:grid-cols-3">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome}>{outcome}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section className="content-band border-t border-white/12" aria-label={skills.sectionTitle}>
              <div className="content-grid">
                <div>
                  <p className="section-label">{skills.sectionTitle}</p>
                  <h2 className="section-title">Tooling chosen for shipping, not theatre.</h2>
                </div>
                <div className="stack-matrix">
                  {skills.groups.map((group) => (
                    <article key={group.title} className="stack-row">
                      <h3>{group.title}</h3>
                      <ul>
                        {group.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section id="case-studies" className="content-band scroll-mt-24 border-t border-white/12">
              <div className="mb-12 grid gap-6 px-4 sm:px-7 lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
                <p className="section-label">{work.sectionTitle}</p>
                <h2 className="section-title">{work.caseStudiesTitle}</h2>
              </div>

              <div className="project-list">
                {work.caseStudies.map((caseStudy, index) => (
                  <article key={caseStudy.name} className="project-row">
                    <p className="project-index">{String(index + 1).padStart(2, "0")}</p>
                    <div className="project-heading">
                      <p className="font-mono text-xs uppercase text-white/44">{caseStudy.context}</p>
                      <h3 className="mt-2 text-3xl font-semibold text-white md:text-5xl">{caseStudy.name}</h3>
                    </div>
                    <figure className="project-visual">
                      <Image
                        src={caseStudy.image.src}
                        alt={caseStudy.image.alt}
                        fill
                        className="project-visual-img"
                        sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 24vw, 100vw"
                      />
                    </figure>
                    <div className="space-y-4 text-sm leading-7 text-white/60">
                      <p>
                        <strong className="text-white">Problem:</strong> {caseStudy.problem}
                      </p>
                      <p>
                        <strong className="text-white">Role:</strong> {caseStudy.role}
                      </p>
                      <ul className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-white/44">
                        {caseStudy.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-4">
                        {caseStudy.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noreferrer" : undefined}
                            className="link-underline text-sm"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section id="experience" className="content-band scroll-mt-24 border-t border-white/12">
              <div className="content-grid">
                <div>
                  <p className="section-label">{work.experienceTitle}</p>
                  <h2 className="section-title">Recent roles and operating context.</h2>
                </div>
                <div className="timeline">
                  {work.experience.map((item) => (
                    <article key={`${item.title}-${item.organization}-${item.period}`} className="timeline-row">
                      <p className="font-mono text-xs uppercase text-white/42">{item.period}</p>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-white/52">{item.organization}</p>
                      </div>
                      <p className="text-sm leading-7 text-white/60">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal>
            <section id="contact" className="final-band scroll-mt-24">
              <p className="section-label">{contact.sectionTitle}</p>
              <h2>{cta.title}</h2>
              <p>{cta.description}</p>
              <div className="mt-8 flex flex-wrap gap-5">
                <a href={cta.primary.href} className="link-underline text-lg">
                  {cta.primary.label}
                </a>
                <a href={cta.secondary.href} download={person.resume.downloadFileName} className="link-underline text-lg">
                  {cta.secondary.label}
                </a>
              </div>
            </section>
          </SectionReveal>
        </main>

        <footer className="border-t border-white/12 px-4 py-8 font-mono text-xs text-white/42 sm:px-7 lg:px-10">
          {footer.text}
        </footer>
      </div>
    </>
  );
}
