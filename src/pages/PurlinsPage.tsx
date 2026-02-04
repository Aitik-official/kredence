import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const PurlinsPage = () => {
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
    id: "purlins",
    title: "Z & C Purlins",
    code: "F",
    image: "https://tse3.mm.bing.net/th/id/OIP.DDTjoadU-onPFdrs1hPYfgHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.DDTjoadU-onPFdrs1hPYfgHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.WX3zVsRIzfeGriQYRt5tPQHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3&o=7&rm=3",
      "https://th.bing.com/th/id/OIP.0jyrk8_kJGFK47rB22VmNQHaHa?w=190&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ],
    category: "Structural",
    fullDescription: "Z & C Purlins produced in a variety of sizes with detailed punching options. Raw material conforms to ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel). Features Quick Fix Anti Sag Rods and a simple yet durable locking system for easy installation.",
    description: "Z & C Purlins produced in a variety of sizes with detailed punching options. Raw material conforms to ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel).",
    detailedDescription: "KREDENCE STEEL TRADING can produce both Z & C Purlins in various sizes with detailed punching options. Our Z & C Purlins are manufactured from Structural Grade Galvanized Steel that conforms to ASTM A653 Grade 50 G90. The raw material is also known as Structural Grade Galvanized Steel. We also manufacture Quick Fix Anti Sag Rods which support the Purlin system, and Zed Purlins Quick Fix Anti-Lock Sag Rods. Channels or angles can be manufactured using Structural Grade material or Commercial Grade materials as per customer requests. Our purlins meet multiple material specifications including ASTM A653 Grade 50 (New ASTM Standard), ASTM A446 Grade 'D' G90 (Old ASTM Standard), and BS EN 10147 S350GD Z275 MAC, with a minimum yield strength of 350 N/mm². The simple yet durable locking system eases installation and addresses sagging issues. The circular section of the sag rods provides a stronger/stiffer connection unit. Z & C Purlins are designed as secondary beam supports for roofing and cladding sheets, insulated panels, and liner trays. Suitable for spans up to 10.0m, they can be joined using the overlap or sleeved system. Our purlins offer excellent strength-to-weight ratio and corrosion resistance, making them ideal for modern construction applications requiring reliable structural support.",
    specifications: [
      "Manufacturing: Various sizes with detailed punching options",
      "Raw Material: ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel)",
      "Material Standards: ASTM A653 Grade 50 (New ASTM Standard), ASTM A446 Grade 'D' G90 (Old ASTM Standard), BS EN 10147 S350GD Z275 MAC",
      "Yield Strength: Minimum 350 N/mm²",
      "Span: Suitable for spans up to 10.0m",
      "Locking System: Simple yet durable locking system that eases installation and addresses sagging",
      "Sag Rods: Quick Fix Anti Sag Rods with circular section for stronger/stiffer connection unit",
      "Joining Methods: Overlap or sleeved system",
      "Customization: Channels or angles available in Structural Grade or Commercial Grade materials as per customer requirements",
      "Design: Secondary beam supports for roofing and cladding sheets, insulated panels, and liner trays"
    ],
    applications: [
      "Roofing Sheets Support",
      "Cladding Sheets Support",
      "Insulated Panels Support",
      "Liner Tray Support",
      "Secondary Beam Supports",
      "Construction Projects"
    ]
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle="Z and C Purlins Supplier in Dubai – www. kredencesteel.com"
      metaDescription="Reliable Z and C purlins supplier in Dubai supplying precision-engineered purlins for warehouses and steel structures."
      metaKeywords="Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default PurlinsPage;
