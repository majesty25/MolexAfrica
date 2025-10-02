import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'wouter';
import { successStories } from '@/lib/data';

export function SuccessStoriesNotification() {
  const [showModal, setShowModal] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); // Show notification after 2 seconds
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll through stories
  useEffect(() => {
    if (!showModal || isPaused) return;

    const autoScrollTimer = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
    }, 4000); // Change story every 4 seconds

    return () => clearInterval(autoScrollTimer);
  }, [showModal, isPaused]);

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000); // Pause auto-scroll for 6 seconds after manual navigation
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000); // Pause auto-scroll for 6 seconds after manual navigation
  };

  const currentStory = successStories[currentStoryIndex];

  if (!showModal || !currentStory) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 animate-in slide-in-from-right duration-500"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="p-4">
        {/* Close button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        {/* Header */}
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-primary">Success Story</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">Real transformation</p>
        </div>
        
        {/* Story content */}
        <div className="flex items-start space-x-3">
          <img
            src={currentStory.image}
            alt={currentStory.name}
            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center mb-1">
              <h5 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {currentStory.name}
              </h5>
              <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                {currentStory.age}
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
              {currentStory.location}
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed">
              "{currentStory.story.substring(0, 120)}..."
            </p>
          </div>
        </div>
        
        {/* Navigation and CTA */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-1">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentStoryIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 6000);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentStoryIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={prevStory}
              className="p-1 text-gray-400 hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button
              onClick={nextStory}
              className="p-1 text-gray-400 hover:text-primary transition-colors"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
            <Link 
              href="/success-stories"
              className="text-xs text-primary hover:text-primary/80 font-medium ml-2"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}