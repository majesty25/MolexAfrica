import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function SHEROESSection() {
  const sheroesRef = useScrollAnimation();

  return (
    <section ref={sheroesRef} className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Featured in Chronicle Newspaper
            </div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              SHEROES in STEM:
              <span className="block text-primary mt-2">Inspiring the Next Generation</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Our SHEROES in STEM initiative has been proudly featured on the front page of 'The Chronicle'. This recognition highlights the significant strides we are making in empowering young African girls to overcome barriers and achieve excellence in STEM fields. By showcasing the stories of these resilient and talented girls, we aim to inspire a new generation to pursue careers in science, technology, engineering, and mathematics. This milestone is a testament to the hard work, dedication, and passion driving this initiative forward.
              </p>

              <p>
                We extend our heartfelt gratitude to everyone who has supported this mission to foster a more inclusive and equitable future. Your contributions and encouragement are helping to create a world where every girl, regardless of background, has the opportunity to shine in STEM. Together, we are not just changing lives but also transforming communities and industries by unlocking the untapped potential of young girls across Africa. Let’s continue to champion this cause and inspire countless others to dream big and break boundaries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                <Link href="/programs/1" className="flex items-center">
                  Join SHEROES Program <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a href='https://thechronicle.com.gh/girls-in-stem-complete-molex-foundation-program/' className="w-full sm:w-auto btn btn-outline btn-lg flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                
                Read Chronicle Article
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-0">
              <div className="space-y-4">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F01.jpeg?alt=media&token=e943fc9b-90d8-4ea4-91f7-5975d8ae238e"
                  alt="Female students in STEM workshop"
                  className="w-[100vw] sm:w-[28vw] h-full object-cover rounded-lg shadow-lg"
                />
                {/* <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="Girls coding together"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                /> */}
              </div>
              {/* <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                  alt="STEM laboratory session"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Female engineers at work"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div> */}
            </div>

            {/* Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Girls Enrolled</div>
              </div>
            </div>

            {/* Media Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Featured Story
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}