import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/pages/ProductsPage";
import { useState, useMemo } from "react";
import { getProductUrl } from "@/lib/utils";

// Filter products
const fenceProducts = products.filter(
  (product) => 
    product.category === "Fencing" || 
    product.category === "Mesh" ||
    product.id === "fencing-panels" ||
    product.id === "pvc-fence" ||
    product.id === "wire-mesh" ||
    product.id === "chain-link-fence"
);

const metalsProducts = products.filter(
  (product) => 
    product.category !== "Fencing" && 
    product.category !== "Mesh" &&
    product.id !== "fencing-panels" &&
    product.id !== "pvc-fence" &&
    product.id !== "wire-mesh" &&
    product.id !== "chain-link-fence"
);

const ProductsShowcase = () => {
  const [fenceScrollIndex, setFenceScrollIndex] = useState(0);
  const [metalsScrollIndex, setMetalsScrollIndex] = useState(0);

  const fenceMaxIndex = useMemo(() => Math.max(0, fenceProducts.length - 1), []);
  const metalsMaxIndex = useMemo(() => Math.max(0, metalsProducts.length - 1), []);

  const handleFenceScroll = (direction: "prev" | "next") => {
    setFenceScrollIndex((prev) => {
      if (direction === "prev") {
        return Math.max(0, prev - 1);
      }
      return Math.min(fenceMaxIndex, prev + 1);
    });
  };

  const handleMetalsScroll = (direction: "prev" | "next") => {
    setMetalsScrollIndex((prev) => {
      if (direction === "prev") {
        return Math.max(0, prev - 1);
      }
      return Math.min(metalsMaxIndex, prev + 1);
    });
  };

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Fence Products Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Fence Products
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Explore our comprehensive range of premium fencing solutions
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[#2E6A92] text-[#2E6A92] hover:bg-[#2E6A92] hover:text-white"
              >
                <Link to="/products">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex gap-4 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${(100 / 1) * fenceScrollIndex}%)`,
                  }}
                >
                  {fenceProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="group border border-border bg-white shadow-elegant overflow-hidden hover:shadow-hover transition-all duration-300 flex flex-col rounded-2xl flex-none"
                      style={{
                        width: `100%`,
                        minWidth: `100%`,
                      }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4 flex-1 flex flex-col space-y-3">
                        <h3 className="text-xl font-bold text-foreground">
                          {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {product.fullDescription || product.description}
                        </p>
                        <Button
                          asChild
                          className="w-full bg-[#2E6A92] hover:bg-[#245676] text-white mt-auto text-sm"
                        >
                          <Link to={getProductUrl(product.id)} className="flex items-center justify-center gap-2 font-semibold">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {fenceScrollIndex > 0 && (
                <button
                  type="button"
                  onClick={() => handleFenceScroll("prev")}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-[#2E6A92] shadow-lg transition hover:bg-[#2E6A92] hover:text-white z-10"
                  aria-label="Scroll fence products left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {fenceScrollIndex < fenceMaxIndex && (
                <button
                  type="button"
                  onClick={() => handleFenceScroll("next")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-[#2E6A92] shadow-lg transition hover:bg-[#2E6A92] hover:text-white z-10"
                  aria-label="Scroll fence products right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Metals Products Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Metals Products
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Discover our premium metal products and structural solutions
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-[#2E6A92] text-[#2E6A92] hover:bg-[#2E6A92] hover:text-white"
              >
                <Link to="/metals">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex gap-4 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${(100 / 1) * metalsScrollIndex}%)`,
                  }}
                >
                  {metalsProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="group border border-border bg-white shadow-elegant overflow-hidden hover:shadow-hover transition-all duration-300 flex flex-col rounded-2xl flex-none"
                      style={{
                        width: `100%`,
                        minWidth: `100%`,
                      }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4 flex-1 flex flex-col space-y-3">
                        <h3 className="text-xl font-bold text-foreground">
                          {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {product.fullDescription || product.description}
                        </p>
                        <Button
                          asChild
                          className="w-full bg-[#2E6A92] hover:bg-[#245676] text-white mt-auto text-sm"
                        >
                          <Link to={getProductUrl(product.id)} className="flex items-center justify-center gap-2 font-semibold">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {metalsScrollIndex > 0 && (
                <button
                  type="button"
                  onClick={() => handleMetalsScroll("prev")}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-[#2E6A92] shadow-lg transition hover:bg-[#2E6A92] hover:text-white z-10"
                  aria-label="Scroll metals products left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {metalsScrollIndex < metalsMaxIndex && (
                <button
                  type="button"
                  onClick={() => handleMetalsScroll("next")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-[#2E6A92] shadow-lg transition hover:bg-[#2E6A92] hover:text-white z-10"
                  aria-label="Scroll metals products right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;

