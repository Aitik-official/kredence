import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroFence from "@/assets/hero-fence.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Building2, Layers, Grid, Wrench, Fence, Leaf } from "lucide-react";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";

// Product images from external sources for metal products
const productImages = {
  "gi-coils": "/gicoils.jpeg",
  "ppgi-coils": "https://tse4.mm.bing.net/th/id/OIP.5OP1iIcHK5ASGZh1lGhHEgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  "sandwich-panels": "https://5.imimg.com/data5/RT/ZQ/EO/SELLER-2020121/30-mm-puf-insulated-sandwich-roof-panel-500x500.jpg",
  "corrugated-sheets": "https://tse3.mm.bing.net/th/id/OIP.s2DkxQgR68QZJ0fYTlJ06QHaGK?pid=ImgDet&w=184&h=153&c=7&dpr=1.3&o=7&rm=3",
  "decking-sheets": "https://tse3.mm.bing.net/th/id/OIP.mzsttxGsOjsheboi-5IW8wHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
  "purlins": "https://tse3.mm.bing.net/th/id/OIP.DDTjoadU-onPFdrs1hPYfgHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
  "drywall": "/dry1.jpeg",
  "flashing": "https://th.bing.com/th/id/OIP.6bDleqwyT4ZuyLP3qZ0WxAHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "skylights": "https://th.bing.com/th/id/OIP.h2UKoc1JmJPoDGs3kxpgNgHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
};

export const products = [
  {
    id: "gi-coils",
    icon: Package,
    title: "GI Mill Finish Coils",
    code: "A",
    image: productImages["gi-coils"],
    images: [
      "https://th.bing.com/th/id/OIP.GEIrRHxVB5a76RlM3rEBZgHaHa?w=186&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.S4J1i40hd7c_glKzoQ7NvgHaEK?w=304&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.5ZzotRo79dkmhqwvbR7c1AHaHa?w=198&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Steel Coils",
    fullDescription: "Hot Dip Galvanized Steel Coils & Sheets (ASTM A653, JIS G3302, EN 10346)",
    description: "Hot Dip Galvanized Steel Coils & Sheets (ASTM A653, JIS G3302, EN 10346)",
    detailedDescription: "Hot Dip Galvanized Steel (GI) Coils & Sheets manufactured as per ASTM A653 – 2018, JIS G3302 : 2010 and EN 10346 standards. Our GI coils are manufactured through a process where steel is coated with a layer of zinc to provide superior corrosion resistance. Available in various surface treatments including regular and minimum spangle, zero spangle, oiled and dry, chromated, non-skin pass, and skin pass. Custom sizes and thickness are available. These coils are ideal for applications requiring long-term durability and protection against rust and corrosion, widely used in transportation, light industry, civil usage, farming, and construction applications.",
    specifications: [
      "Thickness: 0.30mm - 3.80mm",
      "Width: 600mm - 1250mm",
      "Zinc Coating: 30-275 g/m²",
      "Internal Diameter: 508mm / 610mm",
      "Coil Weight: 3-12 MT",
      "Quality: Commercial & Structural",
      "Surface Treatment: Regular/Minimum Spangle, Zero Spangle, Oiled & Dry, Chromated, Non-Skin Pass, Skin Pass",
      "Standards: JIS G 3302, ASTM A 653M, EN 10327",
      "Steel Grades: SGCC, CS, FS, SS, LFQ, DX51D+Z, S280GD"
    ],
    applications: [
      "Transportation",
      "Light Industry",
      "Civil Usage & Farming",
      "Roofing Tiles",
      "Steel Profiles for Wall Partition",
      "T-Bar",
      "Studs",
      "Fireproof Door",
      "Air Conditioning Duct",
      "Home Appliances"
    ]
  },
  {
    id: "ppgi-coils",
    icon: Layers,
    title: "PPGI Color Coated Coils",
    code: "B",
    image: productImages["ppgi-coils"],
    images: [
      "https://th.bing.com/th/id/OIP.Dq3jyKFFvRyGndV7fKuv5QHaGr?w=205&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.9m6EB35U0pAYwKsZn8nt3AHaGR?w=224&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.J47uVmwze2-Qub8S4D7jBQHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Coated Steel",
    fullDescription: "Pre-Painted Galvanized Steel Coils in RAL colors (RAL 9002 & RAL 1001)",
    description: "Pre-Painted Galvanized Steel Coils in RAL colors (RAL 9002 & RAL 1001)",
    detailedDescription: "KREDENCE STEEL is a top supplier and dealer in Dubai for Pre-Painted Galvanized Steel (PPGI) Color Coated Coils. We are committed to using the utmost top quality standard raw materials. Our PPGI coils combine the superior corrosion resistance of galvanized steel with aesthetic appeal through high-quality color coating. Available in standard RAL colors (RAL 9002 & RAL 1001), our PPGI coils feature the most demanded coatings including Regular Modified Polyester (RMP) and High Durable Polyester, ensuring both functionality and visual appeal for architectural and construction applications. These coatings are subject to our customer needs and requirements. Our PPGI coils are available as PPGI Coils / Sheet or PPGI Slit Coils, and all specifications including weight can be customized as per customer requirements. Available in Dubai - UAE and all over Oman (Salalah, Muscat, Sohar, Nizwa, Barka, Ibri), Saudi, Iraq, Kuwait, Bahrain, Yemen, Sri Lanka, and Jordan.",
    specifications: [
      "Thickness: 0.28mm - 1.50mm",
      "Width: 40mm - 1250mm (1220mm standard in Dubai)",
      "Zinc Coating: 80 GSM (G40) to 275 GSM (G90)",
      "Coil Weight: 3.5 MT - 4.5 MT",
      "RAL Colors: RAL 9002 & RAL 1001",
      "Coatings: Regular Modified Polyester (RMP) & High Durable Polyester",
      "Available as: PPGI Coils / Sheet or PPGI Slit Coils",
      "Customization: All specifications including weight can be customized as per customer requirements"
    ],
    applications: [
      "Roofing",
      "Wall Cladding",
      "Industrial Structures",
      "Commercial Buildings",
      "Architectural Applications",
      "Residential Construction"
    ]
  },
  {
    id: "sandwich-panels",
    icon: Building2,
    title: "Insulated Sandwich Panels",
    code: "C",
    image: "/sand1.jpeg",
    images: [
      "/sand1.jpeg",
      "/sand2.jpeg"
    ],
    category: "Panels",
    fullDescription: "Roof, Wall Panels & Cold Room Solutions with PUR/PIR Insulation",
    subtitle: "Roof Panels / Wall Panels / Cold Room",
    description: "Roof, Wall Panels & Cold Room Solutions with PUR/PIR Insulation",
    detailedDescription: "Insulated Sandwich Panels from KREDENCE STEEL TRADING are composite building materials consisting of an insulated rigid core sandwiched between two sheets of metal. These panels are lightweight, ready-to-use, and provide high-quality protection from heat in the Middle East while maintaining internal cooling. Our panels feature Polyurethane Rigid Core (PUR Panels) and Polyisocyanurate Rigid Core (PIR Panels) insulation with a minimum density of 35 to 40 kgs/m³. The composition includes: Top Skin (Aluminium or GI Polyester Coated) + Insulation Core (Polyurethane Foam) + Liner (Aluminium Foil or Aluminium / GI Polyester Coated Shallow Ribbed Sheet). Available in profiled sandwich panels (35mm, 50mm, 75mm, 100mm thickness) for corrugated roof and wall applications, and profiled WALL/FLAT panels (50mm, 75mm, 100mm thickness) for corrugated roof and wall applications. These panels are ideal for shopping malls, schools, labour camps, prefab houses, portable cabins, and cold rooms (freezers and chillers). They protect buildings from extreme cold and hot ambient temperatures, providing excellent insulation properties. Benefits include being lightweight, cost-effective, and easy to transport and install.",
    specifications: [
      "Profiled Sandwich Panel: 35mm, 50mm, 75mm, 100mm thickness",
      "Profiled WALL/FLAT Panel: 50mm, 75mm, 100mm thickness",
      "Composition: Top Skin + Insulation Core + Liner",
      "Top Skin: Aluminium or GI Polyester Coated",
      "Insulation: Polyurethane Foam (PUR/PIR) with minimum density of 35-40 kgs/m³",
      "Liner: Aluminium Foil or Aluminium / GI Polyester Coated Shallow Ribbed Sheet",
      "Characteristics: Lightweight, Ready-to-use",
      "Benefits: Cost-effective, Easy to transport and install"
    ],
    applications: [
      "Shopping Malls",
      "Schools",
      "Labour Camps",
      "Prefab Houses",
      "Portable Cabins",
      "Cold Rooms (Freezers & Chillers)",
      "Roof Panels",
      "Wall Panels"
    ]
  },
  {
    id: "corrugated-sheets",
    icon: Grid,
    title: "Corrugated Color Sheets",
    code: "D",
    image: productImages["corrugated-sheets"],
    images: [
      "https://th.bing.com/th/id/OIP.6qo8D9180ARV21JUNCxsLAHaF3?w=236&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.tBoPF3_yMDNUjKOnUNeYsgHaHa?w=247&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.IsokQCrYMjK9Dxh0c4-kvAHaHa?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Sheets",
    fullDescription: "Single Skin Profile Corrugated Sheets - Sinusoidal, Trapezoidal, Box Profiles",
    description: "Single Skin Profile Corrugated Sheets - Sinusoidal, Trapezoidal, Box Profiles",
    detailedDescription: "Single Skin Profile Corrugated Color Sheets from KREDENCE STEEL TRADING are cost-effective materials for roofing warehouses and cladding applications. Made from lightweight and durable materials, these sheets come in a variety of colors and profiles to suit different requirements. Sheets in different colors as per client sites requirements with different sizes are available. Available in various profile designs including sinusoidal, trapezoidal, and box profile, each design offers unique structural and aesthetic properties that cater to specific architectural styles. Single Skin Profile Corrugated Color Sheets are a cost-effective roofing and cladding solution due to their comparatively lower cost than other roofing materials, and they are also easy to install. These sheets are lightweight and easy to install, which contributes to their increased popularity, making them a preferred choice for roofing and cladding projects that need to be completed quickly. They are highly durable and able to withstand harsh weather conditions, with a long lifespan and resistance to corrosion, fire, and pests. Additionally, these sheets are energy efficient due to their reflective properties that reduce heat absorption, helping in reducing energy consumption in air conditioning and saving on energy bills for the building owner. Available in various materials such as steel, aluminum, and plastic, each material offers different advantages such as durability, strength, and corrosion resistance. Single Skin Profile Corrugated Color Sheets come in a wide range of colors that cater to diverse preferences and requirements, ranging from metallic finishes to bold and bright hues. They can be coated with a range of finishes such as polyester, PVF2, and Plastisol, each offering unique properties like weather resistance, easy cleaning, and durability.",
    specifications: [
      "Profile Designs: Sinusoidal, Trapezoidal, Box Profile",
      "Profile: 38/200 Sheeting (1023mm nominal, 1000mm covering)",
      "Materials: Steel, Aluminum, Plastic",
      "Color Options: Wide range from metallic finishes to bold and bright hues",
      "Surface Coatings: Polyester, PVF2, Plastisol",
      "Characteristics: Lightweight, Durable, Weather-resistant",
      "Benefits: Cost-effective, Easy to install, Energy efficient",
      "Properties: Corrosion-resistant, Fire-resistant, Pest-resistant, Easy cleaning"
    ],
    applications: [
      "Residential Roofing & Cladding",
      "Commercial & Industrial Buildings",
      "Agricultural Buildings",
      "Warehouses",
      "DIY Projects",
      "Roofing Projects",
      "Cladding Projects"
    ]
  },
  {
    id: "decking-sheets",
    icon: Layers,
    title: "Decking Sheets",
    code: "E",
    image: productImages["decking-sheets"],
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.mzsttxGsOjsheboi-5IW8wHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse1.mm.bing.net/th/id/OIP.AWl924M9xV3pFtrNrxQDHAHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.SQoFreyhHyD5S0WC59hcDgHaHa?w=159&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Decking",
    fullDescription: "Metal Floor Deck with Ribbed Profiles - 45/150 & 75/305",
    subtitle: "45/150 & 75/305",
    description: "Metal Floor Deck with Ribbed Profiles - 45/150 & 75/305",
    detailedDescription: "Metal Decking Sheets from KREDENCE STEEL TRADING are structural steel products designed for use in composite floor systems. Our metal decking profiles meet international steel design standards with maximum strength. The Steel Floor Deck has a ribbed profile with embossments, designed to bind together with concrete slabs, creating a reinforced concrete slab serving the dual purpose of taking up a permanent form to become part of the floor, and also offer positive reinforcement. These products are manufactured to meet the prescribed specification of design engineers and building contractors. The components are aesthetically pleasant, weatherproof, with excellent thermal insulation and offer resistance to fire, fungi and mildew. Available in standard profiles 45/150 (900mm covering width) and 75/305 (914mm covering width), our decking sheets feature ribbed profiles that provide excellent load-bearing capacity while reducing the overall weight of the structure. Made from Pre-Galvanized steel with thickness ranging from 0.5mm to 1.5mm as per ASTM A 653 Standards, Grade D, with Zinc G90 (275 gms/m²). Different grades can be supplied on request of our customers. These decking sheets are ideal for multi-story construction projects, mezzanines, bridge walkways, porches, in-fills, platforms and parking garages, and storage facilities, requiring fast and efficient installation.",
    specifications: [
      "45/150: 900mm covering width",
      "75/305: 914mm covering width",
      "Thickness: 0.5mm - 1.5mm",
      "Pre-Galvanized Steel, Grade D",
      "Zinc G90 (275 gms/m²)",
      "Standards: ASTM A 653",
      "Profile: Ribbed profile with embossments",
      "Design: Meets international steel design standards with maximum strength",
      "Customization: Different grades can be supplied on request"
    ],
    applications: [
      "Multi-story Buildings",
      "Mezzanines",
      "Bridge Walkways",
      "Porches",
      "In-fills",
      "Platforms and Parking Garages",
      "Storage Facilities"
    ]
  },
  {
    id: "purlins",
    icon: Wrench,
    title: "Z & C Purlins",
    code: "F",
    image: productImages["purlins"],
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.DDTjoadU-onPFdrs1hPYfgHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.WX3zVsRIzfeGriQYRt5tPQHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.0jyrk8_kJGFK47rB22VmNQHaHa?w=190&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Structural",
    fullDescription: "Z & C Purlins produced in a variety of sizes with detailed punching options. Raw material conforms to ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel). Features Quick Fix Anti Sag Rods and a simple yet durable locking system for easy installation.",
    description: "Z & C Purlins produced in a variety of sizes with detailed punching options. Raw material conforms to ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel).",
    detailedDescription: "KREDENCE STEEL TRADING can produce both Z & C Purlins in various sizes with detailed punching options. Our Z & C Purlins are manufactured from Structural Grade Galvanized Steel that conforms to ASTM A653 Grade 50 G90. The raw material is also known as Structural Grade Galvanized Steel. We also manufacture Quick Fix Anti Sag Rods which support the Purlin system, and Zed Purlins Quick Fix Anti-Lock Sag Rods. Channels or angles can be manufactured using Structural Grade material or Commercial Grade materials as per customer requests. Our purlins meet multiple material specifications including ASTM A653 Grade 50 (New ASTM Standard), ASTM A446 Grade 'D' G90 (Old ASTM Standard), and BS EN 10147 S350GD Z275 MAC, with a minimum yield strength of 350 N/mm². The simple yet durable locking system eases installation and addresses sagging issues. The circular section of the sag rods provides a stronger/stiffer connection unit. Z & C Purlins are designed as secondary beam supports for roofing and cladding sheets, insulated panels, and liner trays. Suitable for spans up to 10.0m, they can be joined using the overlap or sleeved system. Our purlins offer excellent strength-to-weight ratio and corrosion resistance, making them ideal for modern construction applications requiring reliable structural support.",
    specifications: [
      "Manufacturing: Various sizes with detailed punching options",
      "Raw Material: ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel)",
      "Material Standards: ASTM A653 Grade 50 (New ASTM Standard), ASTM A446 Grade 'D' G90 (Old ASTM Standard), BS EN 10147 S350GD Z275 MAC",
      "Yield Strength: Minimum 350 N/mm²",
      "Span: Suitable for spans up to 10.0m",
      "Locking System: Simple yet durable locking system that eases installation and addresses sagging",
      "Sag Rods: Quick Fix Anti Sag Rods with circular section for stronger/stiffer connection unit",
      "Joining Methods: Overlap or sleeved system",
      "Customization: Channels or angles available in Structural Grade or Commercial Grade materials as per customer requirements",
      "Design: Secondary beam supports for roofing and cladding sheets, insulated panels, and liner trays"
    ],
    applications: [
      "Roofing Sheets Support",
      "Cladding Sheets Support",
      "Insulated Panels Support",
      "Liner Tray Support",
      "Secondary Beam Supports",
      "Construction Projects"
    ]
  },
  {
    id: "fencing-panels",
    icon: Fence,
    title: "Fencing Panels & Hoardings",
    code: "G",
    image: "/fencing1.jpeg",
    images: [
      "/fencing panels 2.jpeg",
      "/fencing1.jpeg",
      "/fencong panels 3.jpeg"
    ],
    category: "Fencing",
    fullDescription: "Temporary Fencing Panels (Discontinuous) and Continuous Corrugated Fencing with complete accessories. Metal and machine-discontinuous fencing panels primarily used for construction sites.",
    description: "Temporary Fencing Panels (Discontinuous) and Continuous Corrugated Fencing with complete accessories. Metal and machine-discontinuous fencing panels primarily used for construction sites.",
    detailedDescription: "Fencing Panels & Hoardings provide secure and visually appealing boundaries for construction sites and industrial facilities. Made from corrugated galvanized steel, our fencing panels are available in various colors and come complete with all necessary accessories including U-channels, GI pipes, and concrete blocks for stable installation. Available in both discontinuous (panel boards fixed at 2m intervals) and continuous (overlapped sheets with no gaps) configurations. The discontinuous type features panel boards fixed on concrete blocks at 2-meter intervals, back-stayed at the junction. The continuous type features corrugated steel sheets that are overlapped to create a continuous stretch of fencing with no gaps in the middle or at the bottom, usually back-stayed at regular intervals of 2.5 meters with heavy-duty galvanized ERW pipes. Both types are fireproof, strong, and durable, with easy installation and removal capabilities.",
    specifications: [
      "Fencing Sheet: 0.30mm x 1.0m x 2.0m",
      "Profile Sheet Color: RAL 9002 (Off-white) standard",
      "Available Colors: Off White (RAL 9002), Orange (RAL 2004), Red (RAL 3002), Light Blue (RAL 5012), Dark Blue (RAL 5010), RAL 5002 EMMAR Blue, RAL 7046 Dark Grey, RAL 7036 Grey, RAL 7037 Grey, and custom colors",
      "Galvanized U-Channel: 40mm x 40mm x 40mm x 1.2mm to 2.0mm thickness, 2.18m width",
      "GI Mill Finish Pipe: OD 42mm, Length 2.2m, Thickness 1.2mm to 2.0mm",
      "GI Clamp: 3.0mm thickness",
      "Concrete Block: 600mm x 400mm x 200mm",
      "Each Frame: 2.15m x 2.0m (4.30m²)",
      "Types: Discontinuous (panel boards fixed at 2m intervals) and Continuous (overlapped sheets with no gaps)",
      "Back-stay: Discontinuous at junction, Continuous at 2.5m intervals with heavy duty galvanized ERW pipes",
      "Materials: Galvanized steel, recycled or concrete stabilizing blocks",
      "Features: Fireproof, strong, durable, easy to install and remove, customizable"
    ],
    applications: [
      "Construction Sites",
      "Project Boundaries",
      "Temporary Enclosures",
      "Site Security",
      "Industrial Fencing",
      "Continuous Fencing",
      "Discontinuous Fencing",
      "Custom Gates and Panels"
    ]
  },
  {
    id: "pvc-fence",
    icon: Leaf,
    title: "PVC Eco Fence",
    code: "H",
    image: "https://th.bing.com/th/id/OIP._ZIpTl4QZ6GUyPj7jBb65QHaEe?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    images: [
      "https://th.bing.com/th/id/OIP._ZIpTl4QZ6GUyPj7jBb65QHaEe?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "/pvceco2.jpeg",
      "/pvceco1.jpeg"
    ],
    category: "Fencing",
    fullDescription: "Best quality PVC ECO Fence available throughout UAE. Height range from 2.4mtr to 5.0mtr, customizable to customer specifications.",
    description: "Best quality PVC ECO Fence available throughout UAE. Height range from 2.4mtr to 5.0mtr, customizable to customer specifications.",
    detailedDescription: "PVC Eco Fence is a lightweight, durable, and environmentally friendly fencing solution. Made from high-quality PVC, these fences are completely rust-free and require minimal maintenance. Ideal for residential, commercial, and agricultural applications, they offer excellent weather resistance and can be customized to various heights and configurations. Best quality PVC ECO Fence available throughout UAE. Height range from 2.4mtr to 5.0mtr, customizable to customer specifications. Standard sizes also available. Lighter in weight compared to metal fences, rust-free, anti-corrosive, and weather-resistant. Easy to install with high strength and durability. Perfect for gardens, parks, poultry cages, and various outdoor applications requiring a maintenance-free solution.",
    specifications: [
      "Height Range: 2.4mtr to 5.0mtr (customizable)",
      "Material: High-quality PVC",
      "Clips: 4 clips for sheets",
      "Concrete Foundation: 1000mm x 400mm x 400mm @2.5mtr center-to-center (cc)",
      "Additional Foundation Sizes: 1000x500x500mm, 1000x300x300mm, 1000x600x600mm (customizable)",
      "Pipe for Frame Support: 48mm OD x 1.5mm thick @2.5mtr cc",
      "Railing: 2 numbers (top & bottom) or as per customer requirement",
      "Couplers: Putlog coupler for railing, Swivel coupler for frame fixing with blocks (golden color)",
      "Features: Lightweight, rust-free, anti-corrosive, weather-resistant, easy to install, high strength and durability",
      "Types: PVC ECO Fence and PVC ECO Hoarding (flat panel hoarding)"
    ],
    applications: [
      "Gardens & Parks",
      "Poultry Cages",
      "Boundary Fencing",
      "Residential Use",
      "Weather-resistant Applications",
      "Site Security & Hoarding",
      "Construction Site Enclosures",
      "Privacy Fencing"
    ]
  },
  {
    id: "wire-mesh",
    icon: Grid,
    title: "Wire Mesh Fence / Weld Mesh Fence / Heras Fence",
    code: "I",
    image: "https://th.bing.com/th/id/OIP.JxEWk10jRGWah72w0OqNnwHaFj?w=267&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    images: [
      "https://th.bing.com/th/id/OIP.JxEWk10jRGWah72w0OqNnwHaFj?w=267&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.wDxONbelQQ1ZUr7j6kJROAHaDn?w=299&h=170&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.k1cgHeNPDak7B7WvI0TcMQHaFj?w=276&h=207&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Mesh",
    fullDescription: "Leading manufacturer and supplier of high-quality stainless steel wire mesh across the UAE. High-quality material for durability and corrosion resistance.",
    description: "Leading manufacturer and supplier of high-quality stainless steel wire mesh across the UAE. High-quality material for durability and corrosion resistance.",
    detailedDescription: "Wire Mesh Fence manufactured from stainless steel offers superior corrosion resistance and durability. Available in various grades including 304, 304L, 316, and 316L, our wire mesh is suitable for demanding applications requiring resistance to acids, alkalis, and high temperatures. Custom configurations available to meet specific project requirements. Leading manufacturer and supplier of high-quality stainless steel wire mesh across the UAE. High-quality material for durability and corrosion resistance. Fine-wire meshes resistant to acid, alkali, and high temperatures. Custom upgrades available with optimized separate operation. Available in rolls, cut to size, assembled, or reused in other forms.",
    specifications: [
      "Material Grades: Stainless Steel 304, 304L, 316, 316L, 910 & more",
      "Properties: Acid resistant, alkali resistant, high temperature resistant",
      "Forms Available: Rolls, cut to size, assembled, or reused in other forms",
      "Customization: Custom upgrades and specifications based on specific requirements",
      "Types: Wire Mesh Fence, Weld Mesh Fence, Heras Fence",
      "Quality: High-quality stainless steel for durability and corrosion resistance",
      "Features: Fine-wire meshes optimized for separate operation"
    ],
    applications: [
      "Printing Industry",
      "Automotive (Cars)",
      "Space & Aerospace",
      "Electronics & Gadgets",
      "Food & Beverage",
      "Filtration & Separation",
      "EMF & RMF Shielding",
      "Sword Defenses (Protection Solutions)",
      "Industrial Applications"
    ]
  },
  {
    id: "chain-link-fence",
    icon: Fence,
    title: "Chain Link Fence",
    code: "M",
    image: "https://in-linefence.ca/wp-content/uploads/2020/05/Six-Reasons-to-Buy-a-Chain-Link-Fence-edit.jpg",
    images: [
      "https://in-linefence.ca/wp-content/uploads/2020/05/Six-Reasons-to-Buy-a-Chain-Link-Fence-edit.jpg",
      "https://tse1.mm.bing.net/th/id/OIP.yTpsVkezMVowQTQBUYBKMAAAAA?pid=ImgDet&w=185&h=185&c=7&dpr=1.3&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.yHSDc2WaGBa9r9eDyTqgOAHaHa?pid=ImgDet&w=183&h=183&c=7&dpr=1.3&o=7&rm=3"
    ],
    category: "Fencing",
    fullDescription: "Professional chain link fence solutions for property protection. Durable, cost-effective, and versatile fencing material also known as hurricane fence or diamond-mesh fence.",
    description: "Professional chain link fence solutions for property protection. Durable, cost-effective, and versatile fencing material.",
    detailedDescription: "Whatever your fencing need is, Kredence Steel Trading can help. With over 15 years of experience in the steel trading and building materials industry, we have been providing professional chain link fence solutions for property protection. We've helped thousands of businesses source premium chain link fence manufacturers and gain a competitive advantage. Our dynamic team is always moving forward, researching, and seeking to provide you with only the best.\n\nChain link fence, also referred to as hurricane fence or diamond-mesh fence, is one of the most durable yet inexpensive fencing materials that brings you and your properties security. Constructed of steel wires woven and interlocked in a diamond pattern, chain link fabric maintains an open appearance, which does not obscure the view beyond the fence. The fabric offers an array of benefits which makes it appealing to residential and commercial properties.\n\nTypical application areas include home yards, playgrounds, tennis court, leisure sports field, park, boundary fencing, factory and construction sites, etc. Chain link fence can be processed into many different heights from 1.6 to 20 feet, with various gauges and mesh sizes to meet specific security and application requirements.",
    specifications: [
      "Material: Low carbon steel wire, galvanized wire, aluminum alloy wire, stainless steel, PVC",
      "Surface Treatment: Galvanized, vinyl coated; other finishes such as aluminized or galfan coatings are also available",
      "Colours of PVC Coating: Dark green, black, brown, red, orange, white and yellow",
      "Heights: 1.6' to 20' (Special heights available on request). Typically 3-5 feet for domestic property; commercial application up to 10 feet; 12-13 feet for tennis court or other sports field",
      "Gauges: 6, 8, 9, 10, 11, 11-1/2, 12, 12-1/2, 14, 16. 9 gauge is the most common wire size for both residential and commercial applications. 11 and 11-1/2 gauge are suitable for temporary fencing. 6 gauge is usually used in heavy duty security applications",
      "Mesh Size: 3/8\", 5/8\", 3/4\", 1\", 1-1/4\", 1-1/2\", 1-3/4\", 2\", 2-1/4\", 2-1/2\", 3\", 3-1/2\", 4\". Chain link fabric with mesh size ranging from 3/8\" to 1\" is Mini Mesh for maximum security and protection. Common mesh sizes up to 4\"",
      "Roll Length: 32' to 165'",
      "Selvage: Twisted-twisted, knuckle-knuckle, knuckle-twisted. \"Knuckle\" design to avoid sharp ends; \"Twisted\" method for more security",
      "Standards: Hot-dipped zinc coating conforms to ASTM A392 for long service life warranty",
      "Types: Galvanized, PVC (Vinyl-coated), Stainless Steel, Aluminum chain link fence",
      "Fittings: Hot-dipped chain link fence fittings provided to assemble a complete system. Less weight die cast steel or aluminum fittings for residential applications. Cast iron or malleable steel fittings for commercial and industrial applications",
      "Dimensions: Differ from the size of the chain link fabric - consult experts for fencing projects"
    ],
    features: [
      "Visibility—great for pets and children; it also does not obscure the view beyond the fence",
      "Security—optimal security barrier, many intruders may be deterred by the chain link fence, various heights and barbed selvage are offered to meet any specific needs",
      "Low cost—relatively inexpensive, one of the advantages over other fencing options",
      "Durability—durable materials with utmost quality, two finishes (galvanized and vinyl coated) ensure to survive almost any harsh environment",
      "Versatility—a variety of specifications and additions to meet any installation need; applicable to any place when safety is needed; could work as temporary fencing",
      "Maintenance free—chain link fence won't crack, chip, bend or deform, is a budget-friendly option for homeowners or businesses alike",
      "Easy to repair—damaged part can be easily replaced, matching the rest of the fence"
    ],
    applications: [
      "Dog Kennel",
      "Sports Grounds and Facilities",
      "Parks and Reserves",
      "Commercial Properties",
      "Home Yard",
      "Golf Courses",
      "Schools",
      "Airports",
      "Zoo",
      "Temporary Fencing",
      "Factory",
      "Playgrounds",
      "Tennis Courts",
      "Leisure Sports Fields",
      "Boundary Fencing",
      "Construction Sites"
    ],
    benefits: [
      "Durable construction",
      "Increased security and privacy (with privacy slats)",
      "Easy installation with no tools required (privacy slats)",
      "Maintenance free",
      "Corrosion resistant (aluminum and stainless steel options)",
      "Lightweight (aluminum option)",
      "High tensile strength",
      "Long life guarantee",
      "Cost-effective fencing option for residential, commercial, and industrial areas"
    ],
    categories: [
      "Galvanized Chain Link Fence - Traditional option for securing properties both in residential and commercial applications. We use hot-dipped zinc coating which conforms to ASTM A392 for long service life warranty. For added security of commercial properties, barbed wire or razor ribbon is available to install onto the fence top.",
      "PVC Chain Link Fence - Ideal choice for homes, yards, and light commercial projects, emphasizing security, durability, and affordability. Environmentally friendly colors (black, green, and brown) blend with surroundings and allow landscaping to show through. PVC slats are available for privacy.",
      "Stainless Steel Chain Link Fence - High alkali resistance and can withstand high temperatures and harsh weather, maintaining a long-term bright luster. Recommended for high-grade enclosures or barriers in applications like airports, highways, or other areas requiring high-level protection.",
      "Aluminum Chain Link Fence - Traditional and aesthetic choice for strength and durability. Aluminized chain link fabric on galvanized framework. Corrosion resistant, lightweight, high tensile strength. Recommended for commercial or public areas such as playgrounds, farms, or recreational places, offering a long life guarantee and free of maintenance."
    ],
    additions: [
      "Razor Wire - Coiled razor wire with sharp blades for enhanced security",
      "Barbed Wire - Large spool of barbed wire for top-of-fence security",
      "Barbed Wire Arm - Silver-colored metal arm designed to hold barbed wire at an angle on top of a fence post",
      "Privacy Slats - Durable construction, increased security and privacy, easy installation with no tools required, maintenance free. Available in White, green, black, brown, beige, orange, dark blue. Customized colours are also available",
      "Privacy Windscreen - Green mesh fabric shaped like a section of a fence, intended to provide privacy",
      "Decorative Post Caps - Ornate post caps with pointed or rounded decorative finial designs"
    ],
    fittings: [
      "Line Post Cap - A cap on top of a fence post",
      "Fence Ties - Small wires or bands used to attach the fence fabric to the posts and rails",
      "Top Rail - The horizontal pipe running along the top of the fence",
      "Tension Band - A metal band used to secure the tension bar to a post",
      "Rail End - A fitting that connects the top rail to a post",
      "Rail End Band - A band used with the rail end fitting",
      "Gate Fork Latch - The mechanism used to secure the gate in a closed position",
      "Terminal Post Cap - A cap on top of a terminal post (a heavier post at the end or corner of a fence section, or next to a gate)",
      "Line Post - A standard vertical post supporting the fence fabric",
      "Tension Wire Clip - A clip used to attach the bottom tension wire to the fence fabric or posts",
      "Bottom Tension Wire - A wire running along the bottom of the fence fabric to keep it taut",
      "Terminal Post - A heavier post used at the ends, corners, or gate openings of a fence",
      "Tension Bar - A vertical bar woven into the end of the chain link fabric to provide tension",
      "Gate Post Hinge - The hinge component attached to the gate post",
      "Gate Frame Hinge - The hinge component attached to the gate frame"
    ],
    colors: [
      "Dark Green",
      "Black",
      "Brown",
      "Red",
      "Orange",
      "White",
      "Yellow"
    ],
    privacySlats: {
      description: "Chain link fences with privacy slats offer both privacy and security. PVC slats come in various colors to blend with surroundings.",
      benefits: [
        "Durable construction",
        "Increased security and privacy",
        "Easy installation with no tools required",
        "Maintenance free"
      ],
      colors: [
        "White",
        "Green",
        "Black",
        "Brown",
        "Beige",
        "Orange",
        "Dark Blue",
        "Customized colours available"
      ]
    },
    choosingTips: {
      title: "Tips for Choosing Chain Link Fence",
      description: "There are three key parameters for choosing chain link fence:",
      parameters: [
        {
          name: "Diameter/Gauge",
          details: "9 gauge is the most common wire size for both residential and commercial applications. 11 and 11-1/2 gauge are suitable for temporary fencing. 6 gauge is usually used in heavy duty security applications."
        },
        {
          name: "Mesh Size",
          details: "Chain link fabric with mesh size ranging from 3/8\" to 1\" is Mini Mesh for the maximum security and protection. Common mesh sizes up to 4\"."
        },
        {
          name: "Height",
          details: "Chain link fence can be processed into many different heights from 1.6 to 20 feet. Typically 3 to 5 feet for domestic property; commercial application up to 10 feet; 12 to 13 feet for tennis court or other sports field. We could formulate and customize the fencing needs as you submit your plan."
        }
      ]
    }
  },
  {
    id: "drywall",
    icon: Building2,
    title: "Drywall Partition Systems",
    code: "J",
    image: "/dry1.jpeg",
    images: [
      "/dry1.jpeg",
      "/dry2.jpeg"
    ],
    category: "Systems",
    fullDescription: "Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles. Metal partition system composed of ceiling, studs, and tracks.",
    description: "Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles. Metal partition system composed of ceiling, studs, and tracks.",
    detailedDescription: "Drywall Partition Systems provide flexible and efficient solutions for interior space division. Our steel stud and track systems are manufactured from galvanized steel and comply with EN-BS and ASTM standards. Lightweight yet strong, they enable quick installation of partition walls and are ideal for modern office and commercial spaces. Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles. Metal partition system composed of ceiling, studs, and tracks. Cost-effective for commercial, leisure, industrial, and residential development. Components combine to form a frame designed to accommodate single and double-density gypsum wallboards. Studs feature a knurled face to help wallboard penetration with straight screws, making drywall finishing easier and faster.",
    specifications: [
      "Components: Stud, Track, Furring Channel, Main Channel & Wall Angles",
      "Material: Galvanized lightweight steel profiles for vertical stud framing",
      "Thickness: 0.35mm - 0.9mm (available in different thicknesses)",
      "Dimensions: 50mm - 123mm (available in different dimensions)",
      "Length: 3mtr standard",
      "Standards: Complies with EN-BS and ASTM standards",
      "Features: Knurled face for wallboard penetration with straight screws for easier and faster drywall finishing",
      "Joining: Studs can be joined together from a box for increased strength",
      "Weight: Unit weight of Stud and Track is less than conventional units of comparable thickness, saving structural architecture",
      "Design: Section allows for service inclusion during building",
      "Compatibility: Partitioning Stud & Track is compliant with furring section ceiling",
      "Available: Different widths when fitted with gypsum board, features high wall"
    ],
    applications: [
      "Commercial Development",
      "Leisure Facilities",
      "Industrial Projects",
      "Residential Development",
      "Interior Partitions",
      "Wall Linings",
      "Partitions & Wall Linings",
      "Service Routing Through Partitions",
      "Solid Walls (Domestic & Commercial Structures)",
      "Single & Double-Density Gypsum Wallboards",
      "Easy Routing of Services"
    ]
  },
  {
    id: "flashing",
    icon: Wrench,
    title: "Roofing Flashings & Gutters",
    code: "K",
    image: productImages["flashing"],
    images: [
      "https://th.bing.com/th/id/OIP.6bDleqwyT4ZuyLP3qZ0WxAHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.g03VjAzT_2RHB3Wv01RjdQHaE8?w=265&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.wgnSU1eVXehhqHTsceVZTAHaE8?w=270&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Accessories",
    fullDescription: "Flashing, Rain Gutter, Ridge Ventilator, and Sliding components from Kredence Steel's Profiles & Cladding Division.",
    description: "Flashing, Rain Gutter, Ridge Ventilator, and Sliding components from Kredence Steel's Profiles & Cladding Division.",
    detailedDescription: "Roofing Flashings & Gutters are essential components for complete roofing systems. We offer a comprehensive range including apron, step, counter, valley flashings, and ridge ventilators. Available in standard 3-metre lengths with various finishes and colors, custom solutions can be manufactured to meet specific project requirements. Flashing, Rain Gutter, Ridge Ventilator, and Sliding components from Kredence Steel's Profiles & Cladding Division. Comprehensive range of flashings, rain gutters, ridge ventilators, and sliding components including single skin gi/aluminum profile sheets, eave flashings, gutters, and various flashing sheets. Technical support with over 5 years of experience in roofing systems, focusing on aesthetics, efficient drainage, and proper gutter and downpipe installation.",
    specifications: [
      "Flashings: Apron, Step, Counter, Valley, Drip Edge, Vent Pipe, Chimney, Skylight, Cap, Ridge, Barge Board, Corner, Parapet, Side Wall, L-Type, Top, Bottom",
      "Rain Gutters: Eave Gutter, Box Gutter, Valley Gutter",
      "Ridge Ventilators: Complete ridge ventilation solutions",
      "Other Components: Sliding components, Crimped sheets, Flat Panels, Cold Store Panels, C-Channel, Z-Purlin, Hat Section, Flat Sheet",
      "Materials: Single skin GI/Aluminum profile sheets",
      "Rainwater Goods: Standard 3-meter lengths; non-standard lengths, dimensions, and colors available upon inquiry",
      "Technical Support: Over 5 years of experience in roofing systems and designs",
      "Design Expertise: Focus on building aesthetics, efficient drainage, appropriate gutter sizing, and correct downpipe number and size",
      "Customization: Tailor-made efficient drainage systems based on building size and roof slope",
      "Export Markets: Saudi Arabia, Bahrain, Oman, Kuwait, Qatar"
    ],
    applications: [
      "Roofing and Cladding Systems",
      "Water Management and Drainage Solutions",
      "Protection Against Water Ingress",
      "Weather Element Protection",
      "Ventilation in Roofing Structures",
      "Roof Joints and Penetrations",
      "Gutter Installation",
      "Building Sealing",
      "Composite Floor Decking Systems",
      "Wall and Roof Cladding",
      "Curved Cladding Applications"
    ]
  },
  {
    id: "skylights",
    icon: Layers,
    title: "GRP Translucent Sheets - Skylights",
    code: "L",
    image: productImages["skylights"],
    images: [
      "https://th.bing.com/th/id/OIP.h2UKoc1JmJPoDGs3kxpgNgHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.zR_WJ2pjMnytgp0E1lmkXAHaGM?w=194&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.mu9zyF90DYAXJ8k0U0CpCwHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Skylights",
    fullDescription: "GRP (Glass Reinforced Plastic) Translucent Sheets for skylights. Daylight improves the internal environment and energy efficiency of buildings.",
    description: "GRP (Glass Reinforced Plastic) Translucent Sheets for skylights. Daylight improves the internal environment and energy efficiency of buildings.",
    detailedDescription: "GRP (Glass Reinforced Polyester) Translucent Sheets provide natural daylight solutions for energy-efficient buildings. These skylight panels feature a corrugated design that matches standard roofing profiles and are available in various colors. By reducing the need for artificial lighting, they help lower energy costs and carbon footprint while providing a safe and reliable installation system. GRP (Glass Reinforced Plastic) Translucent Sheets for skylights. Daylight improves the internal environment and energy efficiency of buildings. Rooflights are designed to maximize natural daylight transmission into buildings requiring composite panels, thereby reducing the carbon footprint. Energy saver roof lights are an excellent, cost-effective way to get natural light into various buildings.",
    specifications: [
      "Type: GRP Translucent Sheets - Skylight",
      "Design: Corrugated profile with wavy, ribbed structure",
      "Features: Safe, effective rooflights that are simple to install and very economic",
      "Benefits: Improves concentration, leads to better productivity, creates environments people want to spend time in",
      "Energy Efficiency: Reduces energy costs and helps meet Part L",
      "Installation: Simple to install, safe and effective",
      "Natural Daylight: Maximizes natural daylight transmission",
      "Carbon Footprint: Reduces carbon footprint in buildings",
      "Profile: Corrugated design for structural integrity",
      "Colors: Multiple color options available (clear, off-white, blue tint, etc.)",
      "Quality: High-quality building materials meeting durability and performance standards"
    ],
    applications: [
      "Warehouses",
      "Industrial Facilities",
      "Commercial Buildings",
      "Agricultural Structures",
      "Buildings Requiring Composite Panels",
      "Natural Daylight Solutions",
      "Energy-Efficient Roofing",
      "Rooflight Systems",
      "Daylight Transmission Projects",
      "Carbon Footprint Reduction Projects"
    ]
  }
];

// Filter fence products only
const fenceProducts = products.filter(
  (product) => 
    product.category === "Fencing" || 
    product.category === "Mesh" ||
    product.id === "fencing-panels" ||
    product.id === "pvc-fence" ||
    product.id === "wire-mesh" ||
    product.id === "chain-link-fence"
);

const ProductsPage = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Fence"
        title="Premium Fencing Solutions"
        description="Explore our comprehensive range of high-quality fencing products including panels, PVC fences, and wire mesh solutions designed for durability, security, and performance."
        backgroundImages={[
          "https://in-linefence.ca/wp-content/uploads/2020/05/Six-Reasons-to-Buy-a-Chain-Link-Fence-edit.jpg",
          "https://tse2.mm.bing.net/th/id/OIP.W4r1StITsHHwI-OgsFV0lwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
          "https://tse2.mm.bing.net/th/id/OIP.GdzOOC0-BlpomlGj_TZRZAHaE7?w=1000&h=666&rs=1&pid=ImgDetMain&o=7&rm=3"
        ]}
        variant="contrast"
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent hover:shadow-glow text-white px-8 py-6 h-auto rounded-xl"
        >
          <Link to="/contact" className="font-semibold">
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </PageHeader>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Our Fencing Product Range
            </h2>
            <p className="text-xl text-muted-foreground">
              Kredence Steel Trading offers a diverse portfolio of premium fencing solutions, 
              each designed for durability, security, and cost-efficiency for construction and industrial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fenceProducts.map((product) => {
              return (
                <Card 
                  key={product.id} 
                  className="group border border-border bg-white shadow-elegant overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col rounded-2xl"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 flex-1 flex flex-col space-y-5">
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-foreground">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {product.fullDescription || product.description}
                    </p>

                    {/* View Details Button */}
                    <Button
                      asChild
                      className="w-full bg-[#2E6A92] hover:bg-[#245676] text-white mt-auto"
                    >
                      <Link to={`/products/${product.id}`} className="flex items-center justify-center gap-2 font-semibold">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-5xl font-bold text-foreground">
              Professional Fencing Installation Services
            </h2>
            <p className="text-xl text-muted-foreground">
              In addition to our comprehensive fencing product range, we offer professional installation services 
              to ensure your projects are completed to the highest standards. Our team of experts provides 
              end-to-end solutions from design to installation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent hover:shadow-glow text-white px-8 py-6 h-auto rounded-xl"
            >
              <Link to="/contact" className="font-semibold">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-primary-foreground/80">
              Contact us today for a free consultation and discover how our products can contribute to your project's success and efficiency.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
          >
            <Link to="/contact" className="font-semibold">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ProductsPage;

