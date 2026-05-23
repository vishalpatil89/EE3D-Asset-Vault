'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, 
  Lock, 
  ChevronDown, 
  Bell,
  Eye,
  Download,
  Share2,
  Heart,
  Play,
  Volume2,
  MoreHorizontal,
  File,
  Video,
  Image as ImageIcon,
  Settings,
  CheckCircle,
  Users,
  Droplet
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { UploadModal } from '@/components/upload-modal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAppStore } from '@/lib/store'
import { materialAssets } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function MaterialDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const sidebarCollapsed = useAppStore(state => state.sidebarCollapsed)
  const { toggleFavorite, favorites } = useAppStore()
  const [activeTab, setActiveTab] = useState('overview')
  
  const material = materialAssets.find(m => m.id === id)
  const isFavorite = material ? favorites.has(material.id) : false

  if (!material) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <Sidebar />
        <main className={cn(
          "pt-20 pb-8 px-6 transition-all duration-300",
          sidebarCollapsed ? "ml-16" : "ml-56"
        )}>
          <div className="max-w-7xl mx-auto">
            <p>Material not found</p>
          </div>
        </main>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getFileIcon = (type: string) => {
    if (['mp4', 'mov', 'webm'].includes(type)) return Video
    if (['png', 'jpg', 'jpeg', 'exr', 'hdr', 'tga'].includes(type)) return ImageIcon
    return File
  }

  const pbr = material.pbr || {}

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Sidebar />
      <UploadModal />
      
      <main className={cn(
        "pt-20 pb-8 px-6 transition-all duration-300",
        sidebarCollapsed ? "ml-16" : "ml-56"
      )}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/materials" className="hover:text-foreground transition-colors">
                  {material.category}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{material.subcategory}</span>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{material.name}</h1>
                <Badge variant="outline" className="gap-1">
                  <Lock className="h-3 w-3" />
                  L ses
                </Badge>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {material.author} - Ast moit update: {formatDate(material.updatedAt)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-4 w-4" />
              </Button>
              <Button className="gradient-primary text-primary-foreground rounded-xl gap-2 glow-primary">
                <Download className="h-4 w-4" />
                Upload
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="glass-card p-1 h-auto">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground rounded-lg px-4"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="files"
                className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground rounded-lg px-4"
              >
                Files
              </TabsTrigger>
              <TabsTrigger 
                value="history"
                className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground rounded-lg px-4"
              >
                Version History
              </TabsTrigger>
              <TabsTrigger 
                value="properties"
                className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground rounded-lg px-4"
              >
                Properties
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Preview */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Main Preview */}
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-border/30 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium">Basic Info</span>
                    </div>
                    <div className="relative aspect-video bg-muted/30">
                      <img
                        src={material.thumbnail}
                        alt={material.name}
                        className="w-full h-full object-cover"
                      />
                      {/* LOD Labels */}
                      <div className="absolute right-4 top-1/3 glass px-3 py-1 rounded-lg text-sm font-medium">
                        LOD1
                      </div>
                      <div className="absolute right-4 bottom-1/4 glass px-3 py-1 rounded-lg text-sm font-medium">
                        LOD2
                      </div>
                      {/* Controls */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <Button size="sm" variant="secondary" className="glass h-8 w-8 p-0">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="glass h-8 gap-1.5">
                          <Volume2 className="h-3.5 w-3.5" />
                          4K
                        </Button>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="p-4 flex items-center gap-3">
                      <Button variant="outline" className="gap-2 rounded-xl glass-card">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        View 3D
                      </Button>
                      <Button variant="outline" className="gap-2 rounded-xl glass-card">
                        <Download className="h-4 w-4" />
                        Download
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="gap-2 rounded-xl glass-card">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                      <Button variant="ghost" size="icon" className="ml-auto">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Material Preview - PBR Properties */}
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="p-4 border-b border-border/30 flex items-center gap-2">
                      <Droplet className="h-4 w-4" />
                      <span className="font-medium">Material Properties</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {/* Color Preview */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Base Color</p>
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-12 h-12 rounded-lg border border-border/50 shadow-sm" 
                              style={{ backgroundColor: pbr.baseColor || '#ffffff' }}
                            />
                            <p className="font-mono text-sm">{pbr.baseColor || 'N/A'}</p>
                          </div>
                        </div>
                      </div>

                      {/* PBR Properties */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground mb-2">PBR Values</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">Metallic:</span>
                              <span className="font-medium">{(pbr.metallic || 0).toFixed(2)}</span>
                            </div>
                            <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary/70 rounded-full"
                                style={{ width: `${((pbr.metallic || 0) * 100)}%` }}
                              />
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">Roughness:</span>
                              <span className="font-medium">{(pbr.roughness || 0).toFixed(2)}</span>
                            </div>
                            <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary/70 rounded-full"
                                style={{ width: `${((pbr.roughness || 0) * 100)}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Properties */}
                    <div className="p-4 border-t border-border/30 grid grid-cols-4 gap-3">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">Specular</p>
                        <p className="font-semibold text-sm">{(pbr.specular || 0).toFixed(2)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">Clear Coat</p>
                        <p className="font-semibold text-sm">{(pbr.clearCoat || 0).toFixed(2)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">CC Roughness</p>
                        <p className="font-semibold text-sm">{(pbr.clearCoatRoughness || 0).toFixed(2)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">Resolution</p>
                        <p className="font-semibold text-sm">{material.resolution || 'N/A'}</p>
                      </div>
                    </div>
                    
                    {/* Bottom Actions */}
                    <div className="p-4 border-t border-border/30 flex items-center gap-3">
                      <Button variant="outline" className="gap-2 rounded-xl glass-card">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        View 3D
                      </Button>
                      <Button variant="outline" className="gap-2 rounded-xl glass-card">
                        <Download className="h-4 w-4" />
                        Download
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="gap-2 rounded-xl glass-card">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                      <Button 
                        variant={isFavorite ? "default" : "outline"}
                        className={cn(
                          "gap-2 rounded-xl",
                          isFavorite ? "gradient-primary text-primary-foreground" : "glass-card"
                        )}
                        onClick={() => toggleFavorite(material.id)}
                      >
                        <Heart className="h-4 w-4" />
                        Favorite
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Info Cards */}
                <div className="space-y-4">
                  {/* Basic Info */}
                  <InfoCard title="Basic Info">
                    <InfoRow label="Name" value={material.name} />
                    <InfoRow label="Category" value={material.category} />
                    <InfoRow label="Subcategory" value={material.subcategory} />
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground">Tags:</span>
                      <div className="flex flex-wrap gap-1">
                        {material.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <InfoRow label="Description" value={material.description} />
                  </InfoCard>

                  {/* Technical Details & Material Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="Technical Details" icon={<Settings className="h-4 w-4" />}>
                      <div className="space-y-2 text-sm">
                        <InfoRow label="Resolution" value={material.resolution || 'N/A'} small />
                        <InfoRow label="Texture Res" value={material.textureResolution || 'N/A'} small />
                        <InfoRow label="Scale" value={material.scale || 'Real-world'} small />
                        <InfoRow label="Units" value={material.units || 'cm'} small />
                      </div>
                    </InfoCard>
                    
                    <InfoCard title="Material Info" icon={<CheckCircle className="h-4 w-4" />}>
                      <div className="space-y-2 text-sm">
                        <InfoRow label="Texture Res" value={material.textureResolution || 'N/A'} small />
                        <div>
                          <span className="text-muted-foreground text-xs">Maps Included</span>
                          <div className="flex gap-1 mt-1 flex-wrap">
                            {material.maps?.slice(0, 4).map((m, i) => (
                              <span key={i} className="px-2 py-1 rounded bg-primary/20 text-xs">
                                {m.substring(0, 2)}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {material.maps?.slice(0, 5).map((map, i) => (
                            <Badge key={i} variant="outline" className="text-[10px]">
                              {map.substring(0, 3)}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </InfoCard>
                  </div>

                  {/* Files & Metadata */}
                  <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="Files" icon={<File className="h-4 w-4" />}>
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="text-muted-foreground">Main File:</span>
                          <p className="font-medium truncate">{material.files[0]?.name}</p>
                        </div>
                        {material.files.slice(1, 3).map(file => (
                          <div key={file.id} className="flex items-center justify-between">
                            <span className="truncate flex-1">{file.name.substring(0, 20)}</span>
                            <span className="text-muted-foreground ml-2">{file.size}</span>
                          </div>
                        ))}
                        <p className="text-muted-foreground">
                          +{Math.max(0, material.files.length - 3)} Files
                        </p>
                      </div>
                    </InfoCard>
                    
                    <InfoCard title="Metadata">
                      <div className="space-y-2 text-xs">
                        <InfoRow label="Created By" value={material.author} small />
                        <InfoRow label="Created Date" value={formatDate(material.createdAt)} small />
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge 
                            variant={material.status === 'approved' ? 'default' : 'secondary'}
                            className={cn(
                              "text-xs",
                              material.status === 'approved' && "bg-green-500/20 text-green-600 border-green-500/30"
                            )}
                          >
                            {material.status.charAt(0).toUpperCase() + material.status.slice(1)}
                          </Badge>
                        </div>
                        <InfoRow label="Department" value={material.department} small />
                      </div>
                    </InfoCard>
                  </div>

                  {/* Version History */}
                  <InfoCard title="Version History">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map(i => (
                          <Avatar key={i} className="h-8 w-8 border-2 border-background">
                            <AvatarFallback className="text-xs gradient-primary text-primary-foreground">
                              {String.fromCharCode(64 + i)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">v{material.version}</span>
                    </div>
                  </InfoCard>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="files" className="mt-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-4">All Files</h3>
                <div className="space-y-3">
                  {material.files.map(file => {
                    const FileIcon = getFileIcon(file.type)
                    return (
                      <div key={file.id} className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {file.type.toUpperCase()} - {file.size}
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2"
                          onClick={() => window.location.href = file.downloadUrl || '#'}
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Version History</h3>
                <div className="space-y-4">
                  {[
                    { version: '1.2', note: 'Enhanced PBR properties and added new texture maps', author: 'Sarah Chen', date: material.updatedAt },
                    { version: '1.1', note: 'Improved material reflections and clarity', author: 'Mike Johnson', date: '2024-04-20T10:00:00Z' },
                    { version: '1.0', note: 'Initial material release', author: 'David Park', date: material.createdAt }
                  ].map((v, i) => (
                    <div key={i} className="flex items-start gap-3 pb-4 border-b border-border/30 last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        v{v.version}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Version {v.version}</p>
                        <p className="text-sm text-muted-foreground">{v.note}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {v.author} - {formatDate(v.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="properties" className="mt-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Material Properties</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground">Name</label>
                      <p className="font-medium">{material.name}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Category</label>
                      <p className="font-medium">{material.category}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Subcategory</label>
                      <p className="font-medium">{material.subcategory}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Description</label>
                      <p className="font-medium">{material.description}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground">Author</label>
                      <p className="font-medium">{material.author}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Department</label>
                      <p className="font-medium">{material.department}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Status</label>
                      <Badge 
                        className={cn(
                          material.status === 'approved' && "bg-green-500/20 text-green-600"
                        )}
                      >
                        {material.status}
                      </Badge>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Version</label>
                      <p className="font-medium">{material.version}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function InfoCard({ 
  title, 
  icon,
  children 
}: { 
  title: string
  icon?: React.ReactNode
  children: React.ReactNode 
}) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-border/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium text-sm">{title}</span>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <MoreHorizontal className="h-3.5 w-3.5" />
        </Button>
      </div>
      <div className="p-4 space-y-2">
        {children}
      </div>
    </div>
  )
}

function InfoRow({ 
  label, 
  value,
  small = false
}: { 
  label: string
  value: string
  small?: boolean
}) {
  return (
    <div className={cn("flex items-start justify-between gap-2", small && "text-xs")}>
      <span className="text-muted-foreground">{label}:</span>
      <span className={cn("font-medium text-right", small ? "text-xs" : "text-sm")}>{value}</span>
    </div>
  )
}
