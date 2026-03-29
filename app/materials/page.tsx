'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { AssetCard } from '@/components/asset-card'
import { FilterPanel } from '@/components/filter-panel'
import { useAppStore } from '@/lib/store'
import { materialAssets } from '@/lib/data'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Upload, TrendingUp } from 'lucide-react'
import { useState } from 'react'

interface MaterialCategory {
  name: string
  subcategory: string
  count: number
  growth: number
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

  // Calculate stats
  const stats: MaterialCategory[] = [
    {
      name: 'Total Materials',
      subcategory: '',
      count: materialAssets.length,
      growth: 16
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
      name: 'Plastics',
      subcategory: 'Plastic',
      count: materialsBySubcategory['Plastic']?.length || 0,
      growth: 10
    }
  ]

  const categories = ['Car Paints', 'Glass', 'Plastic', 'Rubber', 'Metal', 'Leather']

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-20 pb-8 px-6 ml-56">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-balance">Materials</h1>
                <p className="text-muted-foreground">
                  Browse, create and manage automotive PBR materials
                </p>
              </div>
              <Button className="gap-2">
                <Upload className="h-4 w-4" />
                Upload Material
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className={cn(
                    "p-6 cursor-pointer transition-all duration-300",
                    selectedSubcategory === stat.subcategory && "ring-2 ring-primary bg-primary/5"
                  )}
                  onClick={() => setSelectedSubcategory(stat.subcategory === '' ? null : stat.subcategory)}
                >
                  <p className="text-sm text-muted-foreground mb-2">{stat.name}</p>
                  <div className="flex items-end justify-between">
                    <h3 className="text-3xl font-bold">{stat.count}</h3>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>+{stat.growth}%</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Filters */}
            <div className="mb-6">
              <FilterPanel />
            </div>

            {/* Category Tabs */}
            <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
              <Button
                variant={selectedSubcategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedSubcategory(null)}
              >
                All Materials ({materialAssets.length})
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedSubcategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSubcategory(cat)}
                >
                  {cat} ({materialsBySubcategory[cat]?.length || 0})
                </Button>
              ))}
            </div>

            {/* Materials Grid */}
            {filteredMaterials.length > 0 ? (
              <div className="space-y-12">
                {selectedSubcategory ? (
                  // Show single category
                  <div>
                    <h2 className="text-xl font-bold mb-4">{selectedSubcategory} Materials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredMaterials.map(material => (
                        <AssetCard key={material.id} asset={material} />
                      ))}
                    </div>
                  </div>
                ) : (
                  // Show all categories
                  categories.map(category => {
                    const categoryMaterials = filteredMaterials.filter(
                      m => m.subcategory === category
                    )
                    if (categoryMaterials.length === 0) return null

                    return (
                      <div key={category}>
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-xl font-bold">{category} Materials</h2>
                          <p className="text-sm text-muted-foreground">
                            Showing {categoryMaterials.length} materials
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {categoryMaterials.map(material => (
                            <AssetCard key={material.id} asset={material} />
                          ))}
                        </div>
                      </div>
                    )
                  })
                )}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No materials found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
