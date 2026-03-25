import { Asset, Category, Notification, User } from './types'

export const currentUser: User = {
  id: '1',
  name: 'Jason Mills',
  email: 'jason.mills@ee3d.com',
  avatar: '/avatars/jason.jpg',
  role: 'Senior 3D Artist'
}

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'Asset Approved',
    message: 'Sport Tyre V2 has been approved by the team lead.',
    type: 'success',
    read: false,
    createdAt: '2024-04-24T10:30:00Z'
  },
  {
    id: '2',
    title: 'New Comment',
    message: 'Alex left a comment on Racing Wheel Pro.',
    type: 'info',
    read: false,
    createdAt: '2024-04-24T09:15:00Z'
  },
  {
    id: '3',
    title: 'Upload Complete',
    message: 'Carbon Fiber Material pack uploaded successfully.',
    type: 'success',
    read: true,
    createdAt: '2024-04-23T16:45:00Z'
  }
]

export const categories: Category[] = [
  { id: '1', name: '3D Models', icon: 'box', count: 245 },
  { id: '2', name: 'Textures', icon: 'image', count: 512 },
  { id: '3', name: 'Materials', icon: 'palette', count: 189 },
  { id: '4', name: 'HDRIs', icon: 'sun', count: 67 },
  { id: '5', name: 'References', icon: 'camera', count: 134 }
]

export const assets: Asset[] = [
  {
    id: '1',
    name: 'Sport Tyre V2',
    category: '3D Models',
    subcategory: 'Tyres',
    tags: ['tyre', 'exterior', 'automotive', 'generic'],
    description: 'OEM neutral tyre suitable for configurators.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Jason Mills',
    createdAt: '2024-04-24T10:00:00Z',
    updatedAt: '2024-04-24T10:00:00Z',
    version: '2.0',
    status: 'approved',
    department: 'EE 3D Division',
    resolution: '4K',
    polycount: {
      lod0: 180000,
      lod1: 45000,
      lod2: 12000
    },
    scale: 'Real-world',
    units: 'cm',
    textureResolution: 'P9R (44)',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO', 'Metallic'],
    files: [
      { id: '1', name: 'sport_tyre_v2.fbx', type: 'fbx', size: '25.8 MB', sizeBytes: 27052892, downloadUrl: '#' },
      { id: '2', name: 'turntable_preview.mp4', type: 'mp4', size: '3.7 MB', sizeBytes: 3880140, duration: '8 sec', downloadUrl: '#' },
      { id: '3', name: 'tyre_albedo_4k.png', type: 'png', size: '21.2 MB', sizeBytes: 22230630, downloadUrl: '#' },
      { id: '4', name: 'tyre_normal_4k.png', type: 'png', size: '14.4 MB', sizeBytes: 15099494, downloadUrl: '#' }
    ],
    isFavorite: true
  },
  {
    id: '2',
    name: 'Racing Wheel Pro',
    category: '3D Models',
    subcategory: 'Wheels',
    tags: ['wheel', 'racing', 'sports', 'premium'],
    description: 'High-performance racing wheel with detailed spokes.',
    thumbnail: '/assets/wheel-thumb.jpg',
    author: 'Sarah Chen',
    createdAt: '2024-04-22T14:30:00Z',
    updatedAt: '2024-04-23T09:15:00Z',
    version: '1.5',
    status: 'approved',
    department: 'EE 3D Division',
    resolution: '4K',
    polycount: {
      lod0: 250000,
      lod1: 65000,
      lod2: 18000
    },
    scale: 'Real-world',
    units: 'cm',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Metallic'],
    files: [
      { id: '1', name: 'racing_wheel_pro.fbx', type: 'fbx', size: '32.4 MB', sizeBytes: 33973862, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: '3',
    name: 'Carbon Fiber Material',
    category: 'Materials',
    subcategory: 'Composites',
    tags: ['carbon', 'fiber', 'premium', 'sports'],
    description: 'Realistic carbon fiber weave material for sports cars.',
    thumbnail: '/assets/carbon-thumb.jpg',
    author: 'Mike Johnson',
    createdAt: '2024-04-20T11:00:00Z',
    updatedAt: '2024-04-21T16:45:00Z',
    version: '3.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '8K',
    textureResolution: '8K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO'],
    files: [
      { id: '1', name: 'carbon_fiber_8k.sbsar', type: 'sbsar', size: '45.2 MB', sizeBytes: 47396044, downloadUrl: '#' }
    ],
    isFavorite: true
  },
  {
    id: '4',
    name: 'Leather Interior Set',
    category: 'Textures',
    subcategory: 'Interior',
    tags: ['leather', 'interior', 'seats', 'premium'],
    description: 'Complete leather texture set for automotive interiors.',
    thumbnail: '/assets/leather-thumb.jpg',
    author: 'Emma Wilson',
    createdAt: '2024-04-18T09:30:00Z',
    updatedAt: '2024-04-19T14:20:00Z',
    version: '2.1',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO', 'Height'],
    files: [
      { id: '1', name: 'leather_set_4k.zip', type: 'zip', size: '128.5 MB', sizeBytes: 134742016, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: '5',
    name: 'Headlight Assembly',
    category: '3D Models',
    subcategory: 'Lighting',
    tags: ['headlight', 'exterior', 'led', 'lighting'],
    description: 'Modern LED headlight assembly with detailed internals.',
    thumbnail: '/assets/headlight-thumb.jpg',
    author: 'David Park',
    createdAt: '2024-04-15T13:45:00Z',
    updatedAt: '2024-04-16T10:30:00Z',
    version: '1.0',
    status: 'pending',
    department: 'EE 3D Division',
    resolution: '4K',
    polycount: {
      lod0: 320000,
      lod1: 85000
    },
    scale: 'Real-world',
    units: 'mm',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Emissive'],
    files: [
      { id: '1', name: 'headlight_assembly.fbx', type: 'fbx', size: '48.7 MB', sizeBytes: 51066675, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: '6',
    name: 'Brake Caliper Sport',
    category: '3D Models',
    subcategory: 'Brakes',
    tags: ['brake', 'caliper', 'sports', 'performance'],
    description: 'High-performance brake caliper for sports vehicles.',
    thumbnail: '/assets/caliper-thumb.jpg',
    author: 'Jason Mills',
    createdAt: '2024-04-12T16:00:00Z',
    updatedAt: '2024-04-13T11:15:00Z',
    version: '1.2',
    status: 'approved',
    department: 'EE 3D Division',
    resolution: '4K',
    polycount: {
      lod0: 95000,
      lod1: 28000
    },
    scale: 'Real-world',
    units: 'mm',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Metallic'],
    files: [
      { id: '1', name: 'brake_caliper_sport.fbx', type: 'fbx', size: '18.3 MB', sizeBytes: 19188736, downloadUrl: '#' }
    ],
    isFavorite: true
  },
  {
    id: '7',
    name: 'Studio HDRI Pack',
    category: 'HDRIs',
    subcategory: 'Studio',
    tags: ['hdri', 'studio', 'lighting', 'environment'],
    description: 'Professional studio HDRI collection for product renders.',
    thumbnail: '/assets/hdri-thumb.jpg',
    author: 'Alex Turner',
    createdAt: '2024-04-10T08:30:00Z',
    updatedAt: '2024-04-10T08:30:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Lighting',
    resolution: '8K',
    files: [
      { id: '1', name: 'studio_hdri_pack.zip', type: 'zip', size: '2.1 GB', sizeBytes: 2254857830, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: '8',
    name: 'Exhaust System V3',
    category: '3D Models',
    subcategory: 'Exhaust',
    tags: ['exhaust', 'performance', 'sports', 'tuning'],
    description: 'Performance exhaust system with quad tips.',
    thumbnail: '/assets/exhaust-thumb.jpg',
    author: 'Sarah Chen',
    createdAt: '2024-04-08T15:20:00Z',
    updatedAt: '2024-04-09T12:45:00Z',
    version: '3.0',
    status: 'wip',
    department: 'EE 3D Division',
    resolution: '4K',
    polycount: {
      lod0: 145000,
      lod1: 42000
    },
    scale: 'Real-world',
    units: 'cm',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Metallic'],
    files: [
      { id: '1', name: 'exhaust_system_v3.fbx', type: 'fbx', size: '28.9 MB', sizeBytes: 30305894, downloadUrl: '#' }
    ],
    isFavorite: false
  }
]

export const allTags = [
  'tyre', 'exterior', 'automotive', 'generic', 'wheel', 'racing', 'sports', 
  'premium', 'carbon', 'fiber', 'leather', 'interior', 'seats', 'headlight',
  'led', 'lighting', 'brake', 'caliper', 'performance', 'hdri', 'studio',
  'environment', 'exhaust', 'tuning'
]

export const fileTypeIcons: Record<string, string> = {
  fbx: 'box',
  obj: 'box',
  max: 'box',
  blend: 'box',
  png: 'image',
  jpg: 'image',
  exr: 'image',
  hdr: 'sun',
  mp4: 'video',
  mov: 'video',
  sbsar: 'palette',
  zip: 'archive'
}
