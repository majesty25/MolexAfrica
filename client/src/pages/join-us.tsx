import { useState } from "react";
import { Heart, Users, HandHeart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: "",
    experience: "",
    newsletter: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.interests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interests: "",
      experience: "",
      newsletter: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <SEOHead
        title="Join Us - MOLEX Foundation Africa"
        description="Join MOLEX Foundation Africa's mission to empower African communities. Volunteer, partner, or support our work in education, healthcare, and development."
        keywords="volunteer opportunities, join foundation, african development volunteer, community work, nonprofit volunteering"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Be part of the change. Join us as a volunteer, partner, or supporter and help us 
              transform lives across African communities through sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Join Form */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get Involved Today</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="interests">Areas of Interest *</Label>
                  <Select value={formData.interests} onValueChange={(value) => handleInputChange("interests", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education Programs</SelectItem>
                      <SelectItem value="healthcare">Healthcare Initiatives</SelectItem>
                      <SelectItem value="development">Community Development</SelectItem>
                      <SelectItem value="fundraising">Fundraising & Events</SelectItem>
                      <SelectItem value="technology">Technology & Digital Skills</SelectItem>
                      <SelectItem value="general">General Volunteering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Tell us about your experience or how you'd like to help</Label>
                  <Textarea
                    id="experience"
                    rows={4}
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Share your background, skills, or how you'd like to contribute..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    I'd like to receive updates about MOLEX Foundation's work and volunteer opportunities
                  </Label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <HandHeart className="mr-2 h-5 w-5" />
                  Join Our Mission
                </Button>
              </form>
            </div>

            {/* Opportunities Content */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Volunteer Opportunities</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Join our team of dedicated volunteers and make a direct impact in African communities 
                    through various programs and initiatives. From on-site work to remote support, 
                    there are opportunities for every skill set and schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                  <HandHeart className="text-emerald-600 dark:text-emerald-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Partnership Opportunities</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Collaborate with us as a corporate partner, NGO, or government agency to amplify 
                    our impact and reach more communities. We value strategic partnerships that bring 
                    complementary expertise and resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <Heart className="text-purple-600 dark:text-purple-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Support Our Cause</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every contribution makes a difference. Support our programs through donations, 
                    fundraising events, or spreading awareness about our mission in your networks 
                    and communities.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-primary text-2xl mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Join 5,000+ Volunteers</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Making a difference across 20+ African countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Volunteer with Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover the benefits of joining our global community of changemakers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Impact</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Make a tangible difference in communities across Africa while gaining 
                  a global perspective on development challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-400 text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Skill Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Develop professional skills, cultural competency, and leadership abilities 
                  through hands-on experience in international development.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 dark:text-purple-400 text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Building</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a supportive community of like-minded individuals committed 
                  to creating positive change in the world.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 dark:text-orange-400 text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Career Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enhance your resume with meaningful volunteer experience and 
                  build a network of professionals in the development sector.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 dark:text-red-400 text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Personal Fulfillment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experience the deep satisfaction that comes from contributing 
                  to meaningful work that improves lives and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 dark:text-teal-400 text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Flexible Commitment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose from various volunteer opportunities that fit your schedule, 
                  from short-term projects to long-term commitments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hear from Our Volunteers</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stories from people who have joined our mission and made a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "Volunteering with MOLEX Foundation has been the most rewarding experience of my career. 
                  Seeing the direct impact of our work in the communities has been incredible."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">SK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Education Volunteer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "The skills I've gained and the connections I've made through volunteering have 
                  been invaluable for both my personal growth and professional development."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">MK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Michael Chen</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Healthcare Volunteer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "Being part of this community of changemakers has given me hope and purpose. 
                  Every day I see how our collective efforts are making a real difference."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">AP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Aisha Patel</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Program Coordinator</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your journey with MOLEX Foundation Africa starts here. Join thousands of volunteers 
            who are already creating positive change across the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
