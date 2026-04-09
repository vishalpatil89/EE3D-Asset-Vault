'use client'

import { useTheme } from '@/lib/theme-context'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Palette } from 'lucide-react'

const themes = [
  { id: 'cyan', name: 'Cyan Blue', color: '#00D9FF' },
  { id: 'red', name: 'Red', color: '#FF4D6D' },
  { id: 'orange', name: 'Orange', color: '#FF8C42' },
  { id: 'yellow', name: 'Yellow', color: '#FFD700' },
  { id: 'golden', name: 'Golden', color: '#FFB81C' },
]

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-glow rounded-lg"
        >
          <Palette className="h-4 w-4" />
          <span className="sr-only">Select theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 card-glow">
        <DropdownMenuLabel>Theme Colors</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.id}
            onClick={() => setTheme(themeOption.id as any)}
            className={`cursor-pointer ${theme === themeOption.id ? 'bg-primary/20' : ''}`}
          >
            <div className="flex items-center gap-3 w-full">
              <div
                className="w-4 h-4 rounded-full border-2 border-foreground/30"
                style={{ backgroundColor: themeOption.color }}
              />
              <span>{themeOption.name}</span>
              {theme === themeOption.id && (
                <span className="ml-auto text-primary">✓</span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
