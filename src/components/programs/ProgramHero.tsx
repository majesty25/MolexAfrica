
import { Badge } from "@/components/ui/badge";

interface ProgramHeroProps {
  program: {
    title: string;
    description: string;
    category: string;
    image: string;
  };
}

export function ProgramHero({ program }: ProgramHeroProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'healthcare':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'development':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'education':
        return 'Education & Training';
      case 'healthcare':
        return 'Healthcare & Wellness';
      case 'development':
        return 'Community Development';
      default:
        return category;
    }
  };

  return (
    <section className="relative h-[60vh] overflow-hidden">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <Badge className={`${getCategoryColor(program.category)} mb-4`}>
            {getCategoryLabel(program.category)}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{program.title}</h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto">{program.description}</p>
        </div>
      </div>
    </section>
  );
}
