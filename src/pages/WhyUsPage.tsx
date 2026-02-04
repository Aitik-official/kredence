import { useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Lightbulb, Shield, Factory, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "15+", label: "Years", description: "Industry Experience & Excellence" },
  { value: "Global", label: "Standards", description: "ASTM, JIS & EN Certified" },
  { value: "Trusted", label: "Partner", description: "Serving major contractors worldwide" },
];

const coreValues = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards of quality in all our products and services, adhering to international specifications like ASTM, JIS, and EN standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Expertise",
    description: "Continuous improvement and innovative solutions drive our business forward, backed by over 15 years of specialized industry knowledge.",
  },
  {
    icon: Shield,
    title: "Reliability & Trust",
    description: "Our clients trust us for timely delivery, consistent performance, and customized solutions tailored to their specific project requirements.",
  },
];

const primaryLocations = [
  { value: "200+", city: "Dubai" },
  { value: "150+", city: "Abu Dhabi" },
  { value: "100+", city: "Sharjah" },
  { value: "80+", city: "Other Emirates" },
];

const exportMarkets = [
  { flag: "🇸🇦", country: "Saudi Arabia" },
  { flag: "🇴🇲", country: "Oman" },
  { flag: "🇧🇭", country: "Bahrain" },
  { flag: "🇰🇼", country: "Kuwait" },
  { flag: "🇶🇦", country: "Qatar" },
  { flag: "🇮🇶", country: "Iraq" },
  { flag: "🇾🇪", country: "Yemen" },
  { flag: "🇯🇴", country: "Jordan" },
];

const manufacturingServices = [
  "Custom steel coil production",
  "Precise thickness & width specifications",
  "Color coating in multiple RAL options",
  "Sandwich panel assembly",
  "Cutting & slitting services",
  "Warehouse erection services",
];

const supportedStandards = [
  "ASTM A653 & A446 (USA)",
  "JIS G3302 & G3332 (Japan)",
  "EN 10147 & EN 10346 (Europe)",
  "ISO 9001 Quality Standards",
  "CE Certification",
  "Custom specifications on request",
];

const WhyUsPage = () => {
  useEffect(() => {
    // Update document title
    document.title = "About Fence Trades in Oman – www.kredencesteel.com";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        " Fence Trades in Oman is a trusted supplier of high-quality fencing solutions, including chain link, GI & security fencing for residential and industrial projects."
      );
    } else {
      const metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute(
        "content",
        " Fence Trades in Oman is a trusted supplier of high-quality fencing solutions, including chain link, GI & security fencing for residential and industrial projects."
      );
      document.head.appendChild(metaDesc);
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
      " Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    );

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

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="TRUSTED PARTNER"
        title="15+ Years of Excellence"
        description="With over 15 years of experience in the steel trading and building materials industry, we've established ourselves as a trusted partner for businesses of all sizes."
        backgroundImages={[heroFence, metalFence, vinylFence, woodFence]}
        variant="contrast"
        className="h-[500px]"
      />

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">OUR STORY</h2>
            <p className="text-2xl text-muted-foreground mb-8">Building Excellence Since 2010</p>
            <p className="text-lg text-muted-foreground italic">A journey of innovation, quality, and commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={metalFence} 
                alt="Industrial facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Kredence Steel Trading is committed to delivering exceptional quality and innovative solutions to clients across the UAE, GCC region, and beyond. With over 15 years of experience in the steel trading and building materials industry, we've established ourselves as a trusted partner for businesses of all sizes.
              </p>
              <p>
                Our dedication to excellence, competitive pricing, and comprehensive product range has made us the preferred choice for construction companies, industrial projects, commercial enterprises, and institutional clients throughout the Middle East. We specialize in one-stop services—from material selection and customization to processing and distribution.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              Today, Kredence Steel supplies premium materials to Dubai, Abu Dhabi, Sharjah, and other Emirates, with expanding presence in Saudi Arabia, Oman, Bahrain, Kuwait, Qatar, and beyond. We continue to innovate and expand our product portfolio to meet evolving market needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#2E6A92] hover:bg-[#245676] text-white px-8 py-6 h-auto rounded-xl"
            >
              <Link to="/products" className="font-semibold">
                Explore Products
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#2E6A92] text-[#2E6A92] hover:bg-[#2E6A92] hover:text-white px-8 py-6 h-auto rounded-xl"
            >
              <Link to="/contact" className="font-semibold">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center border border-border bg-background/85 backdrop-blur-sm rounded-3xl shadow-elegant">
                <CardHeader className="pb-2">
                  <CardTitle className="text-4xl font-bold text-[#2E6A92] mb-2">{stat.value}</CardTitle>
                  <CardDescription className="text-xl font-semibold text-foreground">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">CORE VALUES</h2>
            <p className="text-2xl text-muted-foreground">What Drives Us</p>
            <p className="text-lg text-muted-foreground mt-2">The principles that guide our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border border-border bg-gradient-to-br from-background via-background/90 to-[#2E6A92]/10 rounded-2xl shadow-elegant">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E6A92] to-[#245676] flex items-center justify-center shadow-glow">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
            <img 
              src={vinylFence} 
              alt="Quality manufacturing facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-2">Our Commitment</p>
              <h3 className="text-2xl font-semibold">Excellence in Every Project</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Coverage Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">OUR COVERAGE</h2>
            <p className="text-2xl text-muted-foreground">Locations & Coverage</p>
            <p className="text-lg text-muted-foreground mt-2">Serving clients across the GCC region and beyond</p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Primary Locations (UAE)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {primaryLocations.map((location) => (
                <Card key={location.city} className="text-center border border-border bg-background/85 backdrop-blur-sm rounded-2xl shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-3xl font-bold text-[#2E6A92]">{location.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {location.city}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Regional Export Markets</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {exportMarkets.map((market) => (
                <Card key={market.country} className="border border-border bg-background/85 backdrop-blur-sm rounded-2xl shadow-elegant hover:shadow-hover transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">{market.flag}</div>
                    <p className="text-lg font-semibold text-foreground">{market.country}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">CAPABILITIES</h2>
            <p className="text-2xl text-muted-foreground">Our Capabilities & Standards</p>
            <p className="text-lg text-muted-foreground mt-2">Comprehensive services and international quality standards</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <Card className="border border-border shadow-elegant rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E6A92] to-[#245676] flex items-center justify-center">
                    <Factory className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Manufacturing & Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {manufacturingServices.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-base text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-elegant rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-[#2E6A92]/10 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2E6A92] to-[#245676] flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">Supported Standards</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {supportedStandards.map((standard) => (
                    <li key={standard} className="flex items-start gap-3 text-base text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-[#2E6A92] flex-shrink-0 mt-0.5" />
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
            <img 
              src={woodFence} 
              alt="Manufacturing and quality standards"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-2">International Standards</p>
              <h3 className="text-2xl font-semibold">Certified Quality & Excellence</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">PARTNER WITH US</h2>
            <p className="text-2xl text-muted-foreground">Ready to Build Together?</p>
            <p className="text-lg text-muted-foreground">
              Discover how Kredence Steel can support your construction and industrial projects with premium quality materials and expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#2E6A92] hover:bg-[#245676] text-white px-8 py-6 h-auto rounded-xl"
              >
                <Link to="/contact" className="font-semibold">
                  Get in Touch
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#2E6A92] text-[#2E6A92] hover:bg-[#2E6A92] hover:text-white px-8 py-6 h-auto rounded-xl"
              >
                <Link to="/products" className="font-semibold">
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default WhyUsPage;

