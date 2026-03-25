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
  Users
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { UploadModal } from '@/components/upload-modal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAppStore } from '@/lib/store'
import { assets } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function AssetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const sidebarCollapsed = useAppStore(state => state.sidebarCollapsed)
  const { toggleFavorite, favorites } = useAppStore()
  const [activeTab, setActiveTab] = useState('overview')
  
  const asset = assets.find(a => a.id === id)
  const isFavorite = asset ? favorites.has(asset.id) : false

  if (!asset) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <Sidebar />
        <main className={cn(
          "pt-20 pb-8 px-6 transition-all duration-300",
          sidebarCollapsed ? "ml-16" : "ml-56"
        )}>
          <div className="max-w-7xl mx-auto">
            <p>Asset not found</p>
          </div>
        </main>
      </div>
    )
  }

  const formatPolycount = (count?: number) => {
    if (!count) return 'N/A'
    if (count >= 1000) return `${(count / 1000).toFixed(0)}K`
    return count.toString()
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
                <Link href="/" className="hover:text-foreground transition-colors">
                  {asset.category}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{asset.subcategory}</span>
              </div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{asset.name}</h1>
                <Badge variant="outline" className="gap-1">
                  <Lock className="h-3 w-3" />
                  L ses
                </Badge>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {asset.author} - Ast moit update: {formatDate(asset.updatedAt)}
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
                        src={asset.thumbnail}
                        alt={asset.name}
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

                  {/* Turntable Preview */}
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {/* Video Preview */}
                      <div className="relative aspect-video bg-muted/50 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full bg-gradient-to-br from-muted/80 to-muted/40 flex items-center justify-center">
                            <div className="text-center">
                              <Play className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                              <p className="text-xs text-muted-foreground">Turntable Preview</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 flex items-center gap-2">
                          <Button size="sm" variant="secondary" className="glass h-6 w-6 p-0">
                            <Play className="h-3 w-3" />
                          </Button>
                          <span className="text-xs glass px-2 py-0.5 rounded">4set</span>
                        </div>
                        <span className="absolute bottom-2 right-2 text-xs glass px-2 py-0.5 rounded">0 Secs</span>
                      </div>
                      
                      {/* File List */}
                      <div className="space-y-2">
                        {asset.files.slice(0, 3).map((file) => {
                          const FileIcon = getFileIcon(file.type)
                          return (
                            <div key={file.id} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
                              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                                <FileIcon className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{file.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {file.duration ? `${file.duration}, ` : ''}{file.size}
                                </p>
                              </div>
                              <Button variant="ghost" size="icon" className="h-7 w-7">
                                <Download className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          )
                        })}
                        {asset.files.length > 3 && (
                          <p className="text-xs text-muted-foreground text-center py-2">
                            +{asset.files.length - 3} Supported Files EXR / PNG
                          </p>
                        )}
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
                        onClick={() => toggleFavorite(asset.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Favorite
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Column - Info Cards */}
                <div className="space-y-4">
                  {/* Basic Info */}
                  <InfoCard title="Basic Info">
                    <InfoRow label="Name" value={asset.name} />
                    <InfoRow label="Category" value={asset.category} />
                    <InfoRow label="Subcategory" value={asset.subcategory} />
                    <div className="space-y-1">
                      <span className="text-xs text-muted-foreground">Tags:</span>
                      <div className="flex flex-wrap gap-1">
                        {asset.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <InfoRow label="Description" value={asset.description} />
                  </InfoCard>

                  {/* Technical Details & Material Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="Technical Details" icon={<Settings className="h-4 w-4" />}>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Polycount.</span>
                          <div className="mt-1 space-y-0.5">
                            <p>LOD0: {formatPolycount(asset.polycount?.lod0)}</p>
                            <p>LOD1: {formatPolycount(asset.polycount?.lod1)}</p>
                          </div>
                        </div>
                        <InfoRow label="Scale" value={asset.scale || 'N/A'} small />
                        <InfoRow label="Units" value={asset.units || 'N/A'} small />
                        <InfoRow label="Tire size" value="245/40ZR19" small />
                      </div>
                    </InfoCard>
                    
                    <InfoCard title="Material Info" icon={<CheckCircle className="h-4 w-4" />}>
                      <div className="space-y-2 text-sm">
                        <InfoRow label="Texture Resolution" value={asset.textureResolution || 'N/A'} small />
                        <div>
                          <span className="text-muted-foreground text-xs">Maps Included</span>
                          <div className="flex gap-1 mt-1">
                            {['BC', 'N', 'R'].map(m => (
                              <span key={m} className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-xs">
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {asset.maps?.slice(0, 4).map(map => (
                            <Badge key={map} variant="outline" className="text-[10px]">
                              {map}
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
                          <p className="font-medium truncate">{asset.files[0]?.name}</p>
                        </div>
                        {asset.files.slice(1, 3).map(file => (
                          <div key={file.id} className="flex items-center justify-between">
                            <span className="truncate flex-1">{file.name}</span>
                            <span className="text-muted-foreground ml-2">{file.size}</span>
                          </div>
                        ))}
                        <p className="text-muted-foreground">
                          +{Math.max(0, asset.files.length - 3)} Supported Files EXR / PNG
                        </p>
                      </div>
                    </InfoCard>
                    
                    <InfoCard title="Metadata">
                      <div className="space-y-2 text-xs">
                        <InfoRow label="Created By" value={asset.author} small />
                        <InfoRow label="Created Date" value={formatDate(asset.createdAt)} small />
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge 
                            variant={asset.status === 'approved' ? 'default' : 'secondary'}
                            className={cn(
                              "text-xs",
                              asset.status === 'approved' && "bg-green-500/20 text-green-600 border-green-500/30"
                            )}
                          >
                            {asset.status.charAt(0).toUpperCase() + asset.status.slice(1)}
                          </Badge>
                        </div>
                        <InfoRow label="Department" value={asset.department} small />
                      </div>
                    </InfoCard>
                  </div>

                  {/* Version History */}
                  <InfoCard title="Version History">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Avatar key={i} className="h-8 w-8 border-2 border-background">
                            <AvatarFallback className="text-xs gradient-primary text-primary-foreground">
                              {String.fromCharCode(64 + i)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">+12</span>
                    </div>
                  </InfoCard>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="files" className="mt-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-4">All Files</h3>
                <div className="space-y-3">
                  {asset.files.map(file => {
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
                        <Button variant="outline" className="gap-2">
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
                    { version: '2.0', date: asset.updatedAt, author: asset.author, note: 'Updated textures and LOD levels' },
                    { version: '1.5', date: '2024-04-20T10:00:00Z', author: asset.author, note: 'Fixed UV mapping issues' },
                    { version: '1.0', date: asset.createdAt, author: asset.author, note: 'Initial release' }
                  ].map((v, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
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
                <h3 className="font-semibold mb-4">Asset Properties</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground">Name</label>
                      <p className="font-medium">{asset.name}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Category</label>
                      <p className="font-medium">{asset.category}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Subcategory</label>
                      <p className="font-medium">{asset.subcategory}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Description</label>
                      <p className="font-medium">{asset.description}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground">Author</label>
                      <p className="font-medium">{asset.author}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Department</label>
                      <p className="font-medium">{asset.department}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Status</label>
                      <Badge 
                        className={cn(
                          asset.status === 'approved' && "bg-green-500/20 text-green-600"
                        )}
                      >
                        {asset.status}
                      </Badge>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Version</label>
                      <p className="font-medium">{asset.version}</p>
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
