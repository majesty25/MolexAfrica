import { useState } from "react";
import { Link } from "wouter";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  FolderOpen, 
  FileText, 
  Settings,
  BarChart3,
  Bell,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  MapPin,
  Home,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";
import { ObjectUploader } from "@/components/ObjectUploader";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Mock data for frontend-only admin
const mockStats = {
  totalContacts: 45,
  totalVolunteers: 128,
  totalEvents: 12,
  totalProjects: 8,
  totalNewsArticles: 23,
  unreadContacts: 7,
  pendingVolunteers: 15,
};

const mockContacts = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    subject: "Volunteer Inquiry",
    message: "I'm interested in volunteering for your STEM education programs. I have a background in computer science and would love to help with the robotics clubs.",
    phone: "+233 20 123 4567",
    isRead: false,
    isResolved: false,
    createdAt: "2025-01-28T10:30:00Z",
  },
  {
    id: "2",
    name: "Michael Asante",
    email: "m.asante@example.com",
    subject: "Partnership Proposal",
    message: "Our organization would like to partner with MOLEX Foundation on climate resilience initiatives in rural communities.",
    phone: "+233 24 567 8901",
    isRead: true,
    isResolved: false,
    createdAt: "2025-01-27T14:20:00Z",
  },
  {
    id: "3",
    name: "Akosua Mensah",
    email: "akosua.mensah@gmail.com",
    subject: "Scholarship Information",
    message: "Please provide information about scholarships available for girls pursuing STEM education.",
    isRead: false,
    isResolved: false,
    createdAt: "2025-01-26T09:15:00Z",
  },
  {
    id: "4",
    name: "Emmanuel Osei",
    email: "e.osei@company.com",
    subject: "Donation Inquiry",
    message: "We would like to make a corporate donation to support your programs. Please contact us to discuss details.",
    phone: "+233 26 789 0123",
    isRead: true,
    isResolved: true,
    createdAt: "2025-01-25T16:45:00Z",
  },
  {
    id: "5",
    name: "Grace Boateng",
    email: "grace.boateng@student.edu",
    subject: "Program Participation",
    message: "I would like to join the gender equality mentorship program. How can I apply?",
    isRead: false,
    isResolved: false,
    createdAt: "2025-01-24T11:30:00Z",
  },
];

const mockVolunteers = [
  {
    id: "1",
    firstName: "Kwame",
    lastName: "Nkrumah",
    email: "kwame.nkrumah@email.com",
    phone: "+233 20 111 2222",
    skills: "Software Development, Teaching, Project Management",
    interests: "STEM Education, Youth Mentorship",
    availability: "Weekends and evenings",
    experience: "5 years as a software engineer, 2 years volunteering with youth programs",
    motivation: "I want to give back to my community and help young people develop technical skills for the future.",
    status: "pending",
    createdAt: "2025-01-28T08:00:00Z",
  },
  {
    id: "2",
    firstName: "Adwoa",
    lastName: "Gyamfi",
    email: "adwoa.gyamfi@gmail.com",
    phone: "+233 24 333 4444",
    skills: "Public Speaking, Event Planning, Social Media",
    interests: "Gender Equality, Community Outreach",
    availability: "Flexible schedule",
    experience: "Event coordinator for 3 years, advocacy work for women's rights",
    motivation: "Passionate about empowering girls and women through education and leadership opportunities.",
    status: "approved",
    createdAt: "2025-01-27T12:30:00Z",
  },
  {
    id: "3",
    firstName: "Kofi",
    lastName: "Asante",
    email: "kofi.asante@company.com",
    phone: "+233 26 555 6666",
    skills: "Environmental Science, Research, Data Analysis",
    interests: "Climate Change, Sustainable Development",
    availability: "Monthly weekend commitments",
    experience: "Environmental consultant, published researcher",
    motivation: "Climate resilience is crucial for Ghana's future, and I want to contribute to educational initiatives.",
    status: "pending",
    createdAt: "2025-01-26T15:45:00Z",
  },
];

const mockNewsArticles = [
  {
    id: "1",
    title: "MOLEX Foundation Launches AI Robotics Program for SHS Students",
    content: "Full article content here...",
    excerpt: "New initiative brings cutting-edge technology education to secondary schools across Ghana.",
    author: "Communications Team",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    isPublished: true,
    publishedAt: "2025-01-28T00:00:00Z",
    createdAt: "2025-01-27T10:00:00Z",
    updatedAt: "2025-01-28T08:00:00Z",
  },
  {
    id: "2",
    title: "Gender Equality Workshop Reaches 200 Young Women",
    content: "Workshop content details...",
    excerpt: "Successful mentorship program empowers girls in STEM and leadership.",
    author: "Program Director",
    category: "Impact",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    isPublished: false,
    createdAt: "2025-01-26T14:30:00Z",
    updatedAt: "2025-01-26T14:30:00Z",
  },
];

const mockEvents = [
  {
    id: "1",
    title: "STEM Innovation Fair 2025",
    description: "Annual showcase of student robotics and AI projects",
    location: "University of Ghana, Legon",
    date: "2025-03-15T09:00:00Z",
    endDate: "2025-03-15T17:00:00Z",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    category: "Education",
    capacity: 500,
    registrationCount: 287,
    isActive: true,
    createdAt: "2025-01-20T00:00:00Z",
    updatedAt: "2025-01-28T00:00:00Z",
  },
  {
    id: "2",
    title: "Climate Resilience Workshop",
    description: "Community workshop on sustainable practices and climate adaptation",
    location: "Nyanfeku Ekroful Community Center",
    date: "2025-02-10T10:00:00Z",
    endDate: "2025-02-10T16:00:00Z",
    category: "Environment",
    capacity: 100,
    registrationCount: 73,
    isActive: true,
    createdAt: "2025-01-15T00:00:00Z",
    updatedAt: "2025-01-25T00:00:00Z",
  },
];

const mockProjects = [
  {
    id: "1",
    title: "Rural Schools Robotics Initiative",
    description: "Bringing robotics education to underserved rural schools",
    status: "active",
    location: "Central Region, Ghana",
    impact: "Reached 15 schools, 450 students trained",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
    fundingGoal: 50000,
    fundingRaised: 32000,
    startDate: "2024-09-01T00:00:00Z",
    endDate: "2025-08-31T00:00:00Z",
    isActive: true,
    createdAt: "2024-08-15T00:00:00Z",
    updatedAt: "2025-01-28T00:00:00Z",
  },
  {
    id: "2",
    title: "Girls in STEM Mentorship Program",
    description: "Comprehensive mentorship and scholarship program for young women",
    status: "active",
    location: "Greater Accra, Ghana",
    impact: "200 girls mentored, 50 scholarships awarded",
    fundingGoal: 75000,
    fundingRaised: 68000,
    startDate: "2024-06-01T00:00:00Z",
    endDate: "2025-12-31T00:00:00Z",
    isActive: true,
    createdAt: "2024-05-20T00:00:00Z",
    updatedAt: "2025-01-27T00:00:00Z",
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState<typeof mockContacts[0] | null>(null);
  const [selectedVolunteer, setSelectedVolunteer] = useState<typeof mockVolunteers[0] | null>(null);
  const [contacts, setContacts] = useState(mockContacts);
  const [volunteers, setVolunteers] = useState(mockVolunteers);
  const [newsArticles, setNewsArticles] = useState(mockNewsArticles);
  const [showCreateArticle, setShowCreateArticle] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    excerpt: "",
    author: "",
    category: "",
    image: "",
    isPublished: false,
  });
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    location: "",
    status: "planned" as "completed" | "ongoing" | "planned",
    beneficiaries: 0,
    startDate: "",
    endDate: "",
  });
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingProject, setIsUploadingProject] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const { toast } = useToast();

  const handleMarkContactAsRead = (contactId: string) => {
    setContacts(prev => prev.map(contact => 
      contact.id === contactId ? { ...contact, isRead: true } : contact
    ));
    toast({
      title: "Success",
      description: "Contact marked as read",
    });
  };

  const handleMarkContactAsResolved = (contactId: string) => {
    setContacts(prev => prev.map(contact => 
      contact.id === contactId ? { ...contact, isResolved: true } : contact
    ));
    toast({
      title: "Success",
      description: "Contact marked as resolved",
    });
  };

  const handleUpdateVolunteerStatus = (volunteerId: string, status: string) => {
    setVolunteers(prev => prev.map(volunteer => 
      volunteer.id === volunteerId ? { ...volunteer, status } : volunteer
    ));
    toast({
      title: "Success",
      description: `Volunteer ${status}`,
    });
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredVolunteers = volunteers.filter(volunteer =>
    `${volunteer.firstName} ${volunteer.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageUpload = async () => {
    setIsUploading(true);
    try {
      const response = await fetch('/api/objects/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to get upload URL');
      }
      
      const { uploadURL } = await response.json();
      return {
        method: 'PUT' as const,
        url: uploadURL,
      };
    } catch (error) {
      console.error('Error getting upload URL:', error);
      setIsUploading(false);
      toast({
        title: "Error",
        description: "Failed to get upload URL",
        variant: "destructive",
      });
      throw error;
    }
  };

  const handleImageUploadComplete = (result: any) => {
    setIsUploading(false);
    if (result.successful && result.successful.length > 0) {
      const uploadedFile = result.successful[0];
      // Convert the upload URL to object path format
      const uploadUrl = uploadedFile.uploadURL;
      const urlParts = uploadUrl.split('/');
      const objectId = urlParts[urlParts.length - 1].split('?')[0]; // Get object ID without query params
      const imageUrl = `/objects/uploads/${objectId}`;
      
      setNewArticle(prev => ({ ...prev, image: imageUrl }));
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    }
  };

  const handleProjectImageUpload = async () => {
    setIsUploadingProject(true);
    try {
      const response = await fetch('/api/objects/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to get upload URL');
      }
      
      const { uploadURL } = await response.json();
      return {
        method: 'PUT' as const,
        url: uploadURL,
      };
    } catch (error) {
      console.error('Error getting upload URL:', error);
      setIsUploadingProject(false);
      toast({
        title: "Error",
        description: "Failed to get upload URL",
        variant: "destructive",
      });
      throw error;
    }
  };

  const handleProjectImageUploadComplete = (result: any) => {
    setIsUploadingProject(false);
    if (result.successful && result.successful.length > 0) {
      const uploadedFile = result.successful[0];
      // Convert the upload URL to object path format
      const uploadUrl = uploadedFile.uploadURL;
      const urlParts = uploadUrl.split('/');
      const objectId = urlParts[urlParts.length - 1].split('?')[0]; // Get object ID without query params
      const imageUrl = `/objects/uploads/${objectId}`;
      
      setNewProject(prev => ({ ...prev, image: imageUrl }));
      toast({
        title: "Success",
        description: "Project image uploaded successfully",
      });
    }
  };

  const handleCreateArticle = () => {
    if (!newArticle.title || !newArticle.content || !newArticle.author || !newArticle.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const article = {
      id: String(newsArticles.length + 1),
      ...newArticle,
      publishedAt: newArticle.isPublished ? new Date().toISOString() : undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setNewsArticles(prev => [article, ...prev]);
    setNewArticle({
      title: "",
      content: "",
      excerpt: "",
      author: "",
      category: "",
      image: "",
      isPublished: false,
    });
    setShowCreateArticle(false);
    
    toast({
      title: "Success",
      description: "Article created successfully",
    });
  };

  const handleCreateProject = () => {
    if (!newProject.title || !newProject.description || !newProject.location || !newProject.startDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const project = {
      id: String(Date.now()),
      ...newProject,
      endDate: newProject.endDate || undefined,
    };

    // Add to mock projects (in a real app, this would be an API call)
    toast({
      title: "Success",
      description: "Project created successfully",
    });

    setNewProject({
      title: "",
      description: "",
      image: "",
      location: "",
      status: "planned",
      beneficiaries: 0,
      startDate: "",
      endDate: "",
    });
    setShowCreateProject(false);
  };

  const handleDeleteArticle = (articleId: string) => {
    setNewsArticles(prev => prev.filter(article => article.id !== articleId));
    toast({
      title: "Success",
      description: "Article deleted successfully",
    });
  };

  const handleTogglePublish = (articleId: string) => {
    setNewsArticles(prev => prev.map(article => 
      article.id === articleId 
        ? { 
            ...article, 
            isPublished: !article.isPublished,
            publishedAt: !article.isPublished ? new Date().toISOString() : undefined,
            updatedAt: new Date().toISOString()
          } 
        : article
    ));
    toast({
      title: "Success",
      description: "Article status updated",
    });
  };

  // Calculate dynamic stats
  const stats = {
    ...mockStats,
    totalNewsArticles: newsArticles.length,
    unreadContacts: contacts.filter(c => !c.isRead).length,
    pendingVolunteers: volunteers.filter(v => v.status === 'pending').length,
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'contacts', label: 'Contacts', icon: MessageCircle, count: stats.unreadContacts },
    { id: 'volunteers', label: 'Volunteers', icon: Users, count: stats.pendingVolunteers },
    { id: 'content', label: 'Content', icon: FileText },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <SEOHead 
        title="Admin Dashboard - MOLEX Foundation Africa"
        description="Administrative dashboard for managing foundation content, contacts, and activities"
      />
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Admin</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                    ${activeTab === item.id 
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <IconComponent className="h-5 w-5 mr-3" />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.count && item.count > 0 && (
                    <Badge variant="destructive" className="ml-2 text-xs">
                      {item.count}
                    </Badge>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Link href="/">
              <Button variant="outline" className="w-full">
                <Home className="h-4 w-4 mr-2" />
                Back to Website
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
              </h1>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
                </h1>
                <p className="text-gray-600 dark:text-gray-300">Manage your foundation's digital presence</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Link href="/">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Site
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            {/* Tab list is now replaced by sidebar navigation */}

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats?.totalContacts || 0}</div>
                    {stats && stats.unreadContacts > 0 && (
                      <p className="text-xs text-red-600">
                        {stats.unreadContacts} unread
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Volunteers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats?.totalVolunteers || 0}</div>
                    {stats && stats.pendingVolunteers > 0 && (
                      <p className="text-xs text-orange-600">
                        {stats.pendingVolunteers} pending
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Events</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats?.totalEvents || 0}</div>
                    <p className="text-xs text-muted-foreground">Active events</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projects</CardTitle>
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats?.totalProjects || 0}</div>
                    <p className="text-xs text-muted-foreground">Active projects</p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button className="h-20 flex flex-col space-y-2" onClick={() => setActiveTab("contacts")}>
                      <MessageCircle className="h-6 w-6" />
                      <span>View Contacts</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col space-y-2" onClick={() => setActiveTab("volunteers")}>
                      <Users className="h-6 w-6" />
                      <span>Manage Volunteers</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col space-y-2" onClick={() => setActiveTab("content")}>
                      <FileText className="h-6 w-6" />
                      <span>Content Management</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col space-y-2" onClick={() => setActiveTab("events")}>
                      <Calendar className="h-6 w-6" />
                      <span>Manage Events</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Messages</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search contacts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">{contact.name}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>{contact.subject || 'No subject'}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {!contact.isRead && (
                              <Badge variant="destructive">Unread</Badge>
                            )}
                            {contact.isResolved ? (
                              <Badge variant="secondary">Resolved</Badge>
                            ) : (
                              <Badge variant="outline">Pending</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{new Date(contact.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedContact(contact)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>Contact Details</DialogTitle>
                                </DialogHeader>
                                {selectedContact && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label>Name</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedContact.name}</p>
                                      </div>
                                      <div>
                                        <Label>Email</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedContact.email}</p>
                                      </div>
                                    </div>
                                    {selectedContact.phone && (
                                      <div>
                                        <Label>Phone</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedContact.phone}</p>
                                      </div>
                                    )}
                                    {selectedContact.subject && (
                                      <div>
                                        <Label>Subject</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedContact.subject}</p>
                                      </div>
                                    )}
                                    <div>
                                      <Label>Message</Label>
                                      <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{selectedContact.message}</p>
                                    </div>
                                    <div className="flex space-x-2">
                                      {!selectedContact.isRead && (
                                        <Button
                                          onClick={() => handleMarkContactAsRead(selectedContact.id)}
                                        >
                                          Mark as Read
                                        </Button>
                                      )}
                                      {!selectedContact.isResolved && (
                                        <Button
                                          variant="outline"
                                          onClick={() => handleMarkContactAsResolved(selectedContact.id)}
                                        >
                                          Mark as Resolved
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Volunteers Tab */}
            <TabsContent value="volunteers" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Volunteer Applications</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search volunteers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Skills</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVolunteers.map((volunteer) => (
                      <TableRow key={volunteer.id}>
                        <TableCell className="font-medium">
                          {volunteer.firstName} {volunteer.lastName}
                        </TableCell>
                        <TableCell>{volunteer.email}</TableCell>
                        <TableCell>{volunteer.skills || 'Not specified'}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              volunteer.status === 'approved' ? 'default' :
                              volunteer.status === 'rejected' ? 'destructive' : 'secondary'
                            }
                          >
                            {volunteer.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(volunteer.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setSelectedVolunteer(volunteer)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>Volunteer Application</DialogTitle>
                                </DialogHeader>
                                {selectedVolunteer && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label>Name</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                          {selectedVolunteer.firstName} {selectedVolunteer.lastName}
                                        </p>
                                      </div>
                                      <div>
                                        <Label>Email</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedVolunteer.email}</p>
                                      </div>
                                    </div>
                                    {selectedVolunteer.phone && (
                                      <div>
                                        <Label>Phone</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedVolunteer.phone}</p>
                                      </div>
                                    )}
                                    {selectedVolunteer.skills && (
                                      <div>
                                        <Label>Skills</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedVolunteer.skills}</p>
                                      </div>
                                    )}
                                    {selectedVolunteer.interests && (
                                      <div>
                                        <Label>Interests</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedVolunteer.interests}</p>
                                      </div>
                                    )}
                                    {selectedVolunteer.availability && (
                                      <div>
                                        <Label>Availability</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{selectedVolunteer.availability}</p>
                                      </div>
                                    )}
                                    {selectedVolunteer.experience && (
                                      <div>
                                        <Label>Experience</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{selectedVolunteer.experience}</p>
                                      </div>
                                    )}
                                    {selectedVolunteer.motivation && (
                                      <div>
                                        <Label>Motivation</Label>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{selectedVolunteer.motivation}</p>
                                      </div>
                                    )}
                                    {selectedVolunteer.status === 'pending' && (
                                      <div className="flex space-x-2">
                                        <Button
                                          onClick={() => handleUpdateVolunteerStatus(selectedVolunteer.id, 'approved')}
                                        >
                                          <CheckCircle className="h-4 w-4 mr-2" />
                                          Approve
                                        </Button>
                                        <Button
                                          variant="outline"
                                          onClick={() => handleUpdateVolunteerStatus(selectedVolunteer.id, 'rejected')}
                                        >
                                          <XCircle className="h-4 w-4 mr-2" />
                                          Reject
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Content Tab */}
            <TabsContent value="content" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Management</h2>
                <Dialog open={showCreateArticle} onOpenChange={setShowCreateArticle}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Article
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Create New Article</DialogTitle>
                      <DialogDescription>
                        Fill out the form below to create a new news article.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Title *</Label>
                          <Input
                            id="title"
                            value={newArticle.title}
                            onChange={(e) => setNewArticle(prev => ({ ...prev, title: e.target.value }))}
                            placeholder="Enter article title"
                          />
                        </div>
                        <div>
                          <Label htmlFor="author">Author *</Label>
                          <Input
                            id="author"
                            value={newArticle.author}
                            onChange={(e) => setNewArticle(prev => ({ ...prev, author: e.target.value }))}
                            placeholder="Enter author name"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Category *</Label>
                          <Select 
                            value={newArticle.category} 
                            onValueChange={(value) => setNewArticle(prev => ({ ...prev, category: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Programs">Programs</SelectItem>
                              <SelectItem value="Impact">Impact</SelectItem>
                              <SelectItem value="Events">Events</SelectItem>
                              <SelectItem value="Partnership">Partnership</SelectItem>
                              <SelectItem value="Achievement">Achievement</SelectItem>
                              <SelectItem value="Community">Community</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Featured Image</Label>
                          <div className="space-y-2">
                            <ObjectUploader
                              maxNumberOfFiles={1}
                              maxFileSize={5242880} // 5MB
                              onGetUploadParameters={handleImageUpload}
                              onComplete={handleImageUploadComplete}
                              buttonClassName="w-full"
                            >
                              <div className="flex items-center gap-2">
                                <Plus className="h-4 w-4" />
                                {isUploading ? "Uploading..." : "Upload Image"}
                              </div>
                            </ObjectUploader>
                            {newArticle.image && (
                              <div className="mt-2">
                                <img 
                                  src={newArticle.image} 
                                  alt="Preview" 
                                  className="w-full h-32 object-cover rounded border"
                                />
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  onClick={() => setNewArticle(prev => ({ ...prev, image: "" }))}
                                  className="mt-2"
                                >
                                  Remove Image
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                          id="excerpt"
                          value={newArticle.excerpt}
                          onChange={(e) => setNewArticle(prev => ({ ...prev, excerpt: e.target.value }))}
                          placeholder="Brief summary of the article"
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="content">Content *</Label>
                        <div className="mt-2 border rounded-md">
                          <ReactQuill
                            theme="snow"
                            value={newArticle.content}
                            onChange={(content) => setNewArticle(prev => ({ ...prev, content }))}
                            placeholder="Write your article content here..."
                            modules={{
                              toolbar: [
                                [{ 'header': [1, 2, 3, false] }],
                                ['bold', 'italic', 'underline', 'strike'],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                [{ 'indent': '-1'}, { 'indent': '+1' }],
                                ['link', 'image'],
                                [{ 'align': [] }],
                                [{ 'color': [] }, { 'background': [] }],
                                ['blockquote', 'code-block'],
                                ['clean']
                              ],
                            }}
                            formats={[
                              'header', 'bold', 'italic', 'underline', 'strike',
                              'list', 'bullet', 'indent', 'link', 'image',
                              'align', 'color', 'background', 'blockquote', 'code-block'
                            ]}
                            style={{ minHeight: '200px' }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch
                          id="publish"
                          checked={newArticle.isPublished}
                          onCheckedChange={(checked) => setNewArticle(prev => ({ ...prev, isPublished: checked }))}
                        />
                        <Label htmlFor="publish">Publish immediately</Label>
                      </div>

                      <div className="flex justify-end space-x-2 pt-4">
                        <Button 
                          variant="outline" 
                          onClick={() => setShowCreateArticle(false)}
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleCreateArticle}>
                          Create Article
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>News Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {newsArticles.slice(0, 10).map((article) => (
                        <TableRow key={article.id}>
                          <TableCell className="font-medium">
                            <div>
                              <p className="font-semibold">{article.title}</p>
                              {article.excerpt && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate max-w-xs">
                                  {article.excerpt}
                                </p>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{article.author}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{article.category}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={article.isPublished ? 'default' : 'secondary'}>
                              {article.isPublished ? 'Published' : 'Draft'}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(article.createdAt).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleTogglePublish(article.id)}
                              >
                                {article.isPublished ? 'Unpublish' : 'Publish'}
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDeleteArticle(article.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Event Management</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockEvents.slice(0, 6).map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <Badge variant={event.isActive ? 'default' : 'secondary'}>
                        {event.isActive ? 'Active' : 'Inactive'}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Users className="h-4 w-4 mr-2" />
                          {event.registrationCount} registered
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Management</h2>
                <Dialog open={showCreateProject} onOpenChange={setShowCreateProject}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Project
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Create New Project</DialogTitle>
                      <DialogDescription>
                        Add a new project to the foundation's portfolio. Fill in all required fields.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="project-title">Project Title *</Label>
                          <Input
                            id="project-title"
                            value={newProject.title}
                            onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                            placeholder="Enter project title"
                          />
                        </div>
                        <div>
                          <Label htmlFor="project-location">Location *</Label>
                          <Input
                            id="project-location"
                            value={newProject.location}
                            onChange={(e) => setNewProject(prev => ({ ...prev, location: e.target.value }))}
                            placeholder="Project location"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="project-description">Description *</Label>
                        <Textarea
                          id="project-description"
                          value={newProject.description}
                          onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Describe the project objectives and impact..."
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="project-status">Status *</Label>
                          <Select value={newProject.status} onValueChange={(value: "completed" | "ongoing" | "planned") => setNewProject(prev => ({ ...prev, status: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="planned">Planned</SelectItem>
                              <SelectItem value="ongoing">Ongoing</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="project-beneficiaries">Estimated Beneficiaries</Label>
                          <Input
                            id="project-beneficiaries"
                            type="number"
                            value={newProject.beneficiaries}
                            onChange={(e) => setNewProject(prev => ({ ...prev, beneficiaries: parseInt(e.target.value) || 0 }))}
                            placeholder="0"
                            min="0"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="project-start-date">Start Date *</Label>
                          <Input
                            id="project-start-date"
                            type="date"
                            value={newProject.startDate}
                            onChange={(e) => setNewProject(prev => ({ ...prev, startDate: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="project-end-date">End Date (Optional)</Label>
                          <Input
                            id="project-end-date"
                            type="date"
                            value={newProject.endDate}
                            onChange={(e) => setNewProject(prev => ({ ...prev, endDate: e.target.value }))}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Project Image</Label>
                        <div className="space-y-2">
                          <ObjectUploader
                            maxNumberOfFiles={1}
                            maxFileSize={5242880} // 5MB
                            onGetUploadParameters={handleProjectImageUpload}
                            onComplete={handleProjectImageUploadComplete}
                            buttonClassName="w-full"
                          >
                            <div className="flex items-center gap-2">
                              <Plus className="h-4 w-4" />
                              {isUploadingProject ? "Uploading..." : "Upload Project Image"}
                            </div>
                          </ObjectUploader>
                          {newProject.image && (
                            <div className="mt-2">
                              <img 
                                src={newProject.image} 
                                alt="Preview" 
                                className="w-full h-32 object-cover rounded border"
                              />
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => setNewProject(prev => ({ ...prev, image: "" }))}
                                className="mt-2"
                              >
                                Remove Image
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2 pt-4">
                        <Button variant="outline" onClick={() => setShowCreateProject(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleCreateProject}>
                          Create Project
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProjects.slice(0, 6).map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant={project.isActive ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <MapPin className="h-4 w-4 mr-2" />
                          {project.location}
                        </div>
                        {project.fundingGoal && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Funding Progress</span>
                              <span>{Math.round((project.fundingRaised / project.fundingGoal) * 100)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{
                                  width: `${Math.min((project.fundingRaised / project.fundingGoal) * 100, 100)}%`
                                }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-300">
                              ${project.fundingRaised.toLocaleString()} of ${project.fundingGoal.toLocaleString()}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}