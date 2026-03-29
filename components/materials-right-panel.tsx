'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight, Check, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { Asset } from '@/lib/types'
import { cn } from '@/lib/utils'

interface MaterialsRightPanelProps {
  featuredMaterials: Asset[]
}

export function MaterialsRightPanel({ featuredMaterials }: MaterialsRightPanelProps) {
  const tools = [
    {
      id: 'blender',
      name: 'Blender',
      icon: '🎨',
      status: 'Available',
      statusColor: 'bg-emerald-50 text-emerald-700'
    },
    {
      id: 'maya',
      name: 'Maya',
      icon: 'M',
      status: 'Available',
      statusColor: 'bg-emerald-50 text-emerald-700'
    }
  ]

  return (
    <aside className="hidden xl:flex fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 border-l border-border/50 bg-card/50 glass-card flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto space-y-8 p-6">
        {/* Featured Materials Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">Featured Materials</h3>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>

          <div className="space-y-3">
            {featuredMaterials.slice(0, 3).map((material) => (
              <div
                key={material.id}
                className="group p-3 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  {/* Material Thumbnail */}
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 overflow-hidden border border-border/50">
                    <Image
                      src={material.thumbnail}
                      alt={material.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Material Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-foreground truncate">
                      {material.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {material.subcategory}
                    </p>

                    {/* Material Properties */}
                    {material.pbr && (
                      <div className="flex items-center gap-2 mt-2">
                        <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20">
                          {material.resolution || '4K'}
                        </div>
                        {material.pbr.metallic > 0.5 && (
                          <div className="text-xs bg-amber-100/50 text-amber-700 px-2 py-1 rounded border border-amber-200/50">
                            Metallic
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="flex-shrink-0">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-50 text-emerald-700 text-xs"
                    >
                      <Check className="h-3 w-3 mr-1" />
                      OK
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PBR Properties Guide */}
        <div className="border-t border-border/50 pt-6">
          <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
            Material Properties
          </h3>
          <div className="space-y-3">
            <div className="text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Metallic</span>
                <span className="font-semibold text-foreground">0.0 - 1.0</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-1/2" />
              </div>
            </div>

            <div className="text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Roughness</span>
                <span className="font-semibold text-foreground">0.0 - 1.0</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full w-3/4" />
              </div>
            </div>

            <div className="text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Specular</span>
                <span className="font-semibold text-foreground">0.0 - 1.0</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary/60 rounded-full w-2/3" />
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
              Compatible Tools
            </h3>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>

          <div className="space-y-2">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="p-3 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary">
                      {tool.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{tool.name}</p>
                      <p className={cn('text-xs font-medium px-2 py-0.5 rounded w-fit mt-1', tool.statusColor)}>
                        {tool.status}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 gap-1"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Options */}
        <div className="border-t border-border/50 pt-6">
          <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
            Export Formats
          </h3>
          <div className="flex flex-wrap gap-2">
            {['SBSAR', 'PNG', 'EXR', '8K', '4K'].map((format) => (
              <Badge
                key={format}
                variant="secondary"
                className="bg-secondary/50 hover:bg-secondary cursor-pointer transition-colors"
              >
                {format}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-border/50 p-4 bg-card/80">
        <Button className="w-full gradient-primary hover:gradient-primary-hover text-primary-foreground rounded-lg gap-2">
          <span>View All Materials</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  )
}
