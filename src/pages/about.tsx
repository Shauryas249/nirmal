import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building2, 
  Calendar, 
  Target, 
  Heart, 
  Lightbulb, 
  Shield, 
  Award
} from "lucide-react";

// Timeline data
const milestones = [
  { year: 2008, title: "Company Founded", description: "Nirmal Autotech Industries was established" },
  { year: 2012, title: "First Major Client", description: "Secured first major automotive client" },
  { year: 2015, title: "Facility Expansion", description: "Expanded manufacturing facility to 15,000 sq.ft" },
  { year: 2017, title: "ISO Certification", description: "Achieved ISO 9001:2015 certification" },
  { year: 2019, title: "IATF Certification", description: "Received IATF 16949:2016 certification" },
  { year: 2021, title: "Export Expansion", description: "Started exporting to international markets" },
  { year: 2023, title: "Further Expansion", description: "Expanded facility to 25,000 sq.ft" },
  { year: 2024, title: "New Product Lines", description: "Introduced new product categories" },
  { 
    year: 2025, 
    title: "UNIT-2 Inauguration", 
    description: "Nirmal Autotech Industries Pvt Ltd. inaugurated UNIT-2 for fasteners Range" 
  }
];

// Strengths data
const strengths = [
  { icon: <Shield className="h-10 w-10 text-primary" />, title: "Quality Assurance", description: "Rigorous testing and quality control processes" },
  { icon: <Award className="h-10 w-10 text-primary" />, title: "Industry Certifications", description: "IATF 16949:2016 and ISO 9001:2015 certified" },
  { icon: <Lightbulb className="h-10 w-10 text-primary" />, title: "Innovation", description: "Continuous improvement and innovative solutions" },
  { icon: <Users className="h-10 w-10 text-primary" />, title: "Expert Team", description: "Skilled professionals with industry expertise" }
];

// Growth data for charts
const turnoverData = [
  { year: 2015, value: 100 },
  { year: 2016, value: 130 },
  { year: 2017, value: 170 },
  { year: 2018, value: 210 },
  { year: 2019, value: 250 },
  { year: 2020, value: 230 },
  { year: 2021, value: 280 },
  { year: 2022, value: 320 },
  { year: 2023, value: 370 },
  { year: 2024, value: 420 },
  { year: 2025, value: 480 }
];

const clientDistribution = [
  { segment: "Automotive", percentage: 65 },
  { segment: "Industrial", percentage: 20 },
  { segment: "Agriculture", percentage: 10 },
  { segment: "Others", percentage: 5 }
];

export default function About() {
  return (
    <PageLayout 
      title="About Us"
      description="Learn about Nirmal Autotech Industries Pvt Ltd, our history, vision, mission, and growth since 2008."
    >
      {/* Company Profile Section */}
      <section className="py-16 px-4 bg-alternate-light">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center mb-12 gradient-text">About Nirmal Autotech</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                <div>
                  <p className="text-lg mb-6">
                    NIRMAL AUTOTECH INDUSTRIES PVT LTD, is an IATF16949 : 2016 certified company, an exporter as well as domestic supplier of various types of Fasteners in various alloy steel and stainless-steel grades, Turning components & various types of Precision Turning components. NAIPL was established in 2008 with the vision to make available all the world class products.
                  </p>
                  <p className="text-lg mb-6">
                    Our target is to achieve the desired quality along with the optimum cost and packaging as per customer requirements and to meet other service requirements of Logistics as well.
                  </p>
                  <p className="text-lg">
                    The Company has a young experienced, dedicated, energetic and qualified team with a total manpower of 150 personnel having a covered area of 15,000 sq. feet for UNIT-I and 30000 sq. feet for UNIT-II. In unit-II all type of Fastener, Nut & Bolt up to size M4-M24 is under production and In unit-I all type of precise components under production. Also have inhouse facility of Heat treatment, blacking and plating with capacity of 1000 kg per hour.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">Founded</h3>
                      <p className="text-3xl font-bold">2008</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">Team</h3>
                      <p className="text-3xl font-bold">150</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">Current Facility</h3>
                      <p className="text-3xl font-bold">45,000</p>
                      <p className="text-sm">sq. feet</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Mission Section */}
          <section className="py-16 px-4 bg-secondary/30">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Vision & Mission</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <Card>
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      <Target className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">Our Vision</h3>
                    <p className="text-lg text-center">
                      To be a global leader in precision component manufacturing, recognized for quality, 
                      innovation, and customer satisfaction.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-6">
                      <Heart className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
                    <p className="text-lg text-center">
                      To deliver exceptional value to our customers through high-quality precision components, 
                      innovative solutions, and reliable service.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {[
                  "Sense of Urgency",
                  "Customer Obsession",
                  "Think Big, Innovate, Simplify",
                  "Ownership & Empowerment",
                  "Excellence as Way of Life"
                ].map((value, index) => (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="py-6">
                      <p className="font-semibold">{value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Strengths Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Strengths</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {strengths.map((strength, index) => (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow card-hover-effect colored-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="flex justify-center mb-4">
                        <div className={`p-3 rounded-full ${
                          index === 0 ? 'bg-gradient-turquoise' : 
                          index === 1 ? 'bg-gradient-blue' : 
                          index === 2 ? 'bg-gradient-orange' : 
                          'bg-gradient-navy'
                        } text-white`}>
                          {strength.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Milestones Section */}
          <section className="py-16 px-4 bg-secondary/30">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Journey</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Timeline dot */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${
                        index % 3 === 0 ? 'bg-gradient-turquoise' : 
                        index % 3 === 1 ? 'bg-gradient-blue' : 
                        'bg-gradient-orange'
                      } animate-pulse-glow`}></div>
                      
                      {/* Content */}
                      <div className="w-5/12"></div>
                      <div className="w-5/12 p-4">
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex items-center mb-2">
                              <span className="text-xl font-bold text-primary mr-2">{milestone.year}</span>
                              <h3 className="text-lg font-semibold">{milestone.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{milestone.description}</p>
                            
                            {milestone.year === 2025 && (
                              <div className="mt-3 pl-2 border-l-2 border-primary/30">
                                <p className="text-sm font-medium mb-1">New Machinery Added:</p>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                  <li>Part Farmer 24B</li>
                                  <li>Bolt Maker Machine (M16)</li>
                                  <li>Bolt Maker M6</li>
                                  <li>Rolling M16</li>
                                </ul>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Growth Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Growth</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Turnover Chart */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">Annual Turnover Growth</h3>
                    <div className="h-64 relative mt-8">
                      {/* Bar chart with specific years */}
                      <div className="absolute bottom-0 left-[10%] w-[12%] h-[10%] bg-gradient-to-t from-turquoise to-light-blue rounded-t-lg shadow-lg">
                        <div className="absolute top-[-20px] w-full text-center text-xs font-semibold">₹2.36 CR</div>
                      </div>
                      <div className="absolute bottom-0 left-[30%] w-[12%] h-[35%] bg-gradient-to-t from-primary to-light-blue rounded-t-lg shadow-lg">
                        <div className="absolute top-[-20px] w-full text-center text-xs font-semibold">₹8.45 CR</div>
                      </div>
                      <div className="absolute bottom-0 left-[50%] w-[12%] h-[53%] bg-gradient-to-t from-blue-600 to-turquoise rounded-t-lg shadow-lg">
                        <div className="absolute top-[-20px] w-full text-center text-xs font-semibold">₹12.80 CR</div>
                      </div>
                      <div className="absolute bottom-0 left-[70%] w-[12%] h-[82%] bg-gradient-to-t from-primary to-light-blue rounded-t-lg shadow-lg">
                        <div className="absolute top-[-20px] w-full text-center text-xs font-semibold">₹19.72 CR</div>
                      </div>
                      <div className="absolute bottom-0 left-[90%] w-[12%] h-[100%] bg-gradient-multi rounded-t-lg shadow-lg">
                        <div className="absolute top-[-20px] w-full text-center text-xs font-semibold">₹23.97 CR</div>
                      </div>
                      
                      {/* X-axis labels */}
                      <div className="absolute bottom-[-25px] left-[10%] transform -translate-x-1/2 text-xs text-center">
                        <p>2015-16</p>
                      </div>
                      <div className="absolute bottom-[-25px] left-[30%] transform -translate-x-1/2 text-xs text-center">
                        <p>2019-20</p>
                      </div>
                      <div className="absolute bottom-[-25px] left-[50%] transform -translate-x-1/2 text-xs text-center">
                        <p>2021-22</p>
                      </div>
                      <div className="absolute bottom-[-25px] left-[70%] transform -translate-x-1/2 text-xs text-center">
                        <p>2023-24</p>
                      </div>
                      <div className="absolute bottom-[-25px] left-[90%] transform -translate-x-1/2 text-xs text-center">
                        <p>2024-25</p>
                      </div>
                      
                      {/* Y-axis labels */}
                      <div className="absolute left-[-30px] top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
                        <span>₹25 CR</span>
                        <span>₹20 CR</span>
                        <span>₹15 CR</span>
                        <span>₹10 CR</span>
                        <span>₹5 CR</span>
                        <span>₹0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Client Distribution Chart */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-center">Client Distribution</h3>
                    <div className="flex justify-center">
                      {/* Simple pie chart visualization */}
                      <div className="relative w-64 h-64">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {/* Automotive - 65% */}
                          <circle 
                            cx="50" cy="50" r="40" 
                            fill="transparent" 
                            stroke="hsl(var(--turquoise))" 
                            strokeWidth="20" 
                            strokeDasharray={`${65 * 2.51} ${100 * 2.51}`} 
                            transform="rotate(-90 50 50)" 
                          />
                          {/* Industrial - 20% */}
                          <circle 
                            cx="50" cy="50" r="40" 
                            fill="transparent" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth="20" 
                            strokeDasharray={`${20 * 2.51} ${100 * 2.51}`} 
                            strokeDashoffset={`${-65 * 2.51}`}
                            transform="rotate(-90 50 50)" 
                          />
                          {/* Agriculture - 10% */}
                          <circle 
                            cx="50" cy="50" r="40" 
                            fill="transparent" 
                            stroke="hsl(var(--orange))" 
                            strokeWidth="20" 
                            strokeDasharray={`${10 * 2.51} ${100 * 2.51}`} 
                            strokeDashoffset={`${-(65 + 20) * 2.51}`}
                            transform="rotate(-90 50 50)" 
                          />
                          {/* Others - 5% */}
                          <circle 
                            cx="50" cy="50" r="40" 
                            fill="transparent" 
                            stroke="hsl(var(--deep-navy))" 
                            strokeWidth="20" 
                            strokeDasharray={`${5 * 2.51} ${100 * 2.51}`} 
                            strokeDashoffset={`${-(65 + 20 + 10) * 2.51}`}
                            transform="rotate(-90 50 50)" 
                          />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="grid grid-cols-2 gap-2 mt-6">
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 rounded-sm bg-turquoise"></div>
                        <span>Automotive: 65%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 rounded-sm" style={{backgroundColor: "hsl(var(--primary))"}}></div>
                        <span>Industrial: 20%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 rounded-sm" style={{backgroundColor: "hsl(var(--orange))"}}></div>
                        <span>Agriculture: 10%</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 rounded-sm" style={{backgroundColor: "hsl(var(--deep-navy))"}}></div>
                        <span>Others: 5%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
    </PageLayout>
  );
}