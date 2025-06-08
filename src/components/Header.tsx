import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Menu, ChevronDown, ChevronRight, ExternalLink, Clock, MapPin, Bell, X, Award, Megaphone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: true,
      items: [
        { name: 'Standard Fasteners', path: '/products/standard-fasteners' },
        { name: 'Specialty Components', path: '/products/specialty-components' },
        { name: 'Automotive & Vehicle Parts', path: '/products/automotive-vehicle' }
      ]
    },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Quality', path: '/quality' },
    { name: 'Clients', path: '/clients' },
    { name: 'Future Plans', path: '/future-plans' },
    { name: 'Contact', path: '/contact' },
    { 
      name: 'Order Online', 
      path: 'https://solution.alignbooks.com/#/loginCVSS',
      external: true 
    }
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return router.pathname === path;
    }
    return router.pathname.startsWith(path);
  };

  // Announcement banner state
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <header className={`w-full border-b sticky top-0 z-50 bg-background transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Announcement Banner */}
      {showAnnouncement && (
        <div className="announcement-banner py-1.5">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Megaphone className="h-4 w-4" />
              <span className="text-sm font-medium">New ISO 9001:2015 certification achieved! Enhanced quality standards for all products.</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center">
                <Award className="h-4 w-4 mr-1" />
                <span className="text-xs font-medium">Celebrating 25 years of excellence</span>
              </div>
              <button 
                onClick={() => setShowAnnouncement(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close announcement"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="hidden md:block bg-gradient-blue text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Rohtak, Haryana - India</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91-9992009744</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:virenderhooda@nirmalautotech.com" className="hover:underline">
                virenderhooda@nirmalautotech.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-300 ${isScrolled ? 'py-2' : ''}`}>
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant={isActive(item.path) ? "default" : "ghost"} 
                      className={`text-sm sm:text-base flex items-center gap-1 transition-all duration-300 ${
                        isActive(item.path) 
                          ? 'bg-gradient-blue text-white' 
                          : 'hover:text-blue-700'
                      }`}
                    >
                      {item.name} <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="animate-scaleIn">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem 
                        key={subItem.name}
                        onClick={() => handleNavigation(subItem.path)}
                        className={`cursor-pointer ${
                          router.pathname === subItem.path 
                            ? 'bg-blue-50 text-blue-700 font-medium' 
                            : ''
                        }`}
                      >
                        <ChevronRight className={`h-4 w-4 mr-2 ${
                          router.pathname === subItem.path ? 'text-blue-500' : 'text-gray-400'
                        }`} />
                        {subItem.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            } else if (item.external) {
              return (
                <a 
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm sm:text-base font-medium rounded-md bg-gradient-blue text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {item.name}
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </a>
              );
            } else {
              return (
                <Button 
                  key={item.name}
                  variant={isActive(item.path) ? "default" : "ghost"} 
                  className={`text-sm sm:text-base transition-all duration-300 relative group ${
                    isActive(item.path) 
                      ? 'bg-gradient-blue text-white' 
                      : 'hover:text-blue-700'
                  }`}
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Button>
              );
            }
          })}
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-blue-700">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px] p-0 border-l-4 border-blue-500">
            <ScrollArea className="h-full p-6">
              <div className="flex flex-col gap-4 pt-6">
                {navItems.map((item) => (
                  <div key={item.name} className="animate-fadeIn">
                    {item.dropdown ? (
                      <div className="space-y-3">
                        <div className="font-medium text-lg flex items-center text-blue-800">
                          {item.name}
                        </div>
                        <div className="pl-4 border-l-2 border-blue-500 space-y-2">
                          {item.items?.map((subItem) => (
                            <Button 
                              key={subItem.name}
                              variant="ghost" 
                              className={`w-full justify-start text-sm ${
                                router.pathname === subItem.path 
                                  ? 'bg-blue-50 text-blue-700 font-medium' 
                                  : ''
                              }`}
                              onClick={() => handleNavigation(subItem.path)}
                            >
                              <ChevronRight className={`h-4 w-4 mr-2 ${
                                router.pathname === subItem.path ? 'text-blue-500' : ''
                              }`} />
                              {subItem.name}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : item.external ? (
                      <a 
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-start px-4 py-2 text-lg font-medium rounded-md bg-gradient-blue text-white hover:bg-gradient-blue-light transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    ) : (
                      <Button 
                        variant={router.pathname === item.path ? "default" : "ghost"} 
                        className={`w-full justify-start text-lg ${
                          router.pathname === item.path 
                            ? 'bg-gradient-blue text-white' 
                            : ''
                        }`}
                        onClick={() => handleNavigation(item.path)}
                      >
                        {item.name}
                      </Button>
                    )}
                  </div>
                ))}
                
                {/* Mobile contact info */}
                <div className="mt-8 pt-6 border-t">
                  <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200 animate-pulse-glow">
                    Contact Information
                  </Badge>
                  <div className="flex items-center mb-3 group">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-3 group-hover:bg-blue-200 transition-colors">
                      <Phone className="h-4 w-4 text-blue-700" />
                    </div>
                    <span className="text-sm">+91-9992009744</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-3 group-hover:bg-blue-200 transition-colors">
                      <Mail className="h-4 w-4 text-blue-700" />
                    </div>
                    <a href="mailto:virenderhooda@nirmalautotech.com" className="text-sm hover:text-blue-700 transition-colors">
                      virenderhooda@nirmalautotech.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;