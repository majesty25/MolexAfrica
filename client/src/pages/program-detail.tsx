import { useState } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Users, Target, Calendar, CheckCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/ui/seo-head";
import { ProgramHero } from "@/components/programs/ProgramHero";
import { ProgramImpactBanner } from "@/components/programs/ProgramImpactBanner";
import { ProgramGallery } from "@/components/programs/ProgramGallery";
import { programs } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function ProgramDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const program = programs.find(p => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The program you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/programs">Back to Programs</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: program.title,
        text: program.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Program link has been copied to your clipboard.",
      });
    }
  };

  

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

  // Mock program details for comprehensive content
  const programDetails = {
    objectives: [
      "Provide comprehensive training and development opportunities",
      "Create sustainable impact in target communities",
      "Build local capacity and leadership skills",
      "Establish long-term partnerships with community stakeholders",
      "Measure and evaluate program effectiveness"
    ],
    activities: [
      "Community workshops and training sessions",
      "Mentorship and coaching programs",
      "Resource distribution and support",
      "Capacity building initiatives",
      "Impact assessment and evaluation"
    ],
    impact: [
      "1000+ direct beneficiaries reached annually",
      "85% participant completion rate",
      "90% satisfaction rating from participants",
      "15+ community partnerships established",
      "Sustainable change documented in target areas"
    ]
  };

  return (
    <>
      <SEOHead
        title={`${program.title} - MOLEX Foundation Africa`}
        description={program.description}
        keywords={`${program.title}, ${program.category}, molex foundation program, african development`}
      />

      <ProgramHero program={program} />

      {/* Navigation */}
      <section className="py-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
            <Link href="/programs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Programs
            </Link>
          </Button>
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
                  {program.description} This comprehensive program is designed to create lasting impact through 
                  evidence-based interventions and community-driven solutions.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program Objectives</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  {program.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      {objective}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Activities</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  {programDetails.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program Impact</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {programDetails.impact.map((impact, index) => (
                    <li key={index} className="flex items-start">
                      <Users className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                      {impact}
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
                        <div className="text-gray-600 dark:text-gray-300">{getCategoryLabel(program.category)}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Target Beneficiaries</div>
                        <div className="text-gray-600 dark:text-gray-300">Girls, Women, and Youth</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Program Duration</div>
                        <div className="text-gray-600 dark:text-gray-300">Ongoing Initiative</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Button onClick={handleShare} variant="outline" className="w-full">
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

      <ProgramImpactBanner program={program} onShare={handleShare} />

      <ProgramGallery program={program} />

      

      {/* Related Programs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Other Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.filter(p => p.id !== program.id).slice(0, 3).map((relatedProgram) => (
              <Card key={relatedProgram.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={relatedProgram.image}
                  alt={relatedProgram.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <Badge className={`${getCategoryColor(relatedProgram.category)} mb-3`}>
                    {getCategoryLabel(relatedProgram.category)}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{relatedProgram.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{relatedProgram.description}</p>
                  <Button variant="ghost" size="sm" asChild className="w-full">
                    <Link href={`/programs/${relatedProgram.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Support This Program</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us expand programs like {program.title} to reach more communities 
            and create lasting change across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg">
              Donate Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg" asChild>
              <Link href="/join-us">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}