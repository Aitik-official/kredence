import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroFence from "@/assets/hero-fence.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Building2, Layers, Grid, Wrench } from "lucide-react";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";

// Product images from external sources
const productImages = {
  "gi-coils": "https://5.imimg.com/data5/SELLER/Default/2021/1/MB/EI/TO/8396883/gi-coils-500x500.jpg",
  "ppgi-coils": "https://tse4.mm.bing.net/th/id/OIP.5OP1iIcHK5ASGZh1lGhHEgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  "sandwich-panels": "https://5.imimg.com/data5/RT/ZQ/EO/SELLER-2020121/30-mm-puf-insulated-sandwich-roof-panel-500x500.jpg",
  "corrugated-sheets": "https://tse3.mm.bing.net/th/id/OIP.s2DkxQgR68QZJ0fYTlJ06QHaGK?pid=ImgDet&w=184&h=153&c=7&dpr=1.3&o=7&rm=3",
  "decking-sheets": "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&q=90",
  "purlins": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90",
  "drywall": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90",
  "flashing": "https://images.unsplash.com/photo-1581092160562-40aa8e7885ed?w=1200&q=90",
  "skylights": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=90",
};

// Metals products - all products except fencing-related ones
export const metalsProducts = [
  {
    id: "gi-coils",
    icon: Package,
    title: "GI Mill Finish Coils",
    code: "A",
    image: productImages["gi-coils"],
    category: "Steel Coils",
    fullDescription: "Hot Dip Galvanized Steel Coils & Sheets (ASTM A653, JIS G3302, EN 10346)",
    description: "Hot Dip Galvanized Steel Coils & Sheets (ASTM A653, JIS G3302, EN 10346)",
  },
  {
    id: "ppgi-coils",
    icon: Layers,
    title: "PPGI Color Coated Coils",
    code: "B",
    image: productImages["ppgi-coils"],
    category: "Coated Steel",
    fullDescription: "Pre-Painted Galvanized Steel Coils in RAL colors (RAL 9002 & RAL 1001)",
    description: "Pre-Painted Galvanized Steel Coils in RAL colors (RAL 9002 & RAL 1001)",
  },
  {
    id: "sandwich-panels",
    icon: Building2,
    title: "Insulated Sandwich Panels",
    code: "C",
    image: productImages["sandwich-panels"],
    category: "Panels",
    fullDescription: "Roof, Wall Panels & Cold Room Solutions with PUR/PIR Insulation",
    subtitle: "Roof Panels / Wall Panels / Cold Room",
    description: "Roof, Wall Panels & Cold Room Solutions with PUR/PIR Insulation",
  },
  {
    id: "corrugated-sheets",
    icon: Grid,
    title: "Corrugated Color Sheets",
    code: "D",
    image: productImages["corrugated-sheets"],
    category: "Sheets",
    fullDescription: "Single Skin Profile Corrugated Sheets - Sinusoidal, Trapezoidal, Box Profiles",
    description: "Single Skin Profile Corrugated Sheets - Sinusoidal, Trapezoidal, Box Profiles",
  },
  {
    id: "decking-sheets",
    icon: Layers,
    title: "Decking Sheets",
    code: "E",
    image: productImages["decking-sheets"],
    category: "Decking",
    fullDescription: "Metal Floor Deck with Ribbed Profiles - 45/150 & 75/305",
    subtitle: "45/150 & 75/305",
    description: "Metal Floor Deck with Ribbed Profiles - 45/150 & 75/305",
  },
  {
    id: "purlins",
    icon: Wrench,
    title: "Z & C Purlins",
    code: "F",
    image: productImages["purlins"],
    category: "Structural",
    fullDescription: "Z & C Purlins produced in a variety of sizes with detailed punching options. Raw material conforms to ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel).",
    description: "Z & C Purlins produced in a variety of sizes with detailed punching options. Raw material conforms to ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel).",
  },
  {
    id: "drywall",
    icon: Building2,
    title: "Drywall Partition Systems",
    code: "J",
    image: productImages["drywall"],
    category: "Systems",
    fullDescription: "Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles.",
    description: "Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles.",
  },
  {
    id: "flashing",
    icon: Wrench,
    title: "Roofing Flashings & Gutters",
    code: "K",
    image: productImages["flashing"],
    category: "Accessories",
    fullDescription: "Flashing, Rain Gutter, Ridge Ventilator, and Sliding components from Kredence Steel's Profiles & Cladding Division.",
    description: "Flashing, Rain Gutter, Ridge Ventilator, and Sliding components from Kredence Steel's Profiles & Cladding Division.",
  },
  {
    id: "skylights",
    icon: Layers,
    title: "GRP Translucent Sheets - Skylights",
    code: "L",
    image: productImages["skylights"],
    category: "Skylights",
    fullDescription: "GRP (Glass Reinforced Plastic) Translucent Sheets for skylights. Daylight improves the internal environment and energy efficiency of buildings.",
    description: "GRP (Glass Reinforced Plastic) Translucent Sheets for skylights. Daylight improves the internal environment and energy efficiency of buildings.",
  },
];

const MetalsPage = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Metals"
        title="Premium Metal Products & Solutions"
        description="Explore our comprehensive range of high-quality metal products including steel coils, sheets, panels, and structural components designed for durability and performance."
        backgroundImages={[metalFence, heroFence, woodFence, vinylFence]}
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
              Our Metal Products Range
            </h2>
            <p className="text-xl text-muted-foreground">
              Kredence Steel Trading offers a diverse portfolio of premium metal products, 
              each designed for durability, performance, and cost-efficiency for construction and industrial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalsProducts.map((product) => {
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
              Professional Metal Fabrication Services
            </h2>
            <p className="text-xl text-muted-foreground">
              In addition to our comprehensive metal product range, we offer professional fabrication services 
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
              Contact us today for a free consultation and discover how our metal products can contribute to your project's success and efficiency.
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

export default MetalsPage;

