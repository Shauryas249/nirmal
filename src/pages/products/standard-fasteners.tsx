import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ArrowUpRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ProductSpecificationDialog, { SpecificationData } from "@/components/ProductSpecificationDialog";

// Standard Fasteners data
const standardFasteners = [
  { 
    name: "Socket Head Fasteners", 
    image: "/images/Socket Head Fasteners.jfif", 
    description: "High-quality socket head fasteners manufactured to industry standards with precise threading and excellent durability.",
    products: ["Socket Head Cap Screw", "Socket Countersunk Head Screw", "Socket Button Head Cap Screw", "Socket Head Shoulder Screw", "Socket Set Shoulder Screw Knurled Cap"],
    alt: "Various socket head fasteners including cap screws and countersunk screws",
    id: "socket-head-fasteners"
  },
  { 
    name: "Hex Wrench (L-keys)", 
    image: "/images/Hex Wrench.png", 
    description: "Precision-manufactured Allen keys for fastener installation and maintenance, designed for durability and ease of use.",
    products: ["Allen Keys"],
    alt: "Professional-grade hex wrench L-keys for fastener installation"
  },
  { 
    name: "Durlock Series", 
    image: "/images/Durlock Series.png", 
    description: "Specialized Durlock screws and nuts designed for secure fastening applications with excellent vibration resistance.",
    products: ["Durlock Screws", "Durlock Nuts"],
    alt: "Specialized Durlock series fasteners for secure applications"
  },
  { 
    name: "Hex Head Fasteners", 
    image: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/hex-head-fasteners-6c8f6b7.jpg", 
    description: "Standard hex head bolts/screws and hex nuts for various applications, manufactured to precise specifications.",
    products: ["Hex Head Bolts/Screws", "Hex Nuts"],
    alt: "Standard hex head bolts and nuts for various applications",
    id: "hex-head-fasteners"
  },
  { 
    name: "Studs", 
    image: "/images/studs.png", 
    description: "High-strength studs and heavy nuts for demanding applications requiring superior tensile strength.",
    products: ["Studs", "Heavy Nuts"],
    alt: "High-strength studs and heavy nuts for demanding applications"
  },
  { 
    name: "Hex Flange", 
    image: "/images/Hex Flange.jpeg", 
    description: "Hex flange screws/bolts and nuts with integrated washer face for improved load distribution.",
    products: ["Hex Flange Screw/Bolts (DIN-9762)", "Hex Flange Nuts"],
    alt: "Hex flange fasteners with integrated washer face"
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

// Industry certifications
const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "Material Compliance: REACH, RoHS",
  "DIN Standards Compliance",
  "ASTM Standards Compliance"
];

export default function StandardFasteners() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  return (
    <>
      <Head>
        <title>Standard Fasteners | Nirmal Autotech Industries</title>
        <meta name="description" content="Explore our range of high-quality standard fasteners including threaded fasteners, nuts, washers, and installation tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="py-16 px-4 bg-secondary/30">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">Standard Fasteners</h1>
                  <p className="text-lg mb-6">
                    Our standard fasteners are manufactured to meet international quality standards and specifications.
                    With precision engineering and rigorous quality control, we deliver fasteners that ensure reliability
                    and durability across various industrial applications.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {certifications.map((cert, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild>
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="fasteners-hero-container">
                    <img 
                      src="https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/standard-fastener--3-flange-ff3af04.jfif"
                      alt="Professional standard fasteners showcase on dark background"
                      className="fasteners-hero-image"
                      loading="lazy"
                    />
                    <div className="fasteners-hero-border"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Standard Fasteners Range</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {standardFasteners.map((category, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.alt || category.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      
                      <h4 className="font-medium mb-2">Products:</h4>
                      <ul className="space-y-1">
                        {category.products.map((product, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowUpRight className="h-4 w-4 mr-2 text-primary mt-1 flex-shrink-0" />
                            {productSpecifications[product] ? (
                              <button
                                onClick={() => setSelectedProduct(product)}
                                className="text-sm text-left hover:text-primary hover:underline flex items-center group"
                              >
                                {product}
                                <Info className="h-3.5 w-3.5 ml-1 text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </button>
                            ) : (
                              <span className="text-sm">{product}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Precision Advantage Section */}
          <section className="py-16 px-4 bg-secondary/10">
            <div className="container mx-auto">
              <div className="bg-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">Our Precision Advantage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg mb-6">
                      Our state-of-the-art CNC turning centers and Swiss-type machines enable us to produce 
                      complex precision components with exceptional accuracy and consistency.
                    </p>
                    <p className="text-lg">
                      With advanced quality control systems and experienced machinists, we ensure that every 
                      component meets the most demanding specifications and performs reliably in critical applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Advantages:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowUpRight className="h-5 w-5 mr-2 text-primary mt-1" />
                        <span>High-precision machining with tolerances as tight as ±0.005mm</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUpRight className="h-5 w-5 mr-2 text-primary mt-1" />
                        <span>Superior surface finish down to Ra 0.2</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUpRight className="h-5 w-5 mr-2 text-primary mt-1" />
                        <span>Complex geometries and features in a single setup</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowUpRight className="h-5 w-5 mr-2 text-primary mt-1" />
                        <span>100% inspection for critical dimensions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industries We Serve Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Automotive</h3>
                      <p className="text-muted-foreground">Precision components for critical systems</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Aerospace</h3>
                      <p className="text-muted-foreground">High-reliability parts for aerospace applications</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Medical</h3>
                      <p className="text-muted-foreground">Components for medical devices and equipment</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Electronics</h3>
                      <p className="text-muted-foreground">Precision parts for electronic systems</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Versatile Solutions</h3>
                  <p className="text-lg mb-6">
                    Our precision turned parts are used in a wide range of industries where reliability, 
                    accuracy, and performance are critical. From automotive and aerospace to medical and 
                    electronics, we provide components that meet the most demanding requirements.
                  </p>
                  <p className="text-lg mb-6">
                    With our versatile manufacturing capabilities, we can produce precision components 
                    in various materials and specifications to suit different industry applications.
                  </p>
                  <p className="text-lg">
                    Whether you need high-volume production or small batches of specialized components, 
                    our flexible manufacturing setup can accommodate your requirements with consistent 
                    quality and on-time delivery.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Need Custom Fasteners?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Our engineering team can work with you to develop custom fasteners 
                  tailored to your specific requirements and applications.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/manufacturing">Learn About Our Capabilities</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        
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
      </div>
    </>
  );
}