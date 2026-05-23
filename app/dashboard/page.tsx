'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Layers, FileImage, Palette, Box, Upload, ChevronRight } from 'lucide-react'

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

  const featuredMaterials = [
    { name: 'Car Paint', count: 198, growth: '+5%', thumbnail: '/materials/clear-glass.jpg', format: '8K' },
    { name: 'Glass', count: 87, growth: '+8%', thumbnail: '/materials/blue-tinted-glass.jpg', format: 'PNG' },
    { name: 'Carbon Fiber', count: 92, growth: '+11%', thumbnail: '/materials/plastic-grain.jpg', format: '8K' }
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
              <h2 className="text-lg font-semibold text-foreground">Featured Collections</h2>
              
              {/* Featured Cards */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="glass-card border-border/30 overflow-hidden group hover:border-cyan-500/50 transition-all glow-accent">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/40 to-cyan-900/40 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1609042231432-bed30f02d1d5?w=500&h=300&fit=crop" alt="3D Models" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-cyan-500/80 rounded-lg text-xs font-medium text-background">NEW</div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-foreground">3D Models</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">High-quality 3D vehicle parts and accessories</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-2xl font-bold text-foreground">456</div>
                        <p className="text-xs text-cyan-400 mt-1">+8% this month</p>
                      </div>
                      <div className="flex gap-1">
                        <Badge className="text-xs bg-purple-500/30 text-purple-300 border-purple-500/50">FBX</Badge>
                        <Badge className="text-xs bg-purple-500/30 text-purple-300 border-purple-500/50">GLB</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/30 overflow-hidden group hover:border-cyan-500/50 transition-all glow-accent">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/40 to-cyan-900/40 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" alt="Environments" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-foreground">Environments</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">HDR domes for realistic lighting setups</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-2xl font-bold text-foreground">287</div>
                        <p className="text-xs text-cyan-400 mt-1">+20% this month</p>
                      </div>
                      <div className="flex gap-1">
                        <Badge className="text-xs bg-cyan-500/30 text-cyan-300 border-cyan-500/50">4K</Badge>
                        <Badge className="text-xs bg-cyan-500/30 text-cyan-300 border-cyan-500/50">8K</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/30 overflow-hidden group hover:border-cyan-500/50 transition-all glow-accent">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/40 to-cyan-900/40 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop" alt="Textures" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base text-foreground">Textures</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">High-resolution textures and surface details</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-2xl font-bold text-foreground">512</div>
                        <p className="text-xs text-cyan-400 mt-1">+15% this month</p>
                      </div>
                      <div className="flex gap-1">
                        <Badge className="text-xs bg-purple-500/30 text-purple-300 border-purple-500/50">JPG</Badge>
                        <Badge className="text-xs bg-purple-500/30 text-purple-300 border-purple-500/50">EXR</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 glass border-l border-border/30 flex flex-col pt-20 overflow-y-auto">
          <div className="p-6 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-purple-500/20">
                    <Palette className="h-4 w-4 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">Featured Materials</h3>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                {featuredMaterials.map((material, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 hover:bg-purple-500/10 rounded-lg transition-colors">
                    <div className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden border border-purple-500/30">
                      <img src={material.thumbnail} alt={material.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{material.name}</p>
                      <p className="text-xs text-cyan-400">{material.growth} this month</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-foreground">{material.count}</p>
                      <p className="text-xs text-muted-foreground">{material.format}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border/30 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground text-sm">Tools</h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 glass rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-orange-500 text-xs font-bold" />
                    <span className="text-sm font-medium text-foreground">Blender</span>
                  </div>
                  <Badge className="bg-cyan-500/30 text-cyan-300 border-cyan-500/50 text-xs">Available</Badge>
                </div>
                <div className="flex items-center justify-between p-3 glass rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-purple-600 text-white text-xs font-bold">M</div>
                    <span className="text-sm font-medium text-foreground">Maya</span>
                  </div>
                  <Badge className="bg-purple-500/30 text-purple-300 border-purple-500/50 text-xs">Available</Badge>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
