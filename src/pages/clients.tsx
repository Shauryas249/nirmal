import React from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  CheckCircle
} from "lucide-react";
import Image from "next/image";

// Major clients data
const majorClients = [
  {
    name: "MAHLE",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/mahle-1275bd0.png",
    description: "Global automotive parts manufacturer specializing in engine components",
    relationship: "Supplying precision components since 2012",
    businessPercentage: "20% of business"
  },
  {
    name: "SOGEFI",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/sogefi-c8f7b3e.png",
    description: "Leading global supplier of original parts for the automotive industry",
    relationship: "Strategic partnership for fastener solutions",
    businessPercentage: "21% of business"
  },
  {
    name: "KONGSBERG",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/kongsberg-1308f8f.png",
    description: "International technology group supplying high-technology systems",
    relationship: "Custom component solutions provider",
    businessPercentage: "15% of business"
  },
  {
    name: "ITL",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/whatsapp-image-2025-06-07-at-02.18.18-4d94e45.jpeg",
    description: "Specialized industrial equipment manufacturer",
    relationship: "Critical safety component supplier",
    businessPercentage: "5% of business"
  },
  {
    name: "Hero MotoCorp",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/hero-moto-corp-e2ec2e5.png",
    description: "Leading two-wheeler manufacturer in India",
    relationship: "Precision parts supplier",
    businessPercentage: "10% of business"
  },
  {
    name: "Optimas",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/whatsapp-image-2025-06-07-at-02.18.17-cf988a1.jpeg",
    description: "Automotive component manufacturer",
    relationship: "Strategic supplier for specialized components",
    businessPercentage: "8% of business"
  }
];

// OEM approvals data
const oemApprovals = [
  {
    name: "Maruti",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/maruti-suzuki-74098d2.png"
  },
  {
    name: "Hyundai",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/hyundai-0e17c27.png"
  },
  {
    name: "KIA",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/kia-c1aaabf.png"
  },
  {
    name: "TATA",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/tata-1fd750d.png"
  },
  {
    name: "Mahindra",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/mahindra-0751441.png"
  },
  {
    name: "Royal Enfield",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/royal-enfield-90b5a8e.png"
  },
  {
    name: "Nissan",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/nissan-e6a0693.png"
  },
  {
    name: "Ford",
    logo: "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/ford-0229fa5.png"
  }
];



export default function Clients() {
  return (
    <PageLayout
      title="Our Clients"
      description="Discover Nirmal Autotech Industries' major clients, OEM approvals, and testimonials from satisfied customers."
    >
        <main className="flex-1 flex flex-col">
          {/* Major Clients Section */}
          <section className="py-16 px-4 bg-alternate-light">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Our Clients</h1>
              <div className="flex justify-center mb-12">
                <div className="badge-featured animate-float">Trusted by Industry Leaders</div>
              </div>
              
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
                  <span className="gradient-text">Major Clients</span>
                </h2>
                <p className="text-lg max-w-3xl mx-auto mb-12">
                  Nirmal Autotech Industries is proud to serve leading companies in the automotive, 
                  industrial, and agricultural sectors. Our commitment to quality and reliability 
                  has earned us the trust of these prestigious clients.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {majorClients.map((client, index) => (
                  <Card key={index} className="card-hover-effect colored-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-gradient-blue/5 rounded-full flex items-center justify-center shadow-sm border border-gradient-blue/20">
                          <img 
                            src={client.logo} 
                            alt={`${client.name} logo`}
                            className="max-w-[80%] max-h-[80%] object-contain" 
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-center mb-3 gradient-text">{client.name}</h3>
                      <p className="text-center text-muted-foreground mb-4">{client.description}</p>
                      <p className="text-center text-sm font-medium">{client.relationship}</p>
                      {client.businessPercentage && (
                        <div className="flex justify-center mt-3">
                          <span className="badge-primary px-3 py-1 rounded-full text-sm">{client.businessPercentage}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center bg-gradient-blue/10 p-6 rounded-lg colored-shadow mt-8">
                <p className="text-lg italic">
                  "We value the trust our clients place in us and strive to exceed their expectations 
                  with every component we manufacture."
                </p>
              </div>
            </div>
          </section>

          {/* OEM Approvals Section */}
          <section className="py-16 px-4 bg-pattern-dots">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text flex items-center justify-center">
                <CheckCircle className="mr-2 h-8 w-8 icon-primary animate-colorShift" />
                OEM Approvals
              </h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <Card className="colored-shadow">
                <CardContent className="p-8 bg-gradient-blue/5">
                  <p className="text-lg text-center mb-10">
                    Nirmal Autotech Industries is an approved manufacturer for the following Original 
                    Equipment Manufacturers (OEMs), meeting their stringent quality and performance requirements.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {oemApprovals.map((oem, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg text-center flex flex-col items-center justify-center h-32 shadow-sm card-hover-effect gradient-border">
                        <div className="h-16 flex items-center justify-center mb-3">
                          <img 
                            src={oem.logo} 
                            alt={`${oem.name} logo`} 
                            className="max-h-16 max-w-[80%] object-contain" 
                          />
                        </div>
                        <p className="font-medium">{oem.name}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section Divider Banner */}
          <div className="section-divider-banner py-8">
            <div className="container mx-auto text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Industry-Wide Recognition</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="achievement-badge">Trusted Supplier</div>
                <div className="achievement-badge">Quality Excellence</div>
                <div className="achievement-badge">On-Time Delivery</div>
                <div className="achievement-badge">Technical Expertise</div>
              </div>
            </div>
          </div>



          {/* Client Partnership Section */}
          <section className="py-16 px-4 bg-pattern-dots">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Our Commitment to Clients</h2>
              <div className="w-24 h-1 bg-gradient-blue mx-auto mb-12 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card className="colored-shadow card-hover-effect">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 gradient-text">Partnership Approach</h3>
                    <p className="mb-4">
                      At Nirmal Autotech Industries, we believe in building long-term partnerships with 
                      our clients rather than just being a supplier. We work closely with our clients to 
                      understand their specific requirements and challenges.
                    </p>
                    <p>
                      Our collaborative approach enables us to provide customized solutions that address 
                      the unique needs of each client, resulting in mutually beneficial relationships.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="colored-shadow card-hover-effect">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 gradient-text">Client Support</h3>
                    <p className="mb-4">
                      We provide comprehensive support to our clients throughout the product lifecycle, 
                      from initial design consultation to after-sales service.
                    </p>
                    <p>
                      Our dedicated customer service team ensures prompt response to client inquiries 
                      and efficient resolution of any issues, maintaining high levels of client satisfaction.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
    </PageLayout>
  );
}