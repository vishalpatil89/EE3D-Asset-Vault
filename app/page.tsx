'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { AssetGrid } from '@/components/asset-grid'
import { UploadModal } from '@/components/upload-modal'
import { useAppStore } from '@/lib/store'
import { cn } from '@/lib/utils'

export default function Dashboard() {
  const sidebarCollapsed = useAppStore(state => state.sidebarCollapsed)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      <UploadModal />
      
      <main className={cn(
        "pt-20 pb-8 px-6 transition-all duration-300",
        sidebarCollapsed ? "ml-16" : "ml-56"
      )}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-balance">Dashboard</h1>
            <p className="text-muted-foreground">
              Browse and manage your automotive 3D assets
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard
              title="Total Assets"
              value="1,234"
              change="+12% this month"
              color="primary"
            />
            <StatsCard
              title="3D Models"
              value="456"
              change="+8% this month"
              color="accent"
            />
            <StatsCard
              title="Textures"
              value="512"
              change="+15% this month"
              color="primary"
            />
            <StatsCard
              title="Materials"
              value="189"
              change="+5% this month"
              color="accent"
            />
          </div>

          {/* Asset Grid */}
          <AssetGrid />
        </div>
      </main>
    </div>
  )
}

function StatsCard({ 
  title, 
  value, 
  change,
  color
}: { 
  title: string
  value: string
  change: string
  color: 'primary' | 'accent'
}) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className={cn(
          "w-2 h-2 rounded-full",
          color === 'primary' ? "bg-primary" : "bg-accent"
        )} />
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-xs text-muted-foreground">{change}</p>
    </div>
  )
}
