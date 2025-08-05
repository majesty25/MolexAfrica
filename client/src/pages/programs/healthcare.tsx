
import { useState } from "react";
import { Link } from "wouter";
import { Heart, ArrowRight, Stethoscope, Users, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/ui/seo-head";
import { ProgramGallery } from "@/components/programs/ProgramGallery";
import { programs } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HealthcarePrograms() {
  const healthcarePrograms = programs.filter(program => program.category === "healthcare");
  const heroRef = useScrollAnimation({ delay: 200 });

  return (
    <>
      <SEOHead
        title="Healthcare Programs - MOLEX Foundation Africa"
        description="Explore our healthcare initiatives focused on improving health outcomes, wellness education, and healthcare access for communities across Africa."
        keywords="healthcare programs, health education, medical outreach, wellness programs, community health"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Healthcare Programs</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Improving health outcomes and promoting wellness through comprehensive healthcare initiatives, 
              education programs, and community-based health solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Link href="/join-us">Get Involved</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                <Link href="/donate">Support Healthcare</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Healthcare Initiatives</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From preventive care to health education, we're working to create healthier communities across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcarePrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mr-3">
                      <Heart className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wide px-2 py-1 rounded bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400">
                      Healthcare
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{program.description}</p>
                  <Button asChild className="w-full">
                    <Link href={`/programs/${program.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-red-50 dark:bg-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Healthcare Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Lives touched and communities transformed through our healthcare programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Health Clinics</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">75,000+</div>
              <div className="text-gray-600 dark:text-gray-300">People Served</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Health Workers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Galleries */}
      {healthcarePrograms.map((program) => (
        <ProgramGallery key={program.id} program={program} />
      ))}
    </>
  );
}
