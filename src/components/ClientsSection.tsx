import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useInterval } from "@/hooks/useInterval";
import { cn } from "@/lib/utils";

// Updated clients array (removed Industrial Client 2, renamed Optimus to Optimas, updated logos)
const clients = [
  { id: 1, name: 'MAHLE', logo: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/mahle-1275bd0.png' },
  { id: 2, name: 'SOGEFI', logo: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/sogefi-c8f7b3e.png' },
  { id: 3, name: 'KONGSBERG', logo: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/kongsberg-1308f8f.png' },
  { id: 4, name: 'ITL', logo: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/whatsapp-image-2025-06-07-at-02.18.18-4d94e45.jpeg' },
  { id: 6, name: 'Hero MotoCorp', logo: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/hero-moto-corp-e2ec2e5.png' },
  { id: 7, name: 'Optimas', logo: 'https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/whatsapp-image-2025-06-07-at-02.18.17-cf988a1.jpeg' }
];

const ClientsSection = () => {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Set up auto-rotation
  useInterval(
    () => {
      if (api) {
        api.scrollNext();
      }
    },
    isPaused ? null : 5000 // Pause on hover, otherwise rotate every 5 seconds
  );

  // Update current slide index when the carousel changes
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="clients" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>
        
        <div 
          className="relative mx-auto max-w-5xl px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem 
                  key={client.id} 
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="p-2">
                    <Card className="bg-white p-6 rounded-lg w-full h-40 flex items-center justify-center shadow-sm">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  current === i ? "bg-primary" : "bg-primary/30"
                )}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg max-w-3xl mx-auto">
            We are proud to partner with leading global companies, providing them with high-quality precision 
            components that meet their exacting standards and requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;