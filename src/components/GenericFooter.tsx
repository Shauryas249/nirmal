import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const GenericFooter = () => {
  return (
    <footer className="bg-secondary/50 text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Precision Manufacturing Co.</h3>
            <p className="mb-2">ISO certified manufacturer of precision components</p>
            <p className="text-sm">© {new Date().getFullYear()} Precision Manufacturing. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <p>123 Manufacturing Way, Industrial District, City, State - 12345, Country</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <p>+1-234-567-8900, +1-234-567-8901</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <p>contact@precisionmfg.example.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/manufacturing" className="hover:underline">Manufacturing</a></li>
              <li><a href="/quality" className="hover:underline">Quality</a></li>
              <li><a href="/clients" className="hover:underline">Clients</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/future-plans" className="hover:underline">Future Plans</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GenericFooter;