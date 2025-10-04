
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Share2 } from "lucide-react";

interface ProgramImpactBannerProps {
  program: {
    title: string;
    category: string;
  };
  onShare: () => void;
}

export function ProgramImpactBanner({ program, onShare }: ProgramImpactBannerProps) {
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'education':
        return 'from-blue-600 via-blue-700 to-blue-800';
      case 'healthcare':
        return 'from-red-600 via-red-700 to-red-800';
      case 'development':
        return 'from-green-600 via-green-700 to-green-800';
      default:
        return 'from-primary via-primary/90 to-primary/80';
    }
  };

  return (
    <section className={`relative bg-gradient-to-r ${getCategoryGradient(program.category)} py-16 overflow-hidden`}>
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
            Through {program.title}, we're creating measurable impact and sustainable change in communities across Africa.
          </p>
          
          {/* Quick Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">60</div>
              <div className="text-white text-sm">Beneficiaries</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">90%</div>
              <div className="text-white text-sm">Success Rate</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">16</div>
              <div className="text-white text-sm">Regions</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-1">5 Years</div>
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
              className="border-2 bg-white text-red-700 hover:bg-gray-100 px-8 py-3 text-base font-bold transition-all duration-300 shadow-xl"
              onClick={onShare}
            >
              <Share2 className="bg-white text-red-700 hover:bg-gray-100" />
              Share Program
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-lg"></div>
    </section>
  );
}
