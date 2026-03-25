'use client'

import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Upload, Download, Edit, Check, MessageSquare } from 'lucide-react'

const activities = [
  {
    user: { name: 'Jason Mills', avatar: '', initials: 'JM' },
    action: 'uploaded',
    asset: 'Sport Tyre V2',
    time: '2 hours ago',
    icon: Upload,
  },
  {
    user: { name: 'Sarah Chen', avatar: '', initials: 'SC' },
    action: 'approved',
    asset: 'Carbon Fiber Material',
    time: '4 hours ago',
    icon: Check,
  },
  {
    user: { name: 'Mike Wilson', avatar: '', initials: 'MW' },
    action: 'downloaded',
    asset: 'Alloy Wheel Set',
    time: '5 hours ago',
    icon: Download,
  },
  {
    user: { name: 'Emily Davis', avatar: '', initials: 'ED' },
    action: 'commented on',
    asset: 'Interior Dashboard',
    time: '6 hours ago',
    icon: MessageSquare,
  },
  {
    user: { name: 'Alex Turner', avatar: '', initials: 'AT' },
    action: 'updated',
    asset: 'Headlight Assembly',
    time: '1 day ago',
    icon: Edit,
  },
]

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground">Activity</h1>
            <p className="text-muted-foreground mt-1">Recent activity across the vault</p>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.user.avatar} />
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {activity.user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user.name}</span>
                        {' '}{activity.action}{' '}
                        <span className="font-medium text-primary">{activity.asset}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/50">
                      <activity.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
