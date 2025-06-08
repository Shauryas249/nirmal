import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Factory, 
  Cog, 
  Settings, 
  BarChart4, 
  Workflow,
  ArrowUpRight,
  Wrench,
  Layers
} from "lucide-react";
import Image from "next/image";
import Chart from "@/components/Chart";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MACHINERY_IMAGES, getCdnUrl } from "@/constants/assetPaths";

// Machinery data
const machineryCategories = [
  {
    name: "CNC Turning Centers",
    description: "High-precision CNC turning centers for complex component manufacturing",
    specs: [
      "Diameter range: 3mm to 65mm",
      "Length capacity: up to 250mm",
      "Tolerance: ±0.01mm",
      "Multi-axis capability"
    ],
    processes: ["Precision Turning", "Threading"],
    imagePath: MACHINERY_IMAGES.cncTurningCenters
  },
  {
    name: "Traub Machines",
    description: "Advanced Traub machines for high-volume precision turning operations",
    specs: [
      "Diameter range: 5mm to 32mm",
      "Length capacity: up to 150mm",
      "Tolerance: ±0.005mm",
      "Automatic bar feeding"
    ],
    processes: ["Precision Turning", "Multi-axis Machining"],
    imagePath: MACHINERY_IMAGES.traubMachines
  },
  {
    name: "Bolt Makers",
    description: "Specialized bolt making machines for fastener production",
    specs: [
      "Size range: M3 to M16",
      "Production rate: up to 200 pieces/hour",
      "Material capability: MS, SS, Brass",
      "Cold forging capability"
    ],
    processes: ["Cold Forming", "Thread Rolling"],
    imagePath: MACHINERY_IMAGES.boltMakers
  },
  {
    name: "Part Former Machines",
    description: "Cold forming machines for complex part geometries",
    specs: [
      "Diameter range: 2mm to 25mm",
      "Length capacity: up to 100mm",
      "Multi-stage forming capability",
      "High production rates"
    ],
    processes: ["Cold Forming"],
    imagePath: MACHINERY_IMAGES.partFormerMachines
  },
  {
    name: "VMC Machines",
    description: "Vertical Machining Centers for complex milling operations",
    specs: [
      "Work envelope: 800mm x 500mm x 500mm",
      "Spindle speed: up to 12,000 RPM",
      "Tolerance: ±0.01mm",
      "4-axis capability"
    ],
    processes: ["Multi-axis Machining"],
    imagePath: MACHINERY_IMAGES.vmcMachines
  },
  {
    name: "Sliding Head Machines",
    description: "Swiss-type sliding head machines for small precision components",
    specs: [
      "Diameter range: 1mm to 16mm",
      "Length capacity: up to 200mm",
      "Tolerance: ±0.005mm",
      "Multi-spindle capability"
    ],
    processes: ["Precision Turning", "Multi-axis Machining"],
    imagePath: MACHINERY_IMAGES.slidingHeadMachines
  },
  {
    name: "Laser Marking Machine",
    description: "High-precision laser marking system for permanent part identification",
    specs: [
      "Marking area: 100mm x 100mm",
      "Resolution: 0.01mm",
      "Marking types: Text, logos, barcodes, QR codes",
      "Material compatibility: Most metals and some plastics"
    ],
    processes: ["Surface Treatments"],
    imagePath: MACHINERY_IMAGES.laserMarkingMachine
  },
  {
    name: "Optical Sorting Machine",
    description: "Advanced optical inspection and sorting system for quality control",
    specs: [
      "Inspection rate: up to 300 parts/minute",
      "Detection precision: 0.05mm",
      "360° part inspection",
      "Automatic sorting of defective parts"
    ],
    processes: [],
    imagePath: MACHINERY_IMAGES.opticalSortingMachine
  },
  {
    name: "Ultrasonic Cleaning Machine",
    description: "Industrial ultrasonic cleaning system for component degreasing and cleaning",
    specs: [
      "Tank capacity: 100 liters",
      "Ultrasonic frequency: 40kHz",
      "Temperature range: 20-80°C",
      "Integrated filtration system"
    ],
    processes: ["Surface Treatments"],
    imagePath: MACHINERY_IMAGES.ultrasonicCleaningMachine
  },
  {
    name: "Hydraulic Centre Less Grinding",
    description: "Precision centerless grinding for cylindrical components",
    specs: [
      "Diameter range: 3mm to 50mm",
      "Length capacity: up to 200mm",
      "Surface finish: Ra 0.2μm",
      "Tolerance: ±0.003mm"
    ],
    processes: ["Precision Turning"],
    imagePath: MACHINERY_IMAGES.hydraulicCentreLessGrinding
  }
];

// Process capabilities
const processCapabilities = [
  {
    title: "Precision Turning",
    description: "High-precision turning operations with tight tolerances",
    machines: ["CNC Turning Centers", "Traub Machines", "Sliding Head Machines", "Hydraulic Centre Less Grinding"]
  },
  {
    title: "Multi-axis Machining",
    description: "Complex geometries through multi-axis CNC machining",
    machines: ["VMC Machines", "Traub Machines", "Sliding Head Machines"]
  },
  {
    title: "Cold Forming",
    description: "Efficient cold forming processes for high-volume production",
    machines: ["Bolt Makers", "Part Former Machines"]
  },
  {
    title: "Thread Rolling",
    description: "Precision thread rolling for superior thread quality",
    machines: ["Bolt Makers"]
  },
  {
    title: "Surface Treatments",
    description: "Various surface treatments including plating and coating",
    machines: ["Laser Marking Machine", "Ultrasonic Cleaning Machine"]
  },
  {
    title: "Heat Treatment",
    description: "Controlled heat treatment processes for material properties enhancement",
    machines: []
  }
];

// Expansion plans
const expansionPlans = [
  {
    year: 2025,
    title: "New CNC Machines",
    description: "Addition of 5 new high-precision CNC machines"
  },
  {
    year: 2025,
    title: "Automation Systems",
    description: "Implementation of robotic automation for material handling"
  },
  {
    year: 2026,
    title: "Heat Treatment Plant",
    description: "Capacity - 500kg/hr"
  },
  {
    year: 2026,
    title: "New Product Lines",
    description: "Expansion into precision aluminum components"
  },
  {
    year: 2027,
    title: "Automatic Plating Plant",
    description: "Implementation of advanced surface finishing capabilities"
  }
];

export default function Manufacturing() {
  return (
    <PageLayout
      title="Manufacturing Capabilities"
      description="Explore Nirmal Autotech Industries' state-of-the-art manufacturing facilities, machinery, and processes for precision component production."
    >
        <main className="flex-1 flex flex-col">
          {/* Facilities Overview Section */}
          <section className="py-16 px-4 bg-alternate-light">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Manufacturing Capabilities</h1>
              <div className="flex justify-center mb-12">
                <div className="badge-featured animate-float">State-of-the-Art Production Facility</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Factory className="mr-2 h-6 w-6 icon-primary" />
                    <span className="gradient-text">Our Facilities</span>
                  </h2>
                  <p className="text-lg mb-6">
                    Nirmal Autotech Industries operates a state-of-the-art 45,000 sq.ft manufacturing facility 
                    across two units - 15,000 sq.ft for UNIT-I and 30,000 sq.ft for UNIT-II, equipped with the 
                    latest technology and machinery to deliver precision components with consistent quality.
                  </p>
                  <p className="text-lg mb-6">
                    Our facility is designed for efficient workflow and includes dedicated areas for 
                    machining, quality control, finishing, and packaging to ensure smooth operations and 
                    timely delivery.
                  </p>
                  <p className="text-lg">
                    With a focus on cleanliness, organization, and safety, our manufacturing environment 
                    meets the highest industry standards and supports our commitment to excellence.
                  </p>
                </div>
                
                <div className="bg-gradient-blue/10 rounded-lg overflow-hidden colored-shadow">
                  <div className="w-[70%] mx-auto">
                    <AspectRatio ratio={1} className="w-full">
                      <Image 
                        src={getCdnUrl(MACHINERY_IMAGES.vmcMachines)}
                        alt="Nirmal Autotech Industries manufacturing facility with VMC machines"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Manufacturing Capabilities Section with Tabs */}
          <section className="py-16 px-4 bg-pattern-dots">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Manufacturing Expertise</h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                Explore our manufacturing capabilities from two perspectives: our machinery inventory and our process expertise.
              </p>
              
              <Tabs defaultValue="machine-view" className="w-full">
                <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-12 bg-gradient-blue/10">
                  <TabsTrigger value="machine-view" className="text-base py-3 data-[state=active]:bg-gradient-blue data-[state=active]:text-white">
                    <Wrench className="mr-2 h-5 w-5" />
                    Machine View
                  </TabsTrigger>
                  <TabsTrigger value="process-view" className="text-base py-3 data-[state=active]:bg-gradient-turquoise data-[state=active]:text-white">
                    <Layers className="mr-2 h-5 w-5" />
                    Process View
                  </TabsTrigger>
                </TabsList>
                
                {/* Machine View Tab Content */}
                <TabsContent value="machine-view" className="mt-0">
                  <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
                    <Cog className="mr-2 h-7 w-7 icon-primary animate-colorShift" />
                    <span className="gradient-text">Our Machinery</span>
                  </h3>
                  
                  <Tabs defaultValue={machineryCategories[0].name} className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8 overflow-x-auto flex-wrap bg-gradient-blue/10">
                      {machineryCategories.map((category, idx) => (
                        <TabsTrigger 
                          key={category.name} 
                          value={category.name} 
                          className="text-sm data-[state=active]:bg-gradient-blue data-[state=active]:text-white"
                        >
                          {category.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {machineryCategories.map((category, idx) => (
                      <TabsContent key={category.name} value={category.name}>
                        <Card className="colored-shadow">
                          <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div className="md:col-span-1 bg-gradient-blue/10 rounded-lg overflow-hidden">
                                <div className="w-[70%] mx-auto">
                                  <AspectRatio ratio={1} className="w-full">
                                    <Image 
                                      src={getCdnUrl(category.imagePath)}
                                      alt={`${category.name} - Industrial machinery at Nirmal Autotech Industries`}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 768px) 100vw, 33vw"
                                      priority={idx < 2}
                                    />
                                  </AspectRatio>
                                </div>
                              </div>
                              
                              <div className="md:col-span-2">
                                <h3 className="text-2xl font-semibold mb-4 gradient-text">{category.name}</h3>
                                <p className="text-lg mb-6">{category.description}</p>
                                
                                <h4 className="font-semibold mb-2">Specifications:</h4>
                                <ul className="list-disc pl-5 space-y-1 mb-6">
                                  {category.specs.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                  ))}
                                </ul>
                                
                                {/* Process Indicators */}
                                {category.processes && category.processes.length > 0 && (
                                  <div>
                                    <h4 className="font-semibold mb-2">Used in Processes:</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {category.processes.map((process, index) => (
                                        <span key={index} className={`badge-${index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'turquoise' : 'orange'} px-3 py-1 rounded-full text-sm`}>
                                          {process}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    ))}
                  </Tabs>
                </TabsContent>
                
                {/* Process View Tab Content */}
                <TabsContent value="process-view" className="mt-0">
                  <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
                    <Workflow className="mr-2 h-7 w-7 icon-primary animate-colorShift" />
                    <span className="gradient-text">Process Capabilities</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {processCapabilities.map((process, index) => (
                      <Card key={index} className="card-hover-effect colored-shadow relative">
                        <div className={`category-indicator category-indicator-${index % 4 === 0 ? 'primary' : index % 4 === 1 ? 'turquoise' : index % 4 === 2 ? 'orange' : 'navy'}`}></div>
                        <CardContent className="p-6 pl-8">
                          <h3 className="text-xl font-semibold mb-3 gradient-text">{process.title}</h3>
                          <p className="text-muted-foreground mb-4">{process.description}</p>
                          
                          {/* Machine Indicators */}
                          {process.machines && process.machines.length > 0 && (
                            <div>
                              <h4 className="text-sm font-medium mb-2">Machinery Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {process.machines.map((machine, idx) => (
                                  <span key={idx} className={`badge-${idx % 4 === 0 ? 'primary' : idx % 4 === 1 ? 'turquoise' : idx % 4 === 2 ? 'orange' : 'navy'} px-3 py-1 rounded-full text-xs`}>
                                    {machine}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mb-12">
                    <Chart 
                      title="Manufacturing Precision Capabilities"
                      description="Tolerance ranges we can achieve for different manufacturing processes"
                      type="horizontal-bar"
                      height={250}
                      valuePrefix="±"
                      valueSuffix=" mm"
                      data={[
                        { label: "CNC Turning", value: 0.01, color: "bg-gradient-blue" },
                        { label: "CNC Milling", value: 0.02, color: "bg-gradient-turquoise" },
                        { label: "Stamping", value: 0.05, color: "bg-gradient-orange" },
                        { label: "Threading", value: 0.03, color: "bg-gradient-navy" },
                        { label: "Assembly", value: 0.08, color: "bg-gradient-multi" }
                      ]}
                    />
                  </div>
                  
                  <div className="bg-gradient-blue/10 p-8 rounded-lg colored-shadow">
                    <h3 className="text-2xl font-semibold mb-4 text-center gradient-text">Key Manufacturing Strengths</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 bg-gradient-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                            <span>High-precision machining with tight tolerances</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 bg-gradient-turquoise text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                            <span>Capability to handle various materials including steel, stainless steel, brass, and aluminum</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 bg-gradient-orange text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                            <span>Efficient production processes for both high and low volume requirements</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 bg-gradient-navy text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                            <span>Advanced quality control at every stage of production</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 bg-gradient-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                            <span>Flexible manufacturing setup to accommodate custom requirements</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 bg-gradient-turquoise text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                            <span>Continuous improvement through process optimization</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Section Divider Banner */}
          <div className="section-divider-banner py-8">
            <div className="container mx-auto text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Advanced Manufacturing Technology</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="achievement-badge">CNC Precision</div>
                <div className="achievement-badge">Multi-Axis Machining</div>
                <div className="achievement-badge">Cold Forming</div>
                <div className="achievement-badge">Automated Quality Control</div>
              </div>
            </div>
          </div>

          {/* Expansion Plans Section */}
          <section className="py-16 px-4 bg-alternate-light">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text flex items-center justify-center">
                <BarChart4 className="mr-2 h-8 w-8 icon-primary" />
                Expansion Plans
              </h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <div className="relative mb-16">
                {/* Timeline line */}
                <div className="absolute left-0 top-8 h-2 w-full bg-gradient-blue rounded-full"></div>
                
                {/* Timeline items */}
                <div className="flex justify-between relative">
                  {expansionPlans.map((plan, index) => (
                    <div key={index} className="relative flex flex-col items-center w-1/5">
                      {/* Timeline dot */}
                      <div className={`w-8 h-8 rounded-full bg-gradient-${index % 4 === 0 ? 'blue' : index % 4 === 1 ? 'turquoise' : index % 4 === 2 ? 'orange' : 'navy'} z-10 animate-pulse-glow flex items-center justify-center text-white font-bold`}>
                        {index + 1}
                      </div>
                      
                      {/* Year */}
                      <div className="mt-4 text-lg font-bold gradient-text">{plan.year}</div>
                      
                      {/* Content */}
                      <Card className="mt-4 w-full card-hover-effect colored-shadow">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2 text-primary">{plan.title}</h3>
                          <p className="text-sm text-muted-foreground">{plan.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center bg-gradient-blue/10 p-8 rounded-lg colored-shadow">
                <p className="text-lg mb-6">
                  Our strategic expansion plans are designed to enhance our manufacturing capabilities, 
                  increase capacity, and incorporate the latest technologies to better serve our customers.
                </p>
                <p className="text-lg">
                  With these planned investments, Nirmal Autotech Industries is positioning itself as a 
                  future-ready manufacturing partner committed to growth and innovation.
                </p>
              </div>
            </div>
          </section>
        </main>
    </PageLayout>
  );
}