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
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground mt-1">Browse and manage your automotive 3D assets</p>
              </div>
              <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                <Upload className="h-4 w-4" />
                Upload Motorial
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card key={stat.title} className="border border-border/50 bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="h-5 w-5 text-blue-500" />
                      <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change} this month</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Browse Section */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Browse and manage your automotive 3D assets</p>
              
              {/* Featured Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="border border-border/50 overflow-hidden">
                  <div className="aspect-video bg-slate-200">
                    <img src="https://images.unsplash.com/photo-1609042231432-bed30f02d1d5?w=500&h=300&fit=crop" alt="3D Models" className="w-full h-full object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">3D Models</CardTitle>
                    <CardDescription className="text-xs">High-quality 3D vehicle parts and accessories</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-2xl font-bold">456</div>
                        <p className="text-xs text-muted-foreground mt-1">+8% this month</p>
                      </div>
                      <div className="flex gap-1">
                        <Badge variant="outline" className="text-xs bg-slate-100">FBX</Badge>
                        <Badge variant="outline" className="text-xs bg-slate-100">GLB</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 overflow-hidden">
                  <div className="aspect-video bg-slate-200">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" alt="Environments" className="w-full h-full object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Environments</CardTitle>
                    <CardDescription className="text-xs">HDR domes for realistic lighting setups</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-2xl font-bold">287</div>
                        <p className="text-xs text-muted-foreground mt-1">+20% this month</p>
                      </div>
                      <div className="flex gap-1">
                        <Badge variant="outline" className="text-xs bg-slate-100">4K</Badge>
                        <Badge variant="outline" className="text-xs bg-slate-100">8K</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 overflow-hidden">
                  <div className="aspect-video bg-slate-200">
                    <img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop" alt="Textures" className="w-full h-full object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Textures</CardTitle>
                    <CardDescription className="text-xs">High-resolution textures and surface details</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-2xl font-bold">512</div>
                        <p className="text-xs text-muted-foreground mt-1">+15% this month</p>
                      </div>
                      <div className="flex gap-1">
                        <Badge variant="outline" className="text-xs bg-slate-100">JPG</Badge>
                        <Badge variant="outline" className="text-xs bg-slate-100">EXR</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="border border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">3D Models</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold">456</div>
                      <p className="text-xs text-muted-foreground">+8% this month</p>
                    </div>
                    <p className="text-xs text-muted-foreground">High-quality 3D vehicle parts s</p>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline" className="text-xs">FBX</Badge>
                      <Badge variant="outline" className="text-xs">GLB</Badge>
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">4K</Badge>
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">8K</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Textures</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold">512</div>
                      <p className="text-xs text-muted-foreground">+15% this month</p>
                    </div>
                    <p className="text-xs text-muted-foreground">High-resolution textures and surface details</p>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline" className="text-xs">JPG</Badge>
                      <Badge variant="outline" className="text-xs">EXR</Badge>
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">4K</Badge>
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">8K</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Textures</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold">512</div>
                      <p className="text-xs text-muted-foreground">+15% this month</p>
                    </div>
                    <p className="text-xs text-muted-foreground">High-resolution textures and s</p>
                    <div className="flex gap-1 flex-wrap">
                      <Badge variant="outline" className="text-xs">JPG</Badge>
                      <Badge variant="outline" className="text-xs">EXR</Badge>
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">4K</Badge>
                      <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">8K</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 border-l border-border/50 bg-white flex-col pt-20 overflow-y-auto">
          <div className="p-6 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold text-foreground text-sm">Materials</h3>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                {featuredMaterials.map((material, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg">
                    <div className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden border border-border/50">
                      <img src={material.thumbnail} alt={material.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{material.name}</p>
                      <p className="text-xs text-green-600">{material.growth} this month</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-foreground">{material.count}</p>
                      <p className="text-xs text-muted-foreground">{material.format}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground text-sm">Tools</h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded text-orange-500 text-xs font-bold">●</div>
                    <span className="text-sm font-medium text-foreground">Blender</span>
                  </div>
                  <Badge className="bg-teal-100 text-teal-700 border-0 text-xs">Available</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-blue-500 text-white text-xs font-bold">M</div>
                    <span className="text-sm font-medium text-foreground">Maya</span>
                  </div>
                  <Badge className="bg-teal-100 text-teal-700 border-0 text-xs">Available</Badge>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
