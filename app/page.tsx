import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif', backgroundColor: '#0a0a0f', color: '#fff', minHeight: '100vh' }}>
      
      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(10,10,15,0.8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '22px' }}>✨</span>
          <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.5px' }}>ReviewGenie</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link href="#features" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Features</Link>
          <Link href="/pricing" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Pricing</Link>
          <Link href="/dashboard" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Dashboard</Link>
          <Link href="/pricing" style={{ backgroundColor: '#fff', color: '#0a0a0f', padding: '9px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, letterSpacing: '-0.2px' }}>Get started free</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '100px 40px 80px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '6px 14px', marginBottom: '32px' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block' }}></span>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Trusted by 200+ UK businesses</span>
        </div>
        
        <h1 style={{ fontSize: '68px', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '24px', background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Your reviews,<br />replied in seconds.
        </h1>
        
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto 48px' }}>
          ReviewGenie writes personalised, professional Google review replies using AI. One click to approve. Never miss a review again.
        </p>
        
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/dashboard" style={{ backgroundColor: '#fff', color: '#0a0a0f', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, letterSpacing: '-0.3px', display: 'inline-block' }}>
            Try free demo →
          </Link>
          <Link href="/pricing" style={{ backgroundColor: 'transparent', color: 'rgba(255,255,255,0.7)', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.12)', display: 'inline-block' }}>
            View pricing
          </Link>
        </div>

        {/* Social proof */}
        <div style={{ marginTop: '64px', display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['★★★★★ "Saves us 2 hours a week"', '★★★★★ "Every reply sounds human"', '★★★★★ "Best £49 we spend"'].map(t => (
            <div key={t} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>{t}</div>
          ))}
        </div>
      </section>

      {/* Product screenshot mockup */}
      <section style={{ maxWidth: '900px', margin: '0 auto 100px', padding: '0 40px' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 40px 120px rgba(0,0,0,0.6)' }}>
          {/* Window chrome */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f57' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#febc2e' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28c840' }}></div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '4px 16px', borderRadius: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>reviewgenie.ai/dashboard</span>
            </div>
          </div>
          {/* App content */}
          <div style={{ padding: '32px' }}>
            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
              {[
                { label: 'Total Reviews', value: '124', trend: '+12 this week' },
                { label: 'Avg Rating', value: '4.7 ★', trend: '↑ 0.2 vs last month' },
                { label: 'Reply Rate', value: '94%', trend: '↑ 31% vs before' },
                { label: 'Time Saved', value: '6.2h', trend: 'this week' },
              ].map(s => (
                <div key={s.label} style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px', margin: '0 0 6px' }}>{s.label}</p>
                  <p style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 4px' }}>{s.value}</p>
                  <p style={{ fontSize: '11px', color: '#22c55e', margin: 0 }}>{s.trend}</p>
                </div>
              ))}
            </div>
            {/* Review card */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700 }}>S</div>
                  <div>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Sarah Mitchell</p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#facc15' }}>★★★★★</p>
                  </div>
                </div>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>2 hours ago</span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: '0 0 16px', lineHeight: 1.6 }}>"Absolutely brilliant service. The team was professional, fast, and genuinely helpful. Will 100% recommend to friends."</p>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '14px', marginBottom: '14px' }}>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '0 0 6px' }}>✨ AI-generated reply</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>Thank you so much, Sarah! We're absolutely delighted to hear this — your kind words mean the world to the whole team. We look forward to seeing you again soon! 😊</p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ backgroundColor: '#fff', color: '#0a0a0f', padding: '8px 16px', borderRadius: '7px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>✓ Approve & Post</div>
                <div style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)', padding: '8px 16px', borderRadius: '7px', fontSize: '13px', cursor: 'pointer' }}>Regenerate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ maxWidth: '960px', margin: '0 auto 100px', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 700, letterSpacing: '-1px', marginBottom: '16px' }}>Everything you need</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px' }}>Built for UK small businesses who care about their reputation.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            { icon: '🤖', title: 'AI-powered replies', desc: 'GPT-4 writes personalised responses that match your brand tone — warm, professional, human.' },
            { icon: '⚡', title: 'One-click approve', desc: 'Review the suggestion and hit approve. Posted to Google instantly. No copy-pasting.' },
            { icon: '📊', title: 'Weekly digest', desc: 'Every Monday: new reviews, reply rate trends, star rating movement. One clean email.' },
            { icon: '🎨', title: 'Tone customisation', desc: 'Set your brand voice — formal, friendly, or playful. Every reply stays on-brand.' },
            { icon: '📄', title: 'White-label reports', desc: 'Send clients a branded PDF showing review performance. Close more retainers.' },
            { icon: '🔔', title: 'Instant alerts', desc: 'Get notified the moment a new review lands. Never let a bad review sit unanswered.' },
          ].map(f => (
            <div key={f.title} style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontSize: '28px', marginBottom: '14px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', letterSpacing: '-0.3px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '700px', margin: '0 auto 100px', padding: '0 40px', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '64px 48px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 700, letterSpacing: '-1px', marginBottom: '16px' }}>Ready to get started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '36px', fontSize: '16px' }}>10 free AI replies/month. No credit card required.</p>
          <Link href="/dashboard" style={{ backgroundColor: '#fff', color: '#0a0a0f', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }}>
            Start for free →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)' }}>© 2026 ReviewGenie · by <a href="https://bilabs.ai" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>bilabs.ai</a></span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/pricing" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Pricing</Link>
          <Link href="/dashboard" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Dashboard</Link>
          <a href="mailto:hello@bilabs.ai" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Contact</a>
        </div>
      </footer>
    </div>
  )
}
