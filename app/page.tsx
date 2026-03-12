import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <span className="text-2xl font-bold text-yellow-400">ReviewGenie ✨</span>
        <div className="flex gap-4">
          <Link href="/dashboard" className="text-gray-300 hover:text-white text-sm">Dashboard</Link>
          <Link href="/pricing" className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-300">Start Free</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto text-center px-6 py-24">
        <div className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-yellow-400/20">
          AI-powered review management
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Reply to every Google review<br />
          <span className="text-yellow-400">in one click.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          ReviewGenie reads your Google reviews and writes personalised, professional replies using AI. Approve with one click. Never miss a review again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing" className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition">
            Start Free — 10 reviews/month
          </Link>
          <Link href="/dashboard" className="border border-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 transition">
            View Demo →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        {[
          { icon: '🤖', title: 'AI-written replies', desc: 'GPT-4 writes personalised responses matching your brand tone in seconds.' },
          { icon: '⚡', title: 'One-click approve', desc: 'Review the suggestion, hit approve. Posted to Google instantly.' },
          { icon: '📊', title: 'Weekly digest', desc: 'Every Monday: new reviews, reply rate, star trend. One clean email.' },
        ].map((f) => (
          <div key={f.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing preview */}
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple pricing</h2>
        <p className="text-gray-400 mb-10">No contracts. Cancel anytime.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <p className="text-gray-400 text-sm mb-2">Free</p>
            <p className="text-4xl font-bold mb-4">£0<span className="text-lg text-gray-400">/mo</span></p>
            <p className="text-gray-400 text-sm mb-6">10 AI replies/month</p>
            <Link href="/dashboard" className="block border border-gray-600 text-white py-3 rounded-xl font-semibold hover:border-gray-400 transition">Get Started</Link>
          </div>
          <div className="bg-yellow-400 text-black rounded-2xl p-8">
            <p className="text-sm mb-2 font-semibold">Pro</p>
            <p className="text-4xl font-bold mb-4">£49<span className="text-lg">/mo</span></p>
            <p className="text-sm mb-6">Unlimited replies + weekly digest + white-label reports</p>
            <Link href="/pricing" className="block bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition">Upgrade to Pro</Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        ReviewGenie · by <a href="https://bilabs.ai" className="text-yellow-400 hover:underline">bilabs.ai</a>
      </footer>
    </main>
  )
}
