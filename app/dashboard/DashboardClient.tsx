'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

const DEMO_REVIEWS = [
  { id: 1, author: 'Sarah Mitchell', initials: 'SM', stars: 5, date: '2 hours ago', text: 'Absolutely brilliant service! The team went above and beyond every step of the way. Professional, fast, and genuinely caring. Will definitely be back.', replied: false },
  { id: 2, author: 'James Thornton', initials: 'JT', stars: 4, date: '1 day ago', text: 'Really good experience overall. Slight wait time but the quality more than made up for it. Staff were friendly and knowledgeable.', replied: false },
  { id: 3, author: 'Priya Kapoor', initials: 'PK', stars: 2, date: '3 days ago', text: 'Disappointed with the communication. I have been a loyal customer for 2 years and expected better.', replied: false },
  { id: 4, author: 'David Walsh', initials: 'DW', stars: 5, date: '1 week ago', text: 'Outstanding from start to finish. Exactly what I needed — fast, professional and friendly.', replied: true },
]

const AI_REPLIES: Record<number, string> = {
  1: "Thank you so much, Sarah! We're absolutely delighted to hear this — it means the world to our whole team. We look forward to welcoming you back very soon! 😊",
  2: "Thanks for the kind words, James! We're always working on improving wait times and your feedback genuinely helps. Hope to see you again soon!",
  3: "Priya, thank you for being a loyal customer and for sharing this honestly. The communication didn't meet our standards and we're sorry for that. Please reach out to us directly — we'd love to make this right.",
  4: "Thank you, David! Fast, professional and friendly is exactly what we aim for every day. Looking forward to seeing you again! 🙌",
}

export default function DashboardClient() {
  const [reviews, setReviews] = useState(DEMO_REVIEWS)
  const [generating, setGenerating] = useState<number | null>(null)
  const [replies, setReplies] = useState<Record<number, string>>({})
  const [user, setUser] = useState<{ email?: string } | null>(null)
  const [plan, setPlan] = useState('free')
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [upgraded, setUpgraded] = useState(false)
  const supabase = createClient()
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { router.push('/login'); return }
      setUser(user)
      supabase.from('reviewgenie_profiles').select('plan').eq('id', user.id).single()
        .then(({ data }) => { if (data) setPlan(data.plan) })
    })
    if (searchParams.get('upgraded') === 'true') setUpgraded(true)
  }, [])

  const generateReply = async (id: number) => {
    setGenerating(id)
    await new Promise(r => setTimeout(r, 1400))
    setReplies(prev => ({ ...prev, [id]: AI_REPLIES[id] }))
    setGenerating(null)
  }

  const approveReply = (id: number) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, replied: true } : r))
    setReplies(prev => { const n = { ...prev }; delete n[id]; return n })
  }

  const handleUpgrade = async () => {
    setCheckoutLoading(true)
    const res = await fetch('/api/stripe/checkout', { method: 'POST' })
    const { url } = await res.json()
    if (url) window.location.href = url
    else setCheckoutLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const starColor = (s: number) => s >= 4 ? '#facc15' : s === 3 ? '#fb923c' : '#f87171'

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", sans-serif', backgroundColor: '#0a0a0f', color: '#fff', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(10,10,15,0.95)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff' }}>
          <span>✨</span><span style={{ fontSize: '16px', fontWeight: 700 }}>ReviewGenie</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {plan === 'free' && (
            <button onClick={handleUpgrade} disabled={checkoutLoading}
              style={{ backgroundColor: '#fff', color: '#0a0a0f', border: 'none', padding: '8px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
              {checkoutLoading ? 'Loading...' : 'Upgrade to Pro — £49/mo'}
            </button>
          )}
          {plan === 'pro' && <span style={{ fontSize: '11px', backgroundColor: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)', padding: '4px 10px', borderRadius: '100px', fontWeight: 600 }}>PRO</span>}
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>{user?.email}</span>
          <button onClick={handleLogout} style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)', padding: '7px 14px', borderRadius: '7px', fontSize: '12px', cursor: 'pointer' }}>Sign out</button>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px' }}>
        {upgraded && (
          <div style={{ backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🎉</span>
            <p style={{ margin: 0, fontSize: '14px', color: '#22c55e', fontWeight: 500 }}>Welcome to Pro! Unlimited AI replies are now active.</p>
          </div>
        )}

        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.5px', margin: '0 0 6px' }}>Review Dashboard</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: 0 }}>{plan === 'pro' ? 'Pro Plan — unlimited replies' : 'Free Plan — 10 replies/month'}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '36px' }}>
          {[
            { label: 'Total Reviews', value: '4' },
            { label: 'Avg Rating', value: '4.0 ★' },
            { label: 'Replied', value: `${reviews.filter(r=>r.replied).length}/${reviews.length}` },
            { label: 'Plan', value: plan === 'pro' ? 'Pro ∞' : 'Free' },
          ].map(s => (
            <div key={s.label} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '18px 20px' }}>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</p>
              <p style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>{s.value}</p>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>Recent Reviews</h2>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{reviews.filter(r => !r.replied).length} awaiting reply</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {reviews.map(review => (
            <div key={review.id} style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: `1px solid ${review.replied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.07)'}`, borderRadius: '16px', padding: '22px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700 }}>{review.initials}</div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '14px', fontWeight: 600 }}>{review.author}</p>
                    <p style={{ margin: 0, fontSize: '13px', color: starColor(review.stars) }}>{'★'.repeat(review.stars)}{'☆'.repeat(5-review.stars)}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {review.replied && <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: 600 }}>✓ Replied</span>}
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>{review.date}</span>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: '0 0 16px' }}>{review.text}</p>

              {!review.replied && (
                replies[review.id] ? (
                  <div>
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px', marginBottom: '12px' }}>
                      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: '0 0 8px' }}>✨ AI reply ready</p>
                      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.65 }}>{replies[review.id]}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => approveReply(review.id)} style={{ backgroundColor: '#fff', color: '#0a0a0f', border: 'none', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>✓ Approve & Post</button>
                      <button onClick={() => generateReply(review.id)} style={{ backgroundColor: 'transparent', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>Regenerate</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => generateReply(review.id)} disabled={generating === review.id}
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: generating === review.id ? 'not-allowed' : 'pointer', opacity: generating === review.id ? 0.6 : 1 }}>
                    {generating === review.id ? '✨ Writing reply...' : '✨ Generate AI Reply'}
                  </button>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
