import { GraduationCap, Heart, Shield, Sprout, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const priorities = [
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "To mentor, coach, and guide children and young people, ensuring equal access and opportunity for quality, inclusive education for the girl-child."
  },
  {
    icon: Heart,
    title: "Gender Equality Advocacy",
    description: "Empowering Communities for Climate Change Mitigation Strategies through Collective Action."
  },
  {
    icon: Shield,
    title: "SGBV Prevention",
    description: "To improve living standards through entrepreneurship, skill training, and community awareness."
  },
  {
    icon: Sprout,
    title: "Climate Resilience",
    description: "To foster enthusiasm among students, particularly girls, through initiatives such as SHEROES in STEM."
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description: "To create a safe environment for children and women against all forms of violence, gender discrimination, and climate change catastrophes."
  }
];

export function OurPriorities() {
  const prioritiesRef = useScrollAnimation();

  return (
    <section ref={prioritiesRef} className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Our Focus Areas
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Priorities</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Five key areas where we focus our efforts to create maximum impact and sustainable change across African communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {priorities.map((priority, index) => {
            const IconComponent = priority.icon;
            return (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {priority.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {priority.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}