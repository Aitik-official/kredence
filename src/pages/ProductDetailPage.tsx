import { useEffect, useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check, Minus, Plus } from "lucide-react";
import { products } from "./ProductsPage";
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

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <SiteLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </div>
      </SiteLayout>
    );
  }

  // Create image array - use product images if available, otherwise use single product image
  const productImages = ('images' in product && product.images && Array.isArray(product.images) && product.images.length > 0)
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

  // Update meta tags for specific products
  useEffect(() => {
    if (id === "fencing-panels") {
      // Update document title
      document.title = "Fencing Panels and Hoardings Supplier in Dubai– kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Leading fencing panels and hoardings supplier in Dubai offering durable, high-quality solutions for construction sites, industrial and commercial projects."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "pvc-fence") {
      // Update document title
      document.title = "Pvc eco fence supplier in Dubai – www.kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "PVC eco fence supplier in Dubai delivering high-quality, eco-friendly and long-lasting fencing systems across UAE."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "wire-mesh") {
      // Update document title
      document.title = "Heras Fence contractor in Dubai – www. kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Reliable Heras fence contractor in Dubai supplying and installing high-quality temporary fencing across UAE."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "chain-link-fence") {
      // Update document title
      document.title = "Chain link fence supplier in UAE – www.kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Chain link fence supplier in UAE specializing in GI and PVC coated fencing with professional supply and installation services."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "gi-coils") {
      // Update document title
      document.title = "GI Mill Finish Coils supplier in Dubai – www. kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Trusted GI mill finish coils supplier in Dubai offering high-quality galvanized steel coils for industrial, construction and manufacturing applications."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "ppgi-coils") {
      // Update document title
      document.title = "PPGI Color Coated Coils Supplier in Dubai – www. kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "PPGI color coated coils supplier in Dubai delivering consistent quality steel coils with competitive pricing and timely supply."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "sandwich-panels") {
      // Update document title
      document.title = "Insulated Sandwich Panels Supplier in Dubai – www.kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Insulated sandwich panels supplier in Dubai delivering cost-effective roofing and wall panel solutions for construction projects."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "corrugated-sheets") {
      // Update document title
      document.title = "Corrugated Color Sheets suppliers in Dubai – www. kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "We are a reliable Heras Fence Supplier in Dubai, UAE, offering high-quality temporary Heras fencing solutions for construction sites, events, industrial areas, and security applications. Our Heras fences are manufactured using heavy-duty galvanized steel, ensuring strength, stability, and long-term outdoor performance in UAE weather conditions."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "decking-sheets") {
      // Update document title
      document.title = "Decking Sheets suppliers in Dubai – www. kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Trusted decking sheets suppliers in Dubai offering high-quality steel decking sheets for commercial, industrial and construction projects."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "purlins") {
      // Update document title
      document.title = "Z and C Purlins Supplier in Dubai – www. kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Reliable Z and C purlins supplier in Dubai supplying precision-engineered purlins for warehouses and steel structures."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "drywall") {
      // Update document title
      document.title = "Drywall Partition Systems supplier in Dubai – www. kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Trusted drywall partition systems supplier in Dubai offering high-quality gypsum partitions for commercial and residential interiors."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "flashing") {
      // Update document title
      document.title = "Roofing Flashings and Gutters supplier in Dubai – www.kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Roofing flashings and gutters supplier in Dubai delivering cost-effective drainage and roofing accessories with timely supply."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    } else if (id === "skylights") {
      // Update document title
      document.title = "GRP Translucent Sheets Skylights supplier in Dubai– www. kredencesteel.com";
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Trusted GRP translucent sheets and skylights supplier in Dubai offering durable, UV-resistant daylighting solutions for industrial buildings."
        );
      }
      
      // Update or create meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute(
        "content",
        "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
      );
    }
  }, [id]);

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

export default ProductDetailPage;
