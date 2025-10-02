import { Users, Heart, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function ImpactfulApproach() {
  const approachRef = useScrollAnimation();

  return (
    <section ref={approachRef} className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Commitment
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Impactful Approach to 
              <span className="block text-primary mt-2">Vulnerable Youth</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                The MOLEX Foundation Africa stands as a stalwart beacon of dedicated effort, committed to fostering the growth and empowerment of children and young individuals, with a special emphasis on those who find themselves vulnerable and marginalized. At the heart of our mission lies the fervent belief in not only acknowledging their rights but also actively enabling them to seize these rights and pave the way toward equal opportunities for the pursuit of their aspirations and hidden potentials.
              </p>
              
              {/* <p>
                Through targeted programs, mentorship opportunities, and community partnerships, we create safe 
                spaces where vulnerable youth can develop their potential, build resilience, and access the 
                resources they need to thrive.
              </p> */}
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-2xl font-bold text-blue-600">85%</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Youth Retention</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Heart className="h-8 w-8 text-green-600 mb-2" />
                <span className="text-2xl font-bold text-green-600">200+</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Lives Transformed</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Shield className="h-8 w-8 text-purple-600 mb-2" />
                <span className="text-2xl font-bold text-purple-600">15+</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Safe Spaces</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F1.jpg?alt=media&token=c3128422-d438-4617-b407-4edfd26c6b38"
                alt="Youth empowerment program"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F3M3A8759.jpg?alt=media&token=7920e5bc-f1f7-4e73-9531-d152606c6178"
                alt="Community support session"
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fphoto_2024-09-23_15-41-55.jpg?alt=media&token=112f5621-99be-4beb-ba88-b31c12731067"
                alt="Youth leadership training"
                className="w-full h-48 object-cover rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F3M3A0124.jpg?alt=media&token=e251e6ca-7032-450f-9fbc-ece3001bb2bf"
                alt="Mentorship program"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Floating Achievement */}
            <div className="absolute -top-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-lg font-bold">24/7</div>
                <div className="text-xs">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}