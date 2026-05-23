'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Layers, FileImage, Palette, Box, Upload } from 'lucide-react'

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Assets',
      value: '1,234',
      change: '+12%',
      icon: Layers,
    },
    {
      title: '3D Models',
      value: '456',
      change: '+8%',
      icon: Box,
    },
    {
      title: 'Environments',
      value: '287',
      change: '+20%',
      icon: FileImage,
    },
    {
      title: 'Materials',
      value: '189',
      change: '+5%',
      icon: Palette,
    },
  ]

  const dashboardItems = [
    { name: 'Assets', thumbnail: '/thumbnails/assets.jpg', description: 'Browse all your 3D assets' },
    { name: 'Textures', thumbnail: '/thumbnails/textures.jpg', description: 'Texture library and details' },
    { name: 'Materials', thumbnail: '/thumbnails/materials.jpg', description: 'Material definitions and properties' },
    { name: 'Tools', thumbnail: '/thumbnails/tools.jpg', description: 'Utility tools and helpers' },
    { name: 'Collections', thumbnail: '/thumbnails/collections.jpg', description: 'Organized asset collections' },
    { name: 'Documentation', thumbnail: '/thumbnails/documentation.jpg', description: 'Guides and documentation' },
    { name: 'Favorites', thumbnail: '/thumbnails/favorites.jpg', description: 'Your favorite items' },
    { name: 'Activity', thumbnail: '/thumbnails/activity.jpg', description: 'Recent activity and updates' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-20 pb-12 px-8 ml-56 mr-80">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Dashboard</h1>
                <p className="text-sm text-muted-foreground mt-2">Browse and manage your automotive 3D assets</p>
              </div>
              <Button className="gap-2 gradient-primary glow-primary text-primary-foreground rounded-xl hover:gradient-primary-hover">
                <Upload className="h-4 w-4" />
                Upload Material
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.title} className="glass-card border-border/30 glow-primary hover:border-purple-500/50 transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-purple-500/20">
                        <stat.icon className="h-4 w-4 text-purple-400" />
                      </div>
                      <CardTitle className="text-xs font-medium text-muted-foreground">{stat.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <p className="text-xs text-cyan-400 mt-2">{stat.change} this month</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Browse Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-foreground">Browse</h2>
              
              {/* Dashboard Items Grid */}
              <div className="grid grid-cols-4 gap-4">
                {dashboardItems.map((item) => (
                  <Card key={item.name} className="glass-card border-border/30 overflow-hidden group hover:border-cyan-500/50 transition-all glow-accent cursor-pointer">
                    <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-cyan-900/40 relative overflow-hidden">
                      <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-base text-foreground">{item.name}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground">{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 glass border-l border-border/30 flex flex-col pt-20 overflow-y-auto">
          <div className="p-6">
            <div className="text-center text-muted-foreground text-sm">
              <p>Ready to explore more?</p>
              <p className="mt-2 text-xs">Select any category from the main dashboard to get started.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
