'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, Download, Heart, Box, Image as ImageIcon, Palette, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Asset } from '@/lib/types'
import { useAppStore } from '@/lib/store'
import { cn } from '@/lib/utils'

interface AssetCardProps {
  asset: Asset
}

const categoryIcons: Record<string, typeof Box> = {
  '3D Models': Box,
  'Textures': ImageIcon,
  'Materials': Palette,
  'HDRIs': Sun
}

export function AssetCard({ asset }: AssetCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { toggleFavorite, favorites } = useAppStore()
  const isFavorite = favorites.has(asset.id)
  
  const CategoryIcon = categoryIcons[asset.category] || Box

  const formatPolycount = (count?: number) => {
    if (!count) return null
    if (count >= 1000) return `${(count / 1000).toFixed(0)}K`
    return count.toString()
  }

  // Determine the correct detail page based on category
  const getDetailPath = () => {
    if (asset.category === 'Materials') {
      return `/materials/${asset.id}`
    }
    return `/assets/${asset.id}`
  }

  const detailPath = getDetailPath()

  return (
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        "glass-card transition-all duration-300",
        isHovered && "scale-[1.02] shadow-lg glow-primary"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="aspect-[4/3] relative overflow-hidden bg-muted/30">
        {asset.thumbnail ? (
          <img
            src={asset.thumbnail}
            alt={asset.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <CategoryIcon className="h-16 w-16 text-muted-foreground/30" />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent",
          "flex flex-col justify-end p-4",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <div className="flex items-center gap-2">
            <Link href={detailPath}>
              <Button size="sm" variant="secondary" className="glass gap-2">
                <Eye className="h-3.5 w-3.5" />
                View
              </Button>
            </Link>
            <Button size="sm" variant="secondary" className="glass gap-2">
              <Download className="h-3.5 w-3.5" />
              Download
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className={cn(
                "glass h-8 w-8 ml-auto",
                isFavorite && "bg-primary/20 text-primary"
              )}
              onClick={(e) => {
                e.preventDefault()
                toggleFavorite(asset.id)
              }}
            >
              <Heart className={cn("h-3.5 w-3.5", isFavorite && "fill-current")} />
            </Button>
          </div>
        </div>

        {/* Resolution badge */}
        {asset.resolution && (
          <Badge 
            className="absolute top-3 right-3 gradient-primary text-primary-foreground border-0 text-xs"
          >
            {asset.resolution}
          </Badge>
        )}

        {/* Status badge */}
        {asset.status !== 'approved' && (
          <Badge 
            variant={asset.status === 'pending' ? 'secondary' : 'outline'}
            className="absolute top-3 left-3 text-xs"
          >
            {asset.status === 'pending' ? 'Pending' : 'WIP'}
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <Link href={detailPath}>
          <h3 className="font-semibold text-sm mb-1 truncate hover:text-primary transition-colors">
            {asset.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Badge variant="outline" className="text-xs py-0">
            {asset.category}
          </Badge>
          {asset.polycount?.lod0 && (
            <span>{formatPolycount(asset.polycount.lod0)} polys</span>
          )}
        </div>
        
        {/* File types */}
        <div className="flex items-center gap-1.5">
          {Array.from(new Set(asset.files.map(f => f.type))).slice(0, 4).map(type => (
            <Badge 
              key={type} 
              variant="secondary" 
              className="text-[10px] uppercase py-0 px-1.5"
            >
              {type}
            </Badge>
          ))}
          {asset.files.length > 4 && (
            <span className="text-xs text-muted-foreground">
              +{asset.files.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
