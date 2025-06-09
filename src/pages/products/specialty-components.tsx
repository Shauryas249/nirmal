import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Specialty Products data
const specialtyProducts = [
  { 
    name: "Special Fasteners", 
    image: "/images/Special Fasteners.JPG", 
    description: "Specialized fasteners designed for specific applications requiring unique features, materials, or performance characteristics.",
    products: ["Collar Bolts", "Flange Screws"],
    alt: "Specialized fasteners designed for unique industrial applications"
  },
  { 
    name: "Custom Engineered Solutions", 
    image: "/images/Custom Engineered Solutions.JPG", 
    description: "Custom-designed components tailored to specific requirements and applications across various industries.",
    products: ["Custom Engineered Solutions"],
    alt: "Custom engineered components for specialized applications"
  }
];

// Industry certifications
const certifications = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "Material Compliance: REACH, RoHS",
  "ASTM Standards Compliance",
  "Custom Specification Capabilities"
];

export default function SpecialtyComponents() {
  return (
    <>
      <Head>
        <title>Specialty Components | Nirmal Autotech Industries</title>
        <meta name="description" content="Explore our range of high-quality specialty components including inserts, bushings, pins, dowels, and special purpose fasteners." />
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
                  <h1 className="text-4xl font-bold mb-6">Specialty Products</h1>
                  <p className="text-lg mb-6">
                    Our specialty products are designed and manufactured to meet specific requirements across various 
                    industries. With precision engineering and advanced manufacturing capabilities, we deliver products 
                    that provide optimal performance in specialized applications.
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
                  <div className="specialty-hero-container">
                    <img 
                      src="https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/special-product--3-b94a01a.JPG"
                      alt="Specialty fasteners and components collage showcasing diverse custom solutions"
                      className="specialty-hero-image"
                      loading="lazy"
                    />
                    <div className="specialty-hero-overlay">
                      Custom Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Specialty Products Range</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {specialtyProducts.map((category, index) => (
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
                            <span className="text-sm">{product}</span>
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
                <h2 className="text-2xl font-bold mb-4">Need Custom Specialty Products?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Our engineering team can work with you to develop custom specialty products 
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
      </div>
    </>
  );
}