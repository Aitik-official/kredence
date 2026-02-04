import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const FlashingPage = () => {
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
    id: "flashing",
    title: "Roofing Flashings & Gutters",
    code: "K",
    image: "https://th.bing.com/th/id/OIP.6bDleqwyT4ZuyLP3qZ0WxAHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
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
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle="Roofing Flashings and Gutters supplier in Dubai – www.kredencesteel.com"
      metaDescription="Roofing flashings and gutters supplier in Dubai delivering cost-effective drainage and roofing accessories with timely supply."
      metaKeywords="Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default FlashingPage;
