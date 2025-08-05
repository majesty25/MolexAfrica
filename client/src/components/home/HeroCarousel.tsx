import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const heroSlides = [
  {
    id: 1,
    title: "Empowering Girls Through STEM Education",
    subtitle: "Building tomorrow's leaders in science, technology, engineering, and mathematics",
    description: "We're breaking barriers and creating opportunities for African girls to excel in STEM fields, providing them with the tools and confidence to lead in the digital age.",
    image: "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F2A1A1383.jpg?alt=media&token=3372509c-27d7-497d-b35e-aa64cc5d0c2c",
    cta: "Explore STEM Programs",
    ctaLink: "/programs"
  },
  // {
  //   id: 2,
  //   title: "Advancing Gender Equality Across Africa",
  //   subtitle: "Creating inclusive communities where everyone can thrive",
  //   description: "Through advocacy, education, and community engagement, we're working to eliminate gender-based discrimination and create equal opportunities for all.",
  //   image: "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fphoto_2024-09-23_15-41-55.jpg?alt=media&token=112f5621-99be-4beb-ba88-b31c12731067",
  //   cta: "Join Our Mission",
  //   ctaLink: "/join-us"
  // },
  {
    id: 3,
    title: "Kiddie STEM",
    subtitle: "Delivers hands-on STEM to children in rural and underserved areas",
    description: "Our comprehensive SGBV prevention programs educate communities, support survivors, and work to create lasting change in attitudes and behaviors.",
    image: "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F3M3A8759.jpg?alt=media&token=1aa8c1dd-193a-4e6f-8b2c-01099217b41b",
    cta: "Learn More",
    ctaLink: "/programs"
  },
  {
    id: 4,
    title: "Robotics & AI Clubs in SHS",
    subtitle: "We inspire interest in STEM careers, particularly in Engineering, Technology, and AI",
    description: "We help communities adapt to climate change through sustainable practices, renewable energy solutions, and environmental education programs.",
    image: "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F3M3A8504.jpg?alt=media&token=edddfbb5-d7c7-474f-86f5-d836e3069934",
    cta: "Support Our Work",
    ctaLink: "/donate"
  }
];

interface HeroCarouselProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

export function HeroCarousel({ heroRef }: HeroCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);

    // Auto-play functionality
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 7000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off('reInit', onInit);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <section ref={heroRef} className="relative h-[70vh] sm:h-[85vh] overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-none w-full relative h-[70vh] sm:h-[85vh] flex items-center justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${slide.image}')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-slide-up">
                  <h1 className="text-2xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl sm:text-2xl lg:text-2xl text-gray-200 mb-6 font-medium">
                    {slide.subtitle}
                  </h2>
                  {/* <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                    {slide.description}
                  </p> */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105"
                      asChild
                    >
                      <Link href={slide.ctaLink}>
                        {slide.cta}
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-white text-red-900 hover:bg-red-900 hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
                      asChild
                    >
                      <Link href="/about">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 z-20 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          className="h-12 w-12 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm pointer-events-auto transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          className="h-12 w-12 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm pointer-events-auto transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-20">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}