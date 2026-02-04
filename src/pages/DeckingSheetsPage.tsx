import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const DeckingSheetsPage = () => {
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
    id: "decking-sheets",
    title: "Decking Sheets",
    code: "E",
    image: "https://tse3.mm.bing.net/th/id/OIP.mzsttxGsOjsheboi-5IW8wHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.mzsttxGsOjsheboi-5IW8wHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse1.mm.bing.net/th/id/OIP.AWl924M9xV3pFtrNrxQDHAHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.SQoFreyhHyD5S0WC59hcDgHaHa?w=159&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Decking",
    fullDescription: "Metal Floor Deck with Ribbed Profiles - 45/150 & 75/305",
    subtitle: "45/150 & 75/305",
    description: "Metal Floor Deck with Ribbed Profiles - 45/150 & 75/305",
    detailedDescription: "Metal Decking Sheets from KREDENCE STEEL TRADING are structural steel products designed for use in composite floor systems. Our metal decking profiles meet international steel design standards with maximum strength. The Steel Floor Deck has a ribbed profile with embossments, designed to bind together with concrete slabs, creating a reinforced concrete slab serving the dual purpose of taking up a permanent form to become part of the floor, and also offer positive reinforcement. These products are manufactured to meet the prescribed specification of design engineers and building contractors. The components are aesthetically pleasant, weatherproof, with excellent thermal insulation and offer resistance to fire, fungi and mildew. Available in standard profiles 45/150 (900mm covering width) and 75/305 (914mm covering width), our decking sheets feature ribbed profiles that provide excellent load-bearing capacity while reducing the overall weight of the structure. Made from Pre-Galvanized steel with thickness ranging from 0.5mm to 1.5mm as per ASTM A 653 Standards, Grade D, with Zinc G90 (275 gms/m²). Different grades can be supplied on request of our customers. These decking sheets are ideal for multi-story construction projects, mezzanines, bridge walkways, porches, in-fills, platforms and parking garages, and storage facilities, requiring fast and efficient installation.",
    specifications: [
      "45/150: 900mm covering width",
      "75/305: 914mm covering width",
      "Thickness: 0.5mm - 1.5mm",
      "Pre-Galvanized Steel, Grade D",
      "Zinc G90 (275 gms/m²)",
      "Standards: ASTM A 653",
      "Profile: Ribbed profile with embossments",
      "Design: Meets international steel design standards with maximum strength",
      "Customization: Different grades can be supplied on request"
    ],
    applications: [
      "Multi-story Buildings",
      "Mezzanines",
      "Bridge Walkways",
      "Porches",
      "In-fills",
      "Platforms and Parking Garages",
      "Storage Facilities"
    ]
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle="Decking Sheets suppliers in Dubai – www. kredencesteel.com"
      metaDescription="Trusted decking sheets suppliers in Dubai offering high-quality steel decking sheets for commercial, industrial and construction projects."
      metaKeywords="Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default DeckingSheetsPage;
