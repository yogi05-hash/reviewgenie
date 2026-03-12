'use client'
import { useState } from 'react'
import Link from 'next/link'

const DEMO_REVIEWS = [
  { id: 1, author: 'Sarah Mitchell', initials: 'SM', stars: 5, date: '2 hours ago', text: 'Absolutely brilliant service! The team went above and beyond every step of the way. Professional, fast, and genuinely caring. Will definitely be back and recommending to everyone.', replied: false },
  { id: 2, author: 'James Thornton', initials: 'JT', stars: 4, date: '1 day ago', text: 'Really good experience overall. Slight wait time on arrival but the quality of service more than made up for it. Staff were friendly and knowledgeable.', replied: false },
  { id: 3, author: 'Priya Kapoor', initials: 'PK', stars: 2, date: '3 days ago', text: 'Disappointed with the communication. I have been a loyal customer for 2 years and expected better. The issue itself was resolved but the experience left a lot to be desired.', replied: false },
  { id: 4, author: 'David Walsh', initials: 'DW', stars: 5, date: '1 week ago', text: 'Outstanding from start to finish. Exactly what I needed — fast, professional and friendly. This is how every business should operate.', replied: true },
  { id: 5, author: 'Emma Clarke', initials: 'EC', stars: 3, date: '2 weeks ago', text: 'Average experience. Nothing particularly wrong but nothing that stood out either. Might try again in future.', replied: true },
]

const AI_REPLIES: Record<number, string> = {
  1: "Thank you so much, Sarah! We're absolutely delighted to hear this — it means the world to our team. We always strive to go above and beyond, and knowing it made a difference to you is the best reward. We can't wait to welcome you back! 😊",
  2: "Thanks for the kind words, James! We really appreciate you flagging the wait time — we're always looking to improve and that feedback genuinely helps. So glad the overall experience hit the mark. Hope to see you again soon!",
  3: "Priya, thank you for being such a loyal customer and for taking the time to share this. You're right — the communication didn't reflect the standard we hold ourselves to, and we're sorry for that. Please reach out to us directly at hello@bilabs.ai and we'd love to make this right.",
  4: "Thank you, David! Fast, professional and friendly is exactly what we aim for every single day — so hearing that really does make our day. Looking forward to seeing you again soon! 🙌",
  5: "Thanks for the honest feedback, Emma! We'd love to know what we could have done to make your experience exceptional rather than average. Please do give us another chance — we think you'll notice the difference!",
}

export default function Dashboard() {
  const [reviews, setReviews] = useState(DEMO_REVIEWS)
  const [generating, setGenerating] = useState<number | null>(null)
  const [replies, setReplies] = useState<Record<number, string>>({})

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

  const starColor = (stars: number) => stars >= 4 ? '#facc15' : stars === 3 ? '#fb923c' : '#f87171'

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif', backgroundColor: '#0a0a0f', color: '#fff', minHeight: '100vh' }}>
      
      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(10,10,15,0.95)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff' }}>
          <span style={{ fontSize: '18px' }}>✨</span>
          <span style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.5px' }}>ReviewGenie</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '11px', backgroundColor: 'rgba(250,204,21,0.1)', color: '#facc15', border: '1px solid rgba(250,204,21,0.2)', padding: '4px 10px', borderRadius: '100px', fontWeight: 600 }}>DEMO</span>
          <Link href="/pricing" style={{ backgroundColor: '#fff', color: '#0a0a0f', padding: '8px 18px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 700 }}>Upgrade to Pro — £49/mo</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 40px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.5px', margin: '0 0 6px' }}>Review Dashboard</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: 0 }}>Acme Coffee Co · London, UK</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '36px' }}>
          {[
            { label: 'Total Reviews', value: '124', sub: '+12 this week', color: '#22c55e' },
            { label: 'Avg Rating', value: '4.7 ★', sub: '↑ 0.2 vs last month', color: '#facc15' },
            { label: 'Reply Rate', value: '94%', sub: '↑ from 63%', color: '#22c55e' },
            { label: 'Time Saved', value: '6.2h', sub: 'this week', color: 'rgba(255,255,255,0.4)' },
          ].map(s => (
            <div key={s.label} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '14px', padding: '18px 20px' }}>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</p>
              <p style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', letterSpacing: '-0.5px' }}>{s.value}</p>
              <p style={{ fontSize: '11px', color: s.color, margin: 0 }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>Recent Reviews</h2>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{reviews.filter(r => !r.replied).length} awaiting reply</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {reviews.map(review => (
            <div key={review.id} style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: `1px solid ${review.replied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.07)'}`, borderRadius: '16px', padding: '22px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>
                    {review.initials}
                  </div>
                  <div>
                    <p style={{ margin: '0 0 3px', fontSize: '14px', fontWeight: 600 }}>{review.author}</p>
                    <p style={{ margin: 0, fontSize: '13px', color: starColor(review.stars) }}>{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {review.replied && <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: 600 }}>✓ Replied</span>}
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>{review.date}</span>
                </div>
              </div>

              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: '0 0 16px' }}>{review.text}</p>

              {!review.replied && (
                <>
                  {replies[review.id] ? (
                    <div>
                      <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px', marginBottom: '12px' }}>
                        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: '0 0 8px', fontWeight: 500 }}>✨ AI-generated reply</p>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.65 }}>{replies[review.id]}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => approveReply(review.id)} style={{ backgroundColor: '#fff', color: '#0a0a0f', border: 'none', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                          ✓ Approve & Post
                        </button>
                        <button onClick={() => generateReply(review.id)} style={{ backgroundColor: 'transparent', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>
                          Regenerate
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => generateReply(review.id)}
                      disabled={generating === review.id}
                      style={{ backgroundColor: generating === review.id ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.06)', color: generating === review.id ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)', padding: '9px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: generating === review.id ? 'not-allowed' : 'pointer' }}>
                      {generating === review.id ? '✨ Writing reply...' : '✨ Generate AI Reply'}
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
