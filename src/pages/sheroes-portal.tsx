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
  LogOut
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SEOHead } from "@/components/ui/seo-head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SheroesPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for demonstration
  const currentUser = {
    name: "Akosua Mensah",
    cohort: "Cohort 2",
    avatar: "https://images.unsplash.com/photo-1594736797933-d0d3e341b921?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    progress: 75,
    completedActivities: 12,
    totalActivities: 16
  };

  const upcomingActivities = [
    {
      id: 1,
      title: "Advanced Robotics Workshop",
      date: "2024-10-15",
      time: "10:00 AM",
      type: "Workshop",
      status: "upcoming"
    },
    {
      id: 2,
      title: "AI Ethics Discussion",
      date: "2024-10-18",
      time: "2:00 PM",
      type: "Discussion",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Innovation Challenge Submission",
      date: "2024-10-20",
      time: "11:59 PM",
      type: "Deadline",
      status: "upcoming"
    }
  ];

  const recentAchievements = [
    {
      id: 1,
      title: "Robotics Master",
      description: "Completed advanced robotics module",
      date: "2024-09-28",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Team Player",
      description: "Collaborated on group project",
      date: "2024-09-25",
      icon: "👥"
    },
    {
      id: 3,
      title: "Problem Solver",
      description: "Solved complex coding challenge",
      date: "2024-09-20",
      icon: "🧠"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Python Programming Guide",
      type: "Tutorial",
      icon: "📚",
      link: "#"
    },
    {
      id: 2,
      title: "Arduino Basics",
      type: "Video Course",
      icon: "🎥",
      link: "#"
    },
    {
      id: 3,
      title: "AI Ethics Handbook",
      type: "Document",
      icon: "📄",
      link: "#"
    },
    {
      id: 4,
      title: "STEM Career Paths",
      type: "Guide",
      icon: "🎯",
      link: "#"
    }
  ];

  return (
    <>
      <SEOHead
        title="SHEROES Portal - Participant Dashboard"
        description="Access your personalized SHEROES in STEM learning portal with resources, progress tracking, and community features."
        keywords="SHEROES portal, STEM learning, participant dashboard, educational resources"
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-white flex-shrink-0">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold truncate">Welcome back, {currentUser.name}!</h1>
                <p className="text-pink-100 text-sm sm:text-base">{currentUser.cohort} Participant</p>
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
            <TabsTrigger value="activities" className="text-xs sm:text-sm">Activities</TabsTrigger>
            <TabsTrigger value="resources" className="text-xs sm:text-sm">Resources</TabsTrigger>
            <TabsTrigger value="community" className="text-xs sm:text-sm">Community</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Progress Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{currentUser.progress}%</div>
                  <Progress value={currentUser.progress} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {currentUser.completedActivities} of {currentUser.totalActivities} activities completed
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Badges earned this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42h</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rank</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">#3</div>
                  <p className="text-xs text-muted-foreground">In your cohort</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAchievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-4">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      <Badge variant="secondary">{achievement.date}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {activity.date} at {activity.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{activity.type}</Badge>
                        <Button size="sm" variant="ghost">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Current Module
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">Advanced Robotics</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about autonomous systems and sensor integration
                  </p>
                  <Progress value={60} className="mb-2" />
                  <p className="text-xs text-muted-foreground">60% Complete</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Group Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">AI Ethics Case Study</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Collaborative analysis of ethical AI implementation
                  </p>
                  <Badge className="mb-2">Team: Innovators</Badge>
                  <p className="text-xs text-muted-foreground">Due: Oct 25, 2024</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">Innovation Hackathon</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    48-hour challenge to solve local community problems
                  </p>
                  <Badge variant="secondary" className="mb-2">Registration Open</Badge>
                  <p className="text-xs text-muted-foreground">Starts: Nov 1, 2024</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{resource.icon}</div>
                    <h3 className="font-semibold mb-2">{resource.title}</h3>
                    <Badge variant="outline" className="mb-4">{resource.type}</Badge>
                    <Button size="sm" className="w-full">
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Machine Learning Fundamentals</h4>
                      <p className="text-sm text-muted-foreground">Based on your current module progress</p>
                    </div>
                    <Button size="sm">Start Learning</Button>
                  </div>
                  <div className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Peer Study Group</h4>
                      <p className="text-sm text-muted-foreground">Join weekly discussions with fellow participants</p>
                    </div>
                    <Button size="sm" variant="outline">Join Group</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Discussion Forums
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">AI Ethics Discussion</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Share your thoughts on responsible AI development
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">12 replies</span>
                        <Button size="sm" variant="ghost">Join Discussion</Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Robotics Project Help</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Get help with your autonomous robot project
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">8 replies</span>
                        <Button size="sm" variant="ghost">View Thread</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Mentor Connect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 border-2 border-dashed rounded-lg">
                      <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Connect with a Mentor</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get personalized guidance from STEM professionals
                      </p>
                      <Button>Find a Mentor</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100">Innovation Hackathon Registration Open</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Register now for our upcoming 48-hour innovation challenge. Teams of 3-4 participants welcome!
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Posted 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-100">New Resources Available</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Check out our latest AI and machine learning tutorials in the Resources section.
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">Posted 1 week ago</p>
                    </div>
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