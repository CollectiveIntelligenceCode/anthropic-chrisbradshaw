const STRENGTHS = [
  'Enterprise AI Adoption',
  'AI Operating Models',
  'Applied AI Architecture',
  'AI Governance',
  'Product Strategy',
  'Executive Facilitation',
  'Workshop Design',
  'Organisational Transformation',
  'Automation & AI Workflows',
  'Human–AI Collaboration',
  'Stakeholder Alignment',
  'Venture Building',
];

const EXPERIENCE = [
  {
    org: 'Board of Innovation',
    title: 'AI Transformation & Enterprise Enablement Consultant',
    desc: 'Designing enterprise AI operating models, governance approaches, capability frameworks, and executive alignment programmes for complex organisations.',
  },
  {
    org: 'Collective Intelligence',
    title: 'Founder & AI Strategy Director',
    desc: 'Helping leaders move from AI experimentation to sustainable adoption through strategy, operating model design, facilitation, and practical implementation.',
  },
  {
    org: 'Infinum',
    title: 'Product Strategy Director',
    desc: 'Led global AI strategy and product innovation initiatives, including the creation of an AI Discovery methodology for identifying and prioritising AI opportunities.',
  },
  {
    org: 'Founder / Operator Background',
    title: 'WeAgile, Konekt Group & Earlier Roles',
    desc: 'WeAgile, Konekt Group and earlier leadership roles across product, digital transformation, venture building, and technology delivery. Built and scaled companies, advised 50+ startups, and facilitated 100+ workshops.',
  },
];

const DOCS = [
  {
    label: 'Download CV',
    href: '/docs/Chris-Bradshaw-Anthropic-CV.pdf',
    icon: '↓',
    external: false,
  },
  {
    label: 'Download Cover Letter',
    href: '/docs/Chris-Bradshaw-Anthropic-Cover-Letter.pdf',
    icon: '↓',
    external: false,
  },
  {
    label: 'Watch Video Introduction',
    href: 'https://app.heygen.com/videos/avatar-video-b7effc58a6114899845ee29e6c092360',
    icon: '▶',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/chrisbradshawai',
    icon: '↗',
    external: true,
  },
  {
    label: 'chrisbradshaw.ai',
    href: 'https://chrisbradshaw.ai',
    icon: '↗',
    external: true,
  },
  {
    label: 'collectiveintelligence.co',
    href: 'https://collectiveintelligence.co',
    icon: '↗',
    external: true,
  },
  {
    label: 'mail@chrisbradshaw.ai',
    href: 'mailto:mail@chrisbradshaw.ai',
    icon: '✉',
    external: false,
  },
];

export default function Page() {
  return (
    <>
      {/* ── Nav ──────────────────────────────────────────────── */}
      <header style={{ background: 'var(--nav-bg)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-medium tracking-wide text-white">
            Chris Bradshaw
          </span>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Anthropic · Applied AI Architect
          </span>
          <a
            href="mailto:mail@chrisbradshaw.ai"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            mail@chrisbradshaw.ai
          </a>
        </div>
      </header>

      <main>
        {/* ── 1. Hero ──────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 pt-28 pb-24">
          <p className="text-sm font-medium mb-8 tracking-wide" style={{ color: 'var(--muted)' }}>
            Applied AI Architect Application
          </p>
          <h1
            className="font-serif text-6xl md:text-7xl font-semibold leading-tight mb-8"
            style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            Chris Bradshaw
          </h1>
          <p className="text-xl mb-8 font-light" style={{ color: 'var(--muted)', maxWidth: '560px' }}>
            AI Transformation Leader · Applied AI Architect · Product Strategy Director
          </p>
          <p className="text-lg leading-relaxed mb-12" style={{ color: 'var(--text)', maxWidth: '620px', lineHeight: '1.75' }}>
            I help organisations translate frontier AI capabilities into trusted, scalable, and measurable
            outcomes — building the confidence, governance, and organisational capability required to deploy
            AI safely and responsibly at scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#video"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: 'var(--nav-bg)', color: '#fff' }}
            >
              Watch Introduction
            </a>
            <a
              href="/docs/Chris-Bradshaw-Anthropic-CV.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-75"
              style={{ background: 'var(--bg-card)', color: 'var(--text)' }}
            >
              Download CV
            </a>
          </div>
        </section>

        {/* ── 2. Video ─────────────────────────────────────────── */}
        <section id="video" style={{ background: 'var(--bg-card)' }}>
          <div className="max-w-4xl mx-auto px-6 py-24">
            <p className="text-sm font-medium mb-4 tracking-wide" style={{ color: 'var(--muted)' }}>
              Introduction
            </p>
            <h2
              className="font-serif text-4xl font-semibold mb-5"
              style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
            >
              Personal Introduction
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--muted)', maxWidth: '560px' }}>
              A short introduction to my background, why Anthropic, and how my experience maps to
              enterprise AI adoption.
            </p>
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: '16/9', background: '#0f0f0f' }}
            >
              <iframe
                src="https://app.heygen.com/embeds/b7effc58a6114899845ee29e6c092360"
                title="Avatar Video"
                frameBorder="0"
                allow="encrypted-media; fullscreen;"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="mt-5">
              <a
                href="https://app.heygen.com/videos/avatar-video-b7effc58a6114899845ee29e6c092360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-60"
                style={{ color: 'var(--muted)', textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                Open in new tab →
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. Why Anthropic ─────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm font-medium mb-4 tracking-wide" style={{ color: 'var(--muted)' }}>
            Alignment
          </p>
          <h2
            className="font-serif text-4xl font-semibold mb-10"
            style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            Why Anthropic
          </h2>
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--text)', maxWidth: '640px', lineHeight: '1.8' }}>
            <p>
              Most failed AI initiatives do not fail because the technology is inadequate. They fail because
              organisations underestimate that adoption is a human, organisational, and operating-model
              challenge as much as a technical one.
            </p>
            <p>
              My work sits at that intersection: helping executives, operators, product teams, and technical
              teams move from fragmented experimentation to trusted, governed, and scalable AI capability.
            </p>
            <p>
              Anthropic's focus on reliable, controllable, and responsible AI aligns strongly with how I
              believe enterprises need to adopt AI: safely, thoughtfully, and with clear routes to
              measurable value.
            </p>
          </div>
        </section>

        {/* ── 4. Experience ────────────────────────────────────── */}
        <section style={{ background: 'var(--bg-card)' }}>
          <div className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-sm font-medium mb-4 tracking-wide" style={{ color: 'var(--muted)' }}>
              Background
            </p>
            <h2
              className="font-serif text-4xl font-semibold mb-12"
              style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
            >
              Experience Snapshot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {EXPERIENCE.map((e) => (
                <div
                  key={e.org}
                  className="rounded-2xl p-8"
                  style={{ background: 'var(--bg)' }}
                >
                  <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--muted)' }}>
                    {e.org}
                  </p>
                  <p className="text-base font-semibold mb-3" style={{ color: 'var(--text)' }}>
                    {e.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Core Strengths ────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-sm font-medium mb-4 tracking-wide" style={{ color: 'var(--muted)' }}>
            Capabilities
          </p>
          <h2
            className="font-serif text-4xl font-semibold mb-12"
            style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            Core Strengths
          </h2>
          <div className="flex flex-wrap gap-3">
            {STRENGTHS.map((s) => (
              <span
                key={s}
                className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{ background: 'var(--bg-card)', color: 'var(--text)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── 6. Documents & Links ─────────────────────────────── */}
        <section style={{ background: 'var(--bg-card)' }}>
          <div id="documents" className="max-w-6xl mx-auto px-6 py-24">
            <p className="text-sm font-medium mb-4 tracking-wide" style={{ color: 'var(--muted)' }}>
              Resources
            </p>
            <h2
              className="font-serif text-4xl font-semibold mb-12"
              style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
            >
              Documents &amp; Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {DOCS.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.external ? '_blank' : undefined}
                  rel={d.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between rounded-2xl px-6 py-5 text-sm font-medium transition-opacity hover:opacity-75"
                  style={{ background: 'var(--bg)', color: 'var(--text)', textDecoration: 'none' }}
                >
                  <span>{d.label}</span>
                  <span className="text-base ml-2" style={{ color: 'var(--muted)' }}>{d.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Contact ───────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-sm font-medium mb-4 tracking-wide" style={{ color: 'var(--muted)' }}>
            Contact
          </p>
          <h2
            className="font-serif text-4xl font-semibold mb-10"
            style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
          >
            Get In Touch
          </h2>
          <div className="space-y-2 text-base" style={{ color: 'var(--muted)' }}>
            <p>
              <a href="mailto:mail@chrisbradshaw.ai" className="hover:opacity-70 transition-opacity font-medium" style={{ color: 'var(--text)' }}>
                mail@chrisbradshaw.ai
              </a>
            </p>
            <p>+44 7967 483206</p>
            <p>London, United Kingdom</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 pt-3">
              <a href="https://chrisbradshaw.ai" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                chrisbradshaw.ai
              </a>
              <a href="https://collectiveintelligence.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                collectiveintelligence.co
              </a>
              <a href="https://linkedin.com/in/chrisbradshawai" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer style={{ background: 'var(--nav-bg)' }}>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm font-medium text-white">Chris Bradshaw</p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Anthropic Applied AI Architect Application
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            London, UK
          </p>
        </div>
      </footer>
    </>
  );
}
