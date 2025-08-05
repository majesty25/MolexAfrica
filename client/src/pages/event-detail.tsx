import { useParams, Link } from "wouter";
import { Calendar, MapPin, Users, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/ui/seo-head";
import { events } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function EventDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Event Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The event you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/events">Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Event link has been copied to your clipboard.",
      });
    }
  };

  const handleRegister = () => {
    toast({
      title: "Registration Started",
      description: "You will be redirected to the registration form.",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEOHead
        title={`${event.title} - MOLEX Foundation Africa`}
        description={event.description}
        keywords={`${event.title}, foundation event, african community, ${event.category}`}
      />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{event.title}</h1>
            <p className="text-xl">{formatDate(event.date)} • {event.location}</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Event Details */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About This Event</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Networking opportunities with like-minded individuals</li>
                    <li>• Insights into our latest programs and initiatives</li>
                    <li>• Presentations from community leaders and beneficiaries</li>
                    <li>• Interactive sessions and Q&A opportunities</li>
                    <li>• Light refreshments and cultural entertainment</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Who Should Attend</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    This event is perfect for community leaders, development professionals, potential volunteers, 
                    donors, and anyone passionate about making a positive impact in African communities. Whether 
                    you're new to our organization or a long-time supporter, you'll find valuable insights and 
                    opportunities to get more involved.
                  </p>
                </div>
              </div>
            </div>

            {/* Event Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Event Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Date & Time</div>
                        <div className="text-gray-600 dark:text-gray-300">{formatDate(event.date)}</div>
                        <div className="text-gray-600 dark:text-gray-300">6:00 PM - 9:00 PM</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                        <div className="text-gray-600 dark:text-gray-300">{event.location}</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Expected Attendance</div>
                        <div className="text-gray-600 dark:text-gray-300">200+ participants</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Button onClick={handleRegister} className="w-full" size="lg">
                      Register Now
                    </Button>
                    <Button onClick={handleShare} variant="outline" className="w-full">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Event
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Registration Fee</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      This event is free to attend. Registration is required to help us plan for catering and seating.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Have Questions?</h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>Contact our events team:</p>
                    <p><strong>Email:</strong> events@molexfoundation.org</p>
                    <p><strong>Phone:</strong> +254 20 123 4567</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Other Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {events.filter(e => e.id !== event.id).slice(0, 2).map((relatedEvent) => (
              <Card key={relatedEvent.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={relatedEvent.image}
                  alt={relatedEvent.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{relatedEvent.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{relatedEvent.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(relatedEvent.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/events/${relatedEvent.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
