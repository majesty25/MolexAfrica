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
  TrendingUp,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SEOHead } from "@/components/ui/seo-head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ExecutivesPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for demonstration
  const currentUser = {
    name: "Ivy Amartey",
    role: "Executive Director",
    avatar: "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fexecutives%2F2A1A1327.jpg?alt=media&token=e5509038-367e-4722-83f2-86a8820dfdb9",
    department: "Executive Leadership"
  };

  const keyMetrics = [
    {
      title: "Active Programs",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Target
    },
    {
      title: "Total Beneficiaries",
      value: "2,450",
      change: "+15%",
      trend: "up",
      icon: Users
    },
    {
      title: "Program Completion Rate",
      value: "94%",
      change: "+5%",
      trend: "up",
      icon: CheckCircle
    },
    {
      title: "Monthly Reports",
      value: "12",
      change: "0",
      trend: "neutral",
      icon: FileText
    }
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: "Board Meeting - Q4 Strategy",
      date: "2024-10-15",
      time: "10:00 AM",
      location: "Conference Room A",
      type: "Board Meeting"
    },
    {
      id: 2,
      title: "Program Review - SHEROES Initiative",
      date: "2024-10-18",
      time: "2:00 PM",
      location: "Virtual Meeting",
      type: "Program Review"
    },
    {
      id: 3,
      title: "Stakeholder Engagement Session",
      date: "2024-10-22",
      time: "11:00 AM",
      location: "Main Office",
      type: "Stakeholder Meeting"
    }
  ];

  const recentReports = [
    {
      id: 1,
      title: "Q3 Program Impact Report",
      type: "Impact Assessment",
      date: "2024-09-30",
      status: "Completed"
    },
    {
      id: 2,
      title: "Financial Statement - September",
      type: "Financial Report",
      date: "2024-10-01",
      status: "Completed"
    },
    {
      id: 3,
      title: "SHEROES Cohort 2 Progress Report",
      type: "Program Report",
      date: "2024-10-05",
      status: "In Review"
    }
  ];

  const programOverview = [
    {
      name: "SHEROES in STEM",
      participants: 55,
      completion: 85,
      status: "Active"
    },
    {
      name: "Kiddie STEM",
      participants: 120,
      completion: 92,
      status: "Active"
    },
    {
      name: "Robotics & AI Clubs",
      participants: 80,
      completion: 78,
      status: "Active"
    },
    {
      name: "Healthcare Programs",
      participants: 45,
      completion: 88,
      status: "Active"
    }
  ];

  return (
    <>
      <SEOHead
        title="Executives Portal - MOLEX Foundation Africa"
        description="Executive dashboard for MOLEX Foundation leadership with program oversight, reporting, and strategic management tools."
        keywords="executives portal, leadership dashboard, program management, strategic oversight"
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-white flex-shrink-0">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold truncate">Welcome back, {currentUser.name}</h1>
                <p className="text-blue-100 text-sm sm:text-base">{currentUser.role}</p>
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
            <TabsTrigger value="programs" className="text-xs sm:text-sm">Programs</TabsTrigger>
            <TabsTrigger value="reports" className="text-xs sm:text-sm">Reports</TabsTrigger>
            <TabsTrigger value="meetings" className="text-xs sm:text-sm">Meetings</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {keyMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <metric.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className={`text-xs ${metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                      {metric.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Program Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Program Performance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {programOverview.map((program, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{program.name}</h4>
                        <p className="text-sm text-muted-foreground">{program.participants} participants</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{program.completion}% Complete</div>
                          <Progress value={program.completion} className="w-20 mt-1" />
                        </div>
                        <Badge variant={program.status === 'Active' ? 'default' : 'secondary'}>
                          {program.status}
                        </Badge>
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
                  <FileText className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Generate Report</h3>
                  <Button size="sm" className="w-full">Create Report</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">Team Management</h3>
                  <Button size="sm" variant="outline" className="w-full">Manage Team</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold mb-2">Strategic Planning</h3>
                  <Button size="sm" variant="outline" className="w-full">View Plans</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 mx-auto mb-4 text-orange-600" />
                  <h3 className="font-semibold mb-2">Communications</h3>
                  <Button size="sm" variant="outline" className="w-full">Send Update</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">SHEROES in STEM</h4>
                        <p className="text-sm text-muted-foreground">55 participants</p>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">Kiddie STEM</h4>
                        <p className="text-sm text-muted-foreground">120 participants</p>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">Robotics & AI Clubs</h4>
                        <p className="text-sm text-muted-foreground">80 participants</p>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Program Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 border-2 border-dashed rounded-lg">
                      <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Program Distribution</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        View detailed analytics and participant demographics
                      </p>
                      <Button>View Analytics</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Reports & Documents</h2>
              <Button>Generate New Report</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {recentReports.map((report) => (
                <Card key={report.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <Badge variant={report.status === 'Completed' ? 'default' : 'secondary'}>
                        {report.status}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2">{report.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{report.type}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{report.date}</span>
                      <Button size="sm" variant="outline">View Report</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Meetings Tab */}
          <TabsContent value="meetings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Upcoming Meetings</h2>
              <Button>Schedule Meeting</Button>
            </div>

            <div className="space-y-4">
              {upcomingMeetings.map((meeting) => (
                <Card key={meeting.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold text-sm sm:text-base">{meeting.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {meeting.date} at {meeting.time} • {meeting.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                        <Badge variant="outline" className="text-xs">{meeting.type}</Badge>
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm">Join Meeting</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}