import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const PVCFencePage = () => {
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

  return (
    <ProductPageTemplate
      product={product}
      metaTitle=" Pvc eco fence supplier in Dubai – www.kredencesteel.com "
      metaDescription=" PVC eco fence supplier in Dubai delivering high-quality, eco-friendly and long-lasting fencing systems across UAE."
      metaKeywords=" Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default PVCFencePage;
