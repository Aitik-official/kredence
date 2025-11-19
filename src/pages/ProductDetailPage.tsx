import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Shield, Package, Check, Mail, Phone } from "lucide-react";
import { products } from "./ProductsPage";
import { Badge } from "@/components/ui/badge";
import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
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

  return (
    <SiteLayout>
      <div className="relative">
        <PageHeader
          eyebrow={product.category}
          title={product.title}
          description={product.subtitle || product.fullDescription || product.description}
          backgroundImages={[product.image, heroFence, metalFence, vinylFence, woodFence]}
          variant="contrast"
          className="h-[500px]"
        />
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-30">
          <Button
            variant="secondary"
            onClick={() => navigate(-1)}
            className="bg-white/90 hover:bg-white text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* Product Description */}
                {product.detailedDescription && (
                  <Card className="border border-border shadow-elegant ml-2">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-4xl font-bold text-foreground text-left">Product Description</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-xl leading-relaxed text-muted-foreground whitespace-pre-line text-left">
                        {product.detailedDescription}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Specifications */}
                {product.specifications && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center">
                          <Shield className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-4xl font-bold text-foreground">Specifications</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {product.specifications.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xl text-muted-foreground">
                            <Check className="w-6 h-6 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Applications */}
                {product.applications && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center">
                          <Package className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-4xl font-bold text-foreground">Applications</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-3">
                        {product.applications.map((app, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="px-5 py-3 text-lg bg-[#2E6A92]/10 text-[#2E6A92] hover:bg-[#2E6A92]/20"
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Features */}
                {'features' in product && product.features && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Features</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {(product.features as string[]).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                            <Check className="w-5 h-5 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Benefits */}
                {'benefits' in product && product.benefits && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {(product.benefits as string[]).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                            <Check className="w-5 h-5 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Colors */}
                {'colors' in product && product.colors && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Available Colors</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-3">
                        {(product.colors as string[]).map((color, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline"
                            className="px-4 py-2 text-sm"
                          >
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Regions */}
                {'regions' in product && product.regions && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Supply Regions</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-3">
                        {(product.regions as string[]).map((region, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="px-4 py-2 text-sm bg-[#2E6A92]/10 text-[#2E6A92]"
                          >
                            {region}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Supply Regions (list format) */}
                {'supplyRegions' in product && product.supplyRegions && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Supply Regions</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        {(product.supplyRegions as string[]).map((region, idx) => (
                          <li key={idx} className="text-base text-muted-foreground">
                            {region}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Categories */}
                {'categories' in product && product.categories && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Product Categories</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {(product.categories as string[]).map((category, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                            <Check className="w-5 h-5 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                            <span>{category}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Additions */}
                {'additions' in product && product.additions && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Available Additions</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-3">
                        {(product.additions as string[]).map((addition, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="px-4 py-2 text-sm bg-[#2E6A92]/10 text-[#2E6A92] hover:bg-[#2E6A92]/20"
                          >
                            {addition}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Fittings */}
                {'fittings' in product && product.fittings && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Fence Fittings</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2">
                        {(product.fittings as string[]).map((fitting, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                            <Check className="w-5 h-5 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                            <span>{fitting}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Privacy Slats */}
                {'privacySlats' in product && product.privacySlats && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">Privacy Slats</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-4">
                      <p className="text-base text-muted-foreground">
                        {(product.privacySlats as { description: string }).description}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {((product.privacySlats as { benefits: string[] }).benefits || []).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                              <Check className="w-5 h-5 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Available Colors:</h4>
                        <div className="flex flex-wrap gap-3">
                          {((product.privacySlats as { colors: string[] }).colors || []).map((color, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary"
                              className="px-4 py-2 text-sm bg-[#2E6A92]/10 text-[#2E6A92] hover:bg-[#2E6A92]/20"
                            >
                              {color}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Choosing Tips */}
                {'choosingTips' in product && product.choosingTips && (
                  <Card className="border border-border shadow-elegant">
                    <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {(product.choosingTips as { title: string }).title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6 space-y-6">
                      <p className="text-base text-muted-foreground">
                        {(product.choosingTips as { description: string }).description}
                      </p>
                      <div className="space-y-4">
                        {((product.choosingTips as { parameters: Array<{ name: string; details: string }> }).parameters || []).map((param, idx) => (
                          <div key={idx} className="border-l-4 border-[#2E6A92] pl-4">
                            <h4 className="text-lg font-semibold text-foreground mb-2">{param.name}:</h4>
                            <p className="text-base text-muted-foreground">{param.details}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="border border-border shadow-elegant sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">Get a Quote</CardTitle>
                    <CardDescription>
                      Contact us for pricing and availability information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      asChild
                      className="w-full bg-[#2E6A92] hover:bg-[#245676] text-white"
                      size="lg"
                    >
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" />
                        Request Quote
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#2E6A92] text-[#2E6A92] hover:bg-[#2E6A92] hover:text-white"
                      size="lg"
                    >
                      <a href="tel:+919876543210" className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call Us
                      </a>
                    </Button>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2">Product Code:</p>
                      <p className="text-lg font-semibold text-foreground">{product.code})</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Order This Product?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact our sales team for pricing, customization options, and delivery information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-accent hover:shadow-glow text-white px-8 py-6 h-auto rounded-xl"
              >
                <Link to="/contact" className="font-semibold">
                  Contact Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#2E6A92] text-[#2E6A92] hover:bg-[#2E6A92] hover:text-white px-8 py-6 h-auto rounded-xl"
              >
                <Link to="/products" className="font-semibold">
                  View All Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ProductDetailPage;

