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
  Star,
  Gamepad2,
  Lightbulb,
  GraduationCap,
  Home
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SEOHead } from "@/components/ui/seo-head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function KiddieStemPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for demonstration
  const currentUser = {
    name: "Parent Name",
    childName: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    childAvatar: "https://images.unsplash.com/photo-1594736797933-d0d3e341b921?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    role: "Parent/Guardian"
  };

  const childStats = [
    {
      title: "Activities Completed",
      value: "24",
      change: "+6",
      trend: "up",
      icon: CheckCircle
    },
    {
      title: "Learning Hours",
      value: "18h",
      change: "+4h",
      trend: "up",
      icon: Clock
    },
    {
      title: "Skills Mastered",
      value: "12",
      change: "+3",
      trend: "up",
      icon: Star
    },
    {
      title: "Certificates Earned",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Award
    }
  ];

  const upcomingActivities = [
    {
      id: 1,
      title: "Robotics Building Workshop",
      date: "2024-10-15",
      time: "10:00 AM",
      type: "Workshop",
      ageGroup: "8-12 years",
      spots: "12/15"
    },
    {
      id: 2,
      title: "Coding Fun Session",
      date: "2024-10-18",
      time: "2:00 PM",
      type: "Coding",
      ageGroup: "6-10 years",
      spots: "8/12"
    },
    {
      id: 3,
      title: "Science Experiment Day",
      date: "2024-10-22",
      time: "11:00 AM",
      type: "Science",
      ageGroup: "7-11 years",
      spots: "6/10"
    }
  ];

  const learningModules = [
    {
      id: 1,
      title: "Introduction to Robotics",
      progress: 85,
      status: "In Progress",
      nextSession: "Oct 16, 2024",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Basic Coding Concepts",
      progress: 60,
      status: "In Progress",
      nextSession: "Oct 19, 2024",
      icon: "💻"
    },
    {
      id: 3,
      title: "Science Experiments",
      progress: 100,
      status: "Completed",
      nextSession: "Completed",
      icon: "🧪"
    },
    {
      id: 4,
      title: "Math Adventures",
      progress: 30,
      status: "In Progress",
      nextSession: "Oct 23, 2024",
      icon: "🔢"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Robotics Builder",
      description: "Built first robot successfully",
      date: "2024-09-28",
      icon: "🤖",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "Code Explorer",
      description: "Completed first coding lesson",
      date: "2024-09-25",
      icon: "💻",
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      title: "Science Star",
      description: "Conducted 5 experiments",
      date: "2024-09-20",
      icon: "⭐",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 4,
      title: "Math Master",
      description: "Solved 50 math puzzles",
      date: "2024-09-15",
      icon: "🎯",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const parentResources = [
    {
      id: 1,
      title: "Supporting Your Child's STEM Learning",
      type: "Guide",
      readTime: "5 min read",
      icon: "📚"
    },
    {
      id: 2,
      title: "STEM Activities at Home",
      type: "Activity Pack",
      readTime: "10 min read",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Understanding Your Child's Progress",
      type: "Parent Handbook",
      readTime: "8 min read",
      icon: "📊"
    },
    {
      id: 4,
      title: "STEM Career Opportunities",
      type: "Information",
      readTime: "6 min read",
      icon: "🎓"
    }
  ];

  return (
    <>
      <SEOHead
        title="Kiddie STEM Portal - MOLEX Foundation Africa"
        description="Parent and child portal for KIDDIE STEM program with learning progress, activities, and resources."
        keywords="Kiddie STEM portal, children's STEM learning, parent portal, educational activities"
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <Avatar className="h-10 w-10 border-2 border-white">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10 border-2 border-white">
                  <AvatarImage src={currentUser.childAvatar} alt={currentUser.childName} />
                  <AvatarFallback>{currentUser.childName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold truncate">Welcome, {currentUser.name}</h1>
                <p className="text-blue-100 text-sm">Parent of {currentUser.childName}</p>
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
            <TabsTrigger value="learning" className="text-xs sm:text-sm">Learning</TabsTrigger>
            <TabsTrigger value="activities" className="text-xs sm:text-sm">Activities</TabsTrigger>
            <TabsTrigger value="resources" className="text-xs sm:text-sm">Resources</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Child Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {childStats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-gray-600'}`}>
                      {stat.change} this month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  {currentUser.childName}'s Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {learningModules.map((module) => (
                    <div key={module.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{module.icon}</span>
                          <div>
                            <h4 className="font-semibold">{module.title}</h4>
                            <p className="text-sm text-muted-foreground">{module.nextSession}</p>
                          </div>
                        </div>
                        <Badge variant={module.status === 'Completed' ? 'default' : 'secondary'}>
                          {module.status}
                        </Badge>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">{module.progress}% Complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                      </div>
                      <Badge className={achievement.color}>Earned</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Book Session</h3>
                  <Button size="sm" className="w-full">Schedule Activity</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">Contact Teacher</h3>
                  <Button size="sm" variant="outline" className="w-full">Send Message</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold mb-2">Progress Report</h3>
                  <Button size="sm" variant="outline" className="w-full">View Report</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Home className="h-8 w-8 mx-auto mb-4 text-orange-600" />
                  <h3 className="font-semibold mb-2">Home Activities</h3>
                  <Button size="sm" variant="outline" className="w-full">Get Activities</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Learning Tab */}
          <TabsContent value="learning" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Learning Path</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">STEM Foundations</h4>
                        <Badge>Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Building core STEM concepts through hands-on activities
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Creative Problem Solving</h4>
                        <Badge variant="secondary">Next</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Developing critical thinking and innovation skills
                      </p>
                      <Button size="sm" className="w-full">Start Module</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-900">Basic Robotics</h4>
                        <p className="text-sm text-green-700">Completed - Built first robot</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-900">Simple Coding</h4>
                        <p className="text-sm text-green-700">Completed - First program</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Target className="h-5 w-5 text-blue-600" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Advanced Logic</h4>
                        <p className="text-sm text-blue-700">In Progress - 60% complete</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Upcoming Activities</h2>
              <Button>View All Activities</Button>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {upcomingActivities.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-sm sm:text-base">{activity.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {activity.date} at {activity.time} • {activity.ageGroup}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                        <Badge variant="outline" className="text-xs">{activity.type}</Badge>
                        <span className="text-xs text-muted-foreground">{activity.spots} spots</span>
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm">Register</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Science Fair Participation</h4>
                        <p className="text-sm text-muted-foreground">Completed on Oct 5, 2024</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Attended</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Coding Workshop</h4>
                        <p className="text-sm text-muted-foreground">Completed on Sep 28, 2024</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Attended</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Parent Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {parentResources.map((resource) => (
                      <div key={resource.id} className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="text-2xl">{resource.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.type} • {resource.readTime}</p>
                        </div>
                        <Button size="sm" variant="outline">Read</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Child Learning Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 border-2 border-dashed rounded-lg">
                      <Gamepad2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Interactive Games</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Fun STEM games and puzzles for home learning
                      </p>
                      <Button>Explore Games</Button>
                    </div>
                    <div className="text-center p-6 border-2 border-dashed rounded-lg">
                      <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Activity Guides</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Step-by-step guides for STEM activities at home
                      </p>
                      <Button variant="outline">View Guides</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Support & Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <MessageSquare className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h4 className="font-semibold mb-1">Parent Forum</h4>
                    <p className="text-sm text-muted-foreground mb-3">Connect with other parents</p>
                    <Button size="sm">Join Discussion</Button>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h4 className="font-semibold mb-1">Teacher Support</h4>
                    <p className="text-sm text-muted-foreground mb-3">Get help from educators</p>
                    <Button size="sm" variant="outline">Contact Teacher</Button>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
                    <h4 className="font-semibold mb-1">Volunteer</h4>
                    <p className="text-sm text-muted-foreground mb-3">Help other families</p>
                    <Button size="sm" variant="outline">Learn More</Button>
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