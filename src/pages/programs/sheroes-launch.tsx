import { useMemo } from "react";
import { Link } from "wouter";
import {
  Sprout,
  ArrowRight,
  Building,
  Users,
  Target,
  Calendar,
  Share2,
  Award,
  HeartHandshake,
  Globe2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/ui/seo-head";
import { programs } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function SheroesLaunch() {
  const heroRef = useScrollAnimation({ delay: 200 });
  const { toast } = useToast();

  // Get the Sheroes program data
  const program = programs.find((p) => p.id === "sheroes");

  const launch = {
    date: "April 26, 2024",
    venue: "School of Medical Sciences Auditorium, University of Cape Coast",
    attendees: "≈800 students",
    goals: [
      "Increase representation of girls in STEM education and careers",
      "Provide a robust foundation via interactive, hands-on activities",
      "Reduce gender disparity and foster diversity in ICT and STEM",
    ],
    sdgs: ["SDG 4", "SDG 5", "SDG 8", "SDG 10"],
    speakers: [
      {
        name: "Prof. Nana Ama Browne Klutse",
        info: "Head of Physics Department - University of Ghana, Vice Chair PCC",
        image: "https://via.placeholder.com/150?text=Prof.+Nana+Ama+Browne+Klutse",
      },
      {
        name: "Sarah DeMartazzi",
        info: "Program Manager, Women in STEM - The Henry Luce Foundation, New York",
        image: "https://molexfoundation.org/images/speakers/Sarah_DeMartazzi_010924_098.jpg",
      },
      {
        name: "Dr. Regina Esi Turkson",
        info: "Senior Lecturer, Department of Computer Science and Information Technology - University of Cape Coast",
        image: "https://via.placeholder.com/150?text=Dr.+Regina+Esi+Turkson",
      },
      {
        name: "Adelaide Asantewa Asante",
        info: "Head of West Africa Office for UK Ecology and Hydrology",
        image: "https://via.placeholder.com/150?text=Adelaide+Asantewa+Asante",
      },
      {
        name: "Dr. Irene Kafui Vorsah Amponsah",
        info: "Lecturer, Department of Statistics - University of Cape Coast",
        image: "https://via.placeholder.com/150?text=Dr.+Irene+Kafui+Vorsah+Amponsah",
      },
    ],
    highlights: [
      "Inspirational talks from leading experts",
      "Panel discussions on gender equality in STEM",
      "Interactive workshops and demonstrations",
      "Networking opportunities for students and educators",
      "Launch of the 5-year SHEROES initiative",
    ],
  };

  const handleShare = async () => {
    const shareData = {
      title: "SHEROES in STEM Launch Event",
      text: "Join us for the launch of SHEROES in STEM - empowering girls in robotics, AI, and electronics.",
      url: typeof window !== "undefined" ? window.location.href : undefined,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url ?? "");
        toast({
          title: "Link copied",
          description: "Launch event URL copied to your clipboard.",
        });
      }
    } catch {
      toast({
        title: "Share failed",
        description: "Could not share right now. Please try again.",
        variant: "destructive",
      });
    }
  };

  const sdgBadges = useMemo(
    () =>
      launch.sdgs.map((g) => (
        <Badge key={g} className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
          {g}
        </Badge>
      )),
    []
  );

  return (
    <>
      <SEOHead
        title="SHEROES in STEM Launch Event - MOLEX Foundation Africa"
        description="The official launch of SHEROES in STEM on April 26, 2024, at University of Cape Coast - empowering girls in STEM education."
        keywords="SHEROES launch, STEM education, girls in STEM, gender equality, MOLEX Foundation, University of Cape Coast"
      />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-21_1.jpg?alt=media&token=75a6022c-fd87-4310-8363-49e6e4bcfce3"
          alt="SHEROES Launch Event"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                Launch Event
              </Badge>
              <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                {launch.date}
              </Badge>
              <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                {launch.attendees}
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-5xl font-bold mb-4 leading-tight">
              SHEROES in STEM Launch
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-6">
              The beginning of a transformative journey empowering girls in robotics, AI, and electronics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-bold" asChild>
                <Link href="/programs/sheroes">View Full Program</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-8 py-4 text-lg font-bold"
                asChild
              >
                <Link href="/join-us">Join SHEROES</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Event Overview
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The SHEROES in STEM program was officially launched on <strong>{launch.date}</strong> at the{" "}
                <strong>{launch.venue}</strong>, drawing <strong>{launch.attendees}</strong> from across Ghana.
                This landmark event marked the beginning of MOLEX Foundation Africa's commitment to closing the gender gap in STEM education.
              </p>
              <h3 className="text-2xl font-semibold mt-8">Event Goals</h3>
              <ul className="list-disc list-inside">
                {launch.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">{sdgBadges}</div>
            </div>
          </div>

          {/* Event Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-xl font-bold">Event Details</h3>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Date</div>
                    <div className="text-gray-600 dark:text-gray-300">{launch.date}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Venue</div>
                    <div className="text-gray-600 dark:text-gray-300">{launch.venue}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Attendees</div>
                    <div className="text-gray-600 dark:text-gray-300">{launch.attendees}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" className="w-full" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Event
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/sheroes-application">Apply Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/programs/sheroes/cohort1">View Cohort 1</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      {/* <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Event Highlights</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Key moments and activities from the launch event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {launch.highlights.map((highlight, index) => {
              const icons = [Award, HeartHandshake, Target, Users, Globe2];
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={highlight} className="overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 flex items-center justify-center">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Featured Speakers */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Featured Speakers</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Distinguished experts who shared their insights and inspired the next generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {launch.speakers.map((speaker, index) => (
              <Card key={speaker.name}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <h3 className="text-lg font-semibold">{speaker.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={heroRef}
        className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Sprout className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Be Part of the SHEROES Legacy
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            The launch was just the beginning. Join us in building a future where girls lead in STEM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100" asChild>
              <Link href="/join-us">Apply Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-700"
              asChild
            >
              <Link href="/programs/sheroes">Learn More About SHEROES</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
