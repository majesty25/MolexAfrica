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
  Activity,
  Shield,
  Gavel,
  Scale
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SEOHead } from "@/components/ui/seo-head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BoardPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for demonstration
  const currentUser = {
    name: "Tabitha Simons-Dadzie",
    role: "Board Chair",
    avatar: "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2Fcaptain.jpg?alt=media&token=88412fcb-1b7c-436c-8e7f-ce93923e63e1",
    department: "Board of Directors"
  };

  const governanceMetrics = [
    {
      title: "Board Meetings",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Gavel
    },
    {
      title: "Policy Updates",
      value: "8",
      change: "+3",
      trend: "up",
      icon: Shield
    },
    {
      title: "Compliance Score",
      value: "98%",
      change: "+2%",
      trend: "up",
      icon: Scale
    },
    {
      title: "Strategic Initiatives",
      value: "15",
      change: "+5",
      trend: "up",
      icon: Target
    }
  ];

  const boardMeetings = [
    {
      id: 1,
      title: "Q4 Strategic Planning Session",
      date: "2024-10-15",
      time: "10:00 AM",
      location: "Conference Room A",
      type: "Strategic Planning",
      status: "Scheduled"
    },
    {
      id: 2,
      title: "Annual General Meeting",
      date: "2024-11-20",
      time: "9:00 AM",
      location: "Main Auditorium",
      type: "AGM",
      status: "Planning"
    },
    {
      id: 3,
      title: "Executive Committee Meeting",
      date: "2024-10-08",
      time: "2:00 PM",
      location: "Board Room",
      type: "Executive",
      status: "Scheduled"
    }
  ];

  const committeeUpdates = [
    {
      committee: "Executive Committee",
      lastMeeting: "2024-09-25",
      nextMeeting: "2024-10-08",
      keyDecisions: ["Approved Q4 budget", "Reviewed strategic partnerships"],
      status: "Active"
    },
    {
      committee: "Audit Committee",
      lastMeeting: "2024-09-18",
      nextMeeting: "2024-10-15",
      keyDecisions: ["Financial statements review", "Risk assessment update"],
      status: "Active"
    },
    {
      committee: "Program Oversight",
      lastMeeting: "2024-09-20",
      nextMeeting: "2024-10-10",
      keyDecisions: ["SHEROES program expansion", "New initiative approval"],
      status: "Active"
    }
  ];

  const policyDocuments = [
    {
      id: 1,
      title: "Code of Conduct & Ethics",
      version: "2.1",
      lastUpdated: "2024-08-15",
      status: "Active"
    },
    {
      id: 2,
      title: "Financial Management Policy",
      version: "3.0",
      lastUpdated: "2024-09-01",
      status: "Active"
    },
    {
      id: 3,
      title: "Program Evaluation Framework",
      version: "1.5",
      lastUpdated: "2024-09-10",
      status: "Under Review"
    },
    {
      id: 4,
      title: "Risk Management Policy",
      version: "2.3",
      lastUpdated: "2024-07-20",
      status: "Active"
    }
  ];

  const strategicGoals = [
    {
      goal: "Expand STEM Education Reach",
      target: "Increase program participants by 40%",
      progress: 75,
      deadline: "2024-12-31"
    },
    {
      goal: "Strengthen Financial Sustainability",
      target: "Achieve 60% self-funded operations",
      progress: 45,
      deadline: "2025-06-30"
    },
    {
      goal: "Enhance Community Impact",
      target: "Reach 10,000 beneficiaries annually",
      progress: 82,
      deadline: "2024-12-31"
    }
  ];

  return (
    <>
      <SEOHead
        title="Board Portal - MOLEX Foundation Africa"
        description="Board member dashboard for governance, strategic oversight, and organizational leadership."
        keywords="board portal, governance dashboard, strategic oversight, board management"
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-white flex-shrink-0">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold truncate">Welcome back, {currentUser.name}</h1>
                <p className="text-slate-100 text-sm sm:text-base">{currentUser.role}</p>
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
            <TabsTrigger value="governance" className="text-xs sm:text-sm">Governance</TabsTrigger>
            <TabsTrigger value="strategy" className="text-xs sm:text-sm">Strategy</TabsTrigger>
            <TabsTrigger value="meetings" className="text-xs sm:text-sm">Meetings</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Governance Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {governanceMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                    <metric.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className={`text-xs ${metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                      {metric.change} from last quarter
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Strategic Goals Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Strategic Goals Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {strategicGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{goal.goal}</h4>
                        <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{goal.target}</span>
                        <span>Deadline: {goal.deadline}</span>
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
                  <Gavel className="h-8 w-8 mx-auto mb-4 text-slate-600" />
                  <h3 className="font-semibold mb-2">Board Materials</h3>
                  <Button size="sm" className="w-full">Access Documents</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">Policy Review</h3>
                  <Button size="sm" variant="outline" className="w-full">Review Policies</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Performance Reports</h3>
                  <Button size="sm" variant="outline" className="w-full">View Reports</Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold mb-2">Executive Updates</h3>
                  <Button size="sm" variant="outline" className="w-full">Send Communication</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Governance Tab */}
          <TabsContent value="governance" className="space-y-6">
            {/* Committee Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Committee Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {committeeUpdates.map((committee, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-semibold">{committee.committee}</h4>
                        <Badge variant="outline">{committee.status}</Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Last Meeting</p>
                          <p className="font-medium">{committee.lastMeeting}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Next Meeting</p>
                          <p className="font-medium">{committee.nextMeeting}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Recent Decisions</p>
                        <ul className="text-sm space-y-1">
                          {committee.keyDecisions.map((decision, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                              {decision}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Policy Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Governance Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {policyDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-8 w-8 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            Version {doc.version} • Updated {doc.lastUpdated}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={doc.status === 'Active' ? 'default' : 'secondary'}>
                          {doc.status}
                        </Badge>
                        <Button size="sm" variant="outline">Review</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Strategy Tab */}
          <TabsContent value="strategy" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Strategic Initiatives</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Digital Transformation</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Implementing technology solutions to enhance program delivery and monitoring
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge>Phase 2</Badge>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Partnership Expansion</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Building strategic alliances with corporations and international organizations
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">Planning</Badge>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Impact Measurement</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Developing comprehensive evaluation frameworks for all programs
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge>Active</Badge>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 border-2 border-dashed rounded-lg">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Strategic Dashboard</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Comprehensive analytics on organizational performance and strategic goals
                      </p>
                      <Button>View Analytics</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Meetings Tab */}
          <TabsContent value="meetings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Board Meetings</h2>
              <Button>Add Meeting</Button>
            </div>

            <div className="space-y-4">
              {boardMeetings.map((meeting) => (
                <Card key={meeting.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Gavel className="h-6 w-6 text-slate-600" />
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
                        <Badge variant={meeting.status === 'Scheduled' ? 'default' : 'secondary'} className="text-xs">
                          {meeting.status}
                        </Badge>
                        <Button size="sm" variant="outline" className="text-xs sm:text-sm">View Agenda</Button>
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