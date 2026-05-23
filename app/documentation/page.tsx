'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Book, FileText, Video, HelpCircle, ExternalLink, Layers, Ticket } from 'lucide-react'
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

const confluenceResources = [
  {
    title: '3D Asset Creation Guidelines',
    description: 'Complete standards for modeling, texturing, and LOD requirements',
    url: 'https://confluence.example.com/display/EE3D/Asset-Creation-Guidelines',
    category: 'Guidelines',
  },
  {
    title: 'Material Library Standards',
    description: 'PBR material specifications and naming conventions',
    url: 'https://confluence.example.com/display/EE3D/Material-Standards',
    category: 'Standards',
  },
  {
    title: 'Version Control Workflow',
    description: 'Asset versioning, branching, and approval process documentation',
    url: 'https://confluence.example.com/display/EE3D/Version-Control',
    category: 'Workflow',
  },
  {
    title: 'Real-Time Rendering Specs',
    description: 'Performance targets and optimization requirements for configurators',
    url: 'https://confluence.example.com/display/EE3D/Rendering-Specs',
    category: 'Technical',
  },
  {
    title: 'Quality Assurance Checklist',
    description: 'Pre-submission QA checklist for all asset types',
    url: 'https://confluence.example.com/display/EE3D/QA-Checklist',
    category: 'QA',
  },
  {
    title: 'Texture Resolution Guidelines',
    description: 'Recommended texture sizes per asset type and LOD level',
    url: 'https://confluence.example.com/display/EE3D/Texture-Guidelines',
    category: 'Guidelines',
  },
]

const jiraResources = [
  {
    title: 'Asset Request Board',
    description: 'Submit and track new asset requests',
    url: 'https://jira.example.com/secure/RapidBoard.jspa?rapidView=123',
    ticketPrefix: 'EE3D',
  },
  {
    title: 'Bug Tracker - Asset Issues',
    description: 'Report and monitor asset-related bugs and issues',
    url: 'https://jira.example.com/projects/EE3DBUG',
    ticketPrefix: 'EE3DBUG',
  },
  {
    title: 'Feature Requests',
    description: 'Propose and vote on new vault features',
    url: 'https://jira.example.com/projects/EE3DFEAT',
    ticketPrefix: 'EE3DFEAT',
  },
  {
    title: 'Release Planning',
    description: 'View upcoming releases and asset delivery schedules',
    url: 'https://jira.example.com/projects/EE3D/versions',
    ticketPrefix: 'RELEASE',
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

          {/* Internal Documentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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

          {/* Confluence Resources Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Layers className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Confluence Resources</h2>
                <p className="text-sm text-muted-foreground">Access guidelines and documentation from Confluence</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {confluenceResources.map((resource) => (
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={resource.title}
                  className="block"
                >
                  <Card className="glass-card hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer h-full group">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base group-hover:text-blue-600 transition-colors">
                          {resource.title}
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <CardDescription className="text-sm">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        {resource.category}
                      </Badge>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Jira Resources Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <Ticket className="h-5 w-5 text-cyan-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Jira Boards & Tickets</h2>
                <p className="text-sm text-muted-foreground">Track requests, issues, and releases in Jira</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jiraResources.map((resource) => (
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={resource.title}
                  className="block"
                >
                  <Card className="glass-card hover:shadow-lg hover:border-cyan-200 transition-all cursor-pointer h-full group">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-base group-hover:text-cyan-600 transition-colors">
                          {resource.title}
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-cyan-600 transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <CardDescription className="text-sm">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <Badge variant="outline" className="border-cyan-200 text-cyan-700">
                        {resource.ticketPrefix}
                      </Badge>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
