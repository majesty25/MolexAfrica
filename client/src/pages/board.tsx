import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { SEOHead } from "@/components/ui/seo-head";
import { boardMembers } from "@/lib/data";
import type { TeamMember } from "@/lib/types";
import { Linkedin, Twitter } from "lucide-react";

export default function Board() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <SEOHead
        title="Board of Directors - MOLEX Foundation Africa"
        description="Meet the distinguished Board of Directors guiding MOLEX Foundation Africa's strategic direction and governance across African development initiatives."
        keywords="board of directors, foundation governance, african development board, nonprofit leadership"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Board of Directors
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our distinguished Board of Directors provides strategic oversight and governance, 
              ensuring our mission to empower African communities is carried out with integrity and effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-0 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <Card key={member.id} className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-45 rounded-full mx-auto mb-6 object-contain border-4 border-primary/20"
                  />
                  <h6 className="text-md font-bold text-gray-900 dark:text-white mb-2">{member.name}</h6>
                  <p className="text-primary font-semibold mb-4 text-md">{member.title}</p>
                  {/* <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">{member.bio}</p> */}
                  
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
                            className="w-40 h-40 rounded-full object-contain border-4 border-primary/20 mx-auto sm:mx-0"
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
                  
                  {/* {(member.linkedin || member.twitter) && (
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
                  )} */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Responsibilities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Board Responsibilities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our Board of Directors ensures accountability, strategic direction, and organizational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Strategic Oversight</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Providing strategic direction and ensuring the organization's mission alignment with 
                  community needs and global development goals.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Governance & Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ensuring adherence to legal requirements, ethical standards, and best practices 
                  in nonprofit governance and operations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Financial Stewardship</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Overseeing financial management, budget approval, and ensuring responsible 
                  use of donor funds and organizational resources.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Performance Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Evaluating organizational performance, program effectiveness, and ensuring 
                  accountability to stakeholders and beneficiaries.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Stakeholder Relations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building and maintaining relationships with donors, partners, governments, 
                  and communities to advance our mission.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-red-600 dark:text-red-400 font-bold">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation & Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Supporting innovation in program delivery and organizational development 
                  to maximize impact across African communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Committees */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Board Committees</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Specialized committees focus on key areas of governance and organizational development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Finance & Audit Committee</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Oversees financial reporting, internal controls, risk management, and coordinates 
                  with external auditors to ensure financial transparency and accountability.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Annual budget review and approval</li>
                  <li>• Financial policy development</li>
                  <li>• Risk assessment and mitigation</li>
                  <li>• Audit oversight and compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program & Impact Committee</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Reviews program effectiveness, impact measurement, and strategic alignment with 
                  organizational mission and community needs across Africa.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Program evaluation and assessment</li>
                  <li>• Impact measurement frameworks</li>
                  <li>• Strategic program development</li>
                  <li>• Community engagement oversight</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance Transparency */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Committed to Transparency</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our Board of Directors is committed to the highest standards of governance, 
            transparency, and accountability to our stakeholders and the communities we serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Annual Reports
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Financial Statements
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
