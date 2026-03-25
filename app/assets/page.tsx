'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { AssetGrid } from '@/components/asset-grid'
import { UploadModal } from '@/components/upload-modal'
import { useAppStore } from '@/lib/store'
import { cn } from '@/lib/utils'

export default function AssetsPage() {
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
            <h1 className="text-3xl font-bold mb-2 text-balance">Assets</h1>
            <p className="text-muted-foreground">
              Browse and manage all 3D assets in your vault
            </p>
          </div>

          {/* Asset Grid */}
          <AssetGrid />
        </div>
      </main>
    </div>
  )
}
