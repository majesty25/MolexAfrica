interface ImpactStat {
  value: string;
  label: string;
  description?: string;
}

interface ImpactStatsProps {
  stats: ImpactStat[];
  title?: string;
  description?: string;
  className?: string;
}

export function ImpactStats({ stats, title, description, className = "" }: ImpactStatsProps) {
  return (
    <section className={`py-20 bg-gray-50 dark:bg-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-xl text-gray-600 dark:text-gray-300">{description}</p>
            )}
          </div>
        )}

        <div className={`grid ${stats.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : stats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              {stat.description && (
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}