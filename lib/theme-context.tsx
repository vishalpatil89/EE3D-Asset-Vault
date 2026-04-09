'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type ThemeType = 'cyan' | 'red' | 'orange' | 'yellow' | 'golden'

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('cyan')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('app-theme') as ThemeType | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const handleSetTheme = (newTheme: ThemeType) => {
    setTheme(newTheme)
    localStorage.setItem('app-theme', newTheme)
    applyTheme(newTheme)
  }

  const applyTheme = (selectedTheme: ThemeType) => {
    const html = document.documentElement
    
    // Remove all theme classes
    html.classList.remove('theme-cyan', 'theme-red', 'theme-orange', 'theme-yellow', 'theme-golden')
    
    // Add the selected theme class
    if (selectedTheme !== 'cyan') {
      html.classList.add(`theme-${selectedTheme}`)
    }
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
