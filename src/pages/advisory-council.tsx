import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { SEOHead } from "@/components/ui/seo-head";
import { advisoryCouncil } from "@/lib/data";
import type { TeamMember } from "@/lib/types";

export default function AdvisoryCouncil() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <SEOHead
        title="Advisory Council - MOLEX Foundation Africa"
        description="Meet the distinguished Advisory Council members providing strategic guidance and expertise to MOLEX Foundation Africa's mission across African development initiatives."
        keywords="advisory council, strategic advisors, foundation guidance, african development advisors, nonprofit advisory board"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Advisory Council
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our Advisory Council consists of distinguished experts who provide strategic guidance, 
              industry insights, and specialized knowledge to enhance our programs and maximize our impact 
              across African communities.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Council Members */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Strategic Advisors</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our advisory council brings together thought leaders, subject matter experts, and 
              experienced practitioners who guide our strategic direction and program innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryCouncil.map((member) => (
              <Card key={member.id} className="text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                    {member.bio}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full">
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
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{member.bio}</p>
                            {member.linkedin && (
                              <div className="mt-4">
                                <Button variant="outline" size="sm" asChild>
                                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn Profile
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Council Role */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Advisory Council Role</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our Advisory Council provides strategic insights and expertise to enhance our impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Strategic Guidance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Providing strategic direction and long-term vision to ensure our programs align with 
                  best practices and emerging trends in development work.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Expert Knowledge</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Bringing specialized expertise in education, healthcare, technology, and sustainable 
                  development to enhance our program effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Network Access</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Facilitating connections with key stakeholders, potential partners, and funding 
                  opportunities to expand our reach and impact.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Program Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Identifying innovative approaches and emerging solutions to address complex 
                  development challenges facing African communities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality Assurance</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ensuring our programs meet the highest standards of excellence and align with 
                  international best practices in development work.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Perspective</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Bringing international perspectives and cross-cultural insights to ensure our 
                  approach is globally informed and locally relevant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}