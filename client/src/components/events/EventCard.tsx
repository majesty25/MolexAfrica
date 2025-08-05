import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import type { Event } from '@/lib/types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const day = eventDate.getDate();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-gray-200 dark:border-gray-700">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg text-center">
          <div className="text-xs font-semibold text-primary uppercase">{month}</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">{day}</div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {event.description}
        </p>
        
        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{eventDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span>Open to all</span>
          </div>
        </div>
        
        <Button asChild variant="outline" className="w-full">
          <Link href={`/events/${event.id}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}