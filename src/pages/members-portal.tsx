import { useState } from "react";
import { Link } from "wouter";
import {
  BookOpen,
  Calendar,
  Users,
  Trophy,
  MessageSquare,
  FileText,
  Target,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Bell,
  Settings,
  LogOut,
  Heart,
  HandHeart,
  Lightbulb,
  Globe,
  Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SEOHead } from "@/components/ui/seo-head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MembersPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for demonstration
  const currentUser = {
    name: "Kofi Mensah",
    role: "Community Member",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    joinDate: "2023-06-15",
    volunteerHours: 45
  };

  const memberStats = [
    {
      title: "Volunteer Hours",
      value: "45",
      change: "+8",
      trend: "up",
      icon: Clock
    },
    {
      title: "Events Attended",
      value: "12",
      change: "+3",
      trend: "up",
      icon: Calendar
    },
    {
      title: "Community Impact",
      value: "High",
      change: "Active",
      trend: "neutral",
      icon: Heart
    },
    {
      title: "Skills Shared",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Lightbulb
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community STEM Workshop",
      date: "2024-10-20",
      time: "10:00 AM",
      location: "Nyanfeku Community Center",
      type: "Workshop",
      spots: "15/25"
    },
    {
      id: 2,
      title: "Environmental Cleanup Drive",
      date: "2024-10-25",
      time: "8:00 AM",
      location: "Local Park",
      type: "Volunteer",
      spots: "8/20"
    },
    {
      id: 3,
      title: "Youth Mentorship Session",
      date: "2024-11-02",
      time: "3:00 PM",
      location: "Online",
      type: "Mentorship",
      spots: "5/10"
    }
  ];

  const volunteerOpportunities = [
    {
      id: 1,
      title: "STEM Education Support",
      description: "Help facilitate STEM workshops for local schools",
      commitment: "4 hours/week",
      skills: ["Teaching", "STEM Knowledge"],
      urgent: true
    },
    {
      id: 2,
      title: "Community Outreach Coordinator",
      description: "Organize and coordinate community outreach programs",
      commitment: "8 hours/week",
      skills: ["Organization", "Communication"],
      urgent: false
    },
    {
      id: 3,
      title: "Event Planning Assistant",
      description: "Support event planning and execution for foundation activities",
      commitment: "6 hours/week",
      skills: ["Planning", "Coordination"],
      urgent: false
    }
  ];

  const learningResources = [
    {
      id: 1,
      title: "Community Leadership Training",
      type: "Online Course",
      duration: "4 weeks",
      progress: 75,
      status: "In Progress"
    },
    {
      id: 2,
      title: "Sustainable Development Workshop",
      type: "Workshop Series",
      duration: "2 weeks",
      progress: 0,
      status: "Available"
    },
    {
      id: 3,
      title: "Digital Skills for Community Work",
      type: "Self-paced",
      duration: "6 weeks",
      progress: 30,
      status: "In Progress"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      activity: "Attended STEM Workshop",
      date: "2024-09-28",
      type: "Event",
      impact: "Helped 15 students"
    },
    {
      id: 2,
      activity: "Volunteered at Community Center",
      date: "2024-09-25",
      type: "Volunteer",
      impact: "4 hours of service"
    },
    {
      id: 3,
      activity: "Shared Skills Workshop",
      date: "2024-09-20",
      type: "Mentorship",
      impact: "Mentored 3 youth"
    }
  ];

  return (
    <>
      <SEOHead
        title="Members Portal - MOLEX Foundation Africa"
        description="Community member dashboard for volunteering, learning, and community engagement."
        keywords="members portal, community dashboard, volunteering, community engagement"
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-white flex-shrink-0">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold truncate">Welcome back, {currentUser.name}</h1>
                <p className="text-green-100 text-sm sm:text-base">{currentUser.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 flex-1 sm:flex-none">
                <Bell className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Notifications</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 flex-1 sm:flex-none">
                <Settings className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Settings</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 flex-1 sm:flex-none">
                <LogOut className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="dashboard" className="text-xs sm:text-sm">Dashboard</TabsTrigger>
            <TabsTrigger value="volunteer" className="text-xs sm:text-sm">Volunteer</TabsTrigger>
            <TabsTrigger value="learn" className="text-xs sm:text-sm">Learn</TabsTrigger>
            <TabsTrigger value="community" className="text-xs sm:text-sm">Community</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Member Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {memberStats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                      {stat.change} this month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{activity.activity}</h4>
                          <p className="text-sm text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">{activity.type}</Badge>
                        <p className="text-xs text-muted-foreground">{activity.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">Find Events</h3>
                  <Button size="sm" className="w-full">Browse Events</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <HandHeart className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Volunteer Now</h3>
                  <Button size="sm" variant="outline" className="w-full">See Opportunities</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold mb-2">Learn & Grow</h3>
                  <Button size="sm" variant="outline" className="w-full">Access Resources</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-4 text-orange-600" />
                  <h3 className="font-semibold mb-2">Community Hub</h3>
                  <Button size="sm" variant="outline" className="w-full">Connect</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Volunteer Tab */}
          <TabsContent value="volunteer" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Volunteer Opportunities</h2>
              <Button>Submit Availability</Button>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {volunteerOpportunities.map((opportunity) => (
                <Card key={opportunity.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold">{opportunity.title}</h3>
                          {opportunity.urgent && <Badge variant="destructive">Urgent</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                          <span>Commitment: {opportunity.commitment}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {opportunity.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button size="sm" variant="outline">Learn More</Button>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4">
                      <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-sm sm:text-base">{event.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {event.date} at {event.time} • {event.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                        <Badge variant="outline" className="text-xs">{event.type}</Badge>
                        <span className="text-xs text-muted-foreground">{event.spots} spots</span>
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm">Register</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learn Tab */}
          <TabsContent value="learn" className="space-y-6">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {learningResources.map((resource) => (
                <Card key={resource.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{resource.type} • {resource.duration}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{resource.progress}%</span>
                          </div>
                          <Progress value={resource.progress} className="h-2" />
                        </div>
                      </div>
                      <Badge variant={resource.status === 'In Progress' ? 'default' : 'secondary'} className="ml-4">
                        {resource.status}
                      </Badge>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm">
                        {resource.status === 'In Progress' ? 'Continue' : 'Start'} Learning
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Learning Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 border-2 border-dashed rounded-lg">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Study Groups</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join peer learning groups and study sessions
                    </p>
                    <Button>Find Groups</Button>
                  </div>
                  <div className="text-center p-6 border-2 border-dashed rounded-lg">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Discussion Forums</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Share knowledge and ask questions in community forums
                    </p>
                    <Button variant="outline">Join Discussions</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Forums</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <h4 className="font-semibold mb-2">General Discussion</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Share ideas, ask questions, and connect with fellow members
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">24 active members</span>
                        <Button size="sm" variant="ghost">Join</Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <h4 className="font-semibold mb-2">Volunteer Coordination</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Coordinate volunteer activities and share opportunities
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">18 active members</span>
                        <Button size="sm" variant="ghost">Join</Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <h4 className="font-semibold mb-2">Success Stories</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Share and celebrate community impact and achievements
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">32 active members</span>
                        <Button size="sm" variant="ghost">Join</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">2,450</div>
                      <p className="text-sm text-muted-foreground">Lives Impacted This Year</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">STEM Education</span>
                        <span className="text-sm font-medium">55 students</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Community Health</span>
                        <span className="text-sm font-medium">45 families</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Youth Development</span>
                        <span className="text-sm font-medium">120 youth</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <Button className="w-full">View Full Impact Report</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Member Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Top Volunteer</h4>
                    <p className="text-sm text-muted-foreground">45+ hours this quarter</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Community Champion</h4>
                    <p className="text-sm text-muted-foreground">Outstanding leadership</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Impact Maker</h4>
                    <p className="text-sm text-muted-foreground">Significant community contribution</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}