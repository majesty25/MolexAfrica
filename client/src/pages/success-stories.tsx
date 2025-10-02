import { useState } from "react";
import { Link } from "wouter";
import { Star, ArrowLeft, Calendar, MapPin, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/ui/seo-head";
import { successStories } from "@/lib/data";

// Extended success stories for the dedicated page
const extendedSuccessStories = [
  ...successStories,
  {
    id: '4',
    name: 'Adwoa Asante',
    age: 18,
    location: 'Kumasi, Ghana',
    story: 'Adwoa was passionate about technology but lacked access to proper resources and mentorship. Through our Digital Literacy and Innovation program, she gained coding skills and learned about emerging technologies. She participated in hackathons and tech workshops, eventually developing a mobile app to help farmers in her community access market information.',
    program: 'Digital Literacy & Innovation',
    achievement: 'Developed award-winning agricultural mobile app and received tech scholarship',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'Technology became my tool for solving real problems in my community. MOLEX Foundation opened doors I never knew existed.',
    date: '2024-01-15'
  },
  {
    id: '5',
    name: 'Salamatu Mohammed',
    age: 20,
    location: 'Bolgatanga, Ghana',
    story: 'Growing up in a rural community where early marriage was common, Salamatu faced pressure to drop out of school. Our Girls Education Advocacy program provided her with scholarship support, mentorship, and advocacy with her family. She continued her education and became a role model for other girls in her community.',
    program: 'Girls Education Advocacy',
    achievement: 'Completed secondary education and now studies at university while mentoring 20+ girls',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c5c5c7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'Education saved my life. Now I am determined to ensure no girl in my community faces the same barriers I did.',
    date: '2024-02-20'
  },
  {
    id: '6',
    name: 'Maame Efua',
    age: 22,
    location: 'Ho, Ghana',
    story: 'Maame Efua survived domestic violence and found herself homeless with two young children. Through our SGBV Prevention and Support program, she received emergency shelter, legal assistance, and skills training. She learned tailoring and business management, eventually starting her own fashion business that now employs five other women.',
    program: 'SGBV Prevention & Support',
    achievement: 'Built successful fashion business employing 5 women and became community advocate',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'From survivor to entrepreneur to advocate - my journey shows that with the right support, we can transform pain into purpose.',
    date: '2024-03-10'
  },
  {
    id: '7',
    name: 'Yaa Pokua',
    age: 15,
    location: 'Sunyani, Ghana',
    story: 'Yaa was struggling with chemistry and physics, feeling discouraged about pursuing science. Through the SHEROES in STEM program, she found passionate mentors and hands-on laboratory experiences that rekindled her love for science. She now leads her school science club and dreams of becoming a biomedical engineer.',
    program: 'SHEROES in STEM',
    achievement: 'Became science club president and won regional chemistry competition',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'Science is not just for boys. Through SHEROES in STEM, I learned that girls can lead in laboratories and innovation.',
    date: '2024-04-05'
  },
  {
    id: '8',
    name: 'Adjoa Mensah',
    age: 19,
    location: 'Takoradi, Ghana',
    story: 'Coming from a fishing community affected by climate change, Adjoa witnessed firsthand how rising sea levels impacted her family livelihood. Through our Climate Resilience program, she learned about sustainable practices and renewable energy. She now leads environmental initiatives in her community and studies environmental science.',
    program: 'Climate Resilience',
    achievement: 'Established community solar project and received environmental leadership award',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'Climate change threatened our future, but through education and action, we are building a more sustainable tomorrow.',
    date: '2024-05-12'
  },
  {
    id: '9',
    name: 'Akua Boateng',
    age: 17,
    location: 'Tarkwa, Ghana',
    story: 'Akua lost both parents to preventable diseases due to lack of access to healthcare information. Through our Health Education and Advocacy program, she learned about health promotion and disease prevention. She now volunteers as a community health educator and plans to study medicine to serve rural communities.',
    program: 'Health Education & Advocacy',
    achievement: 'Trained 200+ community members in health practices and received medical scholarship',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'Every person deserves access to health information and care. I will dedicate my life to making this a reality.',
    date: '2024-06-18'
  }
];

export default function SuccessStories() {
  const [selectedProgram, setSelectedProgram] = useState<string>('all');

  const programs = Array.from(new Set(extendedSuccessStories.map(story => story.program)));
  
  const filteredStories = selectedProgram === 'all' 
    ? extendedSuccessStories 
    : extendedSuccessStories.filter(story => story.program === selectedProgram);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Success Stories - MOLEX Foundation Africa"
        description="Read inspiring success stories from the young people and communities transformed through MOLEX Foundation Africa's programs. Real stories of empowerment, education, and impact."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Real stories of transformation, empowerment, and impact from the young people and communities we serve across Africa.
            </p>
            <div className="flex items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 fill-current" />
                <span>{extendedSuccessStories.length} Stories</span>
              </div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>{programs.length} Programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Filter by Program
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant={selectedProgram === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedProgram('all')}
                size="sm"
              >
                All Stories ({extendedSuccessStories.length})
              </Button>
              {programs.map((program) => (
                <Button
                  key={program}
                  variant={selectedProgram === program ? 'default' : 'outline'}
                  onClick={() => setSelectedProgram(program)}
                  size="sm"
                >
                  {program} ({extendedSuccessStories.filter(s => s.program === program).length})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Card key={story.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-white">
                      {story.program}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{story.location}</span>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span>Age {story.age}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {story.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {story.story}
                  </p>
                  
                  <div className="bg-primary/5 dark:bg-primary/10 p-3 rounded-lg mb-4">
                    <div className="text-xs font-medium text-primary mb-1">Achievement</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {story.achievement}
                    </div>
                  </div>
                  
                  <blockquote className="border-l-3 border-primary pl-3 text-sm italic text-gray-600 dark:text-gray-300 mb-4">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    {story.date && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(story.date).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Be Part of the Next Success Story
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Every donation, volunteer hour, and partnership helps create more stories like these. 
            Join us in empowering the next generation of leaders across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/donate">Support Our Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/partner">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="fixed bottom-6 left-6">
        <Button variant="outline" size="sm" asChild className="shadow-lg">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}