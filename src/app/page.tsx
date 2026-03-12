"use client";

import { useState } from "react";

const demoReviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    text: "Absolutely amazing service! The team went above and beyond to help us. Will definitely be coming back.",
    date: "2 hours ago",
    platform: "Google",
  },
  {
    id: 2,
    author: "James K.",
    rating: 3,
    text: "Service was okay but the wait time was too long. Food was decent though.",
    date: "5 hours ago",
    platform: "Google",
  },
  {
    id: 3,
    author: "Priya T.",
    rating: 1,
    text: "Very disappointed. Booked an appointment and had to wait 45 minutes. Staff were rude. Won't be returning.",
    date: "1 day ago",
    platform: "Yelp",
  },
  {
    id: 4,
    author: "David L.",
    rating: 4,
    text: "Great experience overall. Friendly staff and quick service. Only issue was parking.",
    date: "2 days ago",
    platform: "Google",
  },
];

const aiReplies: Record<number, string> = {
  1: "Thank you so much, Sarah! 🙏 We're thrilled to hear you had an amazing experience. Our team takes pride in going the extra mile for every customer. We can't wait to welcome you back!",
  2: "Hi James, thank you for your honest feedback. We're glad you enjoyed the food! We hear you on the wait time — we're actively working on improving our scheduling to reduce delays. We'd love the chance to give you a faster experience next time.",
  3: "Priya, we sincerely apologise for your experience. A 45-minute wait and anything less than respectful service is unacceptable. We've addressed this directly with our team. We'd love to make this right — please reach out to us at hello@business.com so we can offer you a complimentary visit.",
  4: "Thanks David! We're happy you had a great time with us. Appreciate the parking note — we're looking into additional options for our customers. See you again soon!",
};

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? "text-yellow-400" : "text-neutral-700"}>
          ★
        </span>
      ))}
    </span>
  );
}

function PlatformBadge({ platform }: { platform: string }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
      {platform}
    </span>
  );
}

export default function Home() {
  const [replies, setReplies] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});
  const [sent, setSent] = useState<Record<number, boolean>>({});

  const generateReply = (id: number) => {
    setLoading((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setReplies((prev) => ({ ...prev, [id]: aiReplies[id] }));
      setLoading((prev) => ({ ...prev, [id]: false }));
    }, 1500);
  };

  const sendReply = (id: number) => {
    setSent((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧞</span>
            <span className="text-xl font-bold tracking-tight">ReviewGenie</span>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#pricing" className="text-sm text-[var(--muted)] hover:text-white transition">
              Pricing
            </a>
            <button className="text-sm bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-4 py-2 rounded-lg transition font-medium">
              Start Free Trial
            </button>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          Never miss a review.
          <br />
          <span className="text-[var(--accent)]">AI replies in your voice.</span>
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10">
          ReviewGenie monitors your Google &amp; Yelp reviews and drafts perfect replies in your brand voice.
          One-click approve. Watch your reputation soar.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-3 rounded-lg text-lg font-semibold transition">
            Get Started — Free for 14 Days
          </button>
        </div>
        <p className="text-sm text-[var(--muted)] mt-4">No credit card required · Cancel anytime</p>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[var(--accent)]">89%</div>
            <div className="text-sm text-[var(--muted)] mt-1">of customers read review replies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--accent)]">&lt;30s</div>
            <div className="text-sm text-[var(--muted)] mt-1">average AI reply generation</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--accent)]">4.7→4.9</div>
            <div className="text-sm text-[var(--muted)] mt-1">avg rating improvement</div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-2">See it in action</h2>
        <p className="text-[var(--muted)] text-center mb-12">
          Click &quot;Generate Reply&quot; on any review below
        </p>

        <div className="space-y-6">
          {demoReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold">{review.author}</span>
                    <PlatformBadge platform={review.platform} />
                    <span className="text-xs text-[var(--muted)]">{review.date}</span>
                  </div>
                  <Stars count={review.rating} />
                </div>
              </div>
              <p className="text-neutral-300 mb-4">{review.text}</p>

              {!replies[review.id] && !loading[review.id] && (
                <button
                  onClick={() => generateReply(review.id)}
                  className="text-sm bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-4 py-2 rounded-lg transition font-medium"
                >
                  🧞 Generate AI Reply
                </button>
              )}

              {loading[review.id] && (
                <div className="flex items-center gap-2 text-[var(--muted)] text-sm">
                  <span className="animate-spin">⚙️</span> Crafting the perfect reply...
                </div>
              )}

              {replies[review.id] && (
                <div className="mt-4 bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                  <div className="text-xs text-[var(--accent)] font-medium mb-2">
                    🧞 AI-Generated Reply
                  </div>
                  <p className="text-neutral-300 text-sm">{replies[review.id]}</p>
                  <div className="mt-3 flex gap-3">
                    {!sent[review.id] ? (
                      <>
                        <button
                          onClick={() => sendReply(review.id)}
                          className="text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-md transition font-medium"
                        >
                          ✅ Approve &amp; Post
                        </button>
                        <button
                          onClick={() => generateReply(review.id)}
                          className="text-xs bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded-md transition font-medium"
                        >
                          🔄 Regenerate
                        </button>
                      </>
                    ) : (
                      <span className="text-xs text-green-400 font-medium">
                        ✅ Reply posted successfully!
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Simple pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--bg)]">
              <h3 className="font-semibold text-lg mb-1">Starter</h3>
              <div className="text-3xl font-bold mb-1">
                £29<span className="text-base font-normal text-[var(--muted)]">/mo</span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-6">For single-location businesses</p>
              <ul className="space-y-2 text-sm text-neutral-300 mb-6">
                <li>✓ 1 Google Business location</li>
                <li>✓ Up to 50 reviews/month</li>
                <li>✓ AI reply generation</li>
                <li>✓ One-click posting</li>
                <li>✓ Email notifications</li>
              </ul>
              <button className="w-full text-sm bg-neutral-800 hover:bg-neutral-700 text-white py-2 rounded-lg transition font-medium">
                Start Free Trial
              </button>
            </div>
            {/* Pro */}
            <div className="border-2 border-[var(--accent)] rounded-xl p-6 bg-[var(--bg)] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-[var(--accent)] text-white px-3 py-1 rounded-full font-medium">
                Most Popular
              </span>
              <h3 className="font-semibold text-lg mb-1">Pro</h3>
              <div className="text-3xl font-bold mb-1">
                £49<span className="text-base font-normal text-[var(--muted)]">/mo</span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-6">For growing businesses</p>
              <ul className="space-y-2 text-sm text-neutral-300 mb-6">
                <li>✓ Up to 5 locations</li>
                <li>✓ Unlimited reviews</li>
                <li>✓ Google + Yelp</li>
                <li>✓ Custom brand voice</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="w-full text-sm bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white py-2 rounded-lg transition font-medium">
                Start Free Trial
              </button>
            </div>
            {/* Agency */}
            <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--bg)]">
              <h3 className="font-semibold text-lg mb-1">Agency</h3>
              <div className="text-3xl font-bold mb-1">
                £149<span className="text-base font-normal text-[var(--muted)]">/mo</span>
              </div>
              <p className="text-sm text-[var(--muted)] mb-6">For agencies &amp; franchises</p>
              <ul className="space-y-2 text-sm text-neutral-300 mb-6">
                <li>✓ Unlimited locations</li>
                <li>✓ Unlimited reviews</li>
                <li>✓ All platforms</li>
                <li>✓ White-label option</li>
                <li>✓ API access</li>
                <li>✓ Dedicated account manager</li>
              </ul>
              <button className="w-full text-sm bg-neutral-800 hover:bg-neutral-700 text-white py-2 rounded-lg transition font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
        <p>© 2026 ReviewGenie · Built by <a href="https://bilabs.ai" className="text-[var(--accent)] hover:underline">bilabs.ai</a></p>
      </footer>
    </div>
  );
}
