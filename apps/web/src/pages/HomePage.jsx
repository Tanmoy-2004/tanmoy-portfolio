import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Mail, ArrowRight, Download, ExternalLink,
  Trophy, GraduationCap, Terminal, Layers, Cpu, Wrench, Send, Check
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import SplashScreen from '@/components/SplashScreen';
import profileImg from '../assets/profile.png.png';
import resumePdf from '../assets/Tanmoy_Naskar_CSE_Resume_2_0.pdf';


const EMAIL = 'tanmoynaskar554@gmail.com';
const GITHUB = 'https://github.com/Tanmoy-2004';
const LINKEDIN = 'https://www.linkedin.com/in/tanmoy-naskar-58a335389/';

const projects = [
  {
    title: 'FlashGenius – AI Flashcard & Quiz Generator',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'TanStack Start', 'AI API'],
    description:
      'Full-stack AI web application converting unstructured study notes into structured flashcards and adaptive practice quizzes with structured prompt pipelines.',
    badge: 'AI POWERED',
    github: 'https://github.com/Tanmoy-2004/learn-wizard-craft.git',
    demo: 'https://learn-wizard-craft.lovable.app',
  },
  {
    title: 'InterviewPilot – AI Mock Interview Bot',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'TanStack Start', 'AI API'],
    description:
      'Conversational mock-interview platform featuring role-specific interview flows, automated per-answer scoring, and multi-turn state handling.',
    badge: 'AI INTERVIEWER',
    github: 'https://github.com/Tanmoy-2004/roleplay-prep-pal.git',
    demo: 'https://roleplay-prep-pal.lovable.app',
  },
  {
    title: 'MatchMyResume – Resume vs JD Analyser',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'TanStack Start', 'AI API'],
    description:
      'Intelligent ATS matching engine evaluating resume relevance against job descriptions with percentage match scoring and keyword gap analysis.',
    badge: 'ATS OPTIMIZER',
    github: 'https://github.com/Tanmoy-2004/skill-aligner-x.git',
    demo: 'https://skill-aligner-x.lovable.app',
  },
];

const skillGroups = [
  { icon: Terminal, title: 'Languages', items: ['Java', 'JavaScript', 'C', 'SQL', 'HTML5', 'CSS3'] },
  { icon: Layers, title: 'Web & Frameworks', items: ['React', 'Node.js', 'REST APIs', 'Express'] },
  { icon: Cpu, title: 'Core CS Fundamentals', items: ['DSA', 'Operating Systems', 'OOP', 'DBMS'] },
  { icon: Wrench, title: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
];

const ticker = ['Java', 'Spring Boot', 'React', 'Data Structures', 'Algorithms', 'REST APIs', 'SQL', 'Node.js', 'Git', 'System Design'];

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`px-6 md:px-10 ${className}`}>
    {children}
  </section>
);

const Label = ({ children }) => (
  <p className="mono text-xs uppercase tracking-[0.3em] text-primary">{children}</p>
);

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* 3. Render SplashScreen while loading */}
      {loading && <SplashScreen onComplete={() => setLoading(false)} />}

      <div className={`min-h-screen bg-background text-foreground selection:bg-primary/30 transition-opacity duration-700 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
      <Helmet>
        <title>Software Development Engineer | Java & Full-Stack Portfolio</title>
        <meta
          name="description"
          content="Portfolio of a B.Tech Computer Science student and Software Development Engineer specializing in Java, full-stack web development, and Data Structures & Algorithms."
        />
      </Helmet>
      <Seo
        title="Software Development Engineer | Java & Full-Stack Portfolio"
        description="Java, Spring Boot, React and DSA. Projects, skills and achievements of a B.Tech CS student."
        siteName="SDE Portfolio"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[80rem] items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="mono text-sm font-semibold tracking-tight">
            <span className="text-primary">&gt;_</span> sde.portfolio
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {[['Work', '#work'], ['Skills', '#skills'], ['About', '#about'], ['Contact', '#contact']].map(([l, h]) => (
              <a key={h} href={h} className="transition-colors hover:text-primary">{l}</a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-sm border border-primary/50 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
          >
            Hire me
          </a>
        </div>
      </header>

{/* Hero */}
      <Section id="top" className="relative overflow-hidden py-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />

        {/* 2-Column Grid Layout */}
        <div className="relative mx-auto max-w-[80rem] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Links (7 columns wide) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <Label>AVAILABLE FOR SDE ROLES & INTERNSHIPS</Label>

            {/* 1. Hi, I'm Tanmoy Naskar */}
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl text-white">
              Hi, I&apos;m <span className="text-[#f59e0b]">Tanmoy Naskar</span>
            </h1>

            {/* 2. Software Development Engineer (Big Cyan with Underline) */}
            <div className="mt-2 inline-block">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-primary">
                Software Development Engineer
              </h2>
              <svg className="mt-1 w-full" height="12" viewBox="0 0 400 12" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 7 C 100 1, 300 1, 398 6" stroke="hsl(var(--primary))" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <p className="mono mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              B.Tech Computer Science Student | Java &amp; Full-Stack Web Developer | Problem Solver
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98]"
              >
                View My Work <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href={resumePdf}
                download
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary active:scale-[0.98]"
              >
                <Download className="h-4 w-4" strokeWidth={2} /> Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { href: GITHUB, icon: Github, label: 'GitHub' },
                { href: LINKEDIN, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${EMAIL}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Image (5 columns wide) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px] overflow-hidden rounded-2xl border-2 border-primary/50 shadow-2xl">
              <img
                src={profileImg}
                alt="Tanmoy Naskar"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </Section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-border bg-card/60 py-4">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-primary">/</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <Section id="work" className="py-24 md:py-32">
        <div className="mx-auto max-w-[80rem]">
          <Reveal>
            <Label>01 — Featured Projects</Label>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Things I&apos;ve built</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary/60">
                  <div className="mono mb-6 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                    <span>0{i + 1}</span>
                    <span className="rounded-sm bg-primary/10 px-2 py-1 text-primary">{p.badge}</span>
                  </div>
                  <h3 className="text-2xl font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="mono rounded-sm border border-border px-2.5 py-1 text-[11px] text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-border">
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
                      <Github className="h-4 w-4" /> GitHub Repo
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium text-primary transition-transform hover:-translate-y-px">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" className="border-y border-border bg-card/40 py-24 md:py-32">
        <div className="mx-auto max-w-[80rem]">
          <Reveal>
            <Label>02 — Technical Skills</Label>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">The stack I work in</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="h-full bg-background p-8">
                  <g.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-5 text-lg font-semibold">{g.title}</h3>
                  <ul className="mono mt-5 space-y-2.5 text-sm text-muted-foreground">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Achievements + About */}
      <Section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[80rem] gap-16 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Label>03 — Achievements</Label>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Key highlights</h2>
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-5 rounded-sm border border-primary/40 bg-primary/5 p-6">
                <Trophy className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <p className="mono text-[11px] uppercase tracking-[0.25em] text-primary">Award</p>
                  <p className="mt-2 text-lg font-semibold">2 times 3rd Place Winner — Smart India Hackathon (SIH) 2024 & 2025 — Internal</p>
                </div>
              </div>
              <div className="flex items-start gap-5 rounded-sm border border-border p-6">
                <GraduationCap className="h-6 w-6 shrink-0 text-muted-foreground" strokeWidth={1.75} />
                <div>
                  <p className="mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Academics</p>
                  <p className="mt-2 text-lg font-semibold">Consistently high academic standing in B.Tech Computer Science</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="about" className="lg:pt-2">
              <Label>04 — About Me</Label>
              <p className="mt-6 text-xl leading-relaxed sm:text-2xl">
                I am a passionate Computer Science student and software developer with a strong foundation in
                <span className="text-primary"> Java</span>,
                <span className="text-primary"> Data Structures</span>, and
                <span className="text-primary"> Web Technologies</span>.
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                I specialize in building efficient, scalable applications and solving complex algorithmic problems —
                from clean REST API design and relational data modelling to interfaces that stay fast on any device.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="border-t border-border bg-card/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-[80rem] gap-14 lg:grid-cols-2">
          <Reveal>
            <Label>05 — Contact</Label>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Let&apos;s Connect &amp; Build Together</h2>
            <div className="mono mt-10 space-y-4 text-sm">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4" /> linkedin.com/in/tanmoy-naskar-58a335389
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                <Github className="h-4 w-4" /> github.com/Tanmoy-2004
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-5 rounded-sm border border-border bg-background p-8">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              ].map((f) => (
                <div key={f.id} className="flex flex-col gap-2">
                  <label htmlFor={f.id} className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{f.label}</label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    value={form[f.id]}
                    onChange={(e) => setForm((s) => ({ ...s, [f.id]: e.target.value }))}
                    className="min-h-[44px] rounded-sm border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell me about the role or project..."
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  className="resize-none rounded-sm border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98]"
              >
                {sent ? (<><Check className="h-4 w-4" /> Opening your mail app</>) : (<><Send className="h-4 w-4" /> Send Message</>)}
              </button>
              {sent && (
                <p className="mono text-xs text-muted-foreground">
                  If nothing opened, email me directly at {EMAIL}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-border px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p className="mono text-xs">© 2026 | Tanmoy Naskar | All rights reserved.</p>
          <div className="flex gap-5">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">LinkedIn</a>
            <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-primary">Email</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default HomePage;