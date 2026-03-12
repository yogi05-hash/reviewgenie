import Link from 'next/link'

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold text-yellow-400">ReviewGenie ✨</Link>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, honest pricing</h1>
        <p className="text-gray-400 mb-14">Start free. Upgrade when you're ready.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left">
            <p className="text-gray-400 text-sm mb-2">Free</p>
            <p className="text-4xl font-bold mb-1">£0</p>
            <p className="text-gray-500 text-sm mb-6">forever</p>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li>✓ 10 AI replies/month</li>
              <li>✓ 1 business location</li>
              <li>✓ Dashboard access</li>
              <li className="text-gray-600">✗ Weekly digest</li>
              <li className="text-gray-600">✗ White-label reports</li>
            </ul>
            <Link href="/dashboard" className="block border border-gray-700 text-center py-3 rounded-xl font-semibold hover:border-gray-500 transition">
              Get Started
            </Link>
          </div>

          {/* Pro */}
          <div className="bg-yellow-400 text-black rounded-2xl p-8 text-left relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
            <p className="text-sm font-semibold mb-2">Pro</p>
            <p className="text-4xl font-bold mb-1">£49</p>
            <p className="text-sm mb-6 opacity-70">per month</p>
            <ul className="space-y-3 text-sm mb-8">
              <li>✓ Unlimited AI replies</li>
              <li>✓ 3 business locations</li>
              <li>✓ Weekly digest email</li>
              <li>✓ White-label PDF reports</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="block w-full bg-black text-white text-center py-3 rounded-xl font-bold hover:bg-gray-900 transition">
              Start Pro — £49/mo
            </button>
          </div>

          {/* Agency */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left">
            <p className="text-gray-400 text-sm mb-2">Agency</p>
            <p className="text-4xl font-bold mb-1">£149</p>
            <p className="text-gray-500 text-sm mb-6">per month</p>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li>✓ Everything in Pro</li>
              <li>✓ 10 client seats</li>
              <li>✓ Client portal</li>
              <li>✓ Branded dashboard</li>
              <li>✓ Dedicated support</li>
            </ul>
            <Link href="mailto:hello@bilabs.ai" className="block border border-gray-700 text-center py-3 rounded-xl font-semibold hover:border-gray-500 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
