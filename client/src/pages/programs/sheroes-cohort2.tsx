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

export default function SheroesCohort2() {
  const heroRef = useScrollAnimation({ delay: 200 });
  const { toast } = useToast();

  // Get the Sheroes program data
  const program = programs.find(p => p.id === "sheroes");

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'healthcare':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'development':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
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
      default:
        return category;
    }
  };

  return (
    <>
      <SEOHead
        title="SHEROES in STEM - Cohort 2 - MOLEX Foundation Africa"
        description="Meet Cohort 2 of SHEROES in STEM, the innovators building on the foundation of our pioneering first cohort."
        keywords="SHEROES in STEM, cohort 2, girls in STEM, STEM education, gender equality, MOLEX Foundation"
      />

      <section className="relative h-[60vh] overflow-hidden">
        <img
          src='https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-21_1.jpg?alt=media&token=75a6022c-fd87-4310-8363-49e6e4bcfce3'
          alt='SHEROES Cohort 2'
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4">
              Cohort 2 - Innovators
            </Badge>
            <h1 className="text-2xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              SHEROES in STEM - Cohort 2
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-2xl text-gray-200 mb-6 font-medium">
              The Innovators: Advancing Technology and Creativity
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/programs/sheroes">
                  View Main Program
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-red-900 hover:bg-red-900 hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
                asChild
              >
                <Link href="/join-us">
                  Join Next Cohort
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Overview */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Cohort 2 Overview</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Cohort 2 builds upon the groundbreaking foundation established by our pioneers. These innovative young women
                  are exploring advanced technologies, developing creative solutions, and pushing the boundaries of what's possible
                  in STEM fields.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cohort Achievements</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Advanced robotics and automation projects completed
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    AI and machine learning applications developed
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Innovative solutions for local community challenges
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    International collaboration and knowledge exchange
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program Impact</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Cohort 2 participants are demonstrating exceptional creativity and technical proficiency. Their projects
                  address real-world problems while inspiring younger generations and expanding the horizons of what girls
                  can achieve in technology and innovation.
                </p>
              </div>
            </div>

            {/* Cohort Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Cohort Details</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Cohort Number</div>
                        <div className="text-gray-600 dark:text-gray-300">Cohort 2</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Participants</div>
                        <div className="text-gray-600 dark:text-gray-300">30 Girls</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Duration</div>
                        <div className="text-gray-600 dark:text-gray-300">12 Months</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                        <div className="text-gray-600 dark:text-gray-300">Nyanfeku Ekroful, Ghana</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Button variant="outline" className="w-full">
                      Share Cohort Story
                    </Button>
                    <Button className="w-full" asChild>
                      <Link href="/sheroes-application">Apply Now</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/sheroes-portal">Access Participant Portal</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/join-us">Apply for Next Cohort</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Activities */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cohort Activities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced learning experiences and innovative projects that define Cohort 2's journey in STEM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advanced Robotics */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-21.jpg?alt=media&token=5057f237-8a7c-42cd-96d9-e80e0058a5e8"
                alt="Advanced Robotics"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Advanced Robotics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Complex robotic systems design, autonomous navigation, and integration of sensors and AI for advanced applications.
                </p>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Advanced Technology
                </Badge>
              </CardContent>
            </Card>

            {/* AI & Machine Learning */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-16.jpg?alt=media&token=ee9a68c6-d4a4-4da1-81b7-a37d384a3828"
                alt="AI & Machine Learning"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI & Machine Learning</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Deep dive into artificial intelligence, neural networks, and practical machine learning applications for real-world problems.
                </p>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Cutting-Edge Tech
                </Badge>
              </CardContent>
            </Card>

            {/* Innovation Challenges */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-19.jpg?alt=media&token=0e405835-f16f-4b4d-8af5-1880f6421963"
                alt="Innovation Challenges"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation Challenges</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Competitive challenges focusing on creative problem-solving, prototyping, and developing innovative solutions for community needs.
                </p>
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  Creative Problem Solving
                </Badge>
              </CardContent>
            </Card>

            {/* International Collaboration */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-20.jpg?alt=media&token=10d2d010-931d-439d-b25c-a4d122fd7ee9"
                alt="International Collaboration"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">International Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Virtual exchange programs and collaborative projects with students from other countries, broadening global perspectives.
                </p>
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  Global Connections
                </Badge>
              </CardContent>
            </Card>

            {/* Entrepreneurship Training */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-34.jpg?alt=media&token=b763a65c-4a42-4f6c-aa59-8a7001e39b87"
                alt="Entrepreneurship Training"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Entrepreneurship Training</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Business development skills, startup creation, and commercialization of innovative STEM solutions.
                </p>
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Business Innovation
                </Badge>
              </CardContent>
            </Card>

            {/* Research & Development */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-38.jpg?alt=media&token=d9ec383d-56cb-4c8f-a316-d2422e67a6e1"
                alt="Research & Development"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Research & Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Independent research projects, scientific methodology, and development of original contributions to STEM knowledge.
                </p>
                <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  Academic Excellence
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories from Cohort 2 */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cohort 2 Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the innovative leaders from Cohort 2 who are pushing boundaries and creating new possibilities in STEM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Success Story Cards */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0d3e341b921?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Success Story 1"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Adwoa Mensah</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">AI Solutions Developer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  From Cohort 2, Adwoa developed an AI-powered agricultural monitoring system that helps local farmers optimize crop yields.
                </p>
                <Button variant="outline" size="sm">
                  Read Full Story
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1546019865-9d4f4e4e66a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Success Story 2"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Nana Yaa Asante</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Robotics Engineer</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  Nana Yaa created an autonomous delivery robot for healthcare supplies in rural areas, winning international recognition.
                </p>
                <Button variant="outline" size="sm">
                  Read Full Story
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
                alt="Success Story 3"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Zara Ibrahim</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Tech Entrepreneur</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  Zara founded a startup developing educational apps for STEM learning, empowering thousands of students across Africa.
                </p>
                <Button variant="outline" size="sm">
                  Read Full Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cohort 2 Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Innovation and advancement metrics from our second generation of SHEROES
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">30</div>
              <div className="text-gray-600 dark:text-gray-300">Girls Empowered</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-gray-600 dark:text-gray-300">Innovation Projects</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600 dark:text-gray-300">International Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Gallery */}
      {program && <ProgramGallery key={program.id} program={program} />}

      {/* Call to Action */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Sprout className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Join the Innovation Revolution</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Inspired by Cohort 2? Be part of the next wave of innovation and technological advancement.
              Applications for Cohort 3 are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/join-us">Apply Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/programs/sheroes">Learn More About SHEROES</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}