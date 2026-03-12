'use client'
import { useState } from 'react'
import Link from 'next/link'

const DEMO_REVIEWS = [
  { id: 1, author: 'Sarah M.', stars: 5, date: '2 days ago', text: 'Absolutely brilliant service! The team went above and beyond. Will definitely be back.', replied: false },
  { id: 2, author: 'James T.', stars: 4, date: '5 days ago', text: 'Really good experience overall. Minor wait time but the quality made up for it.', replied: false },
  { id: 3, author: 'Priya K.', stars: 2, date: '1 week ago', text: 'Disappointed with the response time. Expected better communication after being a loyal customer.', replied: false },
  { id: 4, author: 'David W.', stars: 5, date: '2 weeks ago', text: 'Outstanding! Exactly what I needed. Fast, professional and friendly.', replied: true },
]

const AI_REPLIES: Record<number, string> = {
  1: "Thank you so much, Sarah! We're thrilled to hear you had such a wonderful experience. The team works really hard to go the extra mile, and it means the world to us when customers notice. We can't wait to welcome you back! ⭐",
  2: "Thanks for the kind words, James! We're glad you enjoyed the quality. We're always working on improving our wait times and your feedback really helps. Hope to see you again soon!",
  3: "Thank you for being a loyal customer, Priya, and for taking the time to share your experience. We're sorry the communication didn't meet your expectations — that's not the standard we hold ourselves to. Please reach out to us directly so we can make this right.",
  4: "Thank you, David! Fast, professional and friendly is exactly what we aim for every day. So glad we delivered! See you next time. 😊",
}

export default function Dashboard() {
  const [reviews, setReviews] = useState(DEMO_REVIEWS)
  const [generating, setGenerating] = useState<number | null>(null)
  const [replies, setReplies] = useState<Record<number, string>>({})

  const generateReply = async (id: number) => {
    setGenerating(id)
    await new Promise(r => setTimeout(r, 1200))
    setReplies(prev => ({ ...prev, [id]: AI_REPLIES[id] }))
    setGenerating(null)
  }

  const approveReply = (id: number) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, replied: true } : r))
    setReplies(prev => { const n = { ...prev }; delete n[id]; return n })
  }

  const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n)

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold text-yellow-400">ReviewGenie ✨</Link>
        <div className="flex items-center gap-4">
          <span className="text-xs bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20">Demo Mode</span>
          <Link href="/pricing" className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold">Upgrade £49/mo</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Total Reviews', value: '4' },
            { label: 'Avg Rating', value: '4.0 ★' },
            { label: 'Reply Rate', value: '25%' },
          ].map(s => (
            <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <p className="text-gray-400 text-xs mb-1">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-6">Recent Reviews</h2>

        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className={`bg-gray-900 border rounded-2xl p-6 ${review.replied ? 'border-green-800/50' : 'border-gray-800'}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-yellow-400 ml-3 text-sm">{stars(review.stars)}</span>
                </div>
                <span className="text-gray-500 text-xs">{review.date}</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{review.text}</p>

              {review.replied ? (
                <span className="text-green-400 text-xs font-semibold">✓ Replied</span>
              ) : replies[review.id] ? (
                <div>
                  <div className="bg-gray-800 rounded-xl p-4 text-sm text-gray-200 mb-3 border border-gray-700">
                    {replies[review.id]}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => approveReply(review.id)} className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300">
                      ✓ Approve & Post
                    </button>
                    <button onClick={() => generateReply(review.id)} className="border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-gray-500">
                      Regenerate
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => generateReply(review.id)}
                  disabled={generating === review.id}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition disabled:opacity-50"
                >
                  {generating === review.id ? '✨ Generating...' : '✨ Generate AI Reply'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
