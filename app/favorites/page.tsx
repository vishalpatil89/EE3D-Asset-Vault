'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { AssetCard } from '@/components/asset-card'
import { useAppStore } from '@/lib/store'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Heart } from 'lucide-react'

export default function FavoritesPage() {
  const assets = useAppStore(state => state.assets)
  
  // Filter for favorites only
  const favoriteAssets = assets.filter(asset => asset.isFavorite)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground">Favorites</h1>
            <p className="text-muted-foreground mt-1">Your favorited assets</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{favoriteAssets.length}</span> favorites
              </p>
            </div>

            {favoriteAssets.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoriteAssets.map(asset => (
                  <AssetCard key={asset.id} asset={asset} />
                ))}
              </div>
            ) : (
              <Empty className="py-16">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <Heart className="h-5 w-5" />
                  </EmptyMedia>
                  <EmptyTitle>No favorites yet</EmptyTitle>
                  <EmptyDescription>
                    Click the heart icon on assets to add them to your favorites
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
