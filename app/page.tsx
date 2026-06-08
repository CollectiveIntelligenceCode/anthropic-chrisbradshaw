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
    label: 'Cover Letter',
    href: 'https://docs.google.com/document/d/1UBcJTZQjC2y0EFTqLnYsIYrPx1uv0JzTh00mmywsSaY/edit?tab=t.0',
    icon: '↗',
    external: true,
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

const col: React.CSSProperties = {
  maxWidth: '680px',
  margin: '0 auto',
  padding: '0 32px',
};

const sectionPad: React.CSSProperties = {
  paddingTop: '88px',
  paddingBottom: '88px',
};

const label: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
  marginBottom: '20px',
  display: 'block',
};

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  lineHeight: 1.2,
  color: 'var(--text)',
  marginBottom: '32px',
};

export default function Page() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────────── */}
      <header style={{ background: 'var(--nav-bg)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 32px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#fff', letterSpacing: '0.01em' }}>
            Chris Bradshaw
          </span>
          <a href="mailto:mail@chrisbradshaw.ai" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
            mail@chrisbradshaw.ai
          </a>
        </div>
      </header>

      <main>
        {/* ── 1. Hero ─────────────────────────────────────── */}
        <section style={{ ...sectionPad, paddingTop: '96px' }}>
          <div style={col}>
            <span style={label}>Anthropic · Applied AI Architect Application</span>
            <h1 style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '20px',
            }}>
              Chris Bradshaw
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '28px', lineHeight: 1.5 }}>
              AI Transformation Leader · Applied AI Architect · Product Strategy Director
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text)', marginBottom: '40px', maxWidth: '56ch' }}>
              I help organisations translate frontier AI capabilities into trusted, scalable, and measurable
              outcomes — building the confidence, governance, and organisational capability required to deploy
              AI safely and responsibly at scale.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#video" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '12px 24px', borderRadius: '100px',
                background: 'var(--nav-bg)', color: '#fff',
                fontSize: '14px', fontWeight: 500, textDecoration: 'none',
              }}>
                Watch Introduction
              </a>
              <a href="https://docs.google.com/document/d/1UBcJTZQjC2y0EFTqLnYsIYrPx1uv0JzTh00mmywsSaY/edit?tab=t.0"
                target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '12px 24px', borderRadius: '100px',
                background: 'var(--bg-card)', color: 'var(--text)',
                fontSize: '14px', fontWeight: 500, textDecoration: 'none',
              }}>
                Cover Letter
              </a>
              <a href="https://docs.google.com/document/d/1ocmuulzWHpyPnC8DmmP6YtgQq0fPyjt_7peHkkJVCBM/edit?tab=t.0"
                target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '12px 24px', borderRadius: '100px',
                background: 'var(--bg-card)', color: 'var(--text)',
                fontSize: '14px', fontWeight: 500, textDecoration: 'none',
              }}>
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* ── 2. Video ────────────────────────────────────── */}
        <section id="video" style={{ ...sectionPad, background: 'var(--bg-card)' }}>
          <div style={col}>
            <span style={label}>Introduction</span>
            <h2 style={h2Style}>Personal Introduction</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '32px', maxWidth: '50ch' }}>
              A short introduction to my background, why Anthropic, and how my experience maps to enterprise AI adoption.
            </p>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#0f0f0f', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe
                src="https://app.heygen.com/embeds/b7effc58a6114899845ee29e6c092360"
                title="Avatar Video"
                frameBorder="0"
                allow="encrypted-media; fullscreen;"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
            <p style={{ marginTop: '16px' }}>
              <a href="https://app.heygen.com/videos/avatar-video-b7effc58a6114899845ee29e6c092360"
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '12px', color: 'var(--muted)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                Open in new tab →
              </a>
            </p>
          </div>
        </section>

        {/* ── 3. Why Anthropic ────────────────────────────── */}
        <section style={sectionPad}>
          <div style={col}>
            <span style={label}>Alignment</span>
            <h2 style={h2Style}>Why Anthropic</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '56ch' }}>
              {[
                'Most failed AI initiatives do not fail because the technology is inadequate. They fail because organisations underestimate that adoption is a human, organisational, and operating-model challenge as much as a technical one.',
                'My work sits at that intersection: helping executives, operators, product teams, and technical teams move from fragmented experimentation to trusted, governed, and scalable AI capability.',
                "Anthropic's focus on reliable, controllable, and responsible AI aligns strongly with how I believe enterprises need to adopt AI: safely, thoughtfully, and with clear routes to measurable value.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text)' }}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Experience ───────────────────────────────── */}
        <section style={{ ...sectionPad, background: 'var(--bg-card)' }}>
          <div style={col}>
            <span style={label}>Background</span>
            <h2 style={h2Style}>Experience Snapshot</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {EXPERIENCE.map((e) => (
                <div key={e.org} style={{ background: 'var(--bg)', borderRadius: '12px', padding: '28px 32px' }}>
                  <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '10px' }}>{e.org}</p>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '10px' }}>{e.title}</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted)' }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Core Strengths ───────────────────────────── */}
        <section style={sectionPad}>
          <div style={col}>
            <span style={label}>Capabilities</span>
            <h2 style={h2Style}>Core Strengths</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {STRENGTHS.map((s) => (
                <span key={s} style={{
                  display: 'inline-block',
                  padding: '8px 18px', borderRadius: '100px',
                  background: 'var(--bg-card)', color: 'var(--text)',
                  fontSize: '13px', fontWeight: 500,
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Documents & Links ────────────────────────── */}
        <section style={{ ...sectionPad, background: 'var(--bg-card)' }}>
          <div id="documents" style={col}>
            <span style={label}>Resources</span>
            <h2 style={h2Style}>Documents &amp; Links</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
              {DOCS.map((d) => (
                <a key={d.label} href={d.href}
                  target={d.external ? '_blank' : undefined}
                  rel={d.external ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px', borderRadius: '12px',
                    background: 'var(--bg)', color: 'var(--text)',
                    fontSize: '14px', fontWeight: 500, textDecoration: 'none',
                  }}
                >
                  <span>{d.label}</span>
                  <span style={{ color: 'var(--muted)', fontSize: '16px', marginLeft: '12px' }}>{d.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Contact ──────────────────────────────────── */}
        <section style={sectionPad}>
          <div style={col}>
            <span style={label}>Contact</span>
            <h2 style={h2Style}>Get In Touch</h2>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <img
                src="/chris-bradshaw.png"
                alt="Chris Bradshaw"
                style={{ width: '200px', height: '200px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', color: 'var(--muted)' }}>
                <a href="mailto:mail@chrisbradshaw.ai" style={{ color: 'var(--text)', fontWeight: 500, textDecoration: 'none' }}>mail@chrisbradshaw.ai</a>
                <span>+44 7967 483206</span>
                <span>London, United Kingdom</span>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '12px' }}>
                  {[
                    { label: 'chrisbradshaw.ai', href: 'https://chrisbradshaw.ai' },
                    { label: 'collectiveintelligence.co', href: 'https://collectiveintelligence.co' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/chrisbradshawai' },
                  ].map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                      style={{ color: 'var(--text)', fontSize: '14px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer style={{ background: 'var(--nav-bg)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Chris Bradshaw</span>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Anthropic Applied AI Architect Application · London, UK</span>
        </div>
      </footer>
    </>
  );
}
