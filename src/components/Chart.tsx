import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ChartProps {
  data: {
    label: string;
    value: number;
    color?: string;
  }[];
  title?: string;
  description?: string;
  type: 'bar' | 'pie' | 'horizontal-bar';
  showLabels?: boolean;
  showValues?: boolean;
  height?: number;
  valuePrefix?: string;
  valueSuffix?: string;
}

const Chart: React.FC<ChartProps> = ({
  data,
  title,
  description,
  type,
  showLabels = true,
  showValues = true,
  height = 300,
  valuePrefix = '',
  valueSuffix = '',
}) => {
  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Default colors if not provided
  const defaultColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-cyan-500',
  ];
  
  // Color mapping from Tailwind classes to hex values
  const colorMap: Record<string, string> = {
    'bg-blue-500': '#3b82f6',
    'bg-green-500': '#22c55e',
    'bg-yellow-500': '#eab308',
    'bg-red-500': '#ef4444',
    'bg-purple-500': '#a855f7',
    'bg-pink-500': '#ec4899',
    'bg-indigo-500': '#6366f1',
    'bg-orange-500': '#f97316',
    'bg-teal-500': '#14b8a6',
    'bg-cyan-500': '#06b6d4',
  };
  
  // Assign colors if not provided
  const chartData = data.map((item, index) => ({
    ...item,
    color: item.color || defaultColors[index % defaultColors.length],
    // Add hex color for SVG
    hexColor: colorMap[item.color || defaultColors[index % defaultColors.length]] || '#000000',
  }));
  
  return (
    <Card>
      <CardContent className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-muted-foreground mb-6">{description}</p>}
        
        <div className="w-full" style={{ height: `${height}px` }}>
          {type === 'bar' && (
            <div className="flex h-full items-end space-x-2">
              {chartData.map((item, index) => {
                // Calculate height percentage based on the maximum value
                const maxValue = Math.max(...data.map(d => d.value));
                const heightPercentage = (item.value / maxValue) * 100;
                
                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className={`w-full rounded-t-md ${item.color}`} 
                      style={{ height: `${heightPercentage}%` }}
                    >
                      {showValues && (
                        <div className="text-white text-center py-1 text-xs font-medium">
                          {valuePrefix}{item.value}{valueSuffix}
                        </div>
                      )}
                    </div>
                    {showLabels && (
                      <div className="text-xs mt-2 text-center w-full truncate px-1" title={item.label}>
                        {item.label}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          
          {type === 'horizontal-bar' && (
            <div className="flex flex-col h-full justify-between space-y-3">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center w-full">
                  {showLabels && (
                    <div className="text-sm w-1/4 pr-4 truncate" title={item.label}>
                      {item.label}
                    </div>
                  )}
                  <div className="flex-1 h-8 bg-secondary/30 rounded-md overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-md`} 
                      style={{ width: `${(item.value / Math.max(...data.map(d => d.value))) * 100}%` }}
                    >
                      {showValues && (
                        <div className="text-white text-sm h-full flex items-center justify-end pr-2">
                          {valuePrefix}{item.value}{valueSuffix}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {type === 'pie' && (
            <div className="relative h-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {(() => {
                  let cumulativePercent = 0;
                  
                  return chartData.map((item, index) => {
                    // Calculate the percent of the total
                    const percent = (item.value / total) * 100;
                    
                    // Calculate the coordinates for the pie slice
                    const startX = Math.cos(2 * Math.PI * (cumulativePercent / 100));
                    const startY = Math.sin(2 * Math.PI * (cumulativePercent / 100));
                    
                    cumulativePercent += percent;
                    
                    const endX = Math.cos(2 * Math.PI * (cumulativePercent / 100));
                    const endY = Math.sin(2 * Math.PI * (cumulativePercent / 100));
                    
                    // Determine if the slice is more than half the pie
                    const largeArcFlag = percent > 50 ? 1 : 0;
                    
                    // Create the path for the slice
                    const pathData = [
                      `M 50 50`,
                      `L ${50 + 40 * startX} ${50 + 40 * startY}`,
                      `A 40 40 0 ${largeArcFlag} 1 ${50 + 40 * endX} ${50 + 40 * endY}`,
                      `Z`
                    ].join(' ');
                    
                    return (
                      <path
                        key={index}
                        d={pathData}
                        fill={item.hexColor}
                      />
                    );
                  });
                })()}
              </svg>
              
              {showLabels && (
                <div className="absolute bottom-0 w-full">
                  <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {chartData.map((item, index) => (
                      <div key={index} className="flex items-center text-xs">
                        <div className={`w-3 h-3 rounded-full mr-1 ${item.color}`}></div>
                        <span>{item.label} {showValues && `(${valuePrefix}${item.value}${valueSuffix})`}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Chart;