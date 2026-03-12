'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/dashboard')
  }

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", sans-serif', backgroundColor: '#0a0a0f', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff', marginBottom: '40px' }}>
        <span style={{ fontSize: '22px' }}>✨</span>
        <span style={{ fontSize: '18px', fontWeight: 700 }}>ReviewGenie</span>
      </Link>

      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '40px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.5px' }}>Welcome back</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '32px' }}>Sign in to your ReviewGenie account</p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '6px' }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@company.com"
              style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px 14px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '6px' }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px 14px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
          </div>

          {error && <p style={{ color: '#f87171', fontSize: '13px', margin: 0 }}>{error}</p>}

          <button type="submit" disabled={loading}
            style={{ backgroundColor: '#fff', color: '#0a0a0f', border: 'none', padding: '12px', borderRadius: '9px', fontSize: '14px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, marginTop: '4px' }}>
            {loading ? 'Signing in...' : 'Sign in →'}
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '24px' }}>
          No account? <Link href="/signup" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 500 }}>Sign up free</Link>
        </p>
      </div>
    </div>
  )
}
