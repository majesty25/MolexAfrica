import { Link } from "wouter";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/ui/seo-head";
import { events } from "@/lib/data";

export default function Events() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fundraising':
        return 'bg-primary/10 text-primary';
      case 'training':
        return 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400';
      case 'summit':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400';
    }
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
        title="Events - MOLEX Foundation Africa"
        description="Join MOLEX Foundation Africa's upcoming events, workshops, and community initiatives. Be part of the change across African communities."
        keywords="foundation events, african community events, fundraising gala, volunteer workshops, development summits"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join us in our mission to make a difference. Participate in our events and be part of 
              the change transforming African communities.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <strong>Date:</strong> {formatDate(event.date)}
                    </p>
                    <Button className="w-full" asChild>
                      <Link href={`/events/${event.id}`}>
                        Learn More & Register
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Event Calendar</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay updated with all our upcoming events and important dates
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="border-l-4 border-primary pl-4">
                  <div className="text-primary font-semibold text-sm mb-1">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{event.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{event.location}</p>
                  <Link 
                    href={`/events/${event.id}`}
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to stay informed about upcoming events, volunteer opportunities, 
            and the latest news from MOLEX Foundation Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
