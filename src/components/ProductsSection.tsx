import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Wrench, Settings, Car, Factory, Cog, ArrowRight, TrendingUp, PieChart, Users, Award, Star, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Standard Fasteners',
    images: [
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/socket-head-fasteners-4206633.jpg',
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/standard-fastener---1-hex-f759cc2.jfif',
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/standard-fastneres--2-socket-19b1c0d.jfif'
    ],
    description: 'High-quality fasteners including socket head fasteners, hex wrench, durlock series, hex head fasteners, studs, and hex flange.',
    icon: <Wrench className="h-6 w-6 mr-2 icon-turquoise" />,
    link: '/products/standard-fasteners',
    badge: 'Popular',
    badgeColor: 'badge-popular',
    items: '6+ Categories',
    ribbon: 'Best Seller',
    ribbonColor: 'bg-gradient-orange',
    categoryIndicator: 'category-indicator-turquoise'
  },
  {
    id: 2,
    name: 'Automotive & Industrial Components',
    images: [
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/automotive--1-74a1042.JPG',
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/automotive--2-42f74b2.JPG',
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/automotive--3-88c82dd.JPG',
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/automotive--4-0a69a44.JPG'
    ],
    description: 'Components for cycles, tractors, and general automotive applications with precision engineering.',
    icon: <Car className="h-6 w-6 mr-2 icon-primary" />,
    link: '/products/automotive-vehicle',
    badge: 'Featured',
    badgeColor: 'badge-featured',
    items: '3+ Categories',
    ribbon: 'New',
    ribbonColor: 'bg-gradient-blue',
    categoryIndicator: 'category-indicator-primary'
  },
  {
    id: 3,
    name: 'Specialty Products',
    images: [
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/special-purpose-fasteners-category-c01250b.jpg',
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/special-product--1-1-98a6f8d.JPG',
      'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/special-product--2-20a6e87.JPG'
    ],
    description: 'Special fasteners and custom engineered solutions tailored to specific requirements and applications.',
    icon: <Settings className="h-6 w-6 mr-2 icon-orange" />,
    link: '/products/specialty-components',
    badge: 'Custom',
    badgeColor: 'badge-orange',
    items: 'Custom Solutions',
    ribbon: 'Premium',
    ribbonColor: 'bg-gradient-navy',
    categoryIndicator: 'category-indicator-orange'
  }
];

// Product Image Carousel Component
const ProductCarousel = ({ images, productName }: { images: string[], productName: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative h-52 overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`${productName} - Image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-110' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

// Achievement badges for section divider
const achievements = [
  { icon: <Award className="h-5 w-5 mr-2" />, text: "ISO 9001:2015 Certified", color: "bg-gradient-blue" },
  { icon: <Star className="h-5 w-5 mr-2" />, text: "25+ Years Experience", color: "bg-gradient-turquoise" },
  { icon: <Zap className="h-5 w-5 mr-2" />, text: "Global Exports", color: "bg-gradient-orange" }
];

const ProductsSection = () => {
  const progressRefs = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const width = target.getAttribute('data-width') || '0%';
          target.style.setProperty('--progress-width', width);
          target.classList.add('animate-progressFill');
        }
      });
    }, { threshold: 0.2 });
    
    progressRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      progressRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-white to-gray-blue">
      <div className="container mx-auto">
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-blue-600" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1e40af', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            Our Products
          </h2>
          <div className="inline-block mb-8">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium" style={{ background: '#3b82f6', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem' }}>
              Precision Engineered Components
            </span>
          </div>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            We specialize in manufacturing a wide range of precision components for various industries.
            Our product categories are designed to meet the diverse needs of our customers with exceptional quality and reliability.
          </p>
        </div>
=======
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden card-hover-effect colored-shadow relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Category indicator */}
              <div className={`${product.categoryIndicator} category-indicator`}></div>
              
              {/* Ribbon banner */}
              <div className={`ribbon-banner ${product.ribbonColor}`}>
                {product.ribbon}
              </div>
              
              <div className="relative">
                <div className="absolute top-3 left-3 z-30">
                  <Badge className={`${product.badgeColor} px-3 py-1 text-sm font-medium`}>
                    {product.badge}
                  </Badge>
                </div>
                <ProductCarousel images={product.images} productName={product.name} />
                <div className="absolute bottom-3 left-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="outline" className="bg-white/80 text-black text-xs">
                    {product.items}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-blue-900">
                  {product.icon}
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-5 flex-grow">{product.description}</p>
                <Button 
                  asChild 
                  className={`w-full transition-all duration-300 group mt-auto ${
                    index === 0 ? 'bg-gradient-turquoise hover:bg-turquoise' : 
                    index === 1 ? 'bg-gradient-blue hover:bg-blue-600' : 
                    'bg-gradient-orange hover:bg-orange-500'
                  }`}
                >
                  <Link href={product.link} className="flex items-center justify-center">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section divider banner with background image */}
        <div 
          className="my-24 rounded-lg relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(16, 185, 129, 0.9)), url('https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/industrial-bg-d42088e.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Subtle pattern overlay for visual interest */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264.888-.14 1.24.19 1.64.39 1.85.39h1.87c.698 0 1.42.29 1.94.29.52 0 1.08.12 1.09.52 0 .4-.76.42-1.18.42-.46 0-.8-.12-.8-.12-.602-.41-.608-.41-.608-.41-.68.01-1.14.23-1.14.23-.28-.03-.28-.03-.28-.03-.36-.4-.36-.4-.36-.4-.9.05-1.25.23-1.25.23-.71-.83-.71-.83-.71-.83-.38.04-.38.04-.38.04-.99-.14-.99-.14-.99-.14-.43-.28-.43-.28-.43-.28-.29-.06-.29-.06-.29-.06-.95.51-1.92.83-1.92.83-1.67-.33-1.67-.33-1.67-.33-.28.18-.28.18-.28.18-.19.03-.19.03-.19.03-.95.3-1.47.54-1.47.54-.75-.24-.75-.24-.75-.24-.4.17-.4.17-.4.17-.41.25-.41.25-.41.25-.23.13-.23.13-.23.13-.22-.16-.22-.16-.22-.16-.36.04-.36.04-.36.04-.3.9-.3.9-.3.9-.26-.16-.26-.16-.26-.16-.96.01-1.59.15-1.59.15-.22-.25-.22-.25-.22-.25-.31.12-.31.12-.31.12-.23.14-.23.14-.23.14-.36-.09-.36-.09-.36-.09-.31.02-.31.02-.31.02-.4.04-.4.04-.4.04-.36.17-.36.17-.36.17-.88.16-1.47.18-1.47.18-.19.04-.19.04-.19.04-.29.08-.29.08-.29.08-.38.01-.38.01-.38.01-.41-.08-.41-.08-.41-.08-.36.02-.36.02-.36.02-.44.04-.44.04-.44.04-.53-.17-.53-.17-.53-.17-.4.1-.4.1-.4.1-.74.21-1.21.3-1.21.3' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}
          ></div>
          
          <div className="container mx-auto py-8 px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                  Industry Excellence
                </h3>
                <p className="text-white/90" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                  Setting new standards in precision manufacturing
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {achievements.map((achievement, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center px-4 py-2 rounded-full text-white ${achievement.color}`}
                    style={{ 
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    {achievement.icon}
                    <span>{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 bg-pattern-dots">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-blue p-3 rounded-full mr-4 animate-pulse-glow">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Company Performance</h3>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-gradient-multi mr-3"></div>
                <h4 className="text-xl font-semibold gradient-text">Sales Growth</h4>
              </div>
              <div className="h-64 relative mt-8 px-4">
                <div className="absolute bottom-0 left-[10%] w-[12%] h-[10%] bg-gradient-to-t from-turquoise to-light-blue rounded-t-lg shadow-lg">
                  <div className="absolute top-[-30px] w-full text-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-semibold">₹2.36 CR</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-[30%] w-[12%] h-[35%] bg-gradient-to-t from-primary to-light-blue rounded-t-lg shadow-lg">
                  <div className="absolute top-[-30px] w-full text-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-semibold">₹8.45 CR</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-[50%] w-[12%] h-[53%] bg-gradient-to-t from-blue-600 to-turquoise rounded-t-lg shadow-lg">
                  <div className="absolute top-[-30px] w-full text-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-semibold">₹12.80 CR</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-[70%] w-[12%] h-[82%] bg-gradient-to-t from-primary to-light-blue rounded-t-lg shadow-lg">
                  <div className="absolute top-[-30px] w-full text-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-semibold">₹19.72 CR</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-[90%] w-[12%] h-[100%] bg-gradient-multi rounded-t-lg shadow-lg">
                  <div className="absolute top-[-30px] w-full text-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-semibold">₹23.97 CR</span>
                  </div>
                </div>
                
                <div className="absolute bottom-[-25px] left-[10%] transform -translate-x-1/2 text-xs text-center font-medium">
                  <p>2015-16</p>
                </div>
                <div className="absolute bottom-[-25px] left-[30%] transform -translate-x-1/2 text-xs text-center font-medium">
                  <p>2019-20</p>
                </div>
                <div className="absolute bottom-[-25px] left-[50%] transform -translate-x-1/2 text-xs text-center font-medium">
                  <p>2021-22</p>
                </div>
                <div className="absolute bottom-[-25px] left-[70%] transform -translate-x-1/2 text-xs text-center font-medium">
                  <p>2023-24</p>
                </div>
                <div className="absolute bottom-[-25px] left-[90%] transform -translate-x-1/2 text-xs text-center font-medium">
                  <p>2024-25</p>
                </div>
              </div>
              <p className="text-center mt-10 text-sm text-muted-foreground">Turnover growth from 2015-16 to 2024-25</p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-8 w-1 bg-gradient-multi mr-3"></div>
                <h4 className="text-xl font-semibold gradient-text flex items-center">
                  <PieChart className="h-5 w-5 mr-2 icon-turquoise" />
                  Key Customer Distribution
                </h4>
              </div>
              <div className="space-y-5 mt-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 icon-turquoise" />
                      SOGEFI
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-medium">21%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      ref={el => el && progressRefs.current.push(el)}
                      data-width="21%"
                      className="bg-gradient-turquoise h-3 rounded-full w-0"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 icon-primary" />
                      MAHLE
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-medium">20%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      ref={el => el && progressRefs.current.push(el)}
                      data-width="20%"
                      className="bg-gradient-blue h-3 rounded-full w-0"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 icon-navy" />
                      KONGSBERG
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      ref={el => el && progressRefs.current.push(el)}
                      data-width="15%"
                      className="bg-gradient-navy h-3 rounded-full w-0"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 icon-orange" />
                      ITL
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-medium">5%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      ref={el => el && progressRefs.current.push(el)}
                      data-width="5%"
                      className="bg-gradient-orange h-3 rounded-full w-0"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2 icon-primary" />
                      OTHERS
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-sm font-medium">39%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      ref={el => el && progressRefs.current.push(el)}
                      data-width="39%"
                      className="bg-gradient-multi h-3 rounded-full w-0"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;