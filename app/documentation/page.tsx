'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Book, FileText, Video, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const docs = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of the AutoAsset Vault',
    icon: Book,
    articles: 8,
  },
  {
    title: 'Asset Guidelines',
    description: 'Standards and best practices for assets',
    icon: FileText,
    articles: 15,
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step visual guides',
    icon: Video,
    articles: 12,
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: HelpCircle,
    articles: 24,
  },
]

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground">Documentation</h1>
            <p className="text-muted-foreground mt-1">Guides, tutorials, and reference materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {docs.map((doc) => (
              <Link href="#" key={doc.title}>
                <Card className="glass-card hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <doc.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                        <CardDescription>{doc.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-muted-foreground">{doc.articles} articles</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
