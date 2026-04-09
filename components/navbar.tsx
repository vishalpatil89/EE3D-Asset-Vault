'use client'

import { useState } from 'react'
import { Search, Bell, Upload, ChevronDown, Settings, LogOut, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { useAppStore } from '@/lib/store'
import { currentUser, notifications } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ThemeSelector } from '@/components/theme-selector'

export function Navbar() {
  const { filters, setFilters, setUploadModalOpen } = useAppStore()
  const [searchFocused, setSearchFocused] = useState(false)
  
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 glass border-b border-border/50">
      <div className="flex items-center justify-between h-full px-4 gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-[200px]">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-primary-foreground/80 rounded-sm" />
                <div className="w-2 h-2 bg-primary-foreground/80 rounded-sm" />
                <div className="w-2 h-2 bg-primary-foreground/80 rounded-sm" />
                <div className="w-2 h-2 bg-primary-foreground/80 rounded-sm" />
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-primary-foreground/80 rounded-sm" />
                <div className="w-2 h-2 bg-primary-foreground/80 rounded-sm" />
                <div className="w-2 h-2 bg-primary-foreground/80 rounded-sm" />
                <div className="w-2 h-2 bg-primary-foreground/80 rounded-sm" />
              </div>
            </div>
          </div>
          <span className="font-semibold text-lg text-foreground">AutoAsset Vault</span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className={cn(
            "relative transition-all duration-200",
            searchFocused && "scale-[1.02]"
          )}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search vault..."
              value={filters.search}
              onChange={(e) => setFilters({ search: e.target.value })}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className={cn(
                "pl-10 pr-4 h-10 glass-card border-border/30 rounded-xl",
                "focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
                "placeholder:text-muted-foreground/60"
              )}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Selector */}
          <ThemeSelector />

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 relative">
                <Bell className="h-4 w-4" />
                {unreadCount > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs gradient-primary text-primary-foreground border-0"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 glass-card">
              <div className="px-3 py-2 border-b border-border/50">
                <h4 className="font-semibold">Notifications</h4>
              </div>
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 p-3">
                  <div className="flex items-center gap-2 w-full">
                    <span className="font-medium text-sm">{notification.title}</span>
                    {!notification.read && (
                      <span className="w-2 h-2 rounded-full bg-primary ml-auto" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{notification.message}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search icon button */}
          <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
            <Search className="h-4 w-4" />
          </Button>

          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full h-9 px-2 gap-2">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback className="text-xs gradient-primary text-primary-foreground">
                    {currentUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass-card">
              <div className="px-3 py-2 border-b border-border/50">
                <p className="font-medium">{currentUser.name}</p>
                <p className="text-xs text-muted-foreground">{currentUser.email}</p>
              </div>
              <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Upload button */}
          <Button 
            onClick={() => setUploadModalOpen(true)}
            className="gradient-primary hover:gradient-primary-hover text-primary-foreground rounded-xl gap-2 glow-primary"
          >
            <Upload className="h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>
    </header>
  )
}
