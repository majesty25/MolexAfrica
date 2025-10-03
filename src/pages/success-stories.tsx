import { useState } from "react";
import { Link } from "wouter";
import { Star, ArrowLeft, Calendar, MapPin, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/ui/seo-head";
import { successStories } from "@/lib/data";
import { SuccessStory } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// Extended success stories for the dedicated page
const extendedSuccessStories = [
  ...successStories
];

export default function SuccessStories() {
  const [selectedProgram, setSelectedProgram] = useState<string>('all');
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const programs = Array.from(new Set(extendedSuccessStories.map(story => story.program)));

  const filteredStories = selectedProgram === 'all'
    ? extendedSuccessStories
    : extendedSuccessStories.filter(story => story.program === selectedProgram);

  const openModal = (story: SuccessStory) => {
    setSelectedStory(story);
  };

  const closeModal = () => {
    setSelectedStory(null);
  };

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
                <CardContent className="p-6 cursor-pointer" onClick={() => openModal(story)}>
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

      {/* Modal for full story */}
      <Dialog open={!!selectedStory} onOpenChange={closeModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedStory?.name}</DialogTitle>
            <DialogDescription>
              <div className="mb-4">
                <strong>Location:</strong> {selectedStory?.location} | <strong>Age:</strong> {selectedStory?.age}
              </div>
              <p className="mb-4">{selectedStory?.story}</p>
              <div className="bg-primary/5 dark:bg-primary/10 p-3 rounded-lg mb-4">
                <div className="text-xs font-medium text-primary mb-1">Achievement</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {selectedStory?.achievement}
                </div>
              </div>
              <blockquote className="border-l-3 border-primary pl-3 text-sm italic text-gray-600 dark:text-gray-300 mb-4">
                "{selectedStory?.quote}"
              </blockquote>
              {selectedStory?.date && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(selectedStory.date).toLocaleDateString()}</span>
                </div>
              )}
            </DialogDescription>
            <DialogClose asChild>
              <Button variant="outline" className="mt-4">Close</Button>
            </DialogClose>
          </DialogHeader>
        </DialogContent>
      </Dialog>

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
