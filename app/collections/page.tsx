'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FolderOpen, Plus, MoreHorizontal } from 'lucide-react'

const collections = [
  {
    name: 'Sports Car Pack',
    description: 'Complete sports car asset collection',
    assetCount: 48,
    lastUpdated: '2 days ago',
  },
  {
    name: 'Interior Materials',
    description: 'Leather, fabric, and trim materials',
    assetCount: 124,
    lastUpdated: '1 week ago',
  },
  {
    name: 'Wheel Collection',
    description: 'Various wheel and tire combinations',
    assetCount: 36,
    lastUpdated: '3 days ago',
  },
  {
    name: 'Environment HDRIs',
    description: 'Studio and outdoor lighting setups',
    assetCount: 28,
    lastUpdated: '5 days ago',
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">Collections</h1>
              <p className="text-muted-foreground mt-1">Organize assets into collections</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Collection
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Card key={collection.name} className="glass-card hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <FolderOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{collection.name}</CardTitle>
                      <CardDescription>{collection.description}</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{collection.assetCount} assets</Badge>
                    <span className="text-xs text-muted-foreground">Updated {collection.lastUpdated}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
