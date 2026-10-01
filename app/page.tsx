import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Database,
  Github,
  Gauge,
  Layers3,
  Mail,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import approachImage from "../assets/how-i-approach.png";
import dimonaProjectImage from "../assets/camisa-dimona-freelance-project.png";
import profileImage from "../assets/profile-photo.png";
import expectationsImage from "../assets/what-you-can-expect.jpeg";
import { ContactForm } from "./contact-form";

const expertise = [
  {
    icon: Code2,
    number: "01",
    title: "Backend & APIs",
    description: "C# and .NET services designed for clear ownership, clean boundaries, and dependable operation.",
    tags: ["C#", ".NET", "REST APIs"],
  },
  {
    icon: Boxes,
    number: "02",
    title: "Distributed systems",
    description: "Scalable service architectures that balance independent delivery with practical operations.",
    tags: ["Microservices", "Architecture", "Resilience"],
  },
  {
    icon: Cloud,
    number: "03",
    title: "Cloud & delivery",
    description: "Cloud-native applications and delivery practices built to work beyond the development machine.",
    tags: ["Azure", "Docker", "Kubernetes"],
  },
  {
    icon: Gauge,
    number: "04",
    title: "Performance & data",
    description: "Find the real bottlenecks, improve data access, and make efficiency gains you can measure.",
    tags: ["SQL Server", "Cosmos DB", "Scalability"],
  },
  {
    icon: Layers3,
    number: "05",
    title: "Frontend engineering",
    description: "Modern, maintainable interfaces connected to well-designed application services.",
    tags: ["Angular", "Vue.js", "TypeScript"],
  },
  {
    icon: Wrench,
    number: "06",
    title: "Modernization & quality",
    description: "Evolve legacy systems incrementally with testing, automation, and an eye on business continuity.",
    tags: ["Legacy systems", "CI/CD", "Automated testing"],
  },
];

const principles = [
  "Clean Architecture & purposeful boundaries",
  "SOLID principles and clean code",
  "Pragmatic design patterns, applied with intent",
  "TDD where it gives the team meaningful feedback",
  "Automated testing and reliable CI/CD",
  "Maintainability as a product of everyday decisions",
];

const experience = [
  {
    period: "FEB 2026 — NOW",
    role: "Senior Software Engineer",
    company: "Affinity · consulting for Natixis",
    description:
      "Building enterprise applications with C#, .NET, Angular, Azure, and SQL Server. Contributing to system design, code reviews, and collaboration across an international team.",
    current: true,
  },
  {
    period: "JUN 2022 — APR 2026",
    role: "Software Engineer",
    company: "Siteware",
    description:
      "Worked on an enterprise portfolio and project management platform. Built .NET APIs on Azure, modernized legacy applications, and helped improve architecture and frontend delivery.",
    current: false,
  },
  {
    period: "JAN 2022 — DEC 2022",
    role: "Frontend Developer",
    company: "Dimona",
    description:
      "Improved a Vue.js storefront using TypeScript and unit testing, and built and maintained e-commerce landing pages with Nuxt.",
    current: false,
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-primary">
      <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <a aria-label="Portfolio home" className="group flex shrink-0 items-center gap-2.5" href="#home">
            <span className="grid size-9 place-items-center rounded-xl bg-accent/15 text-sm font-extrabold text-accent ring-1 ring-accent/25 transition group-hover:bg-accent/25">S.</span>
            <span className="hidden text-sm font-bold tracking-wide text-primary min-[370px]:block">SOFTWARE ENGINEER</span>
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-4 sm:gap-7">
            <a className="text-xs font-medium text-muted transition hover:text-primary sm:text-sm" href="#expertise">Expertise</a>
            <a className="hidden text-xs font-medium text-muted transition hover:text-primary sm:block sm:text-sm" href="#work">Work</a>
            <a className="hidden text-xs font-medium text-muted transition hover:text-primary min-[430px]:block sm:text-sm" href="#about">About</a>
            <a className="inline-flex min-h-10 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 text-xs font-bold text-background transition hover:bg-white sm:px-5 sm:text-sm" href="#contact"><span className="hidden min-[430px]:inline">Let&apos;s talk</span><span className="min-[430px]:hidden">Contact</span><ArrowUpRight aria-hidden="true" className="size-3.5" /></a>
          </nav>
        </div>
      </header>

      <section className="relative isolate" id="home">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_79%_34%,rgba(99,102,241,0.14),transparent_36%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:auto,44px_44px,44px_44px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 md:grid-cols-[1.1fr_.9fr] md:gap-8 md:py-24 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-3 py-1.5 text-[11px] font-medium text-muted sm:text-xs">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_#6366f1]" />
              SENIOR SOFTWARE ENGINEER <span className="text-white/25">/</span> .NET · ANGULAR · AZURE
            </div>
            <h1 className="mt-7 max-w-[14ch] text-[clamp(2.9rem,10vw,5.7rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-primary">
              Engineering for <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">what&apos;s next.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              I build scalable, resilient systems with C#, .NET, and cloud-native technologies. I help teams solve complex backend challenges, modernize what they have, and ship software that&apos;s easier to evolve.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(99,102,241,.2)] transition hover:bg-accent-secondary" href="#contact">Let&apos;s build something <ArrowUpRight aria-hidden="true" className="size-4" /></a>
              <a className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-5 text-sm font-medium text-primary transition hover:border-white/20 hover:bg-surface" href="#work">See my work <ArrowDown aria-hidden="true" className="size-4 text-muted" /></a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
              <span className="inline-flex items-center gap-2"><ShieldCheck aria-hidden="true" className="size-4 text-accent" />Production-minded</span>
              <span className="hidden size-1 rounded-full bg-white/20 sm:block" />
              <span className="inline-flex items-center gap-2"><Workflow aria-hidden="true" className="size-4 text-accent" />Full-stack perspective</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-secondary/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-2 shadow-2xl shadow-black/30 sm:rounded-[2.5rem] sm:p-3">
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.5rem] bg-[#24211f] sm:rounded-[2rem]">
                <Image alt="Portrait of the software engineer" className="object-cover object-[center_34%]" fill priority sizes="(max-width: 767px) 88vw, 42vw" src={profileImage} />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/70 px-3 py-1.5 text-[10px] font-medium text-primary backdrop-blur sm:text-xs"><Code2 aria-hidden="true" className="size-3.5 text-accent" /> C# · .NET · Azure</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 top-7 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-surface/95 p-3 shadow-xl backdrop-blur sm:-right-5 sm:top-12 sm:p-4">
              <span className="grid size-9 place-items-center rounded-xl bg-accent/15 text-accent"><Boxes aria-hidden="true" className="size-4" /></span>
              <span><span className="block text-xs font-bold text-primary">Systems that scale</span><span className="mt-0.5 block text-[10px] text-muted">Thoughtful by design</span></span>
            </div>
            <div className="absolute -bottom-4 -left-2 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-surface/95 p-3 shadow-xl backdrop-blur sm:-left-5 sm:bottom-6 sm:p-4">
              <span className="grid size-9 place-items-center rounded-xl bg-accent-secondary/15 text-accent-secondary"><Cloud aria-hidden="true" className="size-4" /></span>
              <span><span className="block text-xs font-bold text-primary">Cloud-native</span><span className="mt-0.5 block text-[10px] text-muted">Azure · Docker · Kubernetes</span></span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Core technologies" className="border-y border-white/[0.07] bg-surface/55">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 py-5 text-xs font-medium text-muted sm:gap-x-11 sm:py-6 sm:text-sm lg:px-12">
          <span className="font-mono text-[10px] tracking-wide text-muted/60">IN THE TOOLKIT</span>
          <span>C# / .NET</span><span className="text-accent/70">✳</span><span>Azure</span><span className="text-accent/70">✳</span><span>Angular</span><span className="text-accent/70">✳</span><span>TypeScript</span><span className="text-accent/70">✳</span><span>SQL Server</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12" id="expertise">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="font-mono text-[11px] tracking-widest text-accent">01 / WHAT I DO</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Good software works <span className="text-muted">across the stack.</span></h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">From architecture to delivery, I work across the boundaries that make a system reliable in production and practical to maintain.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {expertise.map(({ icon: Icon, number, title, description, tags }) => (
            <article className="group rounded-[1.5rem] border border-white/[0.07] bg-surface/70 p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface sm:rounded-[1.75rem] sm:p-6" key={number}>
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-accent/10 text-accent transition group-hover:bg-accent/15"><Icon aria-hidden="true" className="size-5" strokeWidth={1.7} /></span>
                <span className="font-mono text-[10px] text-muted/45">{number}</span>
              </div>
              <h3 className="mt-6 text-base font-semibold text-primary">{title}</h3>
              <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-muted">{description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {tags.map((tag) => <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium text-muted" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-surface/35" id="work">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] tracking-widest text-accent">02 / SELECTED WORK</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Built for people, <span className="text-muted">not just specs.</span></h2>
            </div>
            <a className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-white/10 px-4 text-xs font-medium text-muted transition hover:border-white/20 hover:text-primary sm:self-auto" href="https://github.com/sankassio99" rel="noreferrer" target="_blank">More on GitHub <Github aria-hidden="true" className="size-4" /></a>
          </div>
          <article className="grid overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-surface md:grid-cols-2 md:rounded-[2rem]">
            <a aria-label="Visit the Dimona e-commerce storefront" className="group relative block aspect-video overflow-hidden bg-[#152854] md:min-h-full md:aspect-auto" href="https://www.camisadimona.com.br/" rel="noreferrer" target="_blank">
              <Image alt="Responsive desktop and mobile Dimona e-commerce storefront" className="object-cover object-center transition duration-500 group-hover:scale-[1.025]" fill sizes="(max-width: 767px) 100vw, 50vw" src={dimonaProjectImage} />
              <span className="absolute bottom-4 right-4 inline-flex size-10 items-center justify-center rounded-full bg-background/80 text-primary backdrop-blur"><MoveUpRight aria-hidden="true" className="size-4" /></span>
            </a>
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">Freelance project</span><span className="font-mono text-[10px] text-muted">E-COMMERCE · BRAZIL</span></div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">Dimona</h3>
              <p className="mt-3 text-sm leading-7 text-muted">A fashion e-commerce storefront improved with TypeScript and unit tests, strengthening maintainability and helping reduce production bugs.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Vue.js", "TypeScript", "Unit testing", "Nuxt"].map((tag) => <span className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-muted" key={tag}>{tag}</span>)}
              </div>
              <a className="mt-8 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-primary transition hover:text-accent" href="https://www.camisadimona.com.br/" rel="noreferrer" target="_blank">Explore the storefront <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12" id="about">
        <div className="grid items-center gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-16">
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[2rem] bg-accent-secondary/10 blur-xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-2 sm:rounded-[2rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem] sm:rounded-[1.5rem]">
                <Image alt="Illustrated portrait surrounded by architecture notes and engineering diagrams" className="object-cover object-center" fill sizes="(max-width: 767px) 88vw, 36vw" src={approachImage} />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-surface px-4 py-3 shadow-xl sm:-right-6"><Sparkles aria-hidden="true" className="size-4 text-accent-secondary" /><span className="text-xs font-semibold">Thoughtful, not over-engineered</span></div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest text-accent">03 / HOW I WORK</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Engineering that <span className="text-muted">holds up over time.</span></h2>
            <p className="mt-5 text-sm leading-7 text-muted">Quality and maintainability aren&apos;t finishing touches. They are part of the design from the start. I use established principles pragmatically, always with the product, the team, and production in mind.</p>
            <ul className="mt-7 grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {principles.map((principle) => <li className="flex items-start gap-3 text-sm leading-6 text-primary/85" key={principle}><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent"><Check aria-hidden="true" className="size-3" strokeWidth={2.5} /></span>{principle}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-surface/35">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="font-mono text-[11px] tracking-widest text-accent">04 / EXPERIENCE</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">A little about <span className="text-muted">the journey.</span></h2>
          </div>
          <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:gap-14">
            <div className="relative space-y-0 before:absolute before:bottom-6 before:left-[5px] before:top-2 before:w-px before:bg-white/10">
              {experience.map((role) => (
                <article className="relative pb-8 pl-7 last:pb-0" key={`${role.company}-${role.period}`}>
                  <span className={`absolute left-0 top-1.5 size-[11px] rounded-full border-2 ${role.current ? "border-accent bg-accent shadow-[0_0_12px_rgba(99,102,241,.55)]" : "border-muted/50 bg-background"}`} />
                  <p className="font-mono text-[10px] tracking-wider text-muted">{role.period}</p>
                  <h3 className="mt-2 text-base font-semibold">{role.role}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{role.company}</p>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{role.description}</p>
                </article>
              ))}
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-2 sm:rounded-[2rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                <Image alt="Illustration representing clear communication and a collaborative engineering partnership" className="object-cover object-center" fill sizes="(max-width: 767px) 88vw, 40vw" src={expectationsImage} />
              </div>
              <div className="p-4 sm:p-5"><div className="flex items-center gap-2 text-sm font-semibold"><BriefcaseBusiness aria-hidden="true" className="size-4 text-accent" /> What it&apos;s like to work together</div><p className="mt-2 text-xs leading-6 text-muted">Clear communication, strong ownership, and decisions grounded in real technical and business needs.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12" id="contact">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="font-mono text-[11px] tracking-widest text-accent">05 / GET IN TOUCH</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Have a tricky system problem?</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">Tell me what you&apos;re building, improving, or trying to untangle. I&apos;ll get back to you to talk through what makes sense.</p>
            <a className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 text-sm text-muted transition hover:border-accent/40 hover:text-primary" href="https://github.com/sankassio99" rel="noreferrer" target="_blank"><Github aria-hidden="true" className="size-4" /> GitHub <ArrowRight aria-hidden="true" className="size-3.5" /></a>
            <p className="mt-8 hidden items-center gap-2 font-mono text-[10px] tracking-widest text-muted/60 lg:flex"><Database aria-hidden="true" className="size-3.5" /> .NET · CLOUD · FULL-STACK</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/[0.08] bg-surface p-5 sm:rounded-[2rem] sm:p-8">
            <div className="mb-6 flex items-start gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent"><Mail aria-hidden="true" className="size-4" /></span><span><span className="block text-sm font-semibold">Start a conversation</span><span className="mt-1 block text-xs leading-5 text-muted">Share a few details and I&apos;ll be in touch.</span></span></div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>Senior Software Engineer <span className="mx-1 text-accent">/</span> .NET · Angular · Azure</p>
          <a className="inline-flex min-h-10 items-center gap-1 self-start transition hover:text-primary sm:self-auto" href="#home">Back to top <ArrowUpRight aria-hidden="true" className="size-3.5" /></a>
        </div>
      </footer>
    </main>
  );
}