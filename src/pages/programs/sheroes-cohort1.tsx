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
  BookOpen,
  Cpu,
  Activity,
  Radio,
  Bot,
  Globe2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/ui/seo-head";
import { ProgramGallery } from "@/components/programs/ProgramGallery";
import { programs } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { ProgramImpactBanner } from "@/components/programs/ProgramImpactBanner";
import { useToast } from "@/hooks/use-toast";

type Expert = { title: string; name: string; focus?: string };
type Mentor = { name: string; theme: string; key_points: string[] };
type Project = { title: string; summary: string; highlights: string[] };
type SuccessStory = {
  name: string;
  school: string;
  bullets: string[];
};

export default function SheroesCohort1() {
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
  };

  const cohort = {
    name: "Cohort 1",
    month: "September 2024",
    location: "Embedded Systems Lab, Department of Physics, UCC",
    applied: 170,
    selected: 60,
    schools: 20,
    duration: "1 Month",
    scholarship: [
      "Accommodation",
      "Meals",
      "Healthcare",
      "Toiletries",
    ],
    registrationDate: "September 8, 2024",
  };

  const experts: Expert[] = [
    { title: "Climate Science", name: "Dr. Francis Nkrumah" },
    { title: "AI & Leadership", name: "Dr. Regina Esi Turkson" },
    {
      title: "Climate Data Science & Policy",
      name: "Prof. Nana Ama Browne Klutse",
    },
    { title: "Astronomy & Space Technology", name: "Mr. Solomon Appekey" },
    {
      title: "Statistics & Data Analysis",
      name: "Dr. Irene Kafui Vorsah Amponsah",
    },
  ];

  const mentors: Mentor[] = [
    {
      name: "Captain Tabitha Simons-Dzadzie",
      theme: "Empowerment, Confidence & Leadership",
      key_points: [
        "Never stop learning; set high standards",
        "Don’t let background define your future—let it empower you",
        "Balance excellence with responsibility",
      ],
    },
    {
      name: "Miss Adelaide Asantewaa Asante",
      theme: "Leadership & Self-Confidence",
      key_points: [
        "Build confidence aligned with your character",
        "Network intentionally and find role models",
        "Test decisions with trusted mentors",
      ],
    },
    {
      name: "Miss Ivy Beauty Amartey",
      theme: "Gender-Based Violence Awareness",
      key_points: [
        "Recognize forms of GBV (physical, vertical/horizontal, verbal/physical sexual abuse)",
        "Value yourself; make safe choices online/offline",
        "Stay vigilant and speak up",
      ],
    },
    {
      name: "Dr. Irene Kafui Vorsah Amponsah",
      theme: "Resilience & Self-Belief",
      key_points: [
        "Turn adversity into fuel for achievement",
        "Use empowering language about yourself",
        "Persevere—“keep going, keep believing”",
      ],
    },
  ];

  const coreLessons = [
    {
      icon: BookOpen,
      title: "Fundamentals of Learning",
      items: [
        "Learning vs. Studying",
        "Barriers (Lack of Mass, Skipped Gradient, Misunderstood Words) & Remedies",
      ],
    },
    {
      icon: Cpu,
      title: "Arduino Technology",
      items: [
        "UNO board & pinout",
        "Sensors (flame, water, ultrasonic), LEDs, motors",
        "Fritzing for circuit visualization",
      ],
    },
    {
      icon: Activity,
      title: "Basic Electronics",
      items: ["Ohm’s Law", "Current, Voltage, Resistance", "Soldering & PCB basics"],
    },
    {
      icon: Radio,
      title: "Circuit Design & Prototyping",
      items: ["Breadboard wiring", "Clay modeling for ‘mass’", "Debugging practices"],
    },
  ];

  const projects: Project[] = [
    {
      title: "Temperature Control with LCD (LM35)",
      summary:
        "Measured ambient temperature and displayed readings; controlled fans/heaters via thresholds.",
      highlights: ["LM35 sensor", "2×16 LCD", "Automated control logic"],
    },
    {
      title: "Servo Motor Control (Potentiometer → 0–180°)",
      summary:
        "Mapped analog input to servo angle for applications like robotic arms.",
      highlights: ["Analog read", "Servo write", "Realtime control"],
    },
    {
      title: "Ultrasonic Distance Measurement",
      summary:
        "Non-contact ranging with LED indicators for near/far thresholds (e.g., 40 cm).",
      highlights: ["HC-SR04", "Threshold logic", "Status LEDs"],
    },
    {
      title: "Robotic Cars & Robotic Arms",
      summary:
        "Assembled drive systems and manipulators; explored obstacle avoidance and remote control.",
      highlights: ["Motors", "ESP32 Wi-Fi module (where applicable)", "Line tracking"],
    },
  ];

  const enrichment = [
    "Aerobics at Cape Coast Sports Stadium (focus & wellbeing)",
    "Talent & Karaoke Nights (community & confidence)",
    "Movie Night: Hidden Figures (women in STEM inspiration)",
    "Interviews & Exhibition (public engagement & visibility)",
  ];

  const donationsAndLegacy = [
    "MOLEX donated 10 Arduino kits + 10 soldering kits to UCC Physics Department",
    "Commitment to provide a projector to support teaching/learning",
    "Department to add SHEROES students to PHYSAC mentorship group",
    "SHEROES confirmed as a 5-year initiative; Cohort 1 returns as alumni mentors",
  ];

  const successStories: SuccessStory[] = [
    {
      name: "Jessica Korkor Hammond",
      school: "Edinaman Senior High School",
      bullets: [
        "Overcame stereotype that “robotics is for boys.”",
        "Learned coding and effective use of Arduino kits.",
        "Understands applying robotics to solve SDGs.",
        "Motivated to give back to society.",
      ],
    },
    {
      name: "Blessing Ofosu Acheampong",
      school: "Abakrampa Senior High",
      bullets: [
        "Aspired to build a walking robot; learned robot parts and circuits.",
        "Gained confidence in coding and Physics (“not difficult” with the right teaching).",
        "Interacted with experts across Astronomy, Physics, and Engineering.",
      ],
    },
    {
      name: "Alexandra Didieye",
      school: "Wesley Girls’ High School",
      bullets: [
        "Shifted focus from purely software to hardware/electronics.",
        "Mastered Arduino components, circuit design, and programming basics.",
        "Described the bootcamp as transformative and confidence-building.",
      ],
    },
  ];

  const handleShare = async () => {
    const shareData = {
      title: "SHEROES in STEM – Cohort 1",
      text:
        "See how 60 Ghanaian girls built robots, learned AI, and led change at SHEROES in STEM Cohort 1.",
      url: typeof window !== "undefined" ? window.location.href : undefined,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url ?? "");
        toast({
          title: "Link copied",
          description: "Cohort story URL copied to your clipboard.",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <SEOHead
        title="SHEROES in STEM - Cohort 1 - MOLEX Foundation Africa"
        description="Cohort 1 trained 60 girls from 20 SHSs in robotics, AI, electronics, and leadership—backed by scholarships and mentorship."
        keywords="SHEROES in STEM, cohort 1, girls in STEM, STEM education, gender equality, MOLEX Foundation, University of Cape Coast"
      />

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-21_1.jpg?alt=media&token=75a6022c-fd87-4310-8363-49e6e4bcfce3"
          alt="SHEROES Cohort 1"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                Cohort 1 · Pioneers
              </Badge>
              <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                {launch.date}
              </Badge>
              <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200">
                {launch.attendees}
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-5xl font-bold mb-4 leading-tight">
              SHEROES in STEM — Cohort 1
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-6">
              The trailblazing first cohort empowering girls in robotics, AI, and electronics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-bold" asChild>
                <Link href="/programs/sheroes">View Main Program</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-8 py-4 text-lg font-bold"
                asChild
              >
                <Link href="/join-us">Join Next Cohort</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Launch */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Background & Launch
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                SHEROES in STEM launched on <strong>{launch.date}</strong> at the{" "}
                <strong>{launch.venue}</strong>, drawing <strong>{launch.attendees}</strong>. The initiative
                empowers girls to pursue STEM, close gender gaps, and nurture future innovators.
              </p>
              <ul className="list-disc list-inside">
                {launch.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">{sdgBadges}</div>

              <h3 className="text-2xl font-semibold mt-8">Cohort One Bootcamp</h3>
              <p>
                Held in <strong>{cohort.month}</strong> at <strong>{cohort.location}</strong>.
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Applications: ~{cohort.applied} · Selected: <strong>{cohort.selected}</strong> girls from{" "}
                  <strong>{cohort.schools}</strong> SHSs
                </li>
                <li>
                  Scholarships covered: {cohort.scholarship.join(", ")}
                </li>
                <li>Registration date: {cohort.registrationDate}</li>
                <li>Duration: {cohort.duration}</li>
              </ul>
            </div>
          </div>

          {/* Cohort Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-xl font-bold">Cohort Details</h3>

                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Cohort</div>
                    <div className="text-gray-600 dark:text-gray-300">{cohort.name}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Participants</div>
                    <div className="text-gray-600 dark:text-gray-300">{cohort.selected} girls · {cohort.schools} schools</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Duration</div>
                    <div className="text-gray-600 dark:text-gray-300">{cohort.duration}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-600 dark:text-gray-300">{cohort.location}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" className="w-full" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Cohort Story
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/sheroes-application">Apply Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/sheroes-portal">Access Participant Portal</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/join-us">Apply for Next Cohort</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="py-8 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-16.jpg?alt=media&token=ee9a68c6-d4a4-4da1-81b7-a37d384a3828"
            alt="SHEROES Activities"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Activities & Training */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Activities & Training</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Orientation, core STEM lessons, hands-on projects, and mentorship that equipped our Sheroes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coreLessons.map((c, index) => {
              const images = [
                "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              ];
              return (
                <Card key={c.title} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={images[index % images.length]}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <c.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{c.title}</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                      {c.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-4">Student Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, index) => {
              const projectImages = [
                "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                "https://images.unsplash.com/photo-1581092335878-4d5c51b7e4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              ];
              return (
                <Card key={p.title} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={projectImages[index % projectImages.length]}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Bot className="h-5 w-5 text-primary" />
                      <h4 className="text-lg font-semibold">{p.title}</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{p.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.highlights.map((h) => (
                        <Badge
                          key={h}
                          className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                        >
                          {h}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="py-8 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-20.jpg?alt=media&token=10d2d010-931d-439d-b25c-a4d122fd7ee9"
            alt="SHEROES Inspirational Sessions"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Inspirational Sessions */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Inspirational Sessions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Students engaged with leading experts and mentors across AI, climate, astronomy, and leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Experts</h3>
                <ul className="space-y-2">
                  {experts.map((e) => (
                    <li key={e.name} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>
                        <strong>{e.title}</strong> — {e.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Mentorship Highlights</h3>
                <ul className="space-y-4">
                  {mentors.map((m) => (
                    <li key={m.name}>
                      <div className="flex items-center gap-2 mb-1">
                        <HeartHandshake className="h-4 w-4 text-primary" />
                        <strong>{m.name}</strong> — {m.theme}
                      </div>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                        {m.key_points.map((kp) => (
                          <li key={kp}>{kp}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="py-8 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-34.jpg?alt=media&token=b763a65c-4a42-4f6c-aa59-8a7001e39b87"
            alt="SHEROES Enrichment Activities"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Enrichment & Extras */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Enrichment & Extras</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Beyond the lab—wellbeing, community, and public engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {enrichment.map((item, index) => {
              const icons = [Sprout, Users, Award, HeartHandshake];
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={item} className="overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 flex items-center justify-center">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes & Success Stories */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Outcomes & Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Confidence, skills, and a renewed vision for STEM careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((s, index) => (
              <Card key={s.name} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 flex items-center justify-center">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1594736797933-d0d3e341b921' : index === 1 ? '1546019865-9d4f4e4e66a1' : '1580618672591-eb180b1a973f'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400`}
                    alt={s.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{s.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{s.school}</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="py-8 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-42-09.jpg?alt=media&token=f8394307-19db-4c56-b91d-b623bc28b962"
            alt="SHEROES Success Stories"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Partnerships, Donations & Legacy */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Partnerships, Donations & Legacy</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Building a durable pipeline for girls in STEM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {donationsAndLegacy.map((d, index) => {
              const icons = [Award, HeartHandshake, Building, Users];
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={d} className="overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
                    <IconComponent className="h-12 w-12 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 dark:text-gray-300">{d}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Optional: Impact banner if your component expects props */}
      {program && (
        <ProgramImpactBanner
          program={program}
          onShare={handleShare}
        />
      )}

      {/* Program Gallery */}
      {program && <ProgramGallery key={program.id} program={program} />}

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
            Join the Next Generation of SHEROES
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Inspired by Cohort 1? Be part of the next chapter in empowering girls in STEM.
            Applications are now open for Cohorts 2–5.
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
