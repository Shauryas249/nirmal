import { useEffect } from "react";
import { useRouter } from "next/router";
import { 
  PRODUCT_IMAGES, 
  FACILITY_IMAGES, 
  QUALITY_IMAGES, 
  LOCAL_IMAGES, 
  getCdnUrl 
} from "@/constants/assetPaths";

// This page is no longer accessible to users
// The component is kept in the codebase but redirects to home page

export default function Gallery() {
  const router = useRouter();
  
  // Redirect to home page when this component mounts
  useEffect(() => {
    router.replace('/');
  }, [router]);
  
  // Return null to prevent any flash of content during redirect
  return null;
}

// Original gallery data is kept for reference but not rendered
// Gallery categories with actual product images
const galleryCategories = [
  {
    id: "facility",
    name: "Facility",
    description: "Our state-of-the-art manufacturing plant",
    items: [
      // Items removed for brevity but kept in code
    ]
  },
  {
    id: "products",
    name: "Products",
    description: "Showcase of our precision components",
    items: [
      // Items removed for brevity but kept in code
    ]
  },
  {
    id: "quality",
    name: "Quality Lab",
    description: "Our quality control equipment and processes",
    items: [
      // Items removed for brevity but kept in code
    ]
  }
];