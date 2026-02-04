import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const GICoilsPage = () => {
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
    id: "gi-coils",
    title: "GI Mill Finish Coils",
    code: "A",
    image: "/gicoils.jpeg",
    images: [
      "https://th.bing.com/th/id/OIP.GEIrRHxVB5a76RlM3rEBZgHaHa?w=186&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.S4J1i40hd7c_glKzoQ7NvgHaEK?w=304&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.5ZzotRo79dkmhqwvbR7c1AHaHa?w=198&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Steel Coils",
    fullDescription: "Hot Dip Galvanized Steel Coils & Sheets (ASTM A653, JIS G3302, EN 10346)",
    description: "Hot Dip Galvanized Steel Coils & Sheets (ASTM A653, JIS G3302, EN 10346)",
    detailedDescription: "Hot Dip Galvanized Steel (GI) Coils & Sheets manufactured as per ASTM A653 – 2018, JIS G3302 : 2010 and EN 10346 standards. Our GI coils are manufactured through a process where steel is coated with a layer of zinc to provide superior corrosion resistance. Available in various surface treatments including regular and minimum spangle, zero spangle, oiled and dry, chromated, non-skin pass, and skin pass. Custom sizes and thickness are available. These coils are ideal for applications requiring long-term durability and protection against rust and corrosion, widely used in transportation, light industry, civil usage, farming, and construction applications.",
    specifications: [
      "Thickness: 0.30mm - 3.80mm",
      "Width: 600mm - 1250mm",
      "Zinc Coating: 30-275 g/m²",
      "Internal Diameter: 508mm / 610mm",
      "Coil Weight: 3-12 MT",
      "Quality: Commercial & Structural",
      "Surface Treatment: Regular/Minimum Spangle, Zero Spangle, Oiled & Dry, Chromated, Non-Skin Pass, Skin Pass",
      "Standards: JIS G 3302, ASTM A 653M, EN 10327",
      "Steel Grades: SGCC, CS, FS, SS, LFQ, DX51D+Z, S280GD"
    ],
    applications: [
      "Transportation",
      "Light Industry",
      "Civil Usage & Farming",
      "Roofing Tiles",
      "Steel Profiles for Wall Partition",
      "T-Bar",
      "Studs",
      "Fireproof Door",
      "Air Conditioning Duct",
      "Home Appliances"
    ]
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle=" GI Mill Finish Coils supplier in Dubai – www. kredencesteel.com "
      metaDescription=" Trusted GI mill finish coils supplier in Dubai offering high-quality galvanized steel coils for industrial, construction and manufacturing applications."
      metaKeywords=" Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default GICoilsPage;
