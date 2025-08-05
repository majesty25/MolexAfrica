import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReadMoreProps {
  children: React.ReactNode;
  maxLines?: number;
  className?: string;
}

export function ReadMore({ children, maxLines = 3, className = "" }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={className}>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-none" : `line-clamp-${maxLines}`
        }`}
        style={
          !isExpanded
            ? {
                display: "-webkit-box",
                WebkitLineClamp: maxLines,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }
            : {}
        }
      >
        {children}
      </div>
      
      <div className="mt-4 flex justify-center">
        <Button
          variant="ghost"
          onClick={toggleExpanded}
          className="text-primary hover:text-primary/80 font-medium"
        >
          {isExpanded ? (
            <>
              Read Less
              <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Read More
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}