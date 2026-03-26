'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutDashboard,
  Box,
  Palette,
  Layers,
  Wrench,
  FolderOpen,
  FileText,
  Heart,
  Activity,
  Search,
  SlidersHorizontal,
  ChevronRight,
  Star
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAppStore } from '@/lib/store'
import { Button } from '@/components/ui/button'

const mainNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Box, label: 'Assets', href: '/assets' },
  { icon: Palette, label: 'Textures', href: '/textures' },
  { icon: Layers, label: 'Materials', href: '/materials' },
  { icon: Wrench, label: 'Tools', href: '/tools' },
  { icon: FolderOpen, label: 'Collections', href: '/collections' },
  { icon: FileText, label: 'Documentation', href: '/documentation' },
  { icon: Heart, label: 'Favorites', href: '/favorites' },
  { icon: Activity, label: 'Activity', href: '/activity' },
]

const bottomNavItems = [
  { icon: Search, label: 'Search', href: '/search' },
  { icon: SlidersHorizontal, label: 'Advanced Filters', href: '/filters' },
]

const favoritesItems = [
  { icon: Star, label: 'Favorites', href: '/favorites' },
]

const activityItems = [
  { icon: Activity, label: 'Activity', href: '/activity' },
]

export function Sidebar() {
  const pathname = usePathname()
  const { sidebarCollapsed, setSidebarCollapsed } = useAppStore()

  return (
    <aside 
      className={cn(
        "fixed left-0 top-16 bottom-0 z-40 glass border-r border-border/30",
        "transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "w-16" : "w-56"
      )}
    >
      <div className="flex flex-col h-full py-4">
        {/* Main Navigation */}
        <nav className="flex-1 px-2 space-y-1">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href))
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl",
                  "transition-all duration-200 group relative",
                  isActive 
                    ? "bg-primary/10 text-primary glow-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 flex-shrink-0",
                  isActive && "text-primary"
                )} />
                {!sidebarCollapsed && (
                  <span className={cn(
                    "font-medium text-sm transition-opacity duration-200",
                    sidebarCollapsed && "opacity-0"
                  )}>
                    {item.label}
                  </span>
                )}
                {isActive && !sidebarCollapsed && (
                  <ChevronRight className="h-4 w-4 ml-auto text-primary" />
                )}
                {/* Tooltip for collapsed state */}
                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                    {item.label}
                  </div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Divider */}
        <div className="mx-4 my-2 border-t border-border/30" />

        {/* Bottom Navigation */}
        <nav className="px-2 space-y-1">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl",
                  "transition-all duration-200 group relative",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!sidebarCollapsed && (
                  <>
                    <span className="font-medium text-sm">{item.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
                  </>
                )}
                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                    {item.label}
                  </div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Divider */}
        <div className="mx-4 my-2 border-t border-border/30" />

        {/* Favorites Section */}
        <nav className="px-2 space-y-1">
          {favoritesItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl",
                "transition-all duration-200 group relative",
                "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!sidebarCollapsed && (
                <>
                  <span className="font-medium text-sm">{item.label}</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Activity Section */}
        <nav className="px-2 space-y-1 mb-2">
          {activityItems.map((item) => (
            <Link
              key={`activity-${item.href}`}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl",
                "transition-all duration-200 group relative",
                "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!sidebarCollapsed && (
                <>
                  <span className="font-medium text-sm">{item.label}</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
                </>
              )}
            </Link>
          ))}
        </nav>

        {/* Search button at bottom */}
        <div className="px-2 mt-auto">
          <Button
            variant="ghost"
            size={sidebarCollapsed ? "icon" : "default"}
            className={cn(
              "w-full rounded-xl justify-start gap-3",
              sidebarCollapsed && "justify-center px-0"
            )}
          >
            <Search className="h-5 w-5" />
            {!sidebarCollapsed && <span className="font-medium text-sm">Search</span>}
          </Button>
        </div>
      </div>
    </aside>
  )
}
