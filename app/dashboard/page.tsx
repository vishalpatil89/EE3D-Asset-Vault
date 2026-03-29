'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAppStore } from '@/lib/store'
import { materialAssets } from '@/lib/data'
import { Layers, FileImage, Palette, Box, TrendingUp, Upload, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function DashboardPage() {
  const assets = useAppStore(state => state.assets)
  
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

  const featuredMaterials = materialAssets.filter(m => m.isFavorite).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-20 pb-12 px-8 ml-56">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="flex items-start justify-between border-b border-border/50 pb-8">
              <div>
                <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
                <p className="text-base text-muted-foreground mt-2">Browse and manage your automotive 3D assets</p>
              </div>
              <Button className="gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                <Upload className="h-4 w-4" />
                Upload Motorial
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((stat) => (
                <Card key={stat.title} className="border border-border/50 hover:border-blue-400/50 transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <stat.icon className="h-4 w-4 text-blue-500" />
                          <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                        {stat.change}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Browse Section */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Browse and manage your automotive 3D assets</p>
              
              {/* Featured Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {/* 3D Models Card */}
                <Card className="border border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1609042231432-bed30f02d1d5?w=500&h=300&fit=crop"
                      alt="3D Models"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">3D Models</CardTitle>
                        <CardDescription>High-quality 3D vehicle parts and accessories</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">456</div>
                        <p className="text-xs text-green-600">+8% this month</p>
                      </div>
                      <div className="flex gap-1 flex-wrap justify-end">
                        <Badge variant="outline" className="bg-slate-100">FBX</Badge>
                        <Badge variant="outline" className="bg-slate-100">GLB</Badge>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">4K</Badge>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">8K</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Environments Card */}
                <Card className="border border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop"
                      alt="Environments"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">Environments</CardTitle>
                        <CardDescription>HDR domes for realistic lighting setups</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">287</div>
                        <p className="text-xs text-green-600">+20% this month</p>
                      </div>
                      <div className="flex gap-1 flex-wrap justify-end">
                        <Badge variant="outline" className="bg-slate-100">HDR</Badge>
                        <Badge variant="outline" className="bg-slate-100">EXR</Badge>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">4K</Badge>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">8K</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Textures Card */}
                <Card className="border border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop"
                      alt="Textures"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">Textures</CardTitle>
                        <CardDescription>High-resolution textures and surface details</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">512</div>
                        <p className="text-xs text-green-600">+15% this month</p>
                      </div>
                      <div className="flex gap-1 flex-wrap justify-end">
                        <Badge variant="outline" className="bg-slate-100">JPG</Badge>
                        <Badge variant="outline" className="bg-slate-100">EXR</Badge>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">4K</Badge>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">8K</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-3 gap-4">
                {/* 3D Models Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground">3D Models</h3>
                  </div>
                  <Card className="border border-border/50">
                    <CardContent className="pt-6">
                      <p className="text-2xl font-bold">456</p>
                      <p className="text-sm text-muted-foreground mt-1">+8% this month</p>
                      <p className="text-xs text-muted-foreground mt-3">High-quality 3D vehicle parts s</p>
                      <div className="flex gap-1 mt-3 flex-wrap">
                        <Badge variant="outline" className="text-xs">FBX</Badge>
                        <Badge variant="outline" className="text-xs">GLB</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">4K</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">8K</Badge>
                      </div>
                      <Button variant="ghost" className="w-full mt-4 justify-center text-blue-500 hover:text-blue-600">
                        <Box className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Textures Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground">Textures</h3>
                  </div>
                  <Card className="border border-border/50">
                    <CardContent className="pt-6">
                      <p className="text-2xl font-bold">512</p>
                      <p className="text-sm text-muted-foreground mt-1">+15% this month</p>
                      <p className="text-xs text-muted-foreground mt-3">High-resolution textures and surface details</p>
                      <div className="flex gap-1 mt-3 flex-wrap">
                        <Badge variant="outline" className="text-xs">JPG</Badge>
                        <Badge variant="outline" className="text-xs">EXR</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">4K</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">8K</Badge>
                      </div>
                      <Button variant="ghost" className="w-full mt-4 justify-center text-blue-500 hover:text-blue-600">
                        <FileImage className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Textures Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground">Textures</h3>
                  </div>
                  <Card className="border border-border/50">
                    <CardContent className="pt-6">
                      <p className="text-2xl font-bold">512</p>
                      <p className="text-sm text-muted-foreground mt-1">+15% this month</p>
                      <p className="text-xs text-muted-foreground mt-3">High-resolution textures and s</p>
                      <div className="flex gap-1 mt-3 flex-wrap">
                        <Badge variant="outline" className="text-xs">JPG</Badge>
                        <Badge variant="outline" className="text-xs">EXR</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">4K</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-700">8K</Badge>
                      </div>
                      <Button variant="ghost" className="w-full mt-4 justify-center text-blue-500 hover:text-blue-600">
                        <FileImage className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:flex w-80 border-l border-border/50 bg-card flex-col overflow-y-auto pt-20">
          <div className="p-6 space-y-6 flex-1">
            {/* Materials Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Palette className="h-4 w-4 text-blue-500" />
                  Materials
                </h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                {featuredMaterials.map((material) => (
                  <div key={material.id} className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex-shrink-0 overflow-hidden">
                      <img src={material.thumbnail} alt={material.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{material.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {material.files?.length || 0} files
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-foreground">
                        {materialAssets.filter(m => m.subcategory === material.subcategory).length}
                      </p>
                      <p className="text-xs text-green-600">+{['12', '8', '10'][materialAssets.findIndex(m => m.id === material.id) % 3]}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div className="border-t border-border/50 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Tools</h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                  <div className="flex items-center gap-2">
                    <img src="https://www.blender.org/wp-content/uploads/2019/03/blender-favicon-192.png" alt="Blender" className="w-6 h-6" />
                    <span className="font-medium text-sm text-foreground">Blender</span>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-0">Available</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent rounded-lg">
                  <div className="flex items-center gap-2">
                    <img src="https://www.autodesk.com/favicon.ico" alt="Maya" className="w-6 h-6" />
                    <span className="font-medium text-sm text-foreground">Maya</span>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-0">Available</Badge>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
