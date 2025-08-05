import { useState } from "react";
import { Users, Heart, Target, Clock, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    interests: "",
    availability: "",
    experience: "",
    motivation: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll contact you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      skills: "",
      interests: "",
      availability: "",
      experience: "",
      motivation: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const opportunities = [
    {
      title: "STEM Education Coordinator",
      description: "Help organize and deliver STEM workshops for girls in rural communities",
      skills: ["Education", "STEM Background", "Communication"],
      commitment: "4-6 hours/week",
      icon: Target
    },
    {
      title: "Mentorship Program Guide",
      description: "Provide life coaching and career guidance to young women and youth",
      skills: ["Mentoring", "Life Coaching", "Leadership"],
      commitment: "2-3 hours/week",
      icon: Heart
    },
    {
      title: "Community Outreach Volunteer",
      description: "Engage with communities to promote our programs and initiatives",
      skills: ["Communication", "Community Engagement", "Local Languages"],
      commitment: "6-8 hours/week",
      icon: Users
    },
    {
      title: "Event Support Specialist",
      description: "Assist with organizing fundraising events and community gatherings",
      skills: ["Event Planning", "Organization", "Teamwork"],
      commitment: "Flexible",
      icon: Clock
    }
  ];

  const benefits = [
    "Gain valuable experience in nonprofit and community development",
    "Build leadership and professional skills",
    "Network with like-minded individuals and professionals",
    "Make a meaningful impact in African communities",
    "Receive volunteer recognition and certificates",
    "Access to training and development opportunities"
  ];

  return (
    <>
      <SEOHead
        title="Become a Volunteer - MOLEX Foundation Africa"
        description="Join our volunteer team and make a meaningful difference in African communities. Help empower girls, women, and youth through our various programs."
        keywords="volunteer opportunities, african development volunteer, nonprofit volunteer, community service"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Become a Volunteer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join our community of dedicated volunteers working to empower girls, women, and youth across Africa. 
              Your skills and passion can help create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Volunteer with Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Make a real difference while developing your skills and expanding your network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find the perfect role that matches your skills and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <opportunity.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{opportunity.commitment}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{opportunity.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fill out the application form below and we'll be in touch soon
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location/Country *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="interests">Areas of Interest *</Label>
                  <Select onValueChange={(value) => handleInputChange("interests", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stem-education">STEM Education</SelectItem>
                      <SelectItem value="mentorship">Mentorship & Life Coaching</SelectItem>
                      <SelectItem value="community-outreach">Community Outreach</SelectItem>
                      <SelectItem value="event-support">Event Support</SelectItem>
                      <SelectItem value="sgbv-advocacy">SGBV Advocacy</SelectItem>
                      <SelectItem value="climate-resilience">Climate Resilience</SelectItem>
                      <SelectItem value="leadership-development">Leadership Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="availability">Availability *</Label>
                  <Select onValueChange={(value) => handleInputChange("availability", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2-hours">1-2 hours per week</SelectItem>
                      <SelectItem value="3-5-hours">3-5 hours per week</SelectItem>
                      <SelectItem value="6-10-hours">6-10 hours per week</SelectItem>
                      <SelectItem value="10-plus-hours">10+ hours per week</SelectItem>
                      <SelectItem value="project-based">Project-based (flexible)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skills">Skills & Expertise</Label>
                  <Textarea
                    id="skills"
                    placeholder="Tell us about your relevant skills, qualifications, or expertise..."
                    value={formData.skills}
                    onChange={(e) => handleInputChange("skills", e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Previous Volunteer Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe any previous volunteer or community service experience..."
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Tell us what motivates you to volunteer with MOLEX Foundation Africa..."
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help! Contact our volunteer coordinator for more information about opportunities.
          </p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}