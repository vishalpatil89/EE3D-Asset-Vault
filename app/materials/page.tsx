'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { AssetCard } from '@/components/asset-card'
import { FilterPanel } from '@/components/filter-panel'
import { useAppStore } from '@/lib/store'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Search } from 'lucide-react'

export default function MaterialsPage() {
  const assets = useAppStore(state => state.assets)
  const filters = useAppStore(state => state.filters)
  const searchQuery = filters.search || ''
  
  // Filter for materials only
  const materialAssets = assets.filter(asset => {
    const matchesCategory = asset.category === 'Materials'
    const matchesSearch = searchQuery === '' || 
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground">Materials</h1>
            <p className="text-muted-foreground mt-1">Browse and manage material assets</p>
          </div>

          <div className="space-y-6">
            <FilterPanel />

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{materialAssets.length}</span> materials
              </p>
            </div>

            {materialAssets.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {materialAssets.map(asset => (
                  <AssetCard key={asset.id} asset={asset} />
                ))}
              </div>
            ) : (
              <Empty className="py-16">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Search className="h-5 w-5" />
                  </EmptyMedia>
                  <EmptyTitle>No materials found</EmptyTitle>
                  <EmptyDescription>
                    Try adjusting your search terms or upload new materials
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
