import { useState } from "react";
import { Link } from "wouter";
import { GraduationCap, Heart, Sprout, Droplets, Users, Monitor, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProgramFilter } from "@/components/ui/program-filter";
import { SEOHead } from "@/components/ui/seo-head";
import { programs } from "@/lib/data";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const iconMap = {
  GraduationCap,
  Heart,
  Sprout,
  Droplets,
  Users,
  Monitor
};

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { value: "all", label: "All Programs" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "development", label: "Development" },
    { value: "STEM", label: "STEM" },
    { value: "STEM for Girls", label: "STEM for Girls" },

  ];

  const filteredPrograms = activeFilter === "all" 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  // Scroll Animation Refs
  const heroRef = useScrollAnimation({ delay: 200 });
  const programsGridRef = useStaggeredAnimation(filteredPrograms.length, 150);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
      case 'healthcare':
        return 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400';
      case 'development':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <>
      <SEOHead
        title="Our Programs - MOLEX Foundation Africa"
        description="Explore MOLEX Foundation Africa's comprehensive programs in education, healthcare, and community development across the African continent."
        keywords="education programs, healthcare initiatives, community development, african programs, sustainable development"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive initiatives designed to create lasting change in communities across Africa through 
              education, healthcare, and sustainable development.
            </p>
          </div>
        </div>
      </section>



      {/* Program Filter */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramFilter
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={programsGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => {
              const IconComponent = iconMap[program.icon as keyof typeof iconMap];
              
              return (
                <Card key={program.id} className="overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        {IconComponent && <IconComponent className="h-5 w-5 text-primary" />}
                      </div>
                      <span className={`text-sm font-semibold uppercase tracking-wide px-2 py-1 rounded ${getCategoryColor(program.category)}`}>
                        {program.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{program.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                    <button className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200 flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No programs found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Programs Impact Banner */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-red-900 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3Cpath d='m0 40l40-40h-40z' transform='matrix(-1 0 0 1 40 0)'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
                Comprehensive Program Portfolio
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              <span className="block">Empowering Through</span>
              <span className="block text-yellow-400">Strategic Programs</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our multi-faceted approach addresses critical needs in education, healthcare, and community development 
              to create sustainable change across African communities.
            </p>
            
            {/* Program Categories Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-300" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">8+</div>
                <div className="text-white text-base">Education Programs</div>
                <p className="text-gray-300 text-sm mt-2">STEM, literacy, and skill development initiatives</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-red-300" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">5+</div>
                <div className="text-white text-base">Healthcare Initiatives</div>
                <p className="text-gray-300 text-sm mt-2">Health education, wellness, and prevention programs</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Sprout className="h-8 w-8 text-green-300" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">4+</div>
                <div className="text-white text-base">Development Projects</div>
                <p className="text-gray-300 text-sm mt-2">Community infrastructure and sustainability projects</p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/volunteer">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 text-lg font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Join Our Programs
                </button>
              </Link>
              
              <Link href="/donate">
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-bold rounded-lg transition-all duration-300 shadow-2xl flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Fund Programs
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/15 rounded-full blur-lg"></div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Program Impact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See the measurable difference our programs make in communities across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Schools Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Students Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Healthcare Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Get Involved CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Get Involved?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in making a difference. Whether through volunteering, partnerships, or donations, 
            your support helps us expand our impact across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-us" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Join Our Mission
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
