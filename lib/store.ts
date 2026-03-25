'use client'

import { create } from 'zustand'
import { Asset, FilterState } from './types'
import { assets as initialAssets } from './data'

interface AppState {
  assets: Asset[]
  favorites: Set<string>
  sidebarCollapsed: boolean
  filters: FilterState
  selectedAsset: Asset | null
  uploadModalOpen: boolean
  
  // Actions
  setAssets: (assets: Asset[]) => void
  toggleFavorite: (assetId: string) => void
  setSidebarCollapsed: (collapsed: boolean) => void
  setFilters: (filters: Partial<FilterState>) => void
  resetFilters: () => void
  setSelectedAsset: (asset: Asset | null) => void
  setUploadModalOpen: (open: boolean) => void
  getFilteredAssets: () => Asset[]
}

const defaultFilters: FilterState = {
  search: '',
  category: '',
  tags: [],
  resolution: [],
  polycountRange: [0, 500000],
  fileTypes: [],
  sortBy: 'latest'
}

export const useAppStore = create<AppState>((set, get) => ({
  assets: initialAssets,
  favorites: new Set(initialAssets.filter(a => a.isFavorite).map(a => a.id)),
  sidebarCollapsed: false,
  filters: defaultFilters,
  selectedAsset: null,
  uploadModalOpen: false,
  
  setAssets: (assets) => set({ assets }),
  
  toggleFavorite: (assetId) => set((state) => {
    const newFavorites = new Set(state.favorites)
    if (newFavorites.has(assetId)) {
      newFavorites.delete(assetId)
    } else {
      newFavorites.add(assetId)
    }
    return { 
      favorites: newFavorites,
      assets: state.assets.map(a => 
        a.id === assetId ? { ...a, isFavorite: newFavorites.has(assetId) } : a
      )
    }
  }),
  
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  
  setFilters: (filters) => set((state) => ({
    filters: { ...state.filters, ...filters }
  })),
  
  resetFilters: () => set({ filters: defaultFilters }),
  
  setSelectedAsset: (asset) => set({ selectedAsset: asset }),
  
  setUploadModalOpen: (open) => set({ uploadModalOpen: open }),
  
  getFilteredAssets: () => {
    const { assets, filters, favorites } = get()
    
    return assets.filter(asset => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch = 
          asset.name.toLowerCase().includes(searchLower) ||
          asset.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          asset.category.toLowerCase().includes(searchLower) ||
          asset.description.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }
      
      // Category filter
      if (filters.category && asset.category !== filters.category) {
        return false
      }
      
      // Tags filter
      if (filters.tags.length > 0) {
        const hasTag = filters.tags.some(tag => asset.tags.includes(tag))
        if (!hasTag) return false
      }
      
      // Resolution filter
      if (filters.resolution.length > 0 && asset.resolution) {
        if (!filters.resolution.includes(asset.resolution)) return false
      }
      
      // File types filter
      if (filters.fileTypes.length > 0) {
        const assetFileTypes = asset.files.map(f => f.type)
        const hasFileType = filters.fileTypes.some(ft => assetFileTypes.includes(ft))
        if (!hasFileType) return false
      }
      
      return true
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'latest':
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        case 'popular':
          return (favorites.has(b.id) ? 1 : 0) - (favorites.has(a.id) ? 1 : 0)
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })
  }
}))
