import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Map product IDs to their URL paths
export function getProductUrl(productId: string): string {
  const urlMap: Record<string, string> = {
    "gi-coils": "/GI-Mill-Finish-Coils",
    "ppgi-coils": "/PPGI-Color-Coated-Coils",
    "sandwich-panels": "/Insulated-Sandwich-Panels",
    "corrugated-sheets": "/Corrugated-Color-Sheets",
    "decking-sheets": "/Decking-Sheets",
    "purlins": "/Z-and-C-Purlins",
    "fencing-panels": "/Fencing-Panels-Hoarding",
    "pvc-fence": "/Pvc-Eco-Fence",
    "wire-mesh": "/Heras-Fence",
    "chain-link-fence": "/Chain-Link-Fence",
    "drywall": "/Drywall-Partition-Systems",
    "flashing": "/Roofing-Flashings-and-Gutters",
    "skylights": "/GRP-Translucent-Sheets-Skylights",
  };
  return urlMap[productId] || `/${productId}`;
}