import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const WireMeshPage = () => {
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
    id: "wire-mesh",
    title: "Wire Mesh Fence / Weld Mesh Fence / Heras Fence",
    code: "I",
    image: "https://th.bing.com/th/id/OIP.JxEWk10jRGWah72w0OqNnwHaFj?w=267&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    images: [
      "https://th.bing.com/th/id/OIP.JxEWk10jRGWah72w0OqNnwHaFj?w=267&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.wDxONbelQQ1ZUr7j6kJROAHaDn?w=299&h=170&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.k1cgHeNPDak7B7WvI0TcMQHaFj?w=276&h=207&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Mesh",
    fullDescription: "Leading manufacturer and supplier of high-quality stainless steel wire mesh across the UAE. High-quality material for durability and corrosion resistance.",
    description: "Leading manufacturer and supplier of high-quality stainless steel wire mesh across the UAE. High-quality material for durability and corrosion resistance.",
    detailedDescription: "Wire Mesh Fence manufactured from stainless steel offers superior corrosion resistance and durability. Available in various grades including 304, 304L, 316, and 316L, our wire mesh is suitable for demanding applications requiring resistance to acids, alkalis, and high temperatures. Custom configurations available to meet specific project requirements. Leading manufacturer and supplier of high-quality stainless steel wire mesh across the UAE. High-quality material for durability and corrosion resistance. Fine-wire meshes resistant to acid, alkali, and high temperatures. Custom upgrades available with optimized separate operation. Available in rolls, cut to size, assembled, or reused in other forms.",
    specifications: [
      "Material Grades: Stainless Steel 304, 304L, 316, 316L, 910 & more",
      "Properties: Acid resistant, alkali resistant, high temperature resistant",
      "Forms Available: Rolls, cut to size, assembled, or reused in other forms",
      "Customization: Custom upgrades and specifications based on specific requirements",
      "Types: Wire Mesh Fence, Weld Mesh Fence, Heras Fence",
      "Quality: High-quality stainless steel for durability and corrosion resistance",
      "Features: Fine-wire meshes optimized for separate operation"
    ],
    applications: [
      "Printing Industry",
      "Automotive (Cars)",
      "Space & Aerospace",
      "Electronics & Gadgets",
      "Food & Beverage",
      "Filtration & Separation",
      "EMF & RMF Shielding",
      "Sword Defenses (Protection Solutions)",
      "Industrial Applications"
    ]
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle="Heras Fence contractor in Dubai – www. kredencesteel.com"
      metaDescription="Reliable Heras fence contractor in Dubai supplying and installing high-quality temporary fencing across UAE."
      metaKeywords="Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default WireMeshPage;
