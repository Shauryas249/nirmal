import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Calendar, Factory, Award } from 'lucide-react';

const GenericAboutSection = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Our Company</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6">
              Precision Manufacturing Co. is an ISO certified company, an exporter as well as domestic supplier of various types of Turning components, 
              Precision Turning components & Fasteners of alloy steel and stainless steel, established with the vision to make available all the world class turned components.
            </p>
            <p className="text-lg mb-6">
              Our target is to achieve the desired quality along with the optimum cost and packaging as per customer requirements and to meet other service requirements of Logistics as well.
            </p>
            <p className="text-lg mb-6">
              The Company has a young experienced, dedicated, energetic and qualified team with a total manpower of 70 personnel having a covered area of 15,000 sq. feet.
            </p>
            <p className="text-lg">
              The company is extending with future plans to expand to a 30,000 sq. feet area currently under construction. This new plant will handle all types of M4-M25 Fasteners, Nuts, and Bolts production. A heat treatment furnace will be installed in the near future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Founded</h3>
                <p className="text-3xl font-bold">2010</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Team</h3>
                <p className="text-3xl font-bold">70</p>
                <p className="text-sm">Experienced professionals</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Current Facility</h3>
                <p className="text-3xl font-bold">15,000</p>
                <p className="text-sm">sq. feet</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Factory className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                <p className="text-3xl font-bold">30,000</p>
                <p className="text-sm">sq. feet (Coming Soon)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericAboutSection;