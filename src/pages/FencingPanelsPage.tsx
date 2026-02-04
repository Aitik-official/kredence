import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const FencingPanelsPage = () => {
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
    id: "fencing-panels",
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
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle="Fencing Panels and Hoardings Supplier in Dubai– kredencesteel.com"
      metaDescription="Leading fencing panels and hoardings supplier in Dubai offering durable, high-quality solutions for construction sites, industrial and commercial projects."
      metaKeywords="Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default FencingPanelsPage;
