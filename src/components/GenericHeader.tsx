import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import GenericLogo from './GenericLogo';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GenericHeader = () => {
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
        { name: 'Automotive & Vehicle Parts', path: '/products/automotive-vehicle' },
        { name: 'Industrial Components', path: '/products/industrial' },
        { name: 'Precision Turned Components', path: '/products/precision' }
      ]
    },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Quality', path: '/quality' },
    { name: 'Clients', path: '/clients' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Future Plans', path: '/future-plans' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`w-full border-b sticky top-0 z-50 bg-background transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="hidden md:flex justify-end items-center py-2 px-8 bg-secondary/50">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+1-234-567-8900</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>contact@precisionmfg.example.com</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <GenericLogo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            item.dropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={router.pathname === item.path ? "default" : "ghost"} 
                    className="text-sm sm:text-base flex items-center gap-1"
                  >
                    {item.name} <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {item.items?.map((subItem) => (
                    <DropdownMenuItem 
                      key={subItem.name}
                      onClick={() => handleNavigation(subItem.path)}
                      className="cursor-pointer"
                    >
                      {subItem.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                key={item.name}
                variant={router.pathname === item.path ? "default" : "ghost"} 
                className="text-sm sm:text-base" 
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </Button>
            )
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-12">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="font-medium text-lg flex items-center">
                        {item.name}
                      </div>
                      <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                        {item.items?.map((subItem) => (
                          <Button 
                            key={subItem.name}
                            variant="ghost" 
                            className="w-full justify-start text-sm" 
                            onClick={() => handleNavigation(subItem.path)}
                          >
                            <ChevronRight className="h-4 w-4 mr-2" />
                            {subItem.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Button 
                      variant={router.pathname === item.path ? "default" : "ghost"} 
                      className="w-full justify-start text-lg" 
                      onClick={() => handleNavigation(item.path)}
                    >
                      {item.name}
                    </Button>
                  )}
                </div>
              ))}
              
              {/* Mobile contact info */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center mb-3">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">+1-234-567-8900</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">contact@precisionmfg.example.com</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default GenericHeader;