'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { AssetCard } from '@/components/asset-card'
import { FilterPanel } from '@/components/filter-panel'
import { MaterialsRightPanel } from '@/components/materials-right-panel'
import { useAppStore } from '@/lib/store'
import { materialAssets } from '@/lib/data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Upload, TrendingUp, ChevronRight, Palette, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface MaterialCategory {
  name: string
  subcategory: string
  count: number
  growth: number
  icon?: React.ReactNode
}

export default function MaterialsPage() {
  const filters = useAppStore(state => state.filters)
  const searchQuery = filters.search || ''
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  
  // Filter for materials only
  const filteredMaterials = materialAssets.filter(asset => {
    const matchesSearch = searchQuery === '' || 
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesSubcategory = !selectedSubcategory || asset.subcategory === selectedSubcategory
    return matchesSearch && matchesSubcategory
  })

  // Group materials by subcategory
  const materialsBySubcategory = materialAssets.reduce((acc, material) => {
    const sub = material.subcategory
    if (!acc[sub]) {
      acc[sub] = []
    }
    acc[sub].push(material)
    return acc
  }, {} as Record<string, typeof materialAssets>)

  // Calculate stats with icons
  const stats: MaterialCategory[] = [
    {
      name: 'Total Materials',
      subcategory: '',
      count: materialAssets.length,
      growth: 16,
      icon: <Palette className="h-5 w-5" />
    },
    {
      name: 'Car Paints',
      subcategory: 'Car Paints',
      count: materialsBySubcategory['Car Paints']?.length || 0,
      growth: 12
    },
    {
      name: 'Glass Materials',
      subcategory: 'Glass',
      count: materialsBySubcategory['Glass']?.length || 0,
      growth: 8
    },
    {
      name: 'Premium Materials',
      subcategory: 'Plastic',
      count: materialsBySubcategory['Plastic']?.length || 0,
      growth: 10
    }
  ]

  const categories = ['Car Paints', 'Glass', 'Plastic', 'Rubber', 'Metal', 'Leather']

  // Get featured materials (favorited ones)
  const featuredMaterials = materialAssets.filter(m => m.isFavorite).slice(0, 5)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-20 pb-12 px-8 ml-56 mr-80 xl:mr-80">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold text-foreground">Materials</h1>
                  <Badge variant="secondary" className="rounded-full">
                    {materialAssets.length} assets
                  </Badge>
                </div>
                <p className="text-base text-muted-foreground">
                  Browse, create and manage automotive PBR materials with advanced rendering properties
                </p>
              </div>
              <Button className="gap-2 gradient-primary hover:gradient-primary-hover text-primary-foreground rounded-xl glow-primary">
                <Upload className="h-4 w-4" />
                Upload Material
              </Button>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className={cn(
                    "p-6 cursor-pointer transition-all duration-300 border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 glass-card",
                    selectedSubcategory === stat.subcategory && "ring-2 ring-primary border-primary/50 bg-primary/5"
                  )}
                  onClick={() => setSelectedSubcategory(stat.subcategory === '' ? null : stat.subcategory)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn(
                      "p-2 rounded-lg",
                      selectedSubcategory === stat.subcategory ? "bg-primary/20" : "bg-accent/10"
                    )}>
                      {stat.icon || <Sparkles className="h-5 w-5 text-accent" />}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      <TrendingUp className="h-3 w-3" />
                      +{stat.growth}%
                    </div>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">{stat.name}</p>
                  <h3 className="text-3xl font-bold text-foreground">{stat.count}</h3>
                </Card>
              ))}
            </div>

            {/* Filters Section */}
            <div className="bg-card border border-border/50 rounded-2xl p-6 glass-card">
              <FilterPanel />
            </div>

            {/* Category Navigation Tabs */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 -mx-2 px-2">
              <Button
                variant={selectedSubcategory === null ? 'default' : 'outline'}
                size="sm"
                className="whitespace-nowrap rounded-full"
                onClick={() => setSelectedSubcategory(null)}
              >
                All Materials
                <Badge className="ml-2 bg-muted text-muted-foreground" variant="secondary">
                  {materialAssets.length}
                </Badge>
              </Button>
              {categories.map(cat => {
                const count = materialsBySubcategory[cat]?.length || 0
                return (
                  <Button
                    key={cat}
                    variant={selectedSubcategory === cat ? 'default' : 'outline'}
                    size="sm"
                    className="whitespace-nowrap rounded-full"
                    onClick={() => setSelectedSubcategory(cat)}
                  >
                    {cat}
                    <Badge className="ml-2 bg-muted text-muted-foreground" variant="secondary">
                      {count}
                    </Badge>
                  </Button>
                )
              })}
            </div>

            {/* Materials Content */}
            {filteredMaterials.length > 0 ? (
              <div className="space-y-12">
                {selectedSubcategory ? (
                  // Single category view
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                          <Sparkles className="h-6 w-6 text-primary" />
                          {selectedSubcategory} Materials
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          {filteredMaterials.length} materials available
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredMaterials.map(material => (
                        <AssetCard key={material.id} asset={material} />
                      ))}
                    </div>
                  </div>
                ) : (
                  // All categories view
                  categories.map(category => {
                    const categoryMaterials = filteredMaterials.filter(
                      m => m.subcategory === category
                    )
                    if (categoryMaterials.length === 0) return null

                    return (
                      <div key={category} className="border-b border-border/50 pb-12 last:border-0">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h2 className="text-2xl font-bold text-foreground">{category} Materials</h2>
                            <p className="text-sm text-muted-foreground mt-1">
                              {categoryMaterials.length} materials
                            </p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setSelectedSubcategory(category)}
                            className="gap-2 text-primary hover:text-primary/80"
                          >
                            View All
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {categoryMaterials.slice(0, 4).map(material => (
                            <AssetCard key={material.id} asset={material} />
                          ))}
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            ) : (
              <div className="text-center py-20">
                <Palette className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">No materials found</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </main>
        <MaterialsRightPanel featuredMaterials={featuredMaterials} />
      </div>
    </div>
  )
}
