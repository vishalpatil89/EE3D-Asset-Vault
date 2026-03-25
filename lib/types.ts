export interface Asset {
  id: string
  name: string
  category: string
  subcategory: string
  tags: string[]
  description: string
  thumbnail: string
  preview?: string
  author: string
  createdAt: string
  updatedAt: string
  version: string
  status: 'approved' | 'pending' | 'wip'
  department: string
  resolution?: '2K' | '4K' | '8K'
  polycount?: {
    lod0?: number
    lod1?: number
    lod2?: number
  }
  scale?: string
  units?: string
  textureResolution?: string
  maps?: string[]
  files: AssetFile[]
  isFavorite?: boolean
}

export interface AssetFile {
  id: string
  name: string
  type: string
  size: string
  sizeBytes: number
  duration?: string
  downloadUrl: string
}

export interface Category {
  id: string
  name: string
  icon: string
  count: number
}

export interface FilterState {
  search: string
  category: string
  tags: string[]
  resolution: string[]
  polycountRange: [number, number]
  fileTypes: string[]
  sortBy: 'latest' | 'popular' | 'name'
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: string
}

export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: string
}
