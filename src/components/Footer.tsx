import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-dark text-white">
      {/* Top wave separator */}
      <div className="w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      {/* Newsletter section */}
      <div className="container mx-auto px-4 py-8 mb-8">
        <div className="bg-blue-900/30 rounded-xl p-6 backdrop-blur-sm border border-blue-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-blue-100">Subscribe to our newsletter for industry updates and product information</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md w-full md:w-64 bg-white/10 border border-blue-700 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="rounded-l-none bg-gradient-blue hover:bg-gradient-blue-light">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4 text-blue-100 border-b border-blue-700 pb-2">Nirmal Autotech Industries</h3>
            <p className="mb-4 text-blue-100">IATF16949:2016 certified manufacturer of precision components for automotive and industrial applications.</p>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm mt-6 text-blue-200">© {new Date().getFullYear()} Nirmal Autotech. All rights reserved.</p>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4 text-blue-100 border-b border-blue-700 pb-2">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="bg-blue-800/50 p-2 rounded-full mr-3 group-hover:bg-blue-700 transition-colors">
                  <MapPin className="h-5 w-5 text-blue-200" />
                </div>
                <p className="text-blue-100">Plot No. 24, Near Jind Railway Crossing Flyover, Rohtak (Haryana) - 124001, India</p>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-800/50 p-2 rounded-full mr-3 group-hover:bg-blue-700 transition-colors">
                  <Phone className="h-5 w-5 text-blue-200" />
                </div>
                <p className="text-blue-100">+91-9992009744, +91-9315349744</p>
              </div>
              <div className="flex items-center group">
                <div className="bg-blue-800/50 p-2 rounded-full mr-3 group-hover:bg-blue-700 transition-colors">
                  <Mail className="h-5 w-5 text-blue-200" />
                </div>
                <a href="mailto:virenderhooda@nirmalautotech.com" className="text-blue-100 hover:text-white transition-colors">
                  virenderhooda@nirmalautotech.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold mb-4 text-blue-100 border-b border-blue-700 pb-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-1" /> Home
              </a>
              <a href="/about" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-1" /> About Us
              </a>
              <a href="/products" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-1" /> Products
              </a>
              <a href="/manufacturing" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-1" /> Manufacturing
              </a>
              <a href="/quality" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-1" /> Quality
              </a>
              <a href="/clients" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-1" /> Clients
              </a>
              <a href="/future-plans" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-1" /> Future Plans
              </a>
              <a href="/contact" className="text-blue-100 hover:text-white transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-1" /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright bar */}
      <div className="bg-blue-900/50 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-blue-200">
          <p>Designed and developed for Nirmal Autotech Industries | IATF16949:2016 Certified Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;