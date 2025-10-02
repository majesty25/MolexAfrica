import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!contactForm.firstName || !contactForm.lastName || !contactForm.email || !contactForm.subject || !contactForm.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
    });

    setNewsletterEmail("");
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
      <SEOHead
        title="Contact Us - MOLEX Foundation Africa"
        description="Get in touch with MOLEX Foundation Africa. Contact us for inquiries about our programs, volunteer opportunities, partnerships, or general information."
        keywords="contact foundation, african development contact, foundation inquiries, volunteer contact, partnership inquiries"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions or want to learn more about our work? We'd love to hear from you. 
              Contact us for information about our programs, volunteer opportunities, or partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactFirstName">First Name *</Label>
                    <Input
                      id="contactFirstName"
                      type="text"
                      value={contactForm.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactLastName">Last Name *</Label>
                    <Input
                      id="contactLastName"
                      type="text"
                      value={contactForm.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contactEmail">Email Address *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select value={contactForm.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                      <SelectItem value="partnership">Partnership Proposal</SelectItem>
                      <SelectItem value="donation">Donation Information</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Foundation Avenue<br />
                          Nairobi, Kenya<br />
                          00100
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                        <Phone className="text-emerald-600 dark:text-emerald-400 h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          +254 20 123 4567<br />
                          +254 70 123 4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <Mail className="text-purple-600 dark:text-purple-400 h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          info@molexfoundation.org<br />
                          contact@molexfoundation.org
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <Clock className="text-blue-600 dark:text-blue-400 h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Office Hours</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media & Newsletter */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Stay Connected</h3>
                  
                  {/* Social Media Links */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="icon" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-lg">
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-lg">
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-lg">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg">
                        <Youtube className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Subscribe to get updates about our programs and impact stories.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        className="flex-1"
                        required
                      />
                      <Button type="submit">
                        Subscribe
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>

              {/* Embedded Map Placeholder */}
              <Card className="shadow-lg">
                <CardContent className="p-4">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center min-h-[300px]">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <p className="text-lg font-medium">Interactive Map</p>
                      <p className="text-sm">Google Maps integration would be embedded here</p>
                      <p className="text-xs mt-2">123 Foundation Avenue, Nairobi, Kenya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about our work and how to get involved
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  How can I volunteer with MOLEX Foundation?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can apply through our Join Us page or contact us directly. We have opportunities 
                  for both remote and on-site volunteering across various programs and skill areas.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  What countries do you operate in?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We currently operate in 20+ African countries, with our headquarters in Nairobi, Kenya. 
                  Our programs span East, West, and Southern Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  How are donations used?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  85% of donations go directly to program implementation, 10% to administrative costs, 
                  and 5% to fundraising activities. We publish annual financial reports for transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Can organizations partner with you?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! We welcome partnerships with corporations, NGOs, government agencies, and academic 
                  institutions. Contact us to discuss collaboration opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you have questions, want to volunteer, or are interested in partnerships, 
            we're here to help you get involved in transforming African communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg">
              Join Our Mission
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
              View Our Programs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
