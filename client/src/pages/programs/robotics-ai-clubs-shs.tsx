import { useState } from "react";
import { Link, useParams } from "wouter";
import { Sprout, ArrowRight, Building, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/ui/seo-head";
import { ProgramGallery } from "@/components/programs/ProgramGallery";
import { programs } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProgramHero } from "@/components/programs/ProgramHero";
import { ArrowLeft, Calendar, CheckCircle, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProgramImpactBanner } from "@/components/programs/ProgramImpactBanner";
import { useToast } from "@/hooks/use-toast";

export default function RoboticsAIClubsSHS() {
  const heroRef = useScrollAnimation({ delay: 200 });
  const { id } = useParams();
  console.log("Program ID:", id);
  const program = programs.find(p => p.id === id);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'healthcare':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'development':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'STEM':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'education':
        return 'Education & Training';
      case 'healthcare':
        return 'Healthcare & Wellness';
      case 'development':
        return 'Community Development';
      case 'STEM':
        return 'STEM Education';
      default:
        return category;
    }
  };

  return (
    <>
      <SEOHead
        title="Robotics & AI Clubs in SHS - MOLEX Foundation Africa"
        description="Introducing Senior High School students to robotics and artificial intelligence through hands-on learning, innovation, and practical technology exploration."
        keywords="robotics, artificial intelligence, STEM education, SHS, technology, innovation, programming, hands-on learning"
      />

      <section className="relative h-[60vh] overflow-hidden">
        <img
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
          alt=''
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <Badge className={`${getCategoryColor(program?.category || 'STEM')} mb-4`}>
              {getCategoryLabel(program?.category || 'STEM')}
            </Badge>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="animate-slide-up">
                <h1 className="text-2xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {program?.title}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-2xl text-gray-200 mb-6 font-medium">
                  Hands-On Technology Innovation for SHS Students
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link href="/join-us">
                      Join Robotics Club
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-red-900 hover:bg-red-900 hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
                    asChild
                  >
                    <Link href="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"></h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto"></p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Program Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {program?.description} Through structured training sessions, mentorship, and teamwork, students gain valuable skills in engineering, programming, and critical thinking, preparing them for future careers in STEM fields.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program Objectives</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  {program?.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      {objective}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Activities</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  {program?.activities?.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Program Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Program Details</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Category</div>
                        <div className="text-gray-600 dark:text-gray-300">{program?.category}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Target Beneficiaries</div>
                        <div className="text-gray-600 dark:text-gray-300">SHS Students</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Program Duration</div>
                        <div className="text-gray-600 dark:text-gray-300">Academic Year Program</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Button variant="outline" className="w-full">
                      Share Program
                    </Button>
                    <Button className="w-full" asChild>
                      <Link href="/join-us">Get Involved</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our STEM Initiatives</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Building the next generation of innovators through technology and hands-on learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.filter(p => p.category === 'STEM' || p.category === 'STEM for Girls').map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3">
                      <Sprout className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wide px-2 py-1 rounded bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                      STEM
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
      <section className="py-16 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">STEM Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Empowering the next generation through technology and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Schools Participating</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600 dark:text-gray-300">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Robotics Projects</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600 dark:text-gray-300">Student Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Gallery */}
      {program && <ProgramGallery key={program.id} program={program} />}

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Sprout className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Robotics & AI Clubs in SHS</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Empowering Senior High School students with cutting-edge technology skills through hands-on robotics and artificial intelligence education that prepares them for future STEM careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="/join-us">Start Building Robots</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                <Link href="/donate">Support STEM Education</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}