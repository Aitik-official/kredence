import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const SkylightsPage = () => {
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

  const product = {
    id: "skylights",
    title: "GRP Translucent Sheets - Skylights",
    code: "L",
    image: "https://th.bing.com/th/id/OIP.h2UKoc1JmJPoDGs3kxpgNgHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
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
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle=" GRP Translucent Sheets Skylights supplier in Dubai– www. kredencesteel.com "
      metaDescription=" Trusted GRP translucent sheets and skylights supplier in Dubai offering durable, UV-resistant daylighting solutions for industrial buildings."
      metaKeywords=" Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default SkylightsPage;
