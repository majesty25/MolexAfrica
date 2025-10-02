import { Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function RoboticsAISection() {
  const roboticsRef = useScrollAnimation();

  return (
    <section ref={roboticsRef} className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F3M3A8523.jpg?alt=media&token=6ef5f82f-dca9-42da-848a-ccda84eb8394"
                alt="Students working on robotics and AI projects"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Tech Badge */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">Innovation</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Future Ready</div>
              </div>
            </div>
            
            {/* Impact Stats */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">SHS Schools</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              STEM Innovation
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Robotics & AI Clubs?
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Many students in SHS have limited exposure to practical STEM education, especially in emerging 
                fields like robotics and AI. This project was launched to bridge that gap by nurturing curiosity, 
                creativity, and problem-solving skills through hands-on training.
              </p>
              
              <p>
                By equipping students with foundational knowledge in robotics and AI, the project empowers them 
                to become innovators who can contribute to solving real challenges in their communities and beyond.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="w-full sm:w-auto">
                <Link href="/programs/1" className="flex items-center">
                  Explore STEM Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/join-us">Join Our Initiative</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}