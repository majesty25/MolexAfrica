import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/ui/seo-head";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Organogram() {
  const titleRef = useScrollAnimation({ delay: 200 });
  const chartRef = useScrollAnimation({ delay: 400 });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEOHead 
        title="Organizational Structure | MOLEX Foundation Africa"
        description="Explore the organizational structure and leadership hierarchy of MOLEX Foundation Africa, showcasing our governance framework and operational structure."
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 scroll-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Organizational Structure
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our structured governance model ensures effective leadership, accountability, 
            and strategic direction in empowering African communities through education and development.
          </p>
        </div>

        {/* Organogram Chart */}
        <div ref={chartRef} className="scroll-animate">
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardContent className="p-8">
              {/* Board Level */}
              <div className="text-center mb-12">
                <div className="inline-block bg-red-900 text-white px-8 py-4 rounded-lg shadow-lg mb-4">
                  <h3 className="text-lg font-bold">Board of Directors</h3>
                  <p className="text-sm opacity-90">Governance & Strategic Oversight</p>
                </div>
              </div>

              {/* Advisory Council */}
              <div className="text-center mb-12">
                <div className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg mb-4">
                  <h3 className="text-md font-bold">Advisory Council</h3>
                  <p className="text-sm opacity-90">Strategic Guidance & Expertise</p>
                </div>
              </div>

              {/* Executive Level */}
              <div className="text-center mb-12">
                <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg shadow-lg mb-8">
                  <h3 className="text-lg font-bold">Executive Team</h3>
                  <p className="text-sm opacity-90">Operational Leadership</p>
                </div>

                {/* Executive Positions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">President & CEO</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Overall Leadership</p>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Vice President</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Strategic Operations</p>
                  </div>
                  <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Secretary</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Documentation & Records</p>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="flex justify-center mb-8">
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
              </div>

              {/* Departmental Structure */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Programs Department */}
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4">
                      <h4 className="font-bold">Programs</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>STEM Education</li>
                      <li>Gender Equality</li>
                      <li>Youth Development</li>
                      <li>Climate Resilience</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Operations Department */}
                <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-lg mb-4">
                      <h4 className="font-bold">Operations</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>Project Management</li>
                      <li>Community Outreach</li>
                      <li>Volunteer Coordination</li>
                      <li>Partnerships</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Finance & Administration */}
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4">
                      <h4 className="font-bold">Finance & Admin</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>Financial Management</li>
                      <li>Fundraising</li>
                      <li>Human Resources</li>
                      <li>Legal Compliance</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Communications */}
                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700">
                  <CardContent className="p-6 text-center">
                    <div className="bg-orange-600 text-white px-4 py-2 rounded-lg mb-4">
                      <h4 className="font-bold">Communications</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li>Public Relations</li>
                      <li>Digital Marketing</li>
                      <li>Media Relations</li>
                      <li>Documentation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Implementation Level */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Implementation Network
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Our grassroots network ensures effective program delivery and community engagement
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gray-50 dark:bg-gray-800/50">
                    <CardContent className="p-6 text-center">
                      <div className="bg-gray-600 text-white px-4 py-2 rounded-lg mb-4">
                        <h4 className="font-bold">Regional Coordinators</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Local program implementation and community liaison
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-50 dark:bg-gray-800/50">
                    <CardContent className="p-6 text-center">
                      <div className="bg-gray-600 text-white px-4 py-2 rounded-lg mb-4">
                        <h4 className="font-bold">Volunteer Teams</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        On-ground program delivery and community support
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-50 dark:bg-gray-800/50">
                    <CardContent className="p-6 text-center">
                      <div className="bg-gray-600 text-white px-4 py-2 rounded-lg mb-4">
                        <h4 className="font-bold">Community Partners</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Local organizations and stakeholder collaboration
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Governance Principles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Governance Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Transparency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Open communication and accountable decision-making processes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Accountability</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Responsible stewardship of resources and measurable outcomes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Inclusivity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Diverse representation and participatory governance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Adaptive strategies and continuous improvement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}