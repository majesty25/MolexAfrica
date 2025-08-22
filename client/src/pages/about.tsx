import { Target, Eye, HandHeart, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/ui/seo-head";
import { ReadMore } from "@/components/ui/read-more";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const milestones = [
    { year: "1999", title: "Foundation Established", description: "MOLEX Foundation Africa was founded with a mission to transform African communities." },
    { year: "2005", title: "First Education Program", description: "Launched our first school building initiative in Kenya, serving 200 students." },
    { year: "2010", title: "Healthcare Expansion", description: "Introduced mobile health clinics serving rural communities across East Africa." },
    { year: "2015", title: "Women's Empowerment", description: "Started microfinance and skills training programs for women entrepreneurs." },
    { year: "2020", title: "Digital Innovation", description: "Launched technology training centers to bridge the digital divide." },
    { year: "2024", title: "Continental Reach", description: "Now operating in 20+ African countries with 50+ active programs." }
  ];

  const stats = [
    { number: "500,000+", label: "Lives Impacted", icon: Users },
    { number: "200+", label: "Communities Served", icon: Globe },
    { number: "50+", label: "Active Programs", icon: Target },
    { number: "25+", label: "Years of Service", icon: Award }
  ];

  // Scroll Animation Refs
  const heroRef = useScrollAnimation({ delay: 200 });
  const statsRef = useStaggeredAnimation(stats.length, 150);
  const missionRef = useScrollAnimation({ delay: 300 });
  const visionRef = useScrollAnimation({ delay: 400 });
  const valuesRef = useScrollAnimation({ delay: 500 });
  const historyRef = useScrollAnimation({ delay: 300 });

  return (
    <>
      <SEOHead
        title="About Us - MOLEX Foundation Africa"
        description="Learn about MOLEX Foundation Africa's mission, vision, history, and impact across African communities through sustainable development programs."
        keywords="about molex foundation, african development, nonprofit history, community impact"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About MOLEX Foundation Africa
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dedicated to empowering girls, women, and youth across Africa through STEM education, gender equality advocacy, 
              leadership development, and sustainable community building.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We are committed to empowering communities and creating lasting positive change across Africa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="text-left p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <ReadMore maxLines={4}>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Empower girls, women, and youth to rise above cultural, gender, and societal limitations.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Promote STEM education, especially among girls, to ignite curiosity and innovation.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Advance gender equality by creating equal opportunities for all to pursue their dreams.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide life coaching, mentorship, and career guidance that inspire confidence and purpose.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Combat Sexual and Gender-Based Violence (SGBV) through education, advocacy, and support.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Cultivate ethical and visionary leadership rooted in values and service.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Strengthen community resilience to climate change by promoting education, adaptation, and sustainable practices.
                    </li>
                  </ul>
                </ReadMore>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section ref={visionRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We envision a future where every child in Africa has the opportunity to thrive and lead.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-12 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Eye className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To shape an inclusive Africa where every child is empowered with opportunity, mentorship, and resources to rise, lead with purpose, and drive global transformation through STEM, innovation, and resilient leadership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our approach to creating positive change.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="text-left p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                  <HandHeart className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="text-gray-600 dark:text-gray-300 space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="font-medium">Excellent Service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="font-medium">Teamwork</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="font-medium">Volunteerism</span>
                    </li>
                  </ul>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="font-medium">Person Focused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="font-medium">Respect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="font-medium">Servant Leadership</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section ref={historyRef} className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our History</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The inspiring journey of how MOLEX Foundation Africa came to be
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ReadMore maxLines={4} className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-600 dark:text-gray-300 space-y-6 leading-relaxed">
                <p>
                  In the year 2021, a group of young scholars assembled in the tranquil village of Nyanfeku Ekroful, 
                  nestled within the AAK district. Bound by a shared vision and propelled by an unwavering determination 
                  to give back to the society that had nurtured them, these remarkable individuals embarked on a 
                  transformative journey. Their formative years, spent navigating the challenges of impoverished 
                  circumstances, had not dampened their spirits; instead, they had harnessed these trials as catalysts 
                  for change.
                </p>
                
                <p>
                  This pivotal juncture marked the genesis of the MOLEX Foundation Africa – an embodiment of their 
                  collective resolve to amplify the human experience through an intricate tapestry of life coaching, 
                  career guidance, mentoring, and advocacy services. Their resounding mission was to spark the flame of 
                  greatness within individuals, empowering them to transcend their circumstances and accomplish 
                  extraordinary feats.
                </p>
                
                <p>
                  At the heart of their mission, the MOLEX Foundation Africa champions a tapestry of transformative 
                  initiatives. Central to their endeavors is the laudable "Girls-in-STEM" program, an illuminating beacon 
                  for young women in remote rural areas, both in junior and senior high schools. Rooted in the firm belief 
                  that gender should never be a barrier to brilliance, this initiative is a manifestation of the 
                  foundation's commitment to igniting passion and breaking stereotypes.
                </p>
                
                <p>
                  MOLEX Foundation Africa's luminous mission extends far beyond classroom walls. As fervent advocates for 
                  change, the foundation steadfastly confronts and combats the scourge of Sexual and Gender-Based Violence 
                  (SGBV). With unyielding resolve, they stand as a collective voice against the injustices that plague 
                  society, nurturing a culture where safety, respect, and equality thrive.
                </p>
                
                <p>
                  In a world grappling with the profound challenges of climate change, the MOLEX Foundation Africa emerges 
                  as a harbinger of resilience and education. Through extensive outreach and enlightening initiatives, 
                  they empower the public to develop the resilience necessary to confront the catastrophic implications of 
                  climate change. With a call to action that reverberates across communities, the foundation actively 
                  engages individuals in vital mitigation and adaptation measures.
                </p>
                
                <p>
                  Guided by an unshakeable commitment to nurturing transformative leaders, the MOLEX Foundation Africa 
                  shapes a future where leadership is defined by values and potential. Their endeavors strive to curtail 
                  the transformation of leadership culture, sculpting a landscape where integrity, empathy, and visionary 
                  thinking flourish.
                </p>
                
                <p className="text-lg font-medium text-primary dark:text-primary">
                  The story of MOLEX Foundation Africa resonates as a symphony of determination, compassion, and unwavering 
                  dedication. Rooted in personal experiences, fueled by a fervent desire to uplift others, and propelled by 
                  a shared vision of greatness, this foundation becomes a beacon of hope. With every initiative, every 
                  mentorship, and every stand against injustice, they carve a path toward a more inclusive, empowered, and 
                  promising tomorrow.
                </p>
              </div>
            </ReadMore>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See the measurable difference we've made across African communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Approach Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community-Centered Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work closely with local communities to identify their specific needs and develop tailored solutions 
                    that leverage local knowledge and resources.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sustainable Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our programs are designed for long-term impact, building local capacity and creating systems that 
                    communities can maintain and expand independently.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Collaborative Partnerships</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We partner with local organizations, governments, and international agencies to maximize resources 
                    and ensure coordinated, effective interventions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Evidence-Based Impact</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We continuously monitor and evaluate our programs, using data and community feedback to improve 
                    effectiveness and demonstrate measurable results.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Community members working together"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
