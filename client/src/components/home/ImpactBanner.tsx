import { Target, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export function ImpactBanner() {
  return (
    <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='nonzero'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Making a Difference Since 2021
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block">Transforming Lives</span>
            {/* <span className="block text-yellow-400">Across Africa</span> */}
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Through innovative STEM education, gender equality initiatives, and community empowerment programs, 
            we're building a future where every child has the opportunity to thrive and lead.
          </p>
          
          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-white text-sm sm:text-base">Students Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-white text-sm sm:text-base">Communities Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-white text-sm sm:text-base">Programs Active</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-white text-sm sm:text-base">Volunteers</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              asChild
            >
              <Link href="/programs">
                <Target className="mr-2 h-5 w-5" />
                Explore Our Programs
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-red-900 hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-bold transition-all duration-300 shadow-2xl"
              asChild
            >
              <Link href="/donate">
                <Heart className="mr-2 h-5 w-5" />
                Support Our Mission
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/15 rounded-full blur-lg"></div>
    </section>
  );
}