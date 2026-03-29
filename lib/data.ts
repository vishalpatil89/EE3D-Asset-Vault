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
  'environment', 'exhaust', 'tuning', 'paint', 'metallic', 'pearl', 'matte',
  'tinted', 'frosted', 'laminated', 'hard plastic', 'soft touch', 'textured',
  'piano black', 'tire rubber', 'soft rubber', 'chrome', 'brushed', 'anodized',
  'cloth', 'alcantara', 'emissive'
]

// Material assets with PBR properties
export const materialAssets: Asset[] = [
  // Car Paints
  {
    id: 'm1',
    name: 'Metallic Blue Paint',
    category: 'Materials',
    subcategory: 'Car Paints',
    tags: ['paint', 'metallic', 'automotive', 'premium'],
    description: 'Premium metallic blue automotive paint with realistic flakes.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Mike Johnson',
    createdAt: '2024-04-20T10:00:00Z',
    updatedAt: '2024-04-24T10:00:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '8K',
    textureResolution: '8K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Metallic', 'AO'],
    pbr: {
      baseColor: '#1a3a52',
      metallic: 0.8,
      roughness: 0.15,
      specular: 0.5,
      clearCoat: 0.9,
      clearCoatRoughness: 0.1
    },
    files: [
      { id: '1', name: 'metallic_blue_paint.sbsar', type: 'sbsar', size: '12.3 MB', sizeBytes: 12901376, downloadUrl: '#' },
      { id: '2', name: 'paint_albedo_8k.png', type: 'png', size: '18.5 MB', sizeBytes: 19398656, downloadUrl: '#' },
      { id: '3', name: 'paint_normal_8k.png', type: 'png', size: '16.2 MB', sizeBytes: 16986112, downloadUrl: '#' }
    ],
    isFavorite: true
  },
  {
    id: 'm2',
    name: 'Pearl White Paint',
    category: 'Materials',
    subcategory: 'Car Paints',
    tags: ['paint', 'pearl', 'automotive', 'premium'],
    description: 'Luxurious pearl white finish with multi-layer coating simulation.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Sarah Chen',
    createdAt: '2024-04-18T14:30:00Z',
    updatedAt: '2024-04-22T09:15:00Z',
    version: '1.2',
    status: 'approved',
    department: 'EE Materials',
    resolution: '8K',
    textureResolution: '8K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO'],
    pbr: {
      baseColor: '#f5f5f5',
      metallic: 0.2,
      roughness: 0.18,
      specular: 0.6,
      clearCoat: 1.0,
      clearCoatRoughness: 0.08
    },
    files: [
      { id: '1', name: 'pearl_white_paint.sbsar', type: 'sbsar', size: '11.8 MB', sizeBytes: 12373504, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm3',
    name: 'Matte Black Paint',
    category: 'Materials',
    subcategory: 'Car Paints',
    tags: ['paint', 'matte', 'automotive', 'sports'],
    description: 'Sleek matte black automotive paint without clear coat.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'David Park',
    createdAt: '2024-04-16T11:45:00Z',
    updatedAt: '2024-04-21T16:20:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness'],
    pbr: {
      baseColor: '#0a0a0a',
      metallic: 0.0,
      roughness: 0.85,
      specular: 0.3,
      clearCoat: 0.0,
      clearCoatRoughness: 1.0
    },
    files: [
      { id: '1', name: 'matte_black_paint.sbsar', type: 'sbsar', size: '9.5 MB', sizeBytes: 9961472, downloadUrl: '#' }
    ],
    isFavorite: false
  },

  // Glass Materials
  {
    id: 'm4',
    name: 'Clear Glass',
    category: 'Materials',
    subcategory: 'Glass',
    tags: ['glass', 'clear', 'transparent', 'automotive'],
    description: 'Transparent automotive glass with minimal reflection.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Emma Wilson',
    createdAt: '2024-04-14T13:00:00Z',
    updatedAt: '2024-04-23T10:30:00Z',
    version: '2.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal'],
    pbr: {
      baseColor: '#e8f4f8',
      metallic: 0.0,
      roughness: 0.05,
      specular: 0.9,
      clearCoat: 0.0,
      transmission: 1.0,
      ior: 1.52
    },
    files: [
      { id: '1', name: 'clear_glass.sbsar', type: 'sbsar', size: '6.2 MB', sizeBytes: 6498304, downloadUrl: '#' }
    ],
    isFavorite: true
  },
  {
    id: 'm5',
    name: 'Green Tinted Glass',
    category: 'Materials',
    subcategory: 'Glass',
    tags: ['glass', 'tinted', 'green', 'automotive'],
    description: 'Green tinted automotive glass with UV protection simulation.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Alex Turner',
    createdAt: '2024-04-12T09:20:00Z',
    updatedAt: '2024-04-20T14:45:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal'],
    pbr: {
      baseColor: '#4a8a6f',
      metallic: 0.0,
      roughness: 0.08,
      specular: 0.85,
      transmission: 0.85,
      ior: 1.52
    },
    files: [
      { id: '1', name: 'green_tinted_glass.sbsar', type: 'sbsar', size: '6.0 MB', sizeBytes: 6291456, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm6',
    name: 'Blue Tinted Glass',
    category: 'Materials',
    subcategory: 'Glass',
    tags: ['glass', 'tinted', 'blue', 'automotive'],
    description: 'Blue tinted window glass with premium reflections.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Mike Johnson',
    createdAt: '2024-04-10T15:30:00Z',
    updatedAt: '2024-04-19T11:00:00Z',
    version: '1.1',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal'],
    pbr: {
      baseColor: '#5a7b9e',
      metallic: 0.0,
      roughness: 0.07,
      specular: 0.88,
      transmission: 0.9,
      ior: 1.52
    },
    files: [
      { id: '1', name: 'blue_tinted_glass.sbsar', type: 'sbsar', size: '6.1 MB', sizeBytes: 6390784, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm7',
    name: 'Laminated Windshield',
    category: 'Materials',
    subcategory: 'Glass',
    tags: ['glass', 'laminated', 'windshield', 'automotive'],
    description: 'Laminated safety glass with multi-layer material.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Sarah Chen',
    createdAt: '2024-04-08T12:15:00Z',
    updatedAt: '2024-04-18T13:45:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '8K',
    textureResolution: '8K',
    maps: ['BaseColor', 'Normal', 'Roughness'],
    pbr: {
      baseColor: '#d4e8f0',
      metallic: 0.0,
      roughness: 0.12,
      specular: 0.92,
      transmission: 0.88,
      ior: 1.52
    },
    files: [
      { id: '1', name: 'laminated_windshield.sbsar', type: 'sbsar', size: '8.5 MB', sizeBytes: 8912896, downloadUrl: '#' }
    ],
    isFavorite: false
  },

  // Plastic Materials
  {
    id: 'm8',
    name: 'Hard Plastic',
    category: 'Materials',
    subcategory: 'Plastic',
    tags: ['plastic', 'hard', 'automotive', 'interior'],
    description: 'Durable hard plastic for automotive trim and dashboard.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'David Park',
    createdAt: '2024-04-06T10:30:00Z',
    updatedAt: '2024-04-24T09:15:00Z',
    version: '1.3',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness'],
    pbr: {
      baseColor: '#3a3a3a',
      metallic: 0.0,
      roughness: 0.45,
      specular: 0.4,
      clearCoat: 0.3,
      clearCoatRoughness: 0.5
    },
    files: [
      { id: '1', name: 'hard_plastic.sbsar', type: 'sbsar', size: '7.2 MB', sizeBytes: 7549952, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm9',
    name: 'Soft Touch Plastic',
    category: 'Materials',
    subcategory: 'Plastic',
    tags: ['plastic', 'soft touch', 'premium', 'interior'],
    description: 'Premium soft-touch plastic with velvety finish.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Emma Wilson',
    createdAt: '2024-04-04T14:00:00Z',
    updatedAt: '2024-04-22T10:45:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness'],
    pbr: {
      baseColor: '#2a2a2a',
      metallic: 0.0,
      roughness: 0.72,
      specular: 0.25,
      clearCoat: 0.0,
      clearCoatRoughness: 1.0
    },
    files: [
      { id: '1', name: 'soft_touch_plastic.sbsar', type: 'sbsar', size: '6.8 MB', sizeBytes: 7127040, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm10',
    name: 'Plastic Grain Large',
    category: 'Materials',
    subcategory: 'Plastic',
    tags: ['plastic', 'textured', 'grain', 'automotive'],
    description: 'Textured plastic with large grain pattern for grip.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Alex Turner',
    createdAt: '2024-04-02T11:20:00Z',
    updatedAt: '2024-04-21T14:30:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO'],
    pbr: {
      baseColor: '#1f1f1f',
      metallic: 0.0,
      roughness: 0.68,
      specular: 0.3,
      clearCoat: 0.1,
      clearCoatRoughness: 0.7
    },
    files: [
      { id: '1', name: 'plastic_grain_large.sbsar', type: 'sbsar', size: '7.9 MB', sizeBytes: 8282112, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm11',
    name: 'Piano Black Plastic',
    category: 'Materials',
    subcategory: 'Plastic',
    tags: ['plastic', 'piano black', 'glossy', 'premium'],
    description: 'High-gloss piano black plastic with mirror-like finish.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Mike Johnson',
    createdAt: '2024-03-31T09:45:00Z',
    updatedAt: '2024-04-20T15:20:00Z',
    version: '2.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness'],
    pbr: {
      baseColor: '#0a0a0a',
      metallic: 0.0,
      roughness: 0.08,
      specular: 0.95,
      clearCoat: 1.0,
      clearCoatRoughness: 0.02
    },
    files: [
      { id: '1', name: 'piano_black_plastic.sbsar', type: 'sbsar', size: '6.5 MB', sizeBytes: 6815744, downloadUrl: '#' }
    ],
    isFavorite: true
  },

  // Rubber Materials
  {
    id: 'm12',
    name: 'Sport Tyre Rubber',
    category: 'Materials',
    subcategory: 'Rubber',
    tags: ['rubber', 'tire', 'sports', 'automotive'],
    description: 'High-performance sport tire rubber with realistic tread.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Sarah Chen',
    createdAt: '2024-03-29T13:30:00Z',
    updatedAt: '2024-04-23T11:00:00Z',
    version: '1.5',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO'],
    pbr: {
      baseColor: '#1a1a1a',
      metallic: 0.0,
      roughness: 0.78,
      specular: 0.15,
      clearCoat: 0.0,
      clearCoatRoughness: 1.0
    },
    files: [
      { id: '1', name: 'sport_tyre_rubber.sbsar', type: 'sbsar', size: '8.8 MB', sizeBytes: 9224396, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm13',
    name: 'Soft Seal Rubber',
    category: 'Materials',
    subcategory: 'Rubber',
    tags: ['rubber', 'soft', 'seals', 'automotive'],
    description: 'Soft rubber for door seals and weatherstripping.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'David Park',
    createdAt: '2024-03-27T10:15:00Z',
    updatedAt: '2024-04-19T12:30:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness'],
    pbr: {
      baseColor: '#252525',
      metallic: 0.0,
      roughness: 0.82,
      specular: 0.2,
      clearCoat: 0.0,
      clearCoatRoughness: 1.0
    },
    files: [
      { id: '1', name: 'soft_seal_rubber.sbsar', type: 'sbsar', size: '7.4 MB', sizeBytes: 7751680, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm14',
    name: 'All Season Tread',
    category: 'Materials',
    subcategory: 'Rubber',
    tags: ['rubber', 'tire', 'all-season', 'automotive'],
    description: 'All-season tire tread with balanced grip profile.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Emma Wilson',
    createdAt: '2024-03-25T14:45:00Z',
    updatedAt: '2024-04-22T13:15:00Z',
    version: '1.2',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO'],
    pbr: {
      baseColor: '#0f0f0f',
      metallic: 0.0,
      roughness: 0.75,
      specular: 0.18,
      clearCoat: 0.0,
      clearCoatRoughness: 1.0
    },
    files: [
      { id: '1', name: 'all_season_tread.sbsar', type: 'sbsar', size: '8.2 MB', sizeBytes: 8596480, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm15',
    name: 'Hard Black Rubber',
    category: 'Materials',
    subcategory: 'Rubber',
    tags: ['rubber', 'hard', 'trim', 'automotive'],
    description: 'Hard rubber trim and bumper material.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Alex Turner',
    createdAt: '2024-03-23T11:00:00Z',
    updatedAt: '2024-04-21T10:30:00Z',
    version: '1.1',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness'],
    pbr: {
      baseColor: '#121212',
      metallic: 0.0,
      roughness: 0.65,
      specular: 0.25,
      clearCoat: 0.2,
      clearCoatRoughness: 0.6
    },
    files: [
      { id: '1', name: 'hard_black_rubber.sbsar', type: 'sbsar', size: '7.1 MB', sizeBytes: 7440384, downloadUrl: '#' }
    ],
    isFavorite: false
  },

  // Metal Materials
  {
    id: 'm16',
    name: 'Chrome Metal',
    category: 'Materials',
    subcategory: 'Metal',
    tags: ['metal', 'chrome', 'shiny', 'automotive'],
    description: 'Shiny chrome metal for trim and accents.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Mike Johnson',
    createdAt: '2024-03-21T09:30:00Z',
    updatedAt: '2024-04-24T14:20:00Z',
    version: '2.1',
    status: 'approved',
    department: 'EE Materials',
    resolution: '8K',
    textureResolution: '8K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Metallic'],
    pbr: {
      baseColor: '#c0c0c0',
      metallic: 1.0,
      roughness: 0.08,
      specular: 0.98,
      clearCoat: 0.5,
      clearCoatRoughness: 0.15
    },
    files: [
      { id: '1', name: 'chrome_metal.sbsar', type: 'sbsar', size: '9.3 MB', sizeBytes: 9749504, downloadUrl: '#' }
    ],
    isFavorite: true
  },
  {
    id: 'm17',
    name: 'Brushed Metal',
    category: 'Materials',
    subcategory: 'Metal',
    tags: ['metal', 'brushed', 'matte', 'automotive'],
    description: 'Brushed metal finish with directional grain.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Sarah Chen',
    createdAt: '2024-03-19T13:00:00Z',
    updatedAt: '2024-04-20T11:45:00Z',
    version: '1.3',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Metallic', 'AO'],
    pbr: {
      baseColor: '#a8a8a8',
      metallic: 1.0,
      roughness: 0.35,
      specular: 0.65,
      clearCoat: 0.2,
      clearCoatRoughness: 0.4
    },
    files: [
      { id: '1', name: 'brushed_metal.sbsar', type: 'sbsar', size: '8.6 MB', sizeBytes: 9010176, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm18',
    name: 'Polished Aluminum',
    category: 'Materials',
    subcategory: 'Metal',
    tags: ['metal', 'aluminum', 'polished', 'premium'],
    description: 'High-polish aluminum for performance parts.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'David Park',
    createdAt: '2024-03-17T10:30:00Z',
    updatedAt: '2024-04-23T09:00:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '8K',
    textureResolution: '8K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Metallic'],
    pbr: {
      baseColor: '#b3b3b3',
      metallic: 1.0,
      roughness: 0.15,
      specular: 0.92,
      clearCoat: 0.6,
      clearCoatRoughness: 0.2
    },
    files: [
      { id: '1', name: 'polished_aluminum.sbsar', type: 'sbsar', size: '9.1 MB', sizeBytes: 9536512, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm19',
    name: 'Anodized Metal',
    category: 'Materials',
    subcategory: 'Metal',
    tags: ['metal', 'anodized', 'color', 'automotive'],
    description: 'Color anodized aluminum with protective coating.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Emma Wilson',
    createdAt: '2024-03-15T14:15:00Z',
    updatedAt: '2024-04-22T12:30:00Z',
    version: '1.2',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'Metallic'],
    pbr: {
      baseColor: '#6b8e23',
      metallic: 0.85,
      roughness: 0.25,
      specular: 0.7,
      clearCoat: 0.4,
      clearCoatRoughness: 0.3
    },
    files: [
      { id: '1', name: 'anodized_metal.sbsar', type: 'sbsar', size: '8.9 MB', sizeBytes: 9330688, downloadUrl: '#' }
    ],
    isFavorite: false
  },

  // Leather Materials
  {
    id: 'm20',
    name: 'Premium Nappa Leather',
    category: 'Materials',
    subcategory: 'Leather',
    tags: ['leather', 'nappa', 'premium', 'interior'],
    description: 'Soft Nappa leather for luxury interiors.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Alex Turner',
    createdAt: '2024-03-13T11:45:00Z',
    updatedAt: '2024-04-21T13:20:00Z',
    version: '1.4',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO'],
    pbr: {
      baseColor: '#5a4a42',
      metallic: 0.0,
      roughness: 0.42,
      specular: 0.35,
      clearCoat: 0.3,
      clearCoatRoughness: 0.5,
      subsurface: 0.15
    },
    files: [
      { id: '1', name: 'premium_nappa_leather.sbsar', type: 'sbsar', size: '10.2 MB', sizeBytes: 10695475, downloadUrl: '#' }
    ],
    isFavorite: true
  },
  {
    id: 'm21',
    name: 'Perforated Leather',
    category: 'Materials',
    subcategory: 'Leather',
    tags: ['leather', 'perforated', 'interior', 'ventilated'],
    description: 'Ventilated perforated leather for breathability.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Mike Johnson',
    createdAt: '2024-03-11T09:20:00Z',
    updatedAt: '2024-04-20T10:15:00Z',
    version: '1.0',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness', 'AO'],
    pbr: {
      baseColor: '#3a3a36',
      metallic: 0.0,
      roughness: 0.48,
      specular: 0.3,
      clearCoat: 0.25,
      clearCoatRoughness: 0.55,
      subsurface: 0.1
    },
    files: [
      { id: '1', name: 'perforated_leather.sbsar', type: 'sbsar', size: '9.7 MB', sizeBytes: 10169811, downloadUrl: '#' }
    ],
    isFavorite: false
  },
  {
    id: 'm22',
    name: 'Synthetic Leather',
    category: 'Materials',
    subcategory: 'Leather',
    tags: ['leather', 'synthetic', 'eco-friendly', 'interior'],
    description: 'Eco-friendly synthetic leather alternative.',
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c6a7c1a4-6dc9-4c9e-a13f-67de21922837-HMgUzviNHLxLC1gdyKy85buAZf5bUx.png',
    author: 'Sarah Chen',
    createdAt: '2024-03-09T13:30:00Z',
    updatedAt: '2024-04-19T14:45:00Z',
    version: '1.1',
    status: 'approved',
    department: 'EE Materials',
    resolution: '4K',
    textureResolution: '4K',
    maps: ['BaseColor', 'Normal', 'Roughness'],
    pbr: {
      baseColor: '#4a4a4a',
      metallic: 0.0,
      roughness: 0.45,
      specular: 0.32,
      clearCoat: 0.35,
      clearCoatRoughness: 0.45
    },
    files: [
      { id: '1', name: 'synthetic_leather.sbsar', type: 'sbsar', size: '8.4 MB', sizeBytes: 8808243, downloadUrl: '#' }
    ],
    isFavorite: false
  }
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
