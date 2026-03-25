'use client'

import { useAppStore } from '@/lib/store'
import { AssetCard } from '@/components/asset-card'
import { FilterPanel } from '@/components/filter-panel'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Search } from 'lucide-react'

export function AssetGrid() {
  const getFilteredAssets = useAppStore(state => state.getFilteredAssets)
  const filteredAssets = getFilteredAssets()

  return (
    <div className="space-y-6">
      {/* Filters */}
      <FilterPanel />

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filteredAssets.length}</span> assets
        </p>
      </div>

      {/* Grid */}
      {filteredAssets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAssets.map(asset => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      ) : (
        <Empty className="py-16">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search className="h-5 w-5" />
            </EmptyMedia>
            <EmptyTitle>No assets found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your filters or search terms
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}
    </div>
  )
}
