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
      {/* ── Top bar ──────────────────────────────────────────── */}
      <header style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--text)' }}>
            Chris Bradshaw
          </span>
          <a
            href="mailto:mail@chrisbradshaw.ai"
            className="text-sm transition-opacity hover:opacity-60"
            style={{ color: 'var(--muted)' }}
          >
            mail@chrisbradshaw.ai
          </a>
        </div>
      </header>

      <main>
        {/* ── 1. Hero ──────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 pt-24 pb-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: 'var(--accent)' }}
          >
            Anthropic · Applied AI Architect Application
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight mb-4" style={{ color: 'var(--text)' }}>
            Chris Bradshaw
          </h1>
          <p className="text-lg font-light mb-8" style={{ color: 'var(--muted)' }}>
            AI Transformation Leader&nbsp;·&nbsp;Applied AI Architect&nbsp;·&nbsp;Product Strategy Director
          </p>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text)', maxWidth: '600px' }}>
            I help organisations translate frontier AI capabilities into trusted, scalable, and measurable
            outcomes — building the confidence, governance, and organisational capability required to deploy
            AI safely and responsibly at scale.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#video"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-opacity hover:opacity-80"
              style={{ background: 'var(--text)', color: '#fff' }}
            >
              <span>▶</span> Watch Introduction
            </a>
            <a
              href="/docs/Chris-Bradshaw-Anthropic-CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-opacity hover:opacity-70"
              style={{ border: '1px solid var(--border)', color: 'var(--text)', background: 'transparent' }}
            >
              <span>↓</span> Download CV
            </a>
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ── 2. Video ─────────────────────────────────────────── */}
        <section id="video" className="max-w-3xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Introduction
          </p>
          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
            Personal Introduction
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
            A short introduction to my background, why Anthropic, and how my experience maps to enterprise
            AI adoption.
          </p>

          {/* Video embed — HeyGen. Falls back to a clean card if embed is blocked. */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: '16/9', background: '#111', border: '1px solid var(--border)' }}
          >
            <iframe
              src="https://app.heygen.com/embeds/b7effc58a6114899845ee29e6c092360"
              title="Chris Bradshaw — Personal Introduction"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </div>

          <div className="mt-4">
            <a
              href="https://app.heygen.com/videos/avatar-video-b7effc58a6114899845ee29e6c092360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-60"
              style={{ color: 'var(--muted)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Open video in new tab →
            </a>
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-6">
          <div style={{ height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ── 3. Why Anthropic ─────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Alignment
          </p>
          <h2 className="text-2xl font-semibold mb-8" style={{ color: 'var(--text)' }}>
            Why Anthropic
          </h2>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text)' }}>
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
              believe enterprises need to adopt AI: safely, thoughtfully, and with clear routes to measurable
              value.
            </p>
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ── 4. Experience ────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Background
          </p>
          <h2 className="text-2xl font-semibold mb-10" style={{ color: 'var(--text)' }}>
            Experience Snapshot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCE.map((e) => (
              <div
                key={e.org}
                className="p-7"
                style={{ border: '1px solid var(--border)', background: '#fff' }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
                  {e.org}
                </p>
                <p className="text-base font-semibold mb-3" style={{ color: 'var(--text)' }}>
                  {e.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ── 5. Core Strengths ────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Capabilities
          </p>
          <h2 className="text-2xl font-semibold mb-10" style={{ color: 'var(--text)' }}>
            Core Strengths
          </h2>
          <div className="flex flex-wrap gap-3">
            {STRENGTHS.map((s) => (
              <span
                key={s}
                className="px-4 py-2 text-sm font-medium"
                style={{ border: '1px solid var(--border)', color: 'var(--text)', background: '#fff' }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ── 6. Documents & Links ─────────────────────────────── */}
        <section id="documents" className="max-w-5xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Resources
          </p>
          <h2 className="text-2xl font-semibold mb-10" style={{ color: 'var(--text)' }}>
            Documents &amp; Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {DOCS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target={d.external ? '_blank' : undefined}
                rel={d.external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between px-5 py-4 text-sm font-medium transition-colors hover:bg-stone-50"
                style={{ border: '1px solid var(--border)', color: 'var(--text)', background: '#fff', textDecoration: 'none' }}
              >
                <span>{d.label}</span>
                <span style={{ color: 'var(--accent)', marginLeft: '8px', fontSize: '16px' }}>{d.icon}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ── 7. Contact ───────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}
          >
            Contact
          </p>
          <h2 className="text-2xl font-semibold mb-8" style={{ color: 'var(--text)' }}>
            Get In Touch
          </h2>
          <div className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
            <p>
              <a href="mailto:mail@chrisbradshaw.ai" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
                mail@chrisbradshaw.ai
              </a>
            </p>
            <p>+44 7967 483206</p>
            <p>London, United Kingdom</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
              <a href="https://chrisbradshaw.ai" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
                chrisbradshaw.ai
              </a>
              <a href="https://collectiveintelligence.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
                collectiveintelligence.co
              </a>
              <a href="https://linkedin.com/in/chrisbradshawai" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
                linkedin.com/in/chrisbradshawai
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Chris Bradshaw · Anthropic Applied AI Architect Application
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            London, UK · mail@chrisbradshaw.ai
          </p>
        </div>
      </footer>
    </>
  );
}
