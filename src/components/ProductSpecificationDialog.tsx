import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

export interface SpecificationData {
  tensileStrength: string;
  sizeRangeDiameter: string;
  sizeRangeLength: string;
  equivalentStandards: string[];
}

interface ProductSpecificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName: string;
  specificationData: SpecificationData;
}

const ProductSpecificationDialog: React.FC<ProductSpecificationDialogProps> = ({
  open,
  onOpenChange,
  productName,
  specificationData,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{productName} - Technical Specifications</DialogTitle>
          <DialogDescription>
            Detailed technical specifications from our product selection guide
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-secondary/20 p-4 rounded-md">
              <h3 className="font-semibold text-sm mb-1">Tensile Strength</h3>
              <p className="text-sm">{specificationData.tensileStrength}</p>
            </div>
            
            <div className="bg-secondary/20 p-4 rounded-md">
              <h3 className="font-semibold text-sm mb-1">Size Range Diameter</h3>
              <p className="text-sm">{specificationData.sizeRangeDiameter}</p>
            </div>
            
            <div className="bg-secondary/20 p-4 rounded-md">
              <h3 className="font-semibold text-sm mb-1">Size Range Length</h3>
              <p className="text-sm">{specificationData.sizeRangeLength}</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-semibold mb-2">Equivalent Standards</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {specificationData.equivalentStandards.map((standard, index) => (
                <div key={index} className="flex items-center">
                  {standard.includes(':') ? (
                    <>
                      <span className="font-medium mr-1">{standard.split(':')[0]}:</span>
                      <span className="text-sm">{standard.split(':')[1]}</span>
                    </>
                  ) : (
                    <span className="text-sm">{standard}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductSpecificationDialog;