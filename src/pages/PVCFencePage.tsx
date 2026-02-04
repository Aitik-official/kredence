import { useEffect, useLayoutEffect, useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check, Minus, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import QuoteRequestModal from "@/components/QuoteRequestModal";

const PVCFencePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // SEO Meta Tags - Update immediately for SEO
  useLayoutEffect(() => {
    document.title = " Pvc eco fence supplier in Dubai – www.kredencesteel.com ";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", " PVC eco fence supplier in Dubai delivering high-quality, eco-friendly and long-lasting fencing systems across UAE.");
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", " Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier.");

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", " Pvc eco fence supplier in Dubai – www.kredencesteel.com ");

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", " PVC eco fence supplier in Dubai delivering high-quality, eco-friendly and long-lasting fencing systems across UAE.");
  }, []);

  // Google Tracking Scripts
  useEffect(() => {
    // Add Google Site Verification meta tag
    let googleVerification = document.querySelector('meta[name="google-site-verification"]');
    if (!googleVerification) {
      googleVerification = document.createElement("meta");
      googleVerification.setAttribute("name", "google-site-verification");
      document.head.insertBefore(googleVerification, document.head.firstChild);
    }
    googleVerification.setAttribute("content", "__4gu7AflAZ_uUyc0VHZA6NpPGewicRX6DaPvs-Cg0Q");

    // Add Google Tag Manager script to head (if not already present)
    if (!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) {
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHHDXSBX');`;
      document.head.insertBefore(gtmScript, document.head.firstChild);
    }

    // Add Google Tag Manager noscript iframe to body (if not already present)
    if (!document.querySelector('noscript iframe[src*="googletagmanager.com/ns.html"]')) {
      const gtmNoscript = document.createElement("noscript");
      const gtmIframe = document.createElement("iframe");
      gtmIframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-NHHDXSBX";
      gtmIframe.height = "0";
      gtmIframe.width = "0";
      gtmIframe.style.display = "none";
      gtmIframe.style.visibility = "hidden";
      gtmNoscript.appendChild(gtmIframe);
      document.body.insertBefore(gtmNoscript, document.body.firstChild);
    }

    // Add Google Analytics (gtag.js) script to head (if not already present)
    if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      // Add gtag.js script
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-MKWPW0B92B";
      document.head.appendChild(gtagScript);

      // Add gtag initialization script
      const gtagInitScript = document.createElement("script");
      gtagInitScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MKWPW0B92B');
      `;
      document.head.appendChild(gtagInitScript);
    }
  }, []);

  // Product data
  const product = {
    id: "pvc-fence",
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
  };

  // Create image array - use product images if available, otherwise use single product image
  const productImages = (product.images && Array.isArray(product.images) && product.images.length > 0)
    ? product.images
    : [product.image, product.image, product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // Format specifications for display
  const formatSpecification = (spec: string) => {
    if (spec.includes(":")) {
      const [key, value] = spec.split(":").map((s) => s.trim());
      return { key, value };
    }
    return { key: spec, value: "" };
  };

  return (
    <SiteLayout>
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/products">Products</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="capitalize">{product.category}</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{product.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Product Title and Badges */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-purple-100 text-purple-700">
              {product.category.toUpperCase()}
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-green-100 text-green-700">
              In Stock
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-8">{product.title}</h1>

          {/* Main Product Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Images */}
            <div className="space-y-4">
              {/* Main Image with Carousel */}
              <Card className="border border-border rounded-lg overflow-hidden">
                <div className="relative aspect-square bg-white flex items-center justify-center group">
                  <img
                    src={productImages[currentImageIndex]}
                    alt={product.title}
                    className="w-full h-full object-contain p-8"
                  />
                  
                  {/* Navigation Arrows */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </Card>

              {/* Thumbnail Images */}
              <div className="flex gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`flex-1 aspect-square border-2 rounded-lg overflow-hidden transition-all ${
                      index === currentImageIndex
                        ? "border-red-500 ring-2 ring-red-200"
                        : "border-border hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6">
              {/* Specifications Card */}
              {product.specifications && product.specifications.length > 0 && (
                <Card className="border border-border rounded-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {product.specifications.slice(0, 4).map((spec, idx) => {
                      const formatted = formatSpecification(spec);
                      return (
                        <div key={idx} className="flex justify-between items-start">
                          <span className="text-sm font-medium text-muted-foreground">{formatted.key}:</span>
                          <span className="text-sm text-foreground text-right ml-4">{formatted.value || formatted.key}</span>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              )}

              {/* Key Features Card */}
              {product.specifications && product.specifications.length > 0 && (
                <Card className="border border-border rounded-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.specifications.slice(4, 8).map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Quantity Selector Card */}
              <Card className="border border-border rounded-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Quantity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decreaseQuantity}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 text-center text-lg font-semibold border border-border rounded-md py-2"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={increaseQuantity}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="flex-1 bg-gradient-accent hover:shadow-glow text-white"
                  size="lg"
                >
                  Request Quote
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  <a href="tel:+971565686811">Call Us</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Product Information */}
          {product.detailedDescription && (
            <div className="mt-12">
              <Card className="border border-border rounded-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Product Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {product.detailedDescription}
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Full Specifications */}
          {product.specifications && product.specifications.length > 8 && (
            <div className="mt-8">
              <Card className="border border-border rounded-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Full Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Applications */}
          {product.applications && product.applications.length > 0 && (
            <div className="mt-8">
              <Card className="border border-border rounded-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {product.applications.map((app, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-[#2E6A92]/10 text-[#2E6A92] hover:bg-[#2E6A92]/20"
                      >
                        {app}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
      <QuoteRequestModal
        open={isQuoteModalOpen}
        onOpenChange={setIsQuoteModalOpen}
        productTitle={product.title}
        quantity={quantity}
      />
    </SiteLayout>
  );
};

export default PVCFencePage;
