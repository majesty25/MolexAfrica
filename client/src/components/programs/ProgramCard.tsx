import { ArrowRight, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import type { Program } from '@/lib/types';

interface ProgramCardProps {
  program: Program;
  featured?: boolean;
}

export function ProgramCard({ program, featured = false }: ProgramCardProps) {
  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
      featured ? 'border-primary shadow-lg' : 'border-gray-200 dark:border-gray-700'
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {program.category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {program.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {program.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Multiple Locations</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>Active Program</span>
          </div>
        </div>
        
        <Button asChild className="w-full group/btn">
          <Link href={`/programs/${program.id}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}