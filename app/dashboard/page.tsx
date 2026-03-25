'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppStore } from '@/lib/store'
import { Layers, FileImage, Palette, Box, TrendingUp, Users, Clock, HardDrive } from 'lucide-react'

export default function DashboardPage() {
  const assets = useAppStore(state => state.assets)
  
  const stats = [
    {
      title: 'Total Assets',
      value: assets.length.toString(),
      change: '+12%',
      icon: Layers,
    },
    {
      title: '3D Models',
      value: assets.filter(a => a.category === '3D Models').length.toString(),
      change: '+8%',
      icon: Box,
    },
    {
      title: 'Textures',
      value: assets.filter(a => a.category === 'Textures').length.toString(),
      change: '+15%',
      icon: FileImage,
    },
    {
      title: 'Materials',
      value: assets.filter(a => a.category === 'Materials').length.toString(),
      change: '+5%',
      icon: Palette,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Overview of your asset vault</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <CardTitle className="text-base">Team Activity</CardTitle>
                </div>
                <CardDescription>Active contributors this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <CardTitle className="text-base">Pending Review</CardTitle>
                </div>
                <CardDescription>Assets awaiting approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">7</div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <HardDrive className="h-4 w-4 text-primary" />
                  <CardTitle className="text-base">Storage Used</CardTitle>
                </div>
                <CardDescription>Of 500 GB allocated</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">247 GB</div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
