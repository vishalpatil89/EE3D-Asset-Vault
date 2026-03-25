'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { X, Upload, File, Image, Video, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useAppStore } from '@/lib/store'
import { categories } from '@/lib/data'
import { cn } from '@/lib/utils'

interface UploadFile {
  file: File
  preview?: string
  progress: number
}

export function UploadModal() {
  const { uploadModalOpen, setUploadModalOpen } = useAppStore()
  const [files, setFiles] = useState<UploadFile[]>([])
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    tags: [] as string[],
    description: '',
    version: '1.0'
  })
  const [tagInput, setTagInput] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
      progress: 0
    }))
    setFiles(prev => [...prev, ...newFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'model/*': ['.fbx', '.obj', '.max', '.blend', '.gltf', '.glb'],
      'image/*': ['.png', '.jpg', '.jpeg', '.exr', '.hdr', '.tga'],
      'video/*': ['.mp4', '.mov', '.webm'],
      'application/*': ['.zip', '.rar', '.7z', '.sbsar']
    }
  })

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev]
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview!)
      }
      newFiles.splice(index, 1)
      return newFiles
    })
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }))
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.category || files.length === 0) return
    
    setIsUploading(true)
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise(resolve => setTimeout(resolve, 200))
    }
    
    // Reset and close
    setIsUploading(false)
    setUploadProgress(0)
    setFiles([])
    setFormData({ name: '', category: '', tags: [], description: '', version: '1.0' })
    setUploadModalOpen(false)
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return Image
    if (type.startsWith('video/')) return Video
    return File
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
      <DialogContent className="max-w-2xl glass-card border-border/30">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Upload Asset</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Drop Zone */}
          <div
            {...getRootProps()}
            className={cn(
              "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer",
              "transition-all duration-200",
              isDragActive 
                ? "border-primary bg-primary/5 glow-primary" 
                : "border-border/50 hover:border-primary/50 hover:bg-muted/30"
            )}
          >
            <input {...getInputProps()} />
            <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {isDragActive 
                ? "Drop files here..." 
                : "Drag & drop files here, or click to browse"}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Supports FBX, OBJ, PNG, EXR, MP4, and more
            </p>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Files ({files.length})</Label>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {files.map((item, index) => {
                  const FileIcon = getFileIcon(item.file.type)
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 group"
                    >
                      {item.preview ? (
                        <img 
                          src={item.preview} 
                          alt="" 
                          className="w-10 h-10 rounded object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                          <FileIcon className="h-5 w-5 text-primary" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(item.file.size)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFile(index)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Asset Name *</Label>
              <Input
                id="name"
                placeholder="Enter asset name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="glass-card border-border/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select 
                value={formData.category} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger className="glass-card border-border/30">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="glass-card">
                  {categories.map(cat => (
                    <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex gap-2">
              <Input
                id="tags"
                placeholder="Add tag..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="glass-card border-border/30"
              />
              <Button variant="secondary" onClick={addTag}>Add</Button>
            </div>
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive/20"
                    onClick={() => removeTag(tag)}
                  >
                    {tag}
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your asset..."
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="glass-card border-border/30 min-h-[80px]"
            />
          </div>

          <div className="w-32 space-y-2">
            <Label htmlFor="version">Version</Label>
            <Input
              id="version"
              placeholder="1.0"
              value={formData.version}
              onChange={(e) => setFormData(prev => ({ ...prev, version: e.target.value }))}
              className="glass-card border-border/30"
            />
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-border/30">
          <Button 
            variant="ghost" 
            onClick={() => setUploadModalOpen(false)}
            disabled={isUploading}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!formData.name || !formData.category || files.length === 0 || isUploading}
            className="gradient-primary text-primary-foreground glow-primary"
          >
            {isUploading ? 'Uploading...' : 'Upload Asset'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
