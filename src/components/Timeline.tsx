import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, CalendarDays } from 'lucide-react';

export type TimelineItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  icon?: React.ReactNode;
  category?: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center transform -translate-x-1/2 z-10">
              {item.status === 'completed' && <CheckCircle2 className="h-5 w-5 text-primary" />}
              {item.status === 'in-progress' && <Clock className="h-5 w-5 text-primary" />}
              {item.status === 'upcoming' && <CalendarDays className="h-5 w-5 text-primary" />}
            </div>
            
            {/* Content */}
            <div className={`flex-1 ml-12 md:ml-0 ${
              index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
            }`}>
              <Card className={`
                overflow-hidden transition-all
                ${item.status === 'completed' ? 'border-green-200' : ''}
                ${item.status === 'in-progress' ? 'border-blue-200' : ''}
                ${item.status === 'upcoming' ? 'border-orange-200' : ''}
              `}>
                <div className={`h-2 w-full
                  ${item.status === 'completed' ? 'bg-green-500' : ''}
                  ${item.status === 'in-progress' ? 'bg-blue-500' : ''}
                  ${item.status === 'upcoming' ? 'bg-orange-500' : ''}
                `} />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <Badge variant={
                      item.status === 'completed' ? 'default' : 
                      item.status === 'in-progress' ? 'secondary' : 
                      'outline'
                    }>
                      {item.status === 'completed' && 'Completed'}
                      {item.status === 'in-progress' && 'In Progress'}
                      {item.status === 'upcoming' && 'Upcoming'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                  
                  {item.category && (
                    <Badge variant="outline" className="mb-4">
                      {item.category}
                    </Badge>
                  )}
                  
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;