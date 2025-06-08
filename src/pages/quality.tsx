import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  ShieldCheck, 
  Award, 
  Search, 
  CheckCircle, 
  FileCheck,
  Microscope,
  Ruler,
  Gauge,
  X
} from "lucide-react";
import Image from "next/image";
import { QUALITY_IMAGES, getCdnUrl } from "@/constants/assetPaths";

// Quality equipment data
const qualityEquipment = [
  {
    category: "Measuring Instruments",
    items: [
      { name: "Digital Micrometers", description: "Precision measurement with 0.001mm accuracy" },
      { name: "Height Gauges", description: "Vertical measurement with digital readout" },
      { name: "Vernier Calipers", description: "Digital and dial calipers for dimensional measurement" },
      { name: "Thread Gauges", description: "Go/No-Go gauges for thread inspection" },
      { name: "Bore Gauges", description: "Internal diameter measurement tools" }
    ]
  },
  {
    category: "Testing Equipment",
    items: [
      { name: "Hardness Testers", description: "Rockwell and Brinell hardness testing" },
      { name: "Surface Roughness Testers", description: "Measurement of surface finish quality" },
      { name: "Torque Testers", description: "Testing of torque specifications for fasteners" },
      { name: "Universal Testing Machine", description: "Tensile and compression strength testing for materials" },
      { name: "Profile Projector", description: "Optical measurement and inspection of complex profiles" },
      { name: "Eddy Current", description: "Non-destructive testing for surface defects and material properties" },
      { name: "Material Composition Analyzers (Spectrometer)", description: "Verification of material specifications" }
    ]
  },
  {
    category: "Plating Plant Instruments",
    items: [
      { name: "Coating Thickness Gauges", description: "Measurement of plating thickness" },
      { name: "pH Meters", description: "Monitoring of plating bath chemistry" },
      { name: "Adhesion Testers", description: "Testing plating adhesion to base material" },
      { name: "Hull Cell", description: "Analysis and control of plating solutions" },
      { name: "Conductivity Meters", description: "Measurement of solution conductivity" }
    ]
  }
];

// Quality assurance methods
const qualityMethods = [
  {
    title: "Statistical Process Control (SPC)",
    description: "Implementation of statistical methods to monitor and control processes, ensuring consistent quality."
  },
  {
    title: "First Article Inspection",
    description: "Detailed inspection of first production pieces to verify conformance to all specifications."
  },
  {
    title: "In-process Inspection",
    description: "Regular checks during production to catch and correct issues before they affect final quality."
  },
  {
    title: "Final Inspection",
    description: "Comprehensive inspection of finished products before packaging and shipment."
  },
  {
    title: "Supplier Quality Management",
    description: "Rigorous evaluation and monitoring of suppliers to ensure quality of incoming materials."
  },
  {
    title: "Continuous Improvement",
    description: "Ongoing analysis and enhancement of processes to improve quality and efficiency."
  }
];

export default function Quality() {
  // Certificate data for modal viewing
  const certificates = [
    {
      id: "iatf",
      title: "IATF 16949:2016 Certificate",
      image: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/whatsapp-image-2025-04-25-at-16.57.28-1cf51e7.jpeg"
    },
    {
      id: "iso14001",
      title: "ISO 14001:2015 Certificate",
      image: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/image-083c3ff.png"
    },
    {
      id: "rohs",
      title: "RoHS Compliance Certificate",
      image: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/image-0ff2370.png"
    }
  ];
  return (
    <PageLayout
      title="Quality Assurance"
      description="Learn about Nirmal Autotech Industries' commitment to quality, certifications, quality assurance methods, and testing equipment."
    >
        <main className="flex-1 flex flex-col">
          {/* Quality Policy Section */}
          <section className="py-16 px-4 bg-alternate-light">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Quality Assurance</h1>
              <div className="flex justify-center mb-12">
                <div className="badge-featured animate-float">Excellence in Every Component</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <ShieldCheck className="mr-2 h-6 w-6 icon-primary" />
                    <span className="gradient-text">Our Quality Policy</span>
                  </h2>
                  <p className="text-lg mb-6">
                    At Nirmal Autotech Industries, quality is not just a department but a fundamental 
                    aspect of our organizational culture. We are committed to delivering products that 
                    consistently meet or exceed customer expectations and comply with all applicable 
                    regulatory requirements.
                  </p>
                  <p className="text-lg mb-6">
                    Our quality policy is built on the principles of:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-gradient-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <span><strong className="text-primary">Customer satisfaction</strong> through consistent quality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-gradient-turquoise text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <span><strong className="text-primary">Continuous improvement</strong> of processes and systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-gradient-orange text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <span><strong className="text-primary">Prevention</strong> rather than detection of defects</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-gradient-navy text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <span><strong className="text-primary">Involvement and empowerment</strong> of all employees in quality initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-gradient-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <span><strong className="text-primary">Compliance</strong> with international quality standards</span>
                    </li>
                  </ul>
                  <p className="text-lg">
                    This policy is communicated throughout the organization and reviewed regularly 
                    to ensure its continued relevance and effectiveness.
                  </p>
                </div>
                
                <Card className="overflow-hidden colored-shadow">
                  <CardContent className="p-0">
                    <div className="bg-gradient-blue/10 p-8 flex flex-col items-center justify-center h-full">
                      <div className="bg-gradient-blue rounded-full p-4 mb-6">
                        <FileCheck className="h-16 w-16 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-center mb-4 gradient-text">Quality Management System</h3>
                      <p className="text-center">
                        Our comprehensive quality management system ensures consistent quality 
                        through documented procedures, regular audits, and continuous improvement.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-16 px-4 bg-pattern-dots">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text flex items-center justify-center">
                <Award className="mr-2 h-8 w-8 icon-primary animate-colorShift" />
                Certifications
              </h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <Tabs defaultValue="iatf" className="w-full">
                <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8 w-full">
                  <TabsTrigger value="iatf">IATF 16949:2016</TabsTrigger>
                  <TabsTrigger value="iso14001">ISO 14001:2015</TabsTrigger>
                  <TabsTrigger value="rohs">RoHS Compliance</TabsTrigger>
                </TabsList>
                
                {/* IATF 16949:2016 Certificate */}
                <TabsContent value="iatf">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center">
                          <div className="relative w-full h-[300px]">
                            <Image 
                              src={certificates[0].image}
                              alt={certificates[0].title}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">IATF 16949:2016</h3>
                          <p className="text-lg text-muted-foreground mb-4">Automotive Quality Management System</p>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Issue Date:</span> 21 April 2023
                            </div>
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Valid until:</span> 20 April 2026
                            </div>
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Certificate Number:</span> 22UQAT1921
                            </div>
                          </div>
                          <p className="text-lg mb-4">
                            Nirmal Autotech Industries is proud to be certified to IATF 16949:2016, the 
                            international standard for automotive quality management systems.
                          </p>
                          <p className="text-lg mb-4">
                            This certification demonstrates our commitment to:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Meeting automotive industry requirements</li>
                            <li>Implementing effective quality management processes</li>
                            <li>Focusing on defect prevention and reduction of variation</li>
                            <li>Continuous improvement in all aspects of operations</li>
                            <li>Enhancing customer satisfaction</li>
                          </ul>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium">
                                View Certificate
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                              <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-hidden">
                                <div className="absolute top-2 right-2 z-10">
                                  <button className="bg-white/80 hover:bg-white p-2 rounded-full">
                                    <X className="h-6 w-6" />
                                  </button>
                                </div>
                                <Image 
                                  src={certificates[0].image}
                                  alt={certificates[0].title}
                                  fill
                                  style={{ objectFit: 'contain' }}
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* ISO 14001:2015 Certificate */}
                <TabsContent value="iso14001">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center order-1 md:order-2">
                          <div className="relative w-full h-[300px]">
                            <Image 
                              src={certificates[2].image}
                              alt={certificates[1].title}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                        
                        <div className="order-2 md:order-1">
                          <h3 className="text-2xl font-semibold mb-2">ISO 14001:2015</h3>
                          <p className="text-lg text-muted-foreground mb-4">Environmental Management System</p>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Issue Date:</span> 21 April 2025
                            </div>
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Valid until:</span> 20 April 2028
                            </div>
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Certificate Number:</span> 23UEAT2021
                            </div>
                          </div>
                          <p className="text-lg mb-4">
                            Our ISO 14001:2015 certification demonstrates our commitment to environmental 
                            responsibility and sustainable manufacturing practices.
                          </p>
                          <p className="text-lg mb-4">
                            Key benefits of our environmental management system:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Reduced environmental impact of operations</li>
                            <li>Efficient resource utilization and waste reduction</li>
                            <li>Compliance with environmental regulations</li>
                            <li>Systematic approach to environmental management</li>
                            <li>Continuous environmental improvement processes</li>
                          </ul>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium">
                                View Certificate
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                              <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-hidden">
                                <div className="absolute top-2 right-2 z-10">
                                  <button className="bg-white/80 hover:bg-white p-2 rounded-full">
                                    <X className="h-6 w-6" />
                                  </button>
                                </div>
                                <Image 
                                  src={certificates[2].image}
                                  alt={certificates[1].title}
                                  fill
                                  style={{ objectFit: 'contain' }}
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* RoHS Compliance Certificate */}
                <TabsContent value="rohs">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center">
                          <div className="relative w-full h-[300px]">
                            <Image 
                              src={certificates[1].image}
                              alt={certificates[2].title}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">RoHS Compliance</h3>
                          <p className="text-lg text-muted-foreground mb-4">Restriction of Hazardous Substances</p>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Issue Date:</span> 21 April 2025
                            </div>
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Valid until:</span> 20 April 2028
                            </div>
                            <div className="bg-secondary/20 px-3 py-1 rounded-full text-sm">
                              <span className="font-medium">Certificate Number:</span> 23URAT2121
                            </div>
                          </div>
                          <p className="text-lg mb-4">
                            Our RoHS compliance certification confirms that our products meet the requirements 
                            of the EU directive 2002/95/EC on the restriction of hazardous substances.
                          </p>
                          <p className="text-lg mb-4">
                            This certification ensures:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Compliance with restrictions on hazardous materials in products</li>
                            <li>Elimination of lead, mercury, cadmium, and other harmful substances</li>
                            <li>Environmentally safe manufacturing processes</li>
                            <li>Safer products for consumers and the environment</li>
                            <li>Commitment to sustainable and responsible manufacturing</li>
                          </ul>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium">
                                View Certificate
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                              <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-hidden">
                                <div className="absolute top-2 right-2 z-10">
                                  <button className="bg-white/80 hover:bg-white p-2 rounded-full">
                                    <X className="h-6 w-6" />
                                  </button>
                                </div>
                                <Image 
                                  src={certificates[1].image}
                                  alt={certificates[2].title}
                                  fill
                                  style={{ objectFit: 'contain' }}
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Section Divider Banner */}
          <div className="section-divider-banner py-8">
            <div className="container mx-auto text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Certified Quality Excellence</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="achievement-badge">ISO 9001:2015</div>
                <div className="achievement-badge">IATF 16949:2016</div>
                <div className="achievement-badge">ISO 14001:2015</div>
                <div className="achievement-badge">RoHS Compliant</div>
              </div>
            </div>
          </div>

          {/* Quality Assurance Methods Section */}
          <section className="py-16 px-4 bg-alternate-light">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text flex items-center justify-center">
                <CheckCircle className="mr-2 h-8 w-8 icon-primary" />
                Quality Assurance Methods
              </h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {qualityMethods.map((method, index) => (
                  <Card key={index} className="card-hover-effect colored-shadow relative">
                    <div className={`category-indicator category-indicator-${index % 4 === 0 ? 'primary' : index % 4 === 1 ? 'turquoise' : index % 4 === 2 ? 'orange' : 'navy'}`}></div>
                    <CardContent className="p-6 pl-8">
                      <h3 className="text-xl font-semibold mb-3 gradient-text">{method.title}</h3>
                      <p className="text-muted-foreground">{method.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gradient-blue/10 p-8 rounded-lg colored-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">Quality Supervision</h3>
                <p className="text-lg text-center mb-8">
                  Our quality assurance processes are supervised by experienced quality professionals 
                  who ensure adherence to standards and specifications at every stage of production.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="card-hover-effect">
                    <div className="bg-gradient-blue rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Inspection</h4>
                    <p>Thorough inspection at critical stages of production</p>
                  </div>
                  
                  <div className="card-hover-effect">
                    <div className="bg-gradient-turquoise rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Microscope className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Testing</h4>
                    <p>Comprehensive testing to verify product performance</p>
                  </div>
                  
                  <div className="card-hover-effect">
                    <div className="bg-gradient-orange rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Gauge className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Monitoring</h4>
                    <p>Continuous monitoring of processes and parameters</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Lab & Equipments Section */}
          <section className="py-16 px-4 bg-pattern-dots">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text flex items-center justify-center">
                <Ruler className="mr-2 h-8 w-8 icon-primary animate-colorShift" />
                Quality Lab & Equipments
              </h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <Tabs defaultValue={qualityEquipment[0].category} className="w-full">
                <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8 bg-gradient-blue/10">
                  {qualityEquipment.map((category, idx) => (
                    <TabsTrigger 
                      key={category.category} 
                      value={category.category}
                      className={`data-[state=active]:bg-gradient-${idx === 0 ? 'blue' : idx === 1 ? 'turquoise' : 'orange'} data-[state=active]:text-white`}
                    >
                      {category.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {qualityEquipment.map((category) => (
                  <TabsContent key={category.category} value={category.category}>
                    <Card className="colored-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">{category.category}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="bg-white p-6 rounded-lg shadow-sm flex justify-center items-center h-64 overflow-hidden gradient-border">
                          {category.category === "Measuring Instruments" && (
                            <img 
                              src={getCdnUrl(QUALITY_IMAGES.measuringInstruments)} 
                              alt="Professional measuring instruments for quality control"
                              className="w-full h-full object-cover rounded-md"
                              loading="lazy"
                            />
                          )}
                          {category.category === "Testing Equipment" && (
                            <img 
                              src={getCdnUrl(QUALITY_IMAGES.testingEquipment)} 
                              alt="Advanced testing equipment for quality assurance"
                              className="w-full h-full object-cover rounded-md"
                              loading="lazy"
                            />
                          )}
                          {category.category === "Plating Plant Instruments" && (
                            <img 
                              src={getCdnUrl(QUALITY_IMAGES.platingPlantInstruments)} 
                              alt="Specialized plating plant instruments for quality control"
                              className="w-full h-full object-cover rounded-md"
                              loading="lazy"
                            />
                          )}
                        </div>
                          
                          <div>
                            <ul className="space-y-4">
                              {category.items.map((item, index) => (
                                <li key={index} className="border-b border-gradient-blue/20 pb-3 last:border-0">
                                  <h4 className="font-semibold mb-1 text-primary">{item.name}</h4>
                                  <p className="text-muted-foreground text-sm">{item.description}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
              
              <div className="mt-12 text-center bg-gradient-blue/10 p-6 rounded-lg colored-shadow">
                <p className="text-lg">
                  Our quality lab is equipped with state-of-the-art measuring and testing equipment, 
                  calibrated regularly to ensure accuracy and reliability of all quality measurements.
                </p>
              </div>
            </div>
          </section>
        </main>
    </PageLayout>
  );
}