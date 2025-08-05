import { useState } from "react";
import { useParams, Link } from "wouter";
import { ArrowLeft, Users, Target, Calendar, CheckCircle, X, ChevronLeft, ChevronRight, Images, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SEOHead } from "@/components/ui/seo-head";
import { programs } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function ProgramDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const program = programs.find(p => p.id === id);
  
  // Gallery state
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const nextImage = () => {
    if (program?.gallery && program.gallery.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % program.gallery.length);
    }
  };

  const prevImage = () => {
    if (program?.gallery && program.gallery.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + program.gallery.length) % program.gallery.length);
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

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <Badge className={`${getCategoryColor(program.category)} mb-4`}>
              {getCategoryLabel(program.category)}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{program.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{program.description}</p>
          </div>
        </div>
      </section>

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

      {/* Program Impact Banner */}
      <section className="relative bg-gradient-to-r from-primary via-primary/90 to-primary/80 py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Program Impact
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Making a Real Difference
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Through {program?.title}, we're creating measurable impact and sustainable change in communities across Africa.
            </p>
            
            {/* Quick Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">1000+</div>
                <div className="text-white text-sm">Beneficiaries</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">85%</div>
                <div className="text-white text-sm">Success Rate</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">15+</div>
                <div className="text-white text-sm">Communities</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">3 Years</div>
                <div className="text-white text-sm">Running</div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 text-base font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
                asChild
              >
                <Link href="/volunteer">
                  <Users className="mr-2 h-4 w-4" />
                  Get Involved
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base font-bold transition-all duration-300 shadow-xl"
                onClick={handleShare}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Program
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
      </section>

      {/* Program Gallery */}
      {program.gallery && program.gallery.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <Images className="w-4 h-4 mr-2" />
                Program Gallery
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">See Our Work in Action</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore photos from our {program.title} program activities and see the impact we're making in communities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {program.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => openGallery(index)}
                >
                  <img
                    src={image}
                    alt={`${program.title} activity ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Images className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className="absolute top-4 left-4 z-10">
            <DialogTitle className="bg-black/50 text-white px-3 py-1 rounded">
              {program?.title} Gallery ({currentImageIndex + 1} of {program?.gallery?.length || 0})
            </DialogTitle>
          </DialogHeader>
          
          {program?.gallery && (
            <div className="relative">
              <img
                src={program.gallery[currentImageIndex]}
                alt={`${program.title} activity ${currentImageIndex + 1}`}
                className="w-full h-[70vh] object-cover"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Close button */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Thumbnail strip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="flex space-x-2 bg-black/50 p-2 rounded-lg max-w-xs overflow-x-auto">
                  {program.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-colors duration-200 ${
                        index === currentImageIndex ? 'border-white' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

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