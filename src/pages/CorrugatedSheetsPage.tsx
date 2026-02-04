import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const CorrugatedSheetsPage = () => {
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
    id: "corrugated-sheets",
    title: "Corrugated Color Sheets",
    code: "D",
    image: "https://tse3.mm.bing.net/th/id/OIP.s2DkxQgR68QZJ0fYTlJ06QHaGK?pid=ImgDet&w=184&h=153&c=7&dpr=1.3&o=7&rm=3",
    images: [
      "https://th.bing.com/th/id/OIP.6qo8D9180ARV21JUNCxsLAHaF3?w=236&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.tBoPF3_yMDNUjKOnUNeYsgHaHa?w=247&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.IsokQCrYMjK9Dxh0c4-kvAHaHa?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Sheets",
    fullDescription: "Single Skin Profile Corrugated Sheets - Sinusoidal, Trapezoidal, Box Profiles",
    description: "Single Skin Profile Corrugated Sheets - Sinusoidal, Trapezoidal, Box Profiles",
    detailedDescription: "Single Skin Profile Corrugated Color Sheets from KREDENCE STEEL TRADING are cost-effective materials for roofing warehouses and cladding applications. Made from lightweight and durable materials, these sheets come in a variety of colors and profiles to suit different requirements. Sheets in different colors as per client sites requirements with different sizes are available. Available in various profile designs including sinusoidal, trapezoidal, and box profile, each design offers unique structural and aesthetic properties that cater to specific architectural styles. Single Skin Profile Corrugated Color Sheets are a cost-effective roofing and cladding solution due to their comparatively lower cost than other roofing materials, and they are also easy to install. These sheets are lightweight and easy to install, which contributes to their increased popularity, making them a preferred choice for roofing and cladding projects that need to be completed quickly. They are highly durable and able to withstand harsh weather conditions, with a long lifespan and resistance to corrosion, fire, and pests. Additionally, these sheets are energy efficient due to their reflective properties that reduce heat absorption, helping in reducing energy consumption in air conditioning and saving on energy bills for the building owner. Available in various materials such as steel, aluminum, and plastic, each material offers different advantages such as durability, strength, and corrosion resistance. Single Skin Profile Corrugated Color Sheets come in a wide range of colors that cater to diverse preferences and requirements, ranging from metallic finishes to bold and bright hues. They can be coated with a range of finishes such as polyester, PVF2, and Plastisol, each offering unique properties like weather resistance, easy cleaning, and durability.",
    specifications: [
      "Profile Designs: Sinusoidal, Trapezoidal, Box Profile",
      "Profile: 38/200 Sheeting (1023mm nominal, 1000mm covering)",
      "Materials: Steel, Aluminum, Plastic",
      "Color Options: Wide range from metallic finishes to bold and bright hues",
      "Surface Coatings: Polyester, PVF2, Plastisol",
      "Characteristics: Lightweight, Durable, Weather-resistant",
      "Benefits: Cost-effective, Easy to install, Energy efficient",
      "Properties: Corrosion-resistant, Fire-resistant, Pest-resistant, Easy cleaning"
    ],
    applications: [
      "Residential Roofing & Cladding",
      "Commercial & Industrial Buildings",
      "Agricultural Buildings",
      "Warehouses",
      "DIY Projects",
      "Roofing Projects",
      "Cladding Projects"
    ]
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle="Corrugated Color Sheets suppliers in Dubai – www. kredencesteel.com"
      metaDescription="We are a reliable Heras Fence Supplier in Dubai, UAE, offering high-quality temporary Heras fencing solutions for construction sites, events, industrial areas, and security applications. Our Heras fences are manufactured using heavy-duty galvanized steel, ensuring strength, stability, and long-term outdoor performance in UAE weather conditions."
      metaKeywords="Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default CorrugatedSheetsPage;
