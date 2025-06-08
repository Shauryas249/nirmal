import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, CheckCircle } from 'lucide-react';

const QualitySection = () => {
  return (
    <section id="quality" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Quality & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Quality Policy</h3>
            <p className="text-lg mb-4">
              At Nirmal Autotech Industries, quality is at the core of everything we do. We are committed to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-1 text-primary" />
                <span>Delivering defect-free products that meet or exceed customer expectations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-1 text-primary" />
                <span>Continuous improvement in all aspects of our operations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-1 text-primary" />
                <span>Maintaining the highest standards of precision and reliability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-1 text-primary" />
                <span>Ensuring on-time delivery and responsive customer service</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-1 text-primary" />
                <span>Compliance with all applicable regulatory requirements</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Shield className="h-16 w-16 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">IATF 16949:2016</h3>
                <p>Certified quality management system for automotive production</p>
              </CardContent>
            </Card>
            
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Award className="h-16 w-16 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
                <p>Certified quality management system for consistent product quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg max-w-3xl mx-auto">
            Our advanced testing facilities and rigorous quality control processes ensure that every component 
            we manufacture meets the highest standards of precision, durability, and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;