/**
 * Asset Paths Constants
 * 
 * This file serves as a centralized repository for all CDN asset paths used throughout the application.
 * It provides a single source of truth for image references, eliminating inconsistencies between
 * different sections of the application.
 */

// Base CDN URL
const CDN_BASE_URL = "https://assets.co.dev/e4273829-8aa9-4b44-8be8-7e404ec0eb75/";

// Machinery Images
export const MACHINERY_IMAGES = {
  cncTurningCenters: "cnc-turning-centers-2e4c1bd.png",
  traubMachines: "traub-machines-390f93a.jpg",
  boltMakers: "bolt-makers-0725d81.jpg",
  partFormerMachines: "part-former-machines-8912aeb.jpg",
  vmcMachines: "vmc-machines-7b94c04.jpg",
  slidingHeadMachines: "sliding-head-machines-b502c81.jpg",
  laserMarkingMachine: "laser-marking-machine-21e1608.jpg",
  opticalSortingMachine: "optical-sorting-machine-7f20a40.png",
  ultrasonicCleaningMachine: "ultrasonic-cleaning-machine-f555e12.png",
  hydraulicCentreLessGrinding: "hydraulic-centre-less-grinding-b7928a4.jpg"
};

// Product Categories
export const PRODUCT_IMAGES = {
  // Standard Fasteners
  standardFasteners: {
    socketHeadFasteners: "socket-head-fasteners-4206633.jpg",
    hexWrench: "l-keys--tools-210a335.jpg",
    durlockSeries: "threaded-fastner-807fac5.jpg",
    hexHeadFasteners: "hex-head-fasteners-6c8f6b7.jpg",
    studs: "threaded-components-87bd3dd.jpg",
    hexFlange: "nuts--washers-3141291.jpg"
  },
  
  // Automotive and Industrial Components
  automotiveIndustrial: {
    cycleComponents: "cycle-components-abb9e4e.jpg",
    tractorParts: "tractor-parts-112c186.jpg",
    generalAutomotive: "general-automotive-0523462.jpg"
  },
  
  // Specialty Products
  specialtyProducts: {
    specialFasteners: "special-purpose-fasteners-category-c01250b.jpg",
    specialProducts: "custom-machined-parts-732226e.jpg"
  },
  
  // Other product images
  other: {
    customSolutions: "custom-solutions-r8s9t67.jpg"
  }
};

// Client Images (placeholders for future use)
export const CLIENT_IMAGES = {
  mahle: "mahle-logo-placeholder.jpg",
  sogefi: "sogefi-logo-placeholder.jpg",
  kongsberg: "kongsberg-logo-placeholder.jpg",
  itl: "itl-logo-placeholder.jpg"
};

// Facility Images (placeholders for future use)
export const FACILITY_IMAGES = {
  manufacturingFloor: "manufacturing-floor-placeholder.jpg",
  officeArea: "office-area-placeholder.jpg",
  warehouse: "warehouse-placeholder.jpg",
  buildingExterior: "building-exterior-placeholder.jpg",
  assemblyArea: "assembly-area-placeholder.jpg",
  packagingSection: "packaging-section-placeholder.jpg"
};

// Quality Lab Images
export const QUALITY_IMAGES = {
  measuringInstruments: "measuring-instruments-2fe29bb.jpg",
  testingEquipment: "testing-equipment-71ec2f8.jpg",
  platingPlantInstruments: "plating-plant-instruments-1c2b94f.jpg",
  inspectionArea: "inspection-area-placeholder.jpg",
  qualityControlProcess: "quality-control-process-placeholder.jpg",
  materialTesting: "material-testing-placeholder.jpg",
  finalInspection: "final-inspection-placeholder.jpg"
};

// Local images (from public directory)
export const LOCAL_IMAGES = {
  placeholder: "/images/rect.png",
  logo: "/images/logo.png"
};

/**
 * Utility function to construct a complete CDN URL from a path
 * @param path - The path to the asset relative to the CDN base URL
 * @returns The complete CDN URL
 */
export function getCdnUrl(path: string): string {
  if (!path) return LOCAL_IMAGES.placeholder;
  
  // If the path already includes the CDN base URL, return it as is
  if (path.startsWith(CDN_BASE_URL)) return path;
  
  // If the path is a local path (starts with '/'), return it as is
  if (path.startsWith('/')) return path;
  
  // Otherwise, construct the full CDN URL
  return `${CDN_BASE_URL}${path}`;
}

/**
 * Validates if an asset path exists
 * This is a simple validation that checks if the path is not empty
 * In a more advanced implementation, this could check against a list of known valid paths
 * or even make a HEAD request to verify the asset exists (during build time)
 * 
 * @param path - The path to validate
 * @returns boolean indicating if the path is valid
 */
export function validateAssetPath(path: string): boolean {
  return !!path && typeof path === 'string';
}

export default {
  PRODUCT_IMAGES,
  CLIENT_IMAGES,
  FACILITY_IMAGES,
  QUALITY_IMAGES,
  LOCAL_IMAGES,
  getCdnUrl,
  validateAssetPath
};