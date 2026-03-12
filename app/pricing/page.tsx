import Link from 'next/link'

export default function Pricing() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif', backgroundColor: '#0a0a0f', color: '#fff', minHeight: '100vh' }}>
      
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff' }}>
          <span style={{ fontSize: '22px' }}>✨</span>
          <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.5px' }}>ReviewGenie</span>
        </Link>
        <Link href="/dashboard" style={{ backgroundColor: '#fff', color: '#0a0a0f', padding: '9px 20px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Try free demo</Link>
      </nav>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '16px' }}>Simple pricing</h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '18px', marginBottom: '64px' }}>No contracts. Cancel any time. Upgrade or downgrade instantly.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'start' }}>
          
          {/* Free */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '36px 28px', textAlign: 'left' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 20px' }}>Free</p>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px' }}>£0</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px' }}> / month</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '28px' }}>Perfect to try it out</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['10 AI replies/month', '1 business location', 'Dashboard access', 'Email support'].map(f => (
                <li key={f} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#22c55e', fontSize: '12px' }}>✓</span> {f}
                </li>
              ))}
              {['Weekly digest', 'White-label reports', 'Multiple locations'].map(f => (
                <li key={f} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '12px' }}>✗</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/dashboard" style={{ display: 'block', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, textAlign: 'center' }}>
              Get started free
            </Link>
          </div>

          {/* Pro */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '36px 28px', textAlign: 'left', position: 'relative', color: '#0a0a0f' }}>
            <span style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#0a0a0f', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>MOST POPULAR</span>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 20px' }}>Pro</p>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px' }}>£49</span>
              <span style={{ color: 'rgba(0,0,0,0.4)', fontSize: '15px' }}> / month</span>
            </div>
            <p style={{ color: 'rgba(0,0,0,0.4)', fontSize: '14px', marginBottom: '28px' }}>For serious business owners</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Unlimited AI replies', '3 business locations', 'Weekly digest email', 'White-label PDF reports', 'Priority support', 'Tone customisation'].map(f => (
                <li key={f} style={{ fontSize: '14px', color: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#16a34a', fontSize: '12px', fontWeight: 700 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <button style={{ display: 'block', width: '100%', backgroundColor: '#0a0a0f', color: '#fff', padding: '12px', borderRadius: '10px', border: 'none', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>
              Start Pro — £49/mo
            </button>
          </div>

          {/* Agency */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '36px 28px', textAlign: 'left' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 20px' }}>Agency</p>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-2px' }}>£149</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '15px' }}> / month</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '28px' }}>For agencies managing clients</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Everything in Pro', '10 client seats', 'Branded client portal', 'Client performance reports', 'Dedicated account manager', 'Custom onboarding'].map(f => (
                <li key={f} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#22c55e', fontSize: '12px' }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="mailto:hello@bilabs.ai" style={{ display: 'block', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, textAlign: 'center' }}>
              Talk to us
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '80px', textAlign: 'left', maxWidth: '600px', margin: '80px auto 0' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '32px', textAlign: 'center' }}>Questions</h2>
          {[
            { q: 'Do I need a credit card to start?', a: 'No. The free plan requires no card. Upgrade when you\'re ready.' },
            { q: 'How does the AI write replies?', a: 'It reads your review content, your business name, and your tone settings — then crafts a reply that sounds human and on-brand.' },
            { q: 'Can I edit replies before posting?', a: 'Yes. Every AI reply is shown to you first. Approve, edit, or regenerate — you\'re always in control.' },
            { q: 'What if I want to cancel?', a: 'Cancel any time from your dashboard. No questions, no penalties.' },
          ].map(item => (
            <div key={item.q} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
              <p style={{ fontWeight: 600, fontSize: '15px', marginBottom: '8px' }}>{item.q}</p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
