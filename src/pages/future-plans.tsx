import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { CalendarClock, Factory, TrendingUp, Landmark, Wrench, Microscope, Gauge } from "lucide-react";
import Timeline, { TimelineItem } from "@/components/Timeline";

export default function FuturePlans() {
  return (
    <PageLayout
      title="Future Plans"
      description="Explore Nirmal Autotech Industries' future expansion plans, equipment acquisition timeline, and growth targets for the coming years."
    >
        <main className="flex-1 py-16 px-4 bg-alternate-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 gradient-text">Future Plans</h1>
              <div className="flex justify-center mb-6">
                <div className="badge-featured animate-float">Strategic Growth Vision</div>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our strategic roadmap for expansion, growth, and technological advancement
                over the next five years.
              </p>
            </div>

            <Tabs defaultValue="expansion" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-gradient-blue/10">
                <TabsTrigger value="expansion" className="data-[state=active]:bg-gradient-blue data-[state=active]:text-white">Facility Expansion</TabsTrigger>
                <TabsTrigger value="equipment" className="data-[state=active]:bg-gradient-turquoise data-[state=active]:text-white">Equipment Timeline</TabsTrigger>
                <TabsTrigger value="growth" className="data-[state=active]:bg-gradient-orange data-[state=active]:text-white">Growth Targets</TabsTrigger>
              </TabsList>

              <TabsContent value="expansion" className="mt-6">
                <Card className="colored-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-6">
                      <div className="bg-gradient-blue rounded-full p-2 mr-4 flex-shrink-0">
                        <Factory className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2 gradient-text">New Facility Details</h2>
                        <p className="text-muted-foreground mb-4">
                          Our expansion plans include a state-of-the-art manufacturing facility to increase production capacity and implement advanced technologies.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="border rounded-lg p-6 bg-gradient-blue/5 colored-shadow card-hover-effect">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Unit-2 Establishment: December 2024</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="bg-gradient-blue text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Establishment of Unit-2 facility</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-blue text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>New production lines for M4-M25 Fasteners</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-blue text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Dedicated manufacturing for Nuts and Bolts</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-blue text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Increased production capacity</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-6 bg-gradient-turquoise/5 colored-shadow card-hover-effect">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Plating Facility: April 2025</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="bg-gradient-turquoise text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Installation of fully Automatic Plating Plant</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-turquoise text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>In-house surface finishing capabilities</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-turquoise text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Enhanced quality control processes</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-turquoise text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Reduced dependency on external vendors</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 border-t pt-6">
                      <h3 className="text-xl font-semibold mb-4 gradient-text">Key Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gradient-blue p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="font-medium text-2xl">150%</p>
                          <p className="text-sm">Production Capacity</p>
                        </div>
                        <div className="bg-gradient-turquoise p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="font-medium text-2xl">30%</p>
                          <p className="text-sm">Energy Efficiency</p>
                        </div>
                        <div className="bg-gradient-orange p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="font-medium text-2xl">200+</p>
                          <p className="text-sm">New Jobs Created</p>
                        </div>
                        <div className="bg-gradient-navy p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="font-medium text-2xl">40%</p>
                          <p className="text-sm">Carbon Footprint Reduction</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="equipment" className="mt-6">
                <Card className="colored-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-6">
                      <div className="bg-gradient-turquoise rounded-full p-2 mr-4 flex-shrink-0">
                        <CalendarClock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2 gradient-text">Equipment Acquisition Timeline</h2>
                        <p className="text-muted-foreground mb-4">
                          Our strategic equipment acquisition plan to enhance manufacturing capabilities and precision.
                        </p>
                      </div>
                    </div>

                    <Timeline 
                      items={[
                        {
                          id: "equipment-1",
                          title: "Part Farmer Machines",
                          description: "Addition of Part Farmer M/c (Capacity NF-11 B & NF-19 B) to enhance production efficiency and capacity.",
                          date: "December 2024",
                          status: "in-progress",
                          icon: <div className="bg-gradient-blue rounded-full p-1"><Wrench className="text-white" /></div>,
                          category: "Production"
                        },
                        {
                          id: "equipment-2",
                          title: "Bolt Maker Machines",
                          description: "Addition of Bolt Maker M8 machine and Bolt Maker ½ inch machine for expanded fastener manufacturing capabilities.",
                          date: "December 2024",
                          status: "in-progress",
                          icon: <Wrench />,
                          category: "Production"
                        },
                        {
                          id: "equipment-3",
                          title: "XRF Machine",
                          description: "Addition of XRF for checking of plating thickness to ensure consistent quality and compliance with specifications.",
                          date: "December 2024",
                          status: "in-progress",
                          icon: <Microscope />,
                          category: "Quality Control"
                        },
                        {
                          id: "equipment-4",
                          title: "Automatic Bin Cleaning Machine",
                          description: "Addition of Automatic Bin Cleaning machine for improved efficiency and cleanliness in the production process.",
                          date: "January 2025",
                          status: "upcoming",
                          icon: <Wrench />,
                          category: "Production"
                        },
                        {
                          id: "equipment-5",
                          title: "Contracer Machine",
                          description: "Addition of Contracer Machine for enhanced inspection capabilities and precision measurement of complex profiles.",
                          date: "January 2025",
                          status: "upcoming",
                          icon: <Gauge />,
                          category: "Quality Control"
                        },
                        {
                          id: "equipment-6",
                          title: "Fully Automatic Plating Plant",
                          description: "Installation of fully Automatic plating plant for improved finishing capabilities and reduced environmental impact.",
                          date: "April 2025",
                          status: "upcoming",
                          icon: <Factory />,
                          category: "Surface Treatment"
                        }
                      ]}
                    />
                    
                    <div className="mt-12 pt-6 border-t">
                      <h3 className="text-xl font-semibold mb-4 gradient-text">Equipment Investment Breakdown</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-gradient-blue p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="text-2xl font-medium">60%</p>
                          <p className="text-sm">Production Equipment</p>
                        </div>
                        <div className="bg-gradient-turquoise p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="text-2xl font-medium">25%</p>
                          <p className="text-sm">Quality Control</p>
                        </div>
                        <div className="bg-gradient-orange p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="text-2xl font-medium">15%</p>
                          <p className="text-sm">Automation Systems</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="growth" className="mt-6">
                <Card className="colored-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-6">
                      <div className="bg-gradient-orange rounded-full p-2 mr-4 flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2 gradient-text">Turnover Growth</h2>
                        <p className="text-muted-foreground mb-4">
                          We have achieved significant growth with a 200% increase in turnover up to 2024, and plan to continue this trajectory.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4 gradient-text">Historical Growth Performance</h3>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">FY 2015-16</span>
                            <span className="badge-primary px-2 py-0.5 rounded-full">₹2.36 CR</span>
                          </div>
                          <Progress value={12} className="h-3 bg-gradient-blue/20" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">FY 2019-20</span>
                            <span className="badge-turquoise px-2 py-0.5 rounded-full">₹8.45 CR (est.)</span>
                          </div>
                          <Progress value={43} className="h-3 bg-gradient-turquoise/20" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">FY 2021-22</span>
                            <span className="badge-orange px-2 py-0.5 rounded-full">₹12.80 CR (est.)</span>
                          </div>
                          <Progress value={65} className="h-3 bg-gradient-orange/20" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">FY 2023-24</span>
                            <span className="badge-navy px-2 py-0.5 rounded-full">₹19.72 CR</span>
                          </div>
                          <Progress value={100} className="h-3 bg-gradient-navy/20" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-10 pt-6 border-t">
                      <h3 className="text-xl font-semibold mb-4 gradient-text">Customer Distribution (2023-24)</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="bg-gradient-blue p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="text-2xl font-medium">21%</p>
                          <p className="text-sm">SOGEFI</p>
                        </div>
                        <div className="bg-gradient-turquoise p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="text-2xl font-medium">20%</p>
                          <p className="text-sm">MAHLE</p>
                        </div>
                        <div className="bg-gradient-orange p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="text-2xl font-medium">15%</p>
                          <p className="text-sm">KONGSBERG</p>
                        </div>
                        <div className="bg-gradient-navy p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="text-2xl font-medium">5%</p>
                          <p className="text-sm">ITL</p>
                        </div>
                        <div className="bg-gradient-multi p-4 rounded-lg text-center text-white card-hover-effect">
                          <p className="text-2xl font-medium">39%</p>
                          <p className="text-sm">OTHERS</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                      <div className="border rounded-lg p-6 bg-gradient-blue/5 colored-shadow card-hover-effect">
                        <h3 className="text-xl font-semibold mb-3 flex items-center gradient-text">
                          <Landmark className="h-5 w-5 mr-2 icon-primary" />
                          Key Investment Areas
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="bg-gradient-blue text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Advanced manufacturing technologies (40%)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-turquoise text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Research and development (25%)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-orange text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Workforce development and training (15%)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-navy text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Sustainability initiatives (10%)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gradient-multi text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">•</div>
                            <span>Digital transformation (10%)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-6 bg-gradient-turquoise/5 colored-shadow card-hover-effect">
                        <h3 className="text-xl font-semibold mb-3 gradient-text">Market Expansion Strategy</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="font-medium mb-1">Domestic Market</p>
                            <Progress value={70} className="h-2" />
                            <p className="text-xs text-right mt-1">70% of growth focus</p>
                          </div>
                          <div>
                            <p className="font-medium mb-1">International Export</p>
                            <Progress value={30} className="h-2" />
                            <p className="text-xs text-right mt-1">30% of growth focus</p>
                          </div>
                          <div className="mt-4 pt-4 border-t">
                            <p className="font-medium mb-2">Target Sectors:</p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-gradient-blue p-2 rounded text-center text-sm text-white">Automotive</div>
                              <div className="bg-gradient-turquoise p-2 rounded text-center text-sm text-white">Aerospace</div>
                              <div className="bg-gradient-orange p-2 rounded text-center text-sm text-white">Defense</div>
                              <div className="bg-gradient-navy p-2 rounded text-center text-sm text-white">Industrial</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
    </PageLayout>
  );
}