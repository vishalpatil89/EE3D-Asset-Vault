'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wrench, FileCode, Palette, Layers, RefreshCw, FileCheck } from 'lucide-react'

const tools = [
  {
    name: 'Batch Converter',
    description: 'Convert multiple assets between formats at once',
    icon: RefreshCw,
  },
  {
    name: 'Material Editor',
    description: 'Edit and preview material properties',
    icon: Palette,
  },
  {
    name: 'LOD Generator',
    description: 'Automatically generate LOD levels for 3D models',
    icon: Layers,
  },
  {
    name: 'UV Checker',
    description: 'Validate UV mapping on 3D models',
    icon: FileCheck,
  },
  {
    name: 'Script Runner',
    description: 'Execute custom automation scripts',
    icon: FileCode,
  },
  {
    name: 'Asset Validator',
    description: 'Check assets against project standards',
    icon: Wrench,
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground">Tools</h1>
            <p className="text-muted-foreground mt-1">Productivity tools for asset management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.name} className="glass-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{tool.description}</CardDescription>
                  <Button variant="outline" className="w-full">
                    Launch Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
