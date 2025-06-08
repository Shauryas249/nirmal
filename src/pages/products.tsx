import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Cog, Car, Tractor, Bike, Wrench, BarChart, PieChart, Users, Factory, ArrowUpRight, Info } from "lucide-react";
import Chart from "@/components/Chart";
import ProductSpecificationDialog, { SpecificationData } from "@/components/ProductSpecificationDialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PRODUCT_IMAGES, getCdnUrl, validateAssetPath } from "@/constants/assetPaths";

// Product categories data
const productCategories = [
  {
    id: "standard-fasteners",
    name: "Standard Fasteners",
    icon: <Wrench className="h-6 w-6" />,
    products: [
      { 
        name: "Socket Head Fasteners", 
        image: getCdnUrl(PRODUCT_IMAGES.standardFasteners.socketHeadFasteners), 
        description: "High-quality socket head cap screws, countersunk head screws, and button head cap screws",
        productItems: ["Socket Head Cap Screw", "Socket Countersunk Head Screw", "Socket Button Head Cap Screw", "Socket Head Shoulder Screw", "Socket Set Shoulder Screw Knurled Cap"]
      },
      { 
        name: "Hex Wrench (L-keys)", 
        image: getCdnUrl(PRODUCT_IMAGES.standardFasteners.hexWrench), 
        description: "Precision-manufactured Allen keys for fastener installation and maintenance",
        productItems: ["Allen Keys"]
      },
      { 
        name: "Durlock Series", 
        image: getCdnUrl(PRODUCT_IMAGES.standardFasteners.durlockSeries), 
        description: "Specialized Durlock screws and nuts for secure fastening applications",
        productItems: ["Durlock Screws", "Durlock Nuts"]
      },
      { 
        name: "Hex Head Fasteners", 
        image: getCdnUrl(PRODUCT_IMAGES.standardFasteners.hexHeadFasteners), 
        description: "Standard hex head bolts/screws and hex nuts for various applications",
        productItems: ["Hex Head Bolts/Screws", "Hex Nuts"]
      },
      { 
        name: "Studs", 
        image: getCdnUrl(PRODUCT_IMAGES.standardFasteners.studs), 
        description: "High-strength studs and heavy nuts for demanding applications",
        productItems: ["Studs", "Heavy Nuts"]
      },
      { 
        name: "Hex Flange", 
        image: getCdnUrl(PRODUCT_IMAGES.standardFasteners.hexFlange), 
        description: "Hex flange screws/bolts and nuts with integrated washer face",
        productItems: ["Hex Flange Screw/Bolts (DIN-9762)", "Hex Flange Nuts"]
      }
    ]
  },
  {
    id: "automotive-industrial",
    name: "Automotive & Industrial Components",
    icon: <Car className="h-6 w-6" />,
    products: [
      { 
        name: "Cycle Components", 
        image: getCdnUrl(PRODUCT_IMAGES.automotiveIndustrial.cycleComponents), 
        description: "High-quality components including axle nuts, axles, and handle bolts for bicycles",
        productItems: ["Axle Nuts", "Axle", "Handle Bolts", "Handle Bolts Assembly"]
      },
      { 
        name: "Tractor Parts", 
        image: getCdnUrl(PRODUCT_IMAGES.automotiveIndustrial.tractorParts), 
        description: "Durable components for agricultural tractors including connectors, forks, and pivot pins",
        productItems: ["Connectors", "Forks", "Head Spool", "3-way Joints", "Outer Rod", "Pivot Pin", "Rod Assembly", "Shaft Assembly", "Threaded Cap"]
      },
      { 
        name: "General Automotive", 
        image: getCdnUrl(PRODUCT_IMAGES.automotiveIndustrial.generalAutomotive), 
        description: "Precision components including brass inserts, water inlets/outlets, and special screws",
        productItems: ["Brass Inserts", "Insert Nuts", "Water Inlets/Outlets", "Ball Pins and Studs", "Collar Sleeves", "Liners", "Flange Pulleys", "Compressor Limiters", "Special Screws", "Dowel Pins (DIN Standards)", "T-Rods and Tubes"]
      }
    ]
  },
  {
    id: "specialty-products",
    name: "Specialty Products",
    icon: <Settings className="h-6 w-6" />,
    products: [
      { 
        name: "Special Fasteners", 
        image: getCdnUrl(PRODUCT_IMAGES.specialtyProducts.specialFasteners), 
        description: "Specialized fasteners including collar bolts and flange screws for unique applications",
        productItems: ["Collar Bolts", "Flange Screws"]
      },
      { 
        name: "Custom Engineered Solutions", 
        image: getCdnUrl(PRODUCT_IMAGES.specialtyProducts.specialProducts), 
        description: "Custom-designed components tailored to specific requirements and applications",
        productItems: ["Custom Engineered Solutions"]
      }
    ]
  }
];

// Product specifications data
const productSpecifications: Record<string, SpecificationData> = {
  "Socket Head Cap Screw": {
    tensileStrength: "Property Class 8.8 / 10.9 / 12.9 (800 / 1040 / 1300 N/mm²)",
    sizeRangeDiameter: "Metric M5 to M24, Inch 3/16\" to 1\"",
    sizeRangeLength: "Metric 8 to 200 mm, Inch 3/8\" to 8\"",
    equivalentStandards: [
      "IS: 2269",
      "ISO: 4762",
      "DIN: 912",
      "BS: 4168",
      "ANSI: B18.3.1M",
      "JIS: B117"
    ]
  },
  "Socket Countersunk Head Screw": {
    tensileStrength: "1050 N/mm² (12.9)",
    sizeRangeDiameter: "Metric M5 to M24, Inch 5/16\" to 5/8\"",
    sizeRangeLength: "Metric 8 to 200 mm, Inch 1/2\" to 3\"",
    equivalentStandards: [
      "IS: 5761",
      "ISO: --",
      "DIN: 7991",
      "BS: 4168",
      "ANSI: B18.3.5M",
      "JIS: --",
      "BS: 2470"
    ]
  },
  "Socket Button Head Cap Screw": {
    tensileStrength: "1050 N/mm² (12.9)",
    sizeRangeDiameter: "Metric M5 to M12, Inch --",
    sizeRangeLength: "Metric 6 to 50 mm, Inch --",
    equivalentStandards: [
      "IS: --",
      "ISO: --",
      "DIN: 7380",
      "BS: 4168",
      "ANSI: B18.3.4M",
      "JIS: --"
    ]
  },
  "Socket Head Shoulder Screw": {
    tensileStrength: "1050 N/mm² (12.9)",
    sizeRangeDiameter: "Metric M6 to M24, Inch --",
    sizeRangeLength: "Metric 10 to 120 mm, Inch --",
    equivalentStandards: [
      "IS: --",
      "ISO: --",
      "DIN: 7379",
      "BS: 4168",
      "ANSI: --",
      "JIS: --"
    ]
  },
  "Socket Set Shoulder Screw Knurled Cap": {
    tensileStrength: "Hardness HRc 45 Min",
    sizeRangeDiameter: "Metric M5 to M20, Inch 5/16\" to 3/4\"",
    sizeRangeLength: "Metric 5 to 80 mm, Inch 5/16\" to 3\"",
    equivalentStandards: [
      "IS: 6094",
      "ISO: 4026, 4027, 4028, 4029",
      "DIN: 913, 914, 915, 916",
      "BS: 4168",
      "ANSI: B18.3.6M",
      "JIS: B117",
      "BS: 2427"
    ]
  },
  "Allen Keys": {
    tensileStrength: "Hardness HRc 47 Min",
    sizeRangeDiameter: "Metric 4 to 19 mm, Inch 7/32\" to 5/8\"",
    sizeRangeLength: "Metric --, Inch --",
    equivalentStandards: [
      "IS: 3082",
      "ISO: 2563",
      "DIN: 911",
      "BS: 4168",
      "ANSI: B18.3.2M",
      "JIS: B464",
      "BS: 2470"
    ]
  },
  "Durlock Screws": {
    tensileStrength: "12.9",
    sizeRangeDiameter: "Metric M6 to M20, Inch --",
    sizeRangeLength: "Metric 12 to 100 mm, Inch --",
    equivalentStandards: ["As per NAIPL standard"]
  },
  "Hex Head Bolts/Screws": {
    tensileStrength: "Grade 8.8/10.9 (800/1040 N/mm²)",
    sizeRangeDiameter: "Metric M5 to M24, Inch 5/16\" to 1\"",
    sizeRangeLength: "Metric 8 to 200 mm, Inch 5/16\" to 8\"",
    equivalentStandards: [
      "IS: 1364",
      "ISO: 4014, 4017",
      "DIN: 931, 933",
      "BS: 1083, 1768",
      "ANSI: B18.2.1"
    ]
  },
  "Hex Nuts": {
    tensileStrength: "Nut Grade 8/10, Nut Grade 8/5",
    sizeRangeDiameter: "Metric M5 to M24, Inch 5/16\" to 1\"",
    sizeRangeLength: "Metric --, Inch --",
    equivalentStandards: [
      "IS: 1364",
      "ISO: 4064",
      "DIN: 934",
      "BS: 1083, 1768",
      "ANSI: B18.2.4.1M, B18.2.2",
      "JIS: B118.1",
      "BS: A193"
    ]
  },
  "Studs": {
    tensileStrength: "Stud 8.7, Nut H2",
    sizeRangeDiameter: "Metric M12 to M24, Inch 1/2\" to 1\"",
    sizeRangeLength: "Metric 60 to 120 mm, Inch --",
    equivalentStandards: ["BS: A194"]
  },
  "Hex Flange Screw/Bolts (DIN-9762)": {
    tensileStrength: "Grade 8.8/10.9 (800/1040 N/mm²)",
    sizeRangeDiameter: "Metric M5 to M24, Inch 5/16\" to 1\"",
    sizeRangeLength: "Metric 8 to 200 mm, Inch 5/16\" to 8\"",
    equivalentStandards: [
      "IS: 1364",
      "ISO: 4014, 4017",
      "DIN: 931, 933",
      "BS: 1083, 1768",
      "ANSI: B18.2.1"
    ]
  }
};

// List of clickable products
const clickableProducts = [
  "Socket Head Cap Screw",
  "Socket Countersunk Head Screw",
  "Socket Button Head Cap Screw",
  "Socket Head Shoulder Screw",
  "Socket Set Shoulder Screw Knurled Cap",
  "Allen Keys",
  "Durlock Screws",
  "Hex Head Bolts/Screws",
  "Hex Nuts",
  "Studs",
  "Hex Flange Screw/Bolts (DIN-9762)"
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  return (
    <PageLayout 
      title="Products"
      description="Explore Nirmal Autotech Industries' range of precision components including standard fasteners, special products, automotive components, tractor parts, and cycle parts."
    >
        <main className="flex-1 flex flex-col">
          {/* Manufacturing Capabilities Section */}
          <section className="py-16 px-4 bg-alternate-light">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Our Products</h1>
              <div className="flex justify-center mb-12">
                <div className="badge-featured animate-float">Precision Engineered Components</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">Manufacturing Capabilities</h2>
                  <p className="text-lg mb-6">
                    At Nirmal Autotech Industries, we specialize in manufacturing precision components for various industries, 
                    with a focus on automotive, industrial, and agricultural sectors.
                  </p>
                  <p className="text-lg mb-6">
                    Our state-of-the-art facility is equipped with advanced CNC machines, precision stamping presses, 
                    and automated assembly lines that enable us to produce high-quality components with tight tolerances.
                  </p>
                  <p className="text-lg mb-6">
                    We have the capability to work with various materials including steel, stainless steel, brass, aluminum, 
                    and specialized alloys to meet diverse customer requirements.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/manufacturing">View Detailed Manufacturing Capabilities</Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center card-hover-effect colored-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-gradient-blue rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Cog className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">CNC Machining</h3>
                      <p className="text-muted-foreground">Precision machining with tight tolerances</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center card-hover-effect colored-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-gradient-turquoise rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Settings className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Metal Stamping</h3>
                      <p className="text-muted-foreground">High-volume production with consistency</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center card-hover-effect colored-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-gradient-orange rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Wrench className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Assembly</h3>
                      <p className="text-muted-foreground">Complex component assembly</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center card-hover-effect colored-shadow">
                    <CardContent className="pt-6">
                      <div className="bg-gradient-navy rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Settings className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Quality Testing</h3>
                      <p className="text-muted-foreground">Comprehensive quality assurance</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Product Categories Section */}
          <section className="py-16 px-4 bg-pattern-dots">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Product Categories</h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <Tabs defaultValue="standard-fasteners" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                  {productCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center">
                      <span className="mr-2">{category.icon}</span>
                      <span className="hidden md:inline">{category.name}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {productCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-center md:text-left">{category.name}</h3>
                        {category.id === "standard-fasteners" && (
                          <Button variant="outline" asChild>
                            <Link href="/products/standard-fasteners">View All Standard Fasteners</Link>
                          </Button>
                        )}
                        {category.id === "automotive-industrial" && (
                          <Button variant="outline" asChild>
                            <Link href="/products/automotive-vehicle">View All Automotive & Industrial Components</Link>
                          </Button>
                        )}
                        {category.id === "specialty-products" && (
                          <Button variant="outline" asChild>
                            <Link href="/products/specialty-components">View All Specialty Products</Link>
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.products.map((product, index) => (
                          <Card key={index} className="overflow-hidden card-hover-effect colored-shadow relative">
                            {index === 0 && <div className="ribbon-banner">Featured</div>}
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                            <CardContent className="p-4">
                              <h4 className="text-xl font-semibold mb-2 gradient-text">{product.name}</h4>
                              <div className="mb-2">
                                <span className={`badge-${index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'turquoise' : 'orange'} text-xs px-2 py-0.5 rounded-full`}>
                                  {category.name}
                                </span>
                              </div>
                              <p className="text-muted-foreground mb-4">{product.description}</p>
                              
                              <h4 className="font-medium mb-2">Products:</h4>
                              <ul className="space-y-1">
                                {product.productItems.map((item, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <ArrowUpRight className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                                    {clickableProducts.includes(item) && productSpecifications[item] ? (
                                      <button
                                        onClick={() => setSelectedProduct(item)}
                                        className="text-sm text-left hover:text-primary hover:underline flex items-center group cursor-pointer"
                                      >
                                        {item}
                                        <Info className="h-3.5 w-3.5 ml-1 text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </button>
                                    ) : (
                                      <span className="text-sm">{item}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>

          {/* Data Visualization Section */}
          <section className="py-16 px-4 bg-alternate-blue">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
                <span className="flex items-center justify-center gap-2">
                  <BarChart className="h-6 w-6 icon-primary" />
                  Production Metrics
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Chart 
                  title="Monthly Production Capacity"
                  description="Our manufacturing output by product category (units in thousands)"
                  type="bar"
                  height={250}
                  valueSuffix="K"
                  data={[
                    { label: "Standard Fasteners", value: 450, color: "bg-gradient-blue" },
                    { label: "Special Products", value: 280, color: "bg-gradient-turquoise" },
                    { label: "Automotive", value: 350, color: "bg-gradient-orange" },
                    { label: "Tractor Parts", value: 180, color: "bg-gradient-navy" },
                    { label: "Cycle Parts", value: 120, color: "bg-gradient-multi" }
                  ]}
                />
                
                <Chart 
                  title="Customer Distribution"
                  description="Breakdown of our customer base by industry"
                  type="pie"
                  height={250}
                  valueSuffix="%"
                  data={[
                    { label: "Automotive", value: 45, color: "bg-gradient-blue" },
                    { label: "Industrial", value: 25, color: "bg-gradient-turquoise" },
                    { label: "Agricultural", value: 15, color: "bg-gradient-orange" },
                    { label: "Consumer", value: 10, color: "bg-gradient-navy" },
                    { label: "Others", value: 5, color: "bg-gradient-multi" }
                  ]}
                />
              </div>
              

              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="text-center card-hover-effect colored-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold gradient-text mb-2">99.8%</div>
                    <h3 className="text-xl font-semibold mb-2">Quality Rate</h3>
                    <p className="text-muted-foreground">First-pass yield across all product lines</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center card-hover-effect colored-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold gradient-text mb-2">98.5%</div>
                    <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
                    <p className="text-muted-foreground">Consistent delivery performance</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center card-hover-effect colored-shadow">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                    <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
                    <p className="text-muted-foreground">Industry expertise and knowledge</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Section Divider Banner */}
          <div className="section-divider-banner py-8">
            <div className="container mx-auto text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Industry-Leading Manufacturing Excellence</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="achievement-badge">ISO 9001:2015 Certified</div>
                <div className="achievement-badge">IATF 16949:2016 Compliant</div>
                <div className="achievement-badge">RoHS Compliant</div>
                <div className="achievement-badge">100% Quality Inspection</div>
              </div>
            </div>
          </div>

          {/* Custom Solutions Section */}
          <section className="py-16 px-4 bg-alternate-light">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Custom Solutions</h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <div className="max-w-4xl mx-auto">
                <div className="mb-8 animate-fadeIn">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Tailored to Your Needs</h3>
                  <p className="text-lg mb-6">
                    Beyond our standard product range, we specialize in developing custom solutions to meet specific 
                    requirements of our clients. Our engineering team works closely with customers to understand their 
                    needs and develop components that perfectly fit their applications.
                  </p>
                  <p className="text-lg mb-6">
                    From concept to production, we provide comprehensive support including design assistance, 
                    prototyping, testing, and full-scale manufacturing.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-gradient-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <p><strong className="text-primary">Design Collaboration:</strong> Our engineering team works with your designers to optimize components for manufacturability</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-gradient-turquoise text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <p><strong className="text-primary">Prototyping:</strong> Rapid prototyping capabilities to validate designs before full production</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-gradient-orange text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <p><strong className="text-primary">Material Selection:</strong> Expertise in selecting the optimal materials for your application</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-gradient-navy text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</div>
                      <p><strong className="text-primary">Quality Assurance:</strong> Rigorous testing and quality control for custom components</p>
                    </div>
                  </div>
                </div>
                
                <Card className="mt-8 colored-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 gradient-text">Our Custom Solution Process</h3>
                    <ol className="space-y-4">
                      <li className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gradient-blue text-white flex items-center justify-center mr-3 flex-shrink-0 animate-pulse-glow">1</span>
                        <span>Initial consultation to understand requirements</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gradient-turquoise text-white flex items-center justify-center mr-3 flex-shrink-0 animate-pulse-glow">2</span>
                        <span>Design and engineering phase</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gradient-orange text-white flex items-center justify-center mr-3 flex-shrink-0 animate-pulse-glow">3</span>
                        <span>Prototype development and testing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gradient-navy text-white flex items-center justify-center mr-3 flex-shrink-0 animate-pulse-glow">4</span>
                        <span>Production setup and quality planning</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gradient-multi text-white flex items-center justify-center mr-3 flex-shrink-0 animate-pulse-glow">5</span>
                        <span>Full-scale manufacturing and delivery</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        {/* Product Specification Dialog */}
        {selectedProduct && productSpecifications[selectedProduct] && (
          <ProductSpecificationDialog
            open={!!selectedProduct}
            onOpenChange={(open) => {
              if (!open) setSelectedProduct(null);
            }}
            productName={selectedProduct}
            specificationData={productSpecifications[selectedProduct]}
          />
        )}
    </PageLayout>
  );
}