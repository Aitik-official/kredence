import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const DrywallPage = () => {
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
    id: "drywall",
    title: "Drywall Partition Systems",
    code: "J",
    image: "/dry1.jpeg",
    images: [
      "/dry1.jpeg",
      "/dry2.jpeg"
    ],
    category: "Systems",
    fullDescription: "Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles. Metal partition system composed of ceiling, studs, and tracks.",
    description: "Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles. Metal partition system composed of ceiling, studs, and tracks.",
    detailedDescription: "Drywall Partition Systems provide flexible and efficient solutions for interior space division. Our steel stud and track systems are manufactured from galvanized steel and comply with EN-BS and ASTM standards. Lightweight yet strong, they enable quick installation of partition walls and are ideal for modern office and commercial spaces. Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles. Metal partition system composed of ceiling, studs, and tracks. Cost-effective for commercial, leisure, industrial, and residential development. Components combine to form a frame designed to accommodate single and double-density gypsum wallboards. Studs feature a knurled face to help wallboard penetration with straight screws, making drywall finishing easier and faster.",
    specifications: [
      "Components: Stud, Track, Furring Channel, Main Channel & Wall Angles",
      "Material: Galvanized lightweight steel profiles for vertical stud framing",
      "Thickness: 0.35mm - 0.9mm (available in different thicknesses)",
      "Dimensions: 50mm - 123mm (available in different dimensions)",
      "Length: 3mtr standard",
      "Standards: Complies with EN-BS and ASTM standards",
      "Features: Knurled face for wallboard penetration with straight screws for easier and faster drywall finishing",
      "Joining: Studs can be joined together from a box for increased strength",
      "Weight: Unit weight of Stud and Track is less than conventional units of comparable thickness, saving structural architecture",
      "Design: Section allows for service inclusion during building",
      "Compatibility: Partitioning Stud & Track is compliant with furring section ceiling",
      "Available: Different widths when fitted with gypsum board, features high wall"
    ],
    applications: [
      "Commercial Development",
      "Leisure Facilities",
      "Industrial Projects",
      "Residential Development",
      "Interior Partitions",
      "Wall Linings",
      "Partitions & Wall Linings",
      "Service Routing Through Partitions",
      "Solid Walls (Domestic & Commercial Structures)",
      "Single & Double-Density Gypsum Wallboards",
      "Easy Routing of Services"
    ]
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle="Drywall Partition Systems supplier in Dubai – www. kredencesteel.com"
      metaDescription="Trusted drywall partition systems supplier in Dubai offering high-quality gypsum partitions for commercial and residential interiors."
      metaKeywords="Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default DrywallPage;
