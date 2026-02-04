import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const PPGICoilsPage = () => {
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
    id: "ppgi-coils",
    title: "PPGI Color Coated Coils",
    code: "B",
    image: "https://tse4.mm.bing.net/th/id/OIP.5OP1iIcHK5ASGZh1lGhHEgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
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
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle="PPGI Color Coated Coils Supplier in Dubai – www. kredencesteel.com"
      metaDescription="PPGI color coated coils supplier in Dubai delivering consistent quality steel coils with competitive pricing and timely supply."
      metaKeywords="Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default PPGICoilsPage;
