import { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { SEOHead } from "@/components/ui/seo-head";
import { executiveTeam } from "@/lib/data";
import type { TeamMember } from "@/lib/types";

export default function Executives() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <SEOHead
        title="Executive Team - MOLEX Foundation Africa"
        description="Meet the dedicated executive leadership team driving positive change across African communities through MOLEX Foundation Africa's programs."
        keywords="executive team, leadership, african development leaders, foundation management"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Executive Leadership Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated leaders driving positive change across African communities through 
              innovative programs and sustainable development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Leadership Excellence</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our executive team brings together decades of experience in international development, 
              healthcare, education, and community empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((member) => (
              <Card key={member.id} className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4 text-lg">{member.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">{member.bio}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full mb-4">
                        View Bio
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                          {member.name}
                        </DialogTitle>
                        <DialogDescription className="text-primary font-semibold text-lg">
                          {member.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 mx-auto sm:mx-0"
                          />
                          <div className="flex-1">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{member.bio}</p>
                            {(member.linkedin || member.twitter) && (
                              <div className="flex gap-4">
                                {member.linkedin && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                      <Linkedin className="h-4 w-4 mr-2" />
                                      LinkedIn
                                    </a>
                                  </Button>
                                )}
                                {member.twitter && (
                                  <Button variant="outline" size="sm" asChild>
                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                      <Twitter className="h-4 w-4 mr-2" />
                                      Twitter
                                    </a>
                                  </Button>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  {(member.linkedin || member.twitter) && (
                    <div className="flex justify-center space-x-4">
                      {member.linkedin && (
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600" asChild>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {member.twitter && (
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-400" asChild>
                          <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Leadership Philosophy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Servant Leadership</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We lead by serving our communities first, ensuring that every decision we make benefits 
                    the people we work with and for across Africa.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaborative Approach</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our leaders work hand-in-hand with local communities, understanding their needs and 
                    developing solutions together rather than imposing external solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation & Adaptation</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We embrace new technologies and methodologies while respecting traditional knowledge, 
                    creating innovative solutions that work in African contexts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Accountability & Transparency</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our leadership team maintains the highest standards of transparency and accountability 
                    to our communities, donors, and stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Council */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Advisory Council</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our advisory council includes distinguished experts in development, healthcare, education, 
              and public policy who guide our strategic direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Kofi Antwi", title: "Development Economics", specialization: "Sustainable Development" },
              { name: "Prof. Aisha Mohamed", title: "Public Health", specialization: "Healthcare Systems" },
              { name: "Dr. Samuel Okafor", title: "Education Policy", specialization: "Rural Education" },
              { name: "Ms. Fatou Diop", title: "Gender Studies", specialization: "Women's Empowerment" }
            ].map((advisor, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-lg">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{advisor.name}</h4>
                  <p className="text-primary text-sm font-semibold mb-2">{advisor.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{advisor.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Leadership */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Leadership Opportunities</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Are you a passionate leader interested in making a difference in African communities? 
            We're always looking for dedicated individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" size="lg">
              View Open Positions
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
              Contact Leadership
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
