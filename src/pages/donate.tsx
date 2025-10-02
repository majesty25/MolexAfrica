import { useState } from "react";
import { Heart, CreditCard, DollarSign, Users, Target, CheckCircle, Gift, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOHead } from "@/components/ui/seo-head";
import { useToast } from "@/hooks/use-toast";

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [selectedProgram, setSelectedProgram] = useState("");
  const { toast } = useToast();

  const handleDonate = () => {
    toast({
      title: "Thank You!",
      description: "Your donation helps us continue our mission to empower communities across Africa.",
    });
  };

  const donationOptions = [
    { amount: 25, impact: "Provides school supplies for 1 student for a month" },
    { amount: 50, impact: "Funds a STEM workshop for 10 girls" },
    { amount: 100, impact: "Supports a mentorship program for 1 month" },
    { amount: 250, impact: "Sponsors climate resilience training for a community" },
    { amount: 500, impact: "Funds a complete Girls-in-STEM program cycle" },
    { amount: 1000, impact: "Establishes a new community outreach center" }
  ];

  const impactStats = [
    { amount: "$25", impact: "1 Student Educated", icon: Target },
    { amount: "$50", impact: "1 Workshop Delivered", icon: Users },
    { amount: "$100", impact: "1 Month of Mentorship", icon: Heart },
    { amount: "$500", impact: "1 Full Program Cycle", icon: Gift }
  ];

  const programs = [
    { id: "girls-stem", name: "Girls STEM Education", description: "Empowering girls in science and technology" },
    { id: "mentorship", name: "Mentorship Programs", description: "Life coaching and career guidance" },
    { id: "sgbv-prevention", name: "SGBV Prevention", description: "Combating gender-based violence" },
    { id: "climate-resilience", name: "Climate Resilience", description: "Environmental education and adaptation" },
    { id: "leadership", name: "Leadership Development", description: "Ethical leadership training" },
    { id: "general", name: "General Fund", description: "Support all our programs" }
  ];

  return (
    <>
      <SEOHead
        title="Donate - MOLEX Foundation Africa"
        description="Support MOLEX Foundation Africa's mission to empower girls, women, and youth across Africa. Make a secure donation to fund education, mentorship, and community development programs."
        keywords="donate to african charity, support african development, charitable giving, nonprofit donation"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your donation directly supports programs that empower girls, women, and youth across Africa. 
              Every contribution, no matter the size, creates lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how your donation creates real change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{stat.amount}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.impact}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Donation</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Select an amount and program to support
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <Tabs value={donationType} onValueChange={setDonationType} className="mb-8">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly Giving</TabsTrigger>
                </TabsList>

                <TabsContent value="one-time" className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold">Choose Amount (USD)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                      {donationOptions.map((option, index) => (
                        <Card
                          key={index}
                          className={`cursor-pointer border-2 transition-colors ${
                            donationAmount === option.amount.toString()
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                          onClick={() => setDonationAmount(option.amount.toString())}
                        >
                          <CardContent className="p-4 text-center">
                            <div className="text-xl font-bold text-primary mb-2">${option.amount}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-300">{option.impact}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <Label htmlFor="custom-amount">Or enter custom amount</Label>
                      <div className="relative mt-2">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          className="pl-10"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="monthly" className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold">Monthly Donation Amount (USD)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                      {[10, 25, 50, 100].map((amount, index) => (
                        <Card
                          key={index}
                          className={`cursor-pointer border-2 transition-colors ${
                            donationAmount === amount.toString()
                              ? "border-primary bg-primary/5"
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                          onClick={() => setDonationAmount(amount.toString())}
                        >
                          <CardContent className="p-4 text-center">
                            <div className="text-lg font-bold text-primary">${amount}/mo</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-4">
                      <Label htmlFor="custom-monthly">Or enter custom monthly amount</Label>
                      <div className="relative mt-2">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="custom-monthly"
                          type="number"
                          placeholder="Monthly amount"
                          className="pl-10"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Monthly Giving Benefits:</h4>
                      <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                        <li>• Provides sustainable funding for our programs</li>
                        <li>• Allows us to plan long-term initiatives</li>
                        <li>• Quarterly impact reports delivered to your inbox</li>
                        <li>• Cancel or modify anytime</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold">Choose Program to Support</Label>
                  <Select onValueChange={setSelectedProgram}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a program or general fund" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program.id} value={program.id}>
                          <div>
                            <div className="font-medium">{program.name}</div>
                            <div className="text-sm text-gray-500">{program.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="donor-name">Full Name</Label>
                    <Input id="donor-name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="donor-email">Email Address</Label>
                    <Input id="donor-email" type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between text-lg font-semibold mb-4">
                    <span>Total Donation:</span>
                    <span className="text-primary">
                      ${donationAmount || "0"} {donationType === "monthly" && "/month"}
                    </span>
                  </div>

                  <Button onClick={handleDonate} className="w-full" size="lg" disabled={!donationAmount}>
                    <CreditCard className="mr-2 h-5 w-5" />
                    Donate {donationType === "monthly" ? "Monthly" : "Now"}
                  </Button>

                  <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-600 dark:text-gray-400">
                    <Shield className="h-4 w-4" />
                    <span>Secure payment processing • Tax-deductible donation</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Other Ways to Give</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore different options to support our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Legacy Giving</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Include MOLEX Foundation Africa in your will or estate planning to create a lasting legacy.
                </p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Corporate Sponsorship</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Partner with us through corporate sponsorship opportunities and employee giving programs.
                </p>
                <Button variant="outline">Contact Us</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">In-Kind Donations</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Donate goods, services, or expertise to support our programs and operations.
                </p>
                <Button variant="outline">Donate Items</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Financial Transparency</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're committed to transparency in how your donations are used
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-gray-600 dark:text-gray-300">Program Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10%</div>
              <div className="text-gray-600 dark:text-gray-300">Administrative Costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5%</div>
              <div className="text-gray-600 dark:text-gray-300">Fundraising</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View Annual Report
            </Button>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Thank You for Your Support</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your generosity makes it possible for us to continue empowering communities across Africa. 
            Together, we're building a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg">
              Subscribe to Updates
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
              Share Our Mission
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}