import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Award, CheckCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useInterval } from '@/hooks/useInterval';

const slides = [
  {
    id: 1,
    backgroundImage: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/two-wheeler-parts-background-d6e3566.jpg',
    title: 'Two Wheeler Parts',
    description: 'Precision components for motorcycle and scooter applications',
    badge: 'Global Supplier',
    badgeColor: 'badge-primary',
    fallbackColor: 'bg-gradient-blue',
    accentColor: '#1e3a8a',
    categoryType: 'two-wheeler',
    categoryImages: [
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/two-wheeler-parts-1-8cdda3a.png',
        alt: 'Two wheeler precision component - motorcycle part',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/two-wheeler-parts-2-a5f6eef.png',
        alt: 'Two wheeler precision component - scooter part',
        type: 'component'
      }
    ]
  },
  {
    id: 2,
    backgroundImage: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-select-pin-background-4945a9b.jpg',
    title: 'Power Transmission Select Pin',
    description: 'Precision-engineered select pins for reliable power transfer systems',
    badge: 'Global Supplier',
    badgeColor: 'badge-primary',
    fallbackColor: 'bg-gradient-turquoise',
    accentColor: '#475569',
    categoryType: 'power-transmission-pin',
    categoryImages: [
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-pin-1-8dc7d8b.png',
        alt: 'Power transmission select pin - precision component',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-pin-2-8669bd5.png',
        alt: 'Power transmission select pin - engineered part',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-pin-3-53c1c78.png',
        alt: 'Power transmission select pin - reliable component',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-pin-4-68c76db.png',
        alt: 'Power transmission select pin - transfer system part',
        type: 'component'
      }
    ]
  },
  {
    id: 3,
    backgroundImage: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-weight--mass-background-41ea6c7.jpg',
    title: 'Power Transmission Weight & Mass',
    description: 'Advanced weight and mass solutions for automotive power systems',
    badge: 'Global Supplier',
    badgeColor: 'badge-primary',
    fallbackColor: 'bg-gradient-orange',
    accentColor: '#0f766e',
    categoryType: 'power-transmission-weight',
    categoryImages: [
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-1-2cdd80d.jpg',
        alt: 'Power transmission weight component - automotive system',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-2-90c6ac3.jpg',
        alt: 'Power transmission mass component - advanced solution',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-3-0678ef9.jpg',
        alt: 'Power transmission weight system - precision engineered',
        type: 'component'
      }
    ]
  },
  {
    id: 4,
    backgroundImage: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-terminal-road-background-3638831.jpg',
    title: 'Power Transmission Terminal Road',
    description: 'Terminal road solutions for automotive power transmission',
    badge: 'Global Supplier',
    badgeColor: 'badge-primary',
    fallbackColor: 'bg-gradient-purple',
    accentColor: '#7c3aed',
    categoryType: 'power-transmission-terminal',
    categoryImages: [
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-terminal-1-4a8bb9c.png',
        alt: 'Power transmission terminal road component - automotive electrical',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-terminal-2-d9e1a00.png',
        alt: 'Power transmission terminal road solution - electrical system',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-terminal-3-9f0f7b0.png',
        alt: 'Power transmission terminal road part - automotive component',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/power-transmission-terminal-4-43556cb.png',
        alt: 'Power transmission terminal road system - precision part',
        type: 'component'
      }
    ]
  },
  {
    id: 5,
    backgroundImage: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/air-intake-manifold-background-slide-1-ced5e64.jpg',
    title: 'Air Intake Manifold',
    description: 'Optimized air intake solutions for enhanced engine performance',
    badge: 'Global Supplier',
    badgeColor: 'badge-primary',
    fallbackColor: 'bg-gradient-green',
    accentColor: '#059669',
    categoryType: 'air-intake-manifold-1',
    categoryImages: [
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/air-intake-manifold-1-4543acf.png',
        alt: 'Air intake manifold - optimized engine performance component',
        type: 'component'
      }
    ]
  },
  {
    id: 6,
    backgroundImage: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/air-intake-manifold-background-slide-2-370abe5.jpg',
    title: 'Air Intake Manifold',
    description: 'Advanced manifold components for superior airflow management',
    badge: 'Global Supplier',
    badgeColor: 'badge-primary',
    fallbackColor: 'bg-gradient-red',
    accentColor: '#dc2626',
    categoryType: 'air-intake-manifold-2',
    categoryImages: [
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/air-intake-manifold-2-42a30ba.png',
        alt: 'Air intake manifold - advanced airflow management component',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/air-intake-manifold-3-ae4a83a.png',
        alt: 'Air intake manifold - superior manifold component',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/air-intake-manifold-4-ba082c5.png',
        alt: 'Air intake manifold - advanced engine component',
        type: 'component'
      },
      {
        src: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/air-intake-manifold-5-07ae179.png',
        alt: 'Air intake manifold - precision airflow component',
        type: 'component'
      }
    ]
  }
];

// Floating achievement badges
const achievements = [
  { icon: <Award className="h-4 w-4 mr-1" />, text: "ISO 9001:2015" },
  { icon: <CheckCircle className="h-4 w-4 mr-1" />, text: "IATF 16949:2016" },
  { icon: <Star className="h-4 w-4 mr-1" />, text: "25+ Years Experience" }
];

// Floating Product Images Component - Enhanced Visibility
const ProductImageGrid = ({ images, isActive, accentColor, categoryType, slideIndex }: any) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const handleImageError = (index: number) => {
    // Handle error by removing from loaded set
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  // Determine number of images to show based on screen size
  const getImageCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // Desktop: 4 images
      if (window.innerWidth >= 768) return 3;  // Tablet: 3 images
      return 2; // Mobile: 2 images
    }
    return 4; // Default for SSR
  };

  const [imageCount, setImageCount] = useState(getImageCount);

  useEffect(() => {
    const handleResize = () => {
      setImageCount(getImageCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced position configurations with slide-specific scaling
  const getImagePositions = (count: number, totalImages: number) => {
    const positions = [];
    
    // Slide-specific scaling adjustments
    let scaleMultiplier = 1.0;
    if (slideIndex === 0) {
      // Slide 1 - "Two Wheeler Parts": Increase by 30%
      scaleMultiplier = 1.3;
    } else if (slideIndex === 1) {
      // Slide 2 - "Power Transmission Select Pin": Keep previous 30% reduction (0.7)
      scaleMultiplier = 0.7;
    } else if (slideIndex === 2) {
      // Slide 3 - "Power Transmission Weight & Mass": Decrease by 36% total (20% + additional 20%)
      scaleMultiplier = 0.64;
    } else if (slideIndex === 3) {
      // Slide 4 - "Power Transmission Terminal Road": Decrease by 30%
      scaleMultiplier = 0.7;
    }
    
    if (totalImages === 1) {
      positions.push({ top: '50%', right: '8%', transform: 'translateY(-50%)', scale: 1.75 * scaleMultiplier });
    } else if (totalImages === 2) {
      positions.push(
        { top: '30%', right: '6%', transform: 'translateY(-50%)', scale: 1.6 * scaleMultiplier },
        { top: '70%', right: '12%', transform: 'translateY(-50%)', scale: 1.4 * scaleMultiplier }
      );
    } else if (totalImages === 3) {
      // For slide 3, adjust spacing to prevent overlapping
      if (slideIndex === 2) {
        positions.push(
          { top: '20%', right: '4%', transform: 'translateY(-50%)', scale: 1.3 * scaleMultiplier },
          { top: '50%', right: '20%', transform: 'translateY(-50%)', scale: 1.4 * scaleMultiplier },
          { top: '80%', right: '8%', transform: 'translateY(-50%)', scale: 1.2 * scaleMultiplier }
        );
      } else {
        positions.push(
          { top: '25%', right: '4%', transform: 'translateY(-50%)', scale: 1.5 * scaleMultiplier },
          { top: '50%', right: '18%', transform: 'translateY(-50%)', scale: 1.6 * scaleMultiplier },
          { top: '75%', right: '6%', transform: 'translateY(-50%)', scale: 1.4 * scaleMultiplier }
        );
      }
    } else {
      // 4 or more images - grid layout with larger sizes
      positions.push(
        { top: '20%', right: '4%', transform: 'translateY(-50%)', scale: 1.4 * scaleMultiplier },
        { top: '20%', right: '22%', transform: 'translateY(-50%)', scale: 1.4 * scaleMultiplier },
        { top: '65%', right: '4%', transform: 'translateY(-50%)', scale: 1.4 * scaleMultiplier },
        { top: '65%', right: '22%', transform: 'translateY(-50%)', scale: 1.4 * scaleMultiplier }
      );
    }
    
    return positions.slice(0, count);
  };

  const positions = getImagePositions(imageCount, images.length);

  return (
    <div className="hero-floating-images hidden md:block">
      {images.slice(0, imageCount).map((image: any, index: number) => {
        const position = positions[index] || positions[0];
        return (
          <div
            key={index}
            className="hero-floating-image-wrapper"
            style={{
              position: 'absolute',
              top: position.top,
              right: position.right,
              transform: `${position.transform} scale(${position.scale})`,
              zIndex: 10 + index,
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {!loadedImages.has(index) && (
              <div className="hero-floating-skeleton" />
            )}
            <img
              src={image.src}
              alt={image.alt}
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageError(index)}
              className={`hero-floating-product-image ${loadedImages.has(index) ? 'loaded' : ''}`}
              style={{
                filter: `brightness(1.1) contrast(1.1) drop-shadow(0 6px 12px rgba(0,0,0,0.6)) drop-shadow(0 0 8px rgba(255,255,255,0.3)) drop-shadow(0 0 12px ${accentColor}40)`,
                maxWidth: '280px',
                maxHeight: '280px',
                width: 'auto',
                height: 'auto',
                opacity: loadedImages.has(index) ? 1 : 0,
                transition: 'all 0.3s ease-in-out',
              }}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

// Enhanced Background Image Component - Simplified since backgrounds are now on slide container
const HeroBackgroundImage = ({ slide, isActive }: any) => {
  return (
    <div className="hero-background-container">
      {/* Enhanced texture overlay for additional depth */}
      <div className="hero-texture-overlay" style={{ opacity: 0.1 }} />
    </div>
  );
};

const Hero = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());

  // Preload next and previous images including background images
  const preloadImage = useCallback((slideIndex: number) => {
    if (preloadedImages.has(slideIndex)) return;
    
    const slide = slides[slideIndex];
    if (!slide) return;
    
    // Preload background image
    if (slide.backgroundImage) {
      const bgImg = new Image();
      bgImg.src = slide.backgroundImage;
    }
    
    // Preload category images
    if (slide.categoryImages) {
      slide.categoryImages.forEach((image: any) => {
        const img = new Image();
        img.src = image.src;
      });
    }
    
    setPreloadedImages(prev => new Set(prev).add(slideIndex));
  }, [preloadedImages]);

  // Handle slide change and preload adjacent images
  const handleSlideChange = useCallback(() => {
    if (!api) return;
    
    const newCurrent = api.selectedScrollSnap();
    setCurrent(newCurrent);
    
    // Preload next and previous images
    const nextIndex = (newCurrent + 1) % slides.length;
    const prevIndex = (newCurrent - 1 + slides.length) % slides.length;
    
    preloadImage(nextIndex);
    preloadImage(prevIndex);
  }, [api, preloadImage]);

  // Set up the carousel API
  useEffect(() => {
    if (!api) return;
    
    api.on('select', handleSlideChange);
    api.on('reInit', handleSlideChange);
    
    // Preload first image immediately
    preloadImage(0);
    
    return () => {
      api.off('select', handleSlideChange);
      api.off('reInit', handleSlideChange);
    };
  }, [api, handleSlideChange, preloadImage]);

  // Auto-advance carousel every 5 seconds
  useInterval(() => {
    if (api && !isPaused) {
      api.scrollNext();
    }
  }, 5000);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        api?.scrollPrev();
      } else if (event.key === 'ArrowRight') {
        api?.scrollNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [api]);

  return (
    <div 
      className="hero-professional-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <Carousel 
        setApi={setApi}
        className="h-full w-full"
        opts={{
          align: 'start',
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <div 
                className="hero-slide-container"
                style={{
                  backgroundImage: slide.backgroundImage ? `url(${slide.backgroundImage})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Optimized gradient overlay for text and product visibility */}
                <div 
                  className="hero-background-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
                    zIndex: 1
                  }}
                />
                
                {/* Professional Background */}
                <HeroBackgroundImage 
                  slide={slide} 
                  isActive={index === current}
                />
                
                {/* Geometric Background Elements */}
                <div className="hero-geometric-elements">
                  <div 
                    className="hero-circle hero-circle-1" 
                    style={{ backgroundColor: `${slide.accentColor}1A` }}
                  />
                  <div 
                    className="hero-circle hero-circle-2" 
                    style={{ backgroundColor: `${slide.accentColor}26` }}
                  />
                  <div 
                    className="hero-circle hero-circle-3" 
                    style={{ backgroundColor: `${slide.accentColor}33` }}
                  />
                </div>

                {/* 12-Column Grid Layout */}
                <div className="hero-grid-container">
                  {/* Content Area (columns 2-8) */}
                  <div className="hero-content-area">
                    <div className="hero-content-inner">
                      {/* Badge with category accent */}
                      <div 
                        className="hero-professional-badge text-stagger-1"
                        style={{ backgroundColor: slide.accentColor }}
                      >
                        {slide.badge}
                      </div>
                      
                      {/* Title with enhanced typography */}
                      <h1 className="hero-professional-title text-stagger-2">
                        <span style={{ textShadow: `0 2px 8px rgba(0,0,0,0.8), 0 0 20px ${slide.accentColor}40` }}>
                          {slide.title}
                        </span>
                      </h1>
                      
                      {/* Subtitle */}
                      <p 
                        className="hero-professional-subtitle text-stagger-3"
                        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                      >
                        {slide.description}
                      </p>
                      
                      {/* Achievement badges */}
                      <div className="hero-achievements text-stagger-3">
                        {achievements.map((achievement, i) => (
                          <div 
                            key={i} 
                            className="hero-achievement-item"
                            style={{ 
                              backgroundColor: `${slide.accentColor}20`,
                              borderColor: `${slide.accentColor}40`,
                              animationDelay: `${i * 0.2}s` 
                            }}
                          >
                            {achievement.icon}
                            <span>{achievement.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Area (columns 9-11) */}
                  <ProductImageGrid 
                    images={slide.categoryImages} 
                    isActive={index === current}
                    accentColor={slide.accentColor}
                    categoryType={slide.categoryType}
                    slideIndex={index}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Professional Navigation */}
        <div className="hero-nav-container">
          <button 
            onClick={() => api?.scrollPrev()}
            className="hero-nav-button hero-nav-prev"
            aria-label="Previous slide"
            tabIndex={0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={() => api?.scrollNext()}
            className="hero-nav-button hero-nav-next"
            aria-label="Next slide"
            tabIndex={0}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </Carousel>
      
      {/* Professional Indicators */}
      <div className="hero-indicators-container" role="tablist" aria-label="Carousel navigation">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`hero-indicator ${index === current ? 'active' : ''}`}
            style={{ 
              backgroundColor: index === current ? slide.accentColor : 'rgba(255,255,255,0.5)',
            }}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-selected={index === current}
            role="tab"
            tabIndex={0}
          />
        ))}
      </div>
      

    </div>
  );
};

export default Hero;