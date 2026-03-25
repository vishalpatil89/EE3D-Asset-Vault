'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useAppStore } from '@/lib/store'
import { categories, allTags } from '@/lib/data'
import { cn } from '@/lib/utils'

const resolutions = ['2K', '4K', '8K']
const fileTypes = ['fbx', 'obj', 'png', 'exr', 'mp4', 'sbsar', 'zip']

export function FilterPanel() {
  const { filters, setFilters, resetFilters } = useAppStore()
  
  const hasActiveFilters = 
    filters.category ||
    filters.tags.length > 0 ||
    filters.resolution.length > 0 ||
    filters.fileTypes.length > 0

  const toggleArrayFilter = (
    key: 'tags' | 'resolution' | 'fileTypes',
    value: string
  ) => {
    const current = filters[key]
    if (current.includes(value)) {
      setFilters({ [key]: current.filter(v => v !== value) })
    } else {
      setFilters({ [key]: [...current, value] })
    }
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* Category */}
      <Select 
        value={filters.category} 
        onValueChange={(value) => setFilters({ category: value === 'all' ? '' : value })}
      >
        <SelectTrigger className="w-40 glass-card border-border/30 h-9">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="glass-card">
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map(cat => (
            <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Tags */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="glass-card border-border/30 h-9">
            Tags
            {filters.tags.length > 0 && (
              <Badge className="ml-2 h-5 px-1.5 gradient-primary text-primary-foreground border-0">
                {filters.tags.length}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 glass-card" align="start">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Select Tags</Label>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={filters.tags.includes(tag) ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer transition-all",
                    filters.tags.includes(tag) && "gradient-primary text-primary-foreground border-0"
                  )}
                  onClick={() => toggleArrayFilter('tags', tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Resolution */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="glass-card border-border/30 h-9">
            Resolution
            {filters.resolution.length > 0 && (
              <Badge className="ml-2 h-5 px-1.5 gradient-primary text-primary-foreground border-0">
                {filters.resolution.length}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 glass-card" align="start">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Resolution</Label>
            <div className="space-y-2">
              {resolutions.map(res => (
                <div key={res} className="flex items-center gap-2">
                  <Checkbox
                    id={`res-${res}`}
                    checked={filters.resolution.includes(res)}
                    onCheckedChange={() => toggleArrayFilter('resolution', res)}
                  />
                  <label htmlFor={`res-${res}`} className="text-sm cursor-pointer">
                    {res}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* File Types */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="glass-card border-border/30 h-9">
            File Type
            {filters.fileTypes.length > 0 && (
              <Badge className="ml-2 h-5 px-1.5 gradient-primary text-primary-foreground border-0">
                {filters.fileTypes.length}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 glass-card" align="start">
          <div className="space-y-3">
            <Label className="text-sm font-medium">File Types</Label>
            <div className="space-y-2">
              {fileTypes.map(type => (
                <div key={type} className="flex items-center gap-2">
                  <Checkbox
                    id={`type-${type}`}
                    checked={filters.fileTypes.includes(type)}
                    onCheckedChange={() => toggleArrayFilter('fileTypes', type)}
                  />
                  <label htmlFor={`type-${type}`} className="text-sm cursor-pointer uppercase">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Sort */}
      <Select 
        value={filters.sortBy} 
        onValueChange={(value: 'latest' | 'popular' | 'name') => setFilters({ sortBy: value })}
      >
        <SelectTrigger className="w-32 glass-card border-border/30 h-9">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent className="glass-card">
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="name">Name</SelectItem>
        </SelectContent>
      </Select>

      {/* Clear filters */}
      {hasActiveFilters && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={resetFilters}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      )}
    </div>
  )
}
