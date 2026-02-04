import { useEffect } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const ChainLinkFencePage = () => {
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
    id: "chain-link-fence",
    title: "Chain Link Fence",
    code: "M",
    image: "https://in-linefence.ca/wp-content/uploads/2020/05/Six-Reasons-to-Buy-a-Chain-Link-Fence-edit.jpg",
    images: [
      "https://in-linefence.ca/wp-content/uploads/2020/05/Six-Reasons-to-Buy-a-Chain-Link-Fence-edit.jpg",
      "https://tse1.mm.bing.net/th/id/OIP.yTpsVkezMVowQTQBUYBKMAAAAA?pid=ImgDet&w=185&h=185&c=7&dpr=1.3&o=7&rm=3",
      "https://tse4.mm.bing.net/th/id/OIP.yHSDc2WaGBa9r9eDyTqgOAHaHa?pid=ImgDet&w=183&h=183&c=7&dpr=1.3&o=7&rm=3"
    ],
    category: "Fencing",
    fullDescription: "Professional chain link fence solutions for property protection. Durable, cost-effective, and versatile fencing material also known as hurricane fence or diamond-mesh fence.",
    description: "Professional chain link fence solutions for property protection. Durable, cost-effective, and versatile fencing material.",
    detailedDescription: "Whatever your fencing need is, Kredence Steel Trading can help. With over 15 years of experience in the steel trading and building materials industry, we have been providing professional chain link fence solutions for property protection. We've helped thousands of businesses source premium chain link fence manufacturers and gain a competitive advantage. Our dynamic team is always moving forward, researching, and seeking to provide you with only the best.\n\nChain link fence, also referred to as hurricane fence or diamond-mesh fence, is one of the most durable yet inexpensive fencing materials that brings you and your properties security. Constructed of steel wires woven and interlocked in a diamond pattern, chain link fabric maintains an open appearance, which does not obscure the view beyond the fence. The fabric offers an array of benefits which makes it appealing to residential and commercial properties.\n\nTypical application areas include home yards, playgrounds, tennis court, leisure sports field, park, boundary fencing, factory and construction sites, etc. Chain link fence can be processed into many different heights from 1.6 to 20 feet, with various gauges and mesh sizes to meet specific security and application requirements.",
    specifications: [
      "Material: Low carbon steel wire, galvanized wire, aluminum alloy wire, stainless steel, PVC",
      "Surface Treatment: Galvanized, vinyl coated; other finishes such as aluminized or galfan coatings are also available",
      "Colours of PVC Coating: Dark green, black, brown, red, orange, white and yellow",
      "Heights: 1.6' to 20' (Special heights available on request). Typically 3-5 feet for domestic property; commercial application up to 10 feet; 12-13 feet for tennis court or other sports field",
      "Gauges: 6, 8, 9, 10, 11, 11-1/2, 12, 12-1/2, 14, 16. 9 gauge is the most common wire size for both residential and commercial applications. 11 and 11-1/2 gauge are suitable for temporary fencing. 6 gauge is usually used in heavy duty security applications",
      "Mesh Size: 3/8\", 5/8\", 3/4\", 1\", 1-1/4\", 1-1/2\", 1-3/4\", 2\", 2-1/4\", 2-1/2\", 3\", 3-1/2\", 4\". Chain link fabric with mesh size ranging from 3/8\" to 1\" is Mini Mesh for maximum security and protection. Common mesh sizes up to 4\"",
      "Roll Length: 32' to 165'",
      "Selvage: Twisted-twisted, knuckle-knuckle, knuckle-twisted. \"Knuckle\" design to avoid sharp ends; \"Twisted\" method for more security",
      "Standards: Hot-dipped zinc coating conforms to ASTM A392 for long service life warranty",
      "Types: Galvanized, PVC (Vinyl-coated), Stainless Steel, Aluminum chain link fence",
      "Fittings: Hot-dipped chain link fence fittings provided to assemble a complete system. Less weight die cast steel or aluminum fittings for residential applications. Cast iron or malleable steel fittings for commercial and industrial applications",
      "Dimensions: Differ from the size of the chain link fabric - consult experts for fencing projects"
    ],
    features: [
      "Visibility—great for pets and children; it also does not obscure the view beyond the fence",
      "Security—optimal security barrier, many intruders may be deterred by the chain link fence, various heights and barbed selvage are offered to meet any specific needs",
      "Low cost—relatively inexpensive, one of the advantages over other fencing options",
      "Durability—durable materials with utmost quality, two finishes (galvanized and vinyl coated) ensure to survive almost any harsh environment",
      "Versatility—a variety of specifications and additions to meet any installation need; applicable to any place when safety is needed; could work as temporary fencing",
      "Maintenance free—chain link fence won't crack, chip, bend or deform, is a budget-friendly option for homeowners or businesses alike",
      "Easy to repair—damaged part can be easily replaced, matching the rest of the fence"
    ],
    applications: [
      "Dog Kennel",
      "Sports Grounds and Facilities",
      "Parks and Reserves",
      "Commercial Properties",
      "Home Yard",
      "Golf Courses",
      "Schools",
      "Airports",
      "Zoo",
      "Temporary Fencing",
      "Factory",
      "Playgrounds",
      "Tennis Courts",
      "Leisure Sports Fields",
      "Boundary Fencing",
      "Construction Sites"
    ],
    benefits: [
      "Durable construction",
      "Increased security and privacy (with privacy slats)",
      "Easy installation with no tools required (privacy slats)",
      "Maintenance free",
      "Corrosion resistant (aluminum and stainless steel options)",
      "Lightweight (aluminum option)",
      "High tensile strength",
      "Long life guarantee",
      "Cost-effective fencing option for residential, commercial, and industrial areas"
    ],
    categories: [
      "Galvanized Chain Link Fence - Traditional option for securing properties both in residential and commercial applications. We use hot-dipped zinc coating which conforms to ASTM A392 for long service life warranty. For added security of commercial properties, barbed wire or razor ribbon is available to install onto the fence top.",
      "PVC Chain Link Fence - Ideal choice for homes, yards, and light commercial projects, emphasizing security, durability, and affordability. Environmentally friendly colors (black, green, and brown) blend with surroundings and allow landscaping to show through. PVC slats are available for privacy.",
      "Stainless Steel Chain Link Fence - High alkali resistance and can withstand high temperatures and harsh weather, maintaining a long-term bright luster. Recommended for high-grade enclosures or barriers in applications like airports, highways, or other areas requiring high-level protection.",
      "Aluminum Chain Link Fence - Traditional and aesthetic choice for strength and durability. Aluminized chain link fabric on galvanized framework. Corrosion resistant, lightweight, high tensile strength. Recommended for commercial or public areas such as playgrounds, farms, or recreational places, offering a long life guarantee and free of maintenance."
    ],
    additions: [
      "Razor Wire - Coiled razor wire with sharp blades for enhanced security",
      "Barbed Wire - Large spool of barbed wire for top-of-fence security",
      "Barbed Wire Arm - Silver-colored metal arm designed to hold barbed wire at an angle on top of a fence post",
      "Privacy Slats - Durable construction, increased security and privacy, easy installation with no tools required, maintenance free. Available in White, green, black, brown, beige, orange, dark blue. Customized colours are also available",
      "Privacy Windscreen - Green mesh fabric shaped like a section of a fence, intended to provide privacy",
      "Decorative Post Caps - Ornate post caps with pointed or rounded decorative finial designs"
    ],
    fittings: [
      "Line Post Cap - A cap on top of a fence post",
      "Fence Ties - Small wires or bands used to attach the fence fabric to the posts and rails",
      "Top Rail - The horizontal pipe running along the top of the fence",
      "Tension Band - A metal band used to secure the tension bar to a post",
      "Rail End - A fitting that connects the top rail to a post",
      "Rail End Band - A band used with the rail end fitting",
      "Gate Fork Latch - The mechanism used to secure the gate in a closed position",
      "Terminal Post Cap - A cap on top of a terminal post (a heavier post at the end or corner of a fence section, or next to a gate)",
      "Line Post - A standard vertical post supporting the fence fabric",
      "Tension Wire Clip - A clip used to attach the bottom tension wire to the fence fabric or posts",
      "Bottom Tension Wire - A wire running along the bottom of the fence fabric to keep it taut",
      "Terminal Post - A heavier post used at the ends, corners, or gate openings of a fence",
      "Tension Bar - A vertical bar woven into the end of the chain link fabric to provide tension",
      "Gate Post Hinge - The hinge component attached to the gate post",
      "Gate Frame Hinge - The hinge component attached to the gate frame"
    ],
    colors: [
      "Dark Green",
      "Black",
      "Brown",
      "Red",
      "Orange",
      "White",
      "Yellow"
    ],
    privacySlats: {
      description: "Chain link fences with privacy slats offer both privacy and security. PVC slats come in various colors to blend with surroundings.",
      benefits: [
        "Durable construction",
        "Increased security and privacy",
        "Easy installation with no tools required",
        "Maintenance free"
      ],
      colors: [
        "White",
        "Green",
        "Black",
        "Brown",
        "Beige",
        "Orange",
        "Dark Blue",
        "Customized colours available"
      ]
    },
    choosingTips: {
      title: "Tips for Choosing Chain Link Fence",
      description: "There are three key parameters for choosing chain link fence:",
      parameters: [
        {
          name: "Diameter/Gauge",
          details: "9 gauge is the most common wire size for both residential and commercial applications. 11 and 11-1/2 gauge are suitable for temporary fencing. 6 gauge is usually used in heavy duty security applications."
        },
        {
          name: "Mesh Size",
          details: "Chain link fabric with mesh size ranging from 3/8\" to 1\" is Mini Mesh for the maximum security and protection. Common mesh sizes up to 4\"."
        },
        {
          name: "Height",
          details: "Chain link fence can be processed into many different heights from 1.6 to 20 feet. Typically 3 to 5 feet for domestic property; commercial application up to 10 feet; 12 to 13 feet for tennis court or other sports field. We could formulate and customize the fencing needs as you submit your plan."
        }
      ]
    }
  };

  return (
    <ProductPageTemplate
      product={product}
      metaTitle=" Chain link fence supplier in UAE – www.kredencesteel.com "
      metaDescription=" Chain link fence supplier in UAE specializing in GI and PVC coated fencing with professional supply and installation services."
      metaKeywords=" Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    />
  );
};

export default ChainLinkFencePage;
