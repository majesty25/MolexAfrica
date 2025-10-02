import { Button } from "@/components/ui/button";

interface ProgramFilterProps {
  filters: Array<{ value: string; label: string }>;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProgramFilter({ filters, activeFilter, onFilterChange }: ProgramFilterProps) {
  return (
    <div className="flex flex-wrap justify-center mb-12 gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "outline"}
          onClick={() => onFilterChange(filter.value)}
          className="transition-all duration-300"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
