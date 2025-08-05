import { useParams, Link } from "wouter";
import { MapPin, Users, Calendar, ArrowLeft, Share2, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/ui/seo-head";
import { projects } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function ProjectDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Project link has been copied to your clipboard.",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'planned':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'ongoing':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateDuration = () => {
    const start = new Date(project.startDate);
    const end = project.endDate ? new Date(project.endDate) : new Date();
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    return months > 0 ? `${months} months` : `${diffDays} days`;
  };

  // Mock project milestones and achievements
  const milestones = [
    { title: "Project Planning & Community Consultation", date: project.startDate, completed: true },
    { title: "Construction/Implementation Phase Begins", date: project.startDate, completed: true },
    { title: "Mid-Project Review & Assessment", date: project.startDate, completed: project.status !== 'planned' },
    { title: "Final Implementation & Testing", date: project.endDate || project.startDate, completed: project.status === 'completed' },
    { title: "Project Handover to Community", date: project.endDate || project.startDate, completed: project.status === 'completed' }
  ];

  return (
    <>
      <SEOHead
        title={`${project.title} - MOLEX Foundation Africa`}
        description={project.description}
        keywords={`${project.title}, foundation project, african development, ${project.location}`}
      />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <Badge className={`${getStatusColor(project.status)} mb-4`}>
              {getStatusLabel(project.status)}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Objectives</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  <li>• Provide sustainable access to essential services for the local community</li>
                  <li>• Build local capacity and skills for long-term maintenance</li>
                  <li>• Create economic opportunities and improve quality of life</li>
                  <li>• Serve as a model for replication in other communities</li>
                  <li>• Strengthen community resilience and self-reliance</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Impact</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  This project has transformed the daily lives of community members by providing essential infrastructure 
                  and services. The initiative was developed in close consultation with local leaders and community 
                  members to ensure it meets their specific needs and priorities. The project not only addresses 
                  immediate challenges but also builds foundation for sustainable development and future growth.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sustainability Measures</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We've established comprehensive sustainability measures including community management committees, 
                  local technician training programs, and ongoing support systems. These ensure the project's 
                  long-term success and community ownership beyond our direct involvement.
                </p>
              </div>
            </div>

            {/* Project Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Duration</div>
                        <div className="text-gray-600 dark:text-gray-300">{calculateDuration()}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                        <div className="text-gray-600 dark:text-gray-300">{project.location}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Beneficiaries</div>
                        <div className="text-gray-600 dark:text-gray-300">{project.beneficiaries.toLocaleString()} people</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Timeline</div>
                        <div className="text-gray-600 dark:text-gray-300">
                          Start: {formatDate(project.startDate)}
                          {project.endDate && (
                            <>
                              <br />
                              End: {formatDate(project.endDate)}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button onClick={handleShare} variant="outline" className="w-full">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Project
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project Progress */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Project Milestones</h3>
                  <div className="space-y-3">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className={`h-5 w-5 mt-0.5 ${milestone.completed ? 'text-green-500' : 'text-gray-300 dark:text-gray-600'}`} />
                        <div className="flex-1">
                          <div className={`font-medium ${milestone.completed ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                            {milestone.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject) => (
              <Card key={relatedProject.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={relatedProject.image}
                  alt={relatedProject.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getStatusColor(relatedProject.status)}>
                      {getStatusLabel(relatedProject.status)}
                    </Badge>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {relatedProject.beneficiaries.toLocaleString()} beneficiaries
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{relatedProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{relatedProject.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {relatedProject.location}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/projects/${relatedProject.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Support Projects Like This</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us implement transformative projects across African communities. 
            Join us in creating lasting change and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg">
              Donate Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg" asChild>
              <Link href="/join-us">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
