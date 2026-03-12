import { Suspense } from 'react'
import DashboardClient from './DashboardClient'

export default function Dashboard() {
  return (
    <Suspense fallback={<div style={{ backgroundColor: '#0a0a0f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'sans-serif' }}>Loading...</div>}>
      <DashboardClient />
    </Suspense>
  )
}
