import { Link } from "wouter";
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/ui/seo-head";
import { projects } from "@/lib/data";

export default function Projects() {
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
      month: 'short'
    });
  };

  return (
    <>
      <SEOHead
        title="Our Projects - MOLEX Foundation Africa"
        description="Explore MOLEX Foundation Africa's transformative projects across African communities, from education centers to healthcare initiatives and water systems."
        keywords="foundation projects, african development projects, community projects, education centers, healthcare initiatives"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Transformative Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the comprehensive projects we've implemented across African communities, 
              creating lasting impact through education, healthcare, and sustainable development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-gray-600 dark:text-gray-300">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Communities</div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getStatusColor(project.status)}>
                      {getStatusLabel(project.status)}
                    </Badge>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(project.startDate)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Started:</strong> {formatDate(project.startDate)}
                        {project.endDate && (
                          <>
                            <br />
                            <strong>Completed:</strong> {formatDate(project.endDate)}
                          </>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/projects/${project.id}`}>
                          Learn More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our projects span multiple sectors to address diverse community needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">🏫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Education Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Building schools, libraries, and learning centers to provide quality education access.
                </p>
                <div className="text-3xl font-bold text-primary">45+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 dark:text-red-400 text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Healthcare Systems</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Establishing clinics, mobile health units, and medical equipment distribution.
                </p>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 dark:text-cyan-400 text-2xl">💧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Water & Sanitation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Installing wells, water treatment systems, and sanitation facilities.
                </p>
                <div className="text-3xl font-bold text-primary">75+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Partner with Us on Future Projects</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating lasting change across African communities. Whether through funding, 
            expertise, or volunteer support, your partnership can make these projects possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg" asChild>
              <Link href="/contact">Partner with Us</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg" asChild>
              <Link href="/join-us">Join Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
