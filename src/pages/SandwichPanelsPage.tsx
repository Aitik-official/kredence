import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const SandwichPanelsPage = () => {
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
    id: "sandwich-panels",
    title: "Insulated Sandwich Panels",
    code: "C",
    image: "/sand1.jpeg",
    images: [
      "/sand1.jpeg",
      "/sand2.jpeg"
    ],
    category: "Panels",
    fullDescription: "Roof, Wall Panels & Cold Room Solutions with PUR/PIR Insulation",
    subtitle: "Roof Panels / Wall Panels / Cold Room",
    description: "Roof, Wall Panels & Cold Room Solutions with PUR/PIR Insulation",
    detailedDescription: "Insulated Sandwich Panels from KREDENCE STEEL TRADING are composite building materials consisting of an insulated rigid core sandwiched between two sheets of metal. These panels are lightweight, ready-to-use, and provide high-quality protection from heat in the Middle East while maintaining internal cooling. Our panels feature Polyurethane Rigid Core (PUR Panels) and Polyisocyanurate Rigid Core (PIR Panels) insulation with a minimum density of 35 to 40 kgs/m³. The composition includes: Top Skin (Aluminium or GI Polyester Coated) + Insulation Core (Polyurethane Foam) + Liner (Aluminium Foil or Aluminium / GI Polyester Coated Shallow Ribbed Sheet). Available in profiled sandwich panels (35mm, 50mm, 75mm, 100mm thickness) for corrugated roof and wall applications, and profiled WALL/FLAT panels (50mm, 75mm, 100mm thickness) for corrugated roof and wall applications. These panels are ideal for shopping malls, schools, labour camps, prefab houses, portable cabins, and cold rooms (freezers and chillers). They protect buildings from extreme cold and hot ambient temperatures, providing excellent insulation properties. Benefits include being lightweight, cost-effective, and easy to transport and install.",
    specifications: [
      "Profiled Sandwich Panel: 35mm, 50mm, 75mm, 100mm thickness",
      "Profiled WALL/FLAT Panel: 50mm, 75mm, 100mm thickness",
      "Composition: Top Skin + Insulation Core + Liner",
      "Top Skin: Aluminium or GI Polyester Coated",
      "Insulation: Polyurethane Foam (PUR/PIR) with minimum density of 35-40 kgs/m³",
      "Liner: Aluminium Foil or Aluminium / GI Polyester Coated Shallow Ribbed Sheet",
      "Characteristics: Lightweight, Ready-to-use",
      "Benefits: Cost-effective, Easy to transport and install"
    ],
    applications: [
      "Shopping Malls",
      "Schools",
      "Labour Camps",
      "Prefab Houses",
      "Portable Cabins",
      "Cold Rooms (Freezers & Chillers)",
      "Roof Panels",
      "Wall Panels"
    ]
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle=" Insulated Sandwich Panels Supplier in Dubai – www.kredencesteel.com "
      metaDescription=" Insulated sandwich panels supplier in Dubai delivering cost-effective roofing and wall panel solutions for construction projects."
      metaKeywords=" Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default SandwichPanelsPage;
