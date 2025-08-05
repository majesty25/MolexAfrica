import { useState } from "react";
import { Building, Handshake, Globe, Target, CheckCircle, Send, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";

export default function Partner() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    organizationType: "",
    location: "",
    partnershipType: "",
    description: "",
    resources: "",
    goals: "",
    timeline: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Inquiry Submitted!",
      description: "Thank you for your interest in partnering with us. We'll review your proposal and get back to you soon.",
    });
    setFormData({
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      organizationType: "",
      location: "",
      partnershipType: "",
      description: "",
      resources: "",
      goals: "",
      timeline: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const partnershipTypes = [
    {
      title: "Strategic Partnership",
      description: "Long-term collaboration to achieve shared goals and amplify impact across multiple programs",
      benefits: ["Joint program development", "Shared resources and expertise", "Co-branded initiatives", "Policy advocacy"],
      icon: Target
    },
    {
      title: "Corporate Partnership",
      description: "Collaborate with businesses to support our mission through funding, expertise, or employee engagement",
      benefits: ["CSR alignment", "Employee volunteer programs", "Skills-based volunteering", "Brand visibility"],
      icon: Building
    },
    {
      title: "Academic Partnership",
      description: "Partner with educational institutions to enhance our STEM programs and research initiatives",
      benefits: ["Research collaboration", "Student internships", "Curriculum development", "Knowledge exchange"],
      icon: Award
    },
    {
      title: "Government Partnership",
      description: "Work with government agencies to scale our impact and align with national development goals",
      benefits: ["Policy influence", "Resource mobilization", "Wider reach", "Sustainable funding"],
      icon: Globe
    }
  ];

  const benefits = [
    "Amplify your organization's social impact",
    "Access to extensive network across Africa",
    "Joint funding opportunities and grants",
    "Shared expertise and best practices",
    "Enhanced brand reputation and visibility",
    "Meaningful contribution to sustainable development"
  ];

  const currentPartners = [
    { name: "African Development Bank", type: "Financial Institution", focus: "Program Funding" },
    { name: "University of Ghana", type: "Academic", focus: "STEM Education Research" },
    { name: "UN Women Africa", type: "International Organization", focus: "Gender Equality" },
    { name: "MTN Group", type: "Corporate", focus: "Digital Innovation" },
    { name: "Kenya Ministry of Education", type: "Government", focus: "Policy Development" },
    { name: "Mastercard Foundation", type: "Foundation", focus: "Youth Empowerment" }
  ];

  return (
    <>
      <SEOHead
        title="Become a Partner - MOLEX Foundation Africa"
        description="Partner with MOLEX Foundation Africa to amplify impact across African communities. Explore strategic, corporate, academic, and government partnership opportunities."
        keywords="partnership opportunities, corporate partnership, strategic alliance, african development partnership"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Become a Partner
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join forces with MOLEX Foundation Africa to create lasting change. Together, we can amplify our impact 
              and empower more communities across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Partner with Us?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                MOLEX Foundation Africa offers unique opportunities for meaningful collaboration that creates 
                sustainable impact across African communities while achieving your organization's goals.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Partnership collaboration"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore different ways to collaborate and make a meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <partnership.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{partnership.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{partnership.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {partnership.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join our network of trusted partners making a difference across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{partner.type}</p>
                  <p className="text-xs text-primary">{partner.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Start a Partnership</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tell us about your organization and how we can work together
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organizationName">Organization Name *</Label>
                    <Input
                      id="organizationName"
                      value={formData.organizationName}
                      onChange={(e) => handleInputChange("organizationName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactName">Contact Person *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange("contactName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="organizationType">Organization Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("organizationType", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nonprofit">Non-profit Organization</SelectItem>
                        <SelectItem value="corporate">Corporate/Business</SelectItem>
                        <SelectItem value="government">Government Agency</SelectItem>
                        <SelectItem value="academic">Academic Institution</SelectItem>
                        <SelectItem value="foundation">Foundation</SelectItem>
                        <SelectItem value="international">International Organization</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="partnershipType">Partnership Interest *</Label>
                    <Select onValueChange={(value) => handleInputChange("partnershipType", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strategic">Strategic Partnership</SelectItem>
                        <SelectItem value="corporate">Corporate Partnership</SelectItem>
                        <SelectItem value="academic">Academic Partnership</SelectItem>
                        <SelectItem value="government">Government Partnership</SelectItem>
                        <SelectItem value="funding">Funding Partnership</SelectItem>
                        <SelectItem value="implementation">Implementation Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Organization Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your organization, mission, and current activities..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="resources">Resources & Capabilities</Label>
                  <Textarea
                    id="resources"
                    placeholder="What resources, expertise, or capabilities can your organization bring to the partnership?"
                    value={formData.resources}
                    onChange={(e) => handleInputChange("resources", e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="goals">Partnership Goals *</Label>
                  <Textarea
                    id="goals"
                    placeholder="What do you hope to achieve through this partnership? How does it align with your organization's goals?"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Proposed Timeline</Label>
                  <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                      <SelectItem value="short-term">Short-term (3-6 months)</SelectItem>
                      <SelectItem value="medium-term">Medium-term (6-12 months)</SelectItem>
                      <SelectItem value="long-term">Long-term (1+ years)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Submit Partnership Proposal
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to create meaningful impact across African communities.
          </p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg">
            Schedule a Meeting
          </Button>
        </div>
      </section>
    </>
  );
}