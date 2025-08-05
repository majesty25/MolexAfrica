import { useRef } from 'react';
import { SEOHead } from '@/components/ui/seo-head';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { SuccessStoriesNotification } from '@/components/home/SuccessStoriesNotification';
import { ImpactBanner } from '@/components/home/ImpactBanner';
import { SHEROESSection } from '@/components/home/SHEROESSection';
import { OurPriorities } from '@/components/home/OurPriorities';
import { RoboticsAISection } from '@/components/home/RoboticsAISection';
import { ImpactfulApproach } from '@/components/home/ImpactfulApproach';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEOHead
        title="MOLEX Foundation Africa - Empowering Communities Across Africa"
        description="MOLEX Foundation Africa is dedicated to improving lives through education, healthcare, and community development programs across the African continent."
        keywords="foundation, africa, charity, education, healthcare, community development, nonprofit"
      />

      {/* Success Stories Notification */}
      <SuccessStoriesNotification />
      
      {/* Hero Carousel Section */}
      <HeroCarousel heroRef={heroRef} />

      {/* SHEROES in STEM Section */}
      <SHEROESSection />

      {/* Our Priorities Section */}
      <OurPriorities />

      {/* Impact Banner */}
      <ImpactBanner />

      {/* Robotics & AI Section */}
      <RoboticsAISection />

      {/* Impactful Approach Section */}
      <ImpactfulApproach />
    </>
  );
}