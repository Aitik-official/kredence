import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Building2, Layers, Grid, Wrench } from "lucide-react";

// Product images from external sources
const productImages = {
  "gi-coils": "https://5.imimg.com/data5/SELLER/Default/2021/1/MB/EI/TO/8396883/gi-coils-500x500.jpg",
  "ppgi-coils": "https://tse4.mm.bing.net/th/id/OIP.5OP1iIcHK5ASGZh1lGhHEgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  "sandwich-panels": "https://5.imimg.com/data5/RT/ZQ/EO/SELLER-2020121/30-mm-puf-insulated-sandwich-roof-panel-500x500.jpg",
  "corrugated-sheets": "https://tse3.mm.bing.net/th/id/OIP.s2DkxQgR68QZJ0fYTlJ06QHaGK?pid=ImgDet&w=184&h=153&c=7&dpr=1.3&o=7&rm=3",
  "decking-sheets": "data:image/webp;base64,UklGRgAQAABXRUJQVlA4IPQPAACQbQCdASqaAcMAPp1MoEqlpKMhpjP6wLATiWlu6dBXqV3Adx2nXgvC892gBwXuH/cc10GyyyFt7jczXaY9MemPTHpj0x6Y9MemPTGXzZOBl1t76dFCMekMNBYG8aaceVSh/31HcjuR3I7kSaxaCo1Y9FJUC4/ePwqghaNMC1BZXd/9KXbpD+a1HKWTAl9btHjVC2TLRj/vZSoEA/3ubqNrZVIF9RtCo6jgyEN1L9gNKN9JrDIvirLvOsq3GCC/sf7D3GbVjtS8HKDz3P5DvaYPzYBTJRf7LM+YbkD6RkqcqTpJAYppxxkM5uMTsx6Y9Ljn25t0OzGOoU3hz09lrBlNrvY8uW7ETXbYgel6Tf6hNWARWmdTte4IWAu8/fBMF2FlEnTjdKWG1uRItKRFe3QP0uDl0y7urvhfQcd/UddyICF7a3zNJIK39rLzaiK9c69DgZmbWhVZcSz2q46biARTJ4Mu12Qi8Lltk4Q4TLtK98deOHHUBZJY5Tga9lioEdcneT6x+8MBn2SY4wM6NVdeTVyjVXE5GqlrHfkI4uGIDC1/MjlzOgvBw1wqIgq7F2J3KWPA63hbznt0z2U8eLd6qxrzyVcl2m3oCTvG6bB85/eikbKwggJpFYExiIlTLak5HrDJvPjgUdjtIgz3nUtuwYVLQOkgfY6uGICxCVKLqVY4MLFJhIWeQ5S7LXy06R6mbe6JAGwjnjFP+mBkrPHTZLORBRMHHGdH38+vLJSSU8Ue5Zez2RdvW0DYKzyeARrnIdlsbcWV42mR4HoIV63/YxiqiLiMsPqud97ylABlWhZ0jcS5s+nETo8z12GID+V4iazD2Eir1J1t0ReFot1BBymXQ9e2Dn/JA/+czuO8g6UgnxeUM4g2q0bkv8RwqiPrVXdPDgBh/DfRk9Yrw9GLE58TuPXFux6TxsvhZDXAY+jGInBuTxVuNoitf60rAz9nFIsp1McN7s2JEFtqJy2lCRdlEpDWwXofb3MolEzNcY5l0MY4otsUvMV72IzYi2RJkKYHvINcqeneoHzTVgS8aF1JiGhpR4oQt3D+1+naPaR7xQqL0S3W/xpDgI1TYv3C668k+h5ZdT3CerCZwVd/TDFCXHsUsO9cCvKj27n/rS9SyiliJ6fxFi+p5pomhUdtVyO6XJ9DEBiAxAYgMQGIDEBiAngA/v4iIAAAAM2cSQJoevBfSl32mRwXIrN8MtnYJUSFEwpqq012TTanP/9xqrZ6NGWF+y0t4ujtBlB6jrprvAY8HD4zk9mOBWVbZW3WN4aFn4n9GY7wcfW7tYqSvrXHasVCgJ8YrRHYZGGprIfgxm68dAIBd6GDIX9Di10ilr3pNf0MfivIsx0ez0O7WZNAx6egvobRhxXgReyDoYyNOtIIxu1oS32E60xxmIh8CWg8NN7Y2g8Qwy3gdl9lXjdb7G70FRrxNIiPjDB8ORl+UDKQhA+lPbzo+yT5/budFsUwp9IH+0j8FJjL2mnH4rqE3W8P3FCjV7msZlGn7qEk6RmluW+WgrfRxJyn2kdpoqnvGsB4uZt+98hVJC/Ita8DFHlqBII3DXQReHmgF9exio3SWtq/8pZCHbp+0NX4BNWvG43lyzplYQpKrKqeJxsUtrn6IG8/21se9HC34kPluQ5pVQvF5MuCinXLnSmTaD4phHF7h0r7ynhulBvy+cABq+Nsis5rJLD5SciBKkLC/liM4hlYrjVIB8BZJ71dd+aHzZaXjYYwV3aGoB1wobADKJC6hmozWlod1PHgC9+YF4g2mkFbGgjN50QVHAn6eUFJr7K4SaooesdxsE5/KhImL19KwYB2jqvIvYKXYaxqAyUmzC2+hOA16Kj8oXY1jq91PRoBf7vvzrLdbGndp0H8UlJj0trckXBAf6lF1vRiQ7Y+7uI2N7bnq8MRceVVFaG5WlV8Z/VXHnkhUo7y3xjub8uuHprMAHpGaWFQ9n7eMYSLlzJVJdpbc5WxA0Z4YYGqU20QWAaWveYB81+8vu+eCdbAT8Sx4/gRpQKgG9qjgbGGEPxO2E3YoRJDiCLz7fW3/we+ZgRo54lPKPH+32685ETbjpZHt8U7eQfPIzanttpQZmrzPC1X0HjQehecdzfHoWwYDvgYb/5lnimuE9dzzqi6IJvbXvGU1YUfG24q9/0yU3ieyjs3/p+K6lzoe/sil0VNcDzqOynhoZ1EGE0ioBG6Pq4pOZYvUSaWb8zq0I9rHWQHBFLvpLYTPXMyO41PFqLGWj0EQhbFoLr8g0D3MPFHFG9m16NlC43m9NuQLudI89Yf8k2q4ocFoTT5JcNFeTVF7ux1OhkWC3rC5BTHPEKv1j09uoa10SjpljeHRThg8c7EeYuU/XQNoybHP3cVi3/8WhUf7pa2oGWH9wRj7XYKCZtzZaZa3f3UALV8TFRndKuJnglSVK+l/q8DrU1rGjpLDo+JPf6B8rBL84Z4AKp4DoTFzGo7rgciMLZaIfjZcNYKwaRDMH7dN20ccn3HVlNvfGKCPJCHBrvphnzsW1WLvJyegHD4GX1Jj79wfdp+IJiVT6Uh6MARuima1mlgz5z3JomTI011pbYxeH9Av+szi/X1RwL95/FZF9/W+FQ6OkKxLkK7iTGS422caj/28H0UxuUfOTfemBvUXuPfU9axaDKEWaM0Kz0C/yK2LgajbH4n99Ikd7JmGl684LaBfKLdDVVL+Q96NTjoRGtmM2QIO3E/ZIFRniQ48UzrNI4eHJIU34zRTZQR6eqoPcGFZvlU8/C5ouMGxG+q2o3/otrp6bGOboogbhsPVXhiC8gHS66/zbLWHhn+3BcHdDSFY6Gt1FAssvTMlQ5jt0BmGWfUe7dxXSjlcgP8pp635px7jWrZxznycn2BPs4utNYDuwnKySihaJtPiqfzxp6v4mFXXTPdpAb+IBJNqFO5vlABdeZ4I6P3tighjTLu+ienj3jLNf0DoTV7ACSOjwa35G3HkaxqelX1cTzxr25fJvYmgUvIobZ3RTw4fCmaV8glijMm7lsGLtPcwG8YAdydk74a17CylU1Mt+UOHfP8KktX/5oWQQHNeiGvQaYeHolbHmfcoy0FZfpbJjTfp2+W9qIgtMt4CP5QsHZLHteyi6KUkxBHVDwXgSq8ti4CRHDz0EmhpmDNb1LaTYPfjcQyQYNwM+AvZNaA7c/on846AzdJDbHdV2/CRu/bhaPYvNGt6Fh229pwDC5cUgMQnoaCLrGZmx1PmbM7QaO4bqxzgNUuVsiqzh6fUKtCRSlNoKdUCIZ1nspBucAWTy3OE/p4A0ySbk4hYf5+V2MCpUnYhumQDxT8hEhU5gmiI6g8jRrtqzI5PLwiMhQ3IyA2R3k3rAaX8Sp5Ihk4pPu+0IbOdu46r3pVvMbQAuk5vLKyAIRkIIm00QNbxcm9gFwfQN3OCIXxe9tbD7SvrNXOmEIlIueh0gis1LagVWxl/t+xWFzLnlLfZ6NoFYHivnl1ZQ6POJ+wIPiGsB6Cdn7lZvqr27JR7nddxExskDNvMKRLs107zY8kA1BBtU5vOAPOZfIYVgJDfAZQVN9BrL/H07tGq3aTdHFGdruotvdZN2VFhh7iV8apkU95TrC6F9vSzYfyuCKI6nGBzq99mQjK96YG1SxTpWpSp8DhBUVzecFq7XRLBPaz6lsRopXCnKDd1aMlbWV+x7f+wMcFIIphEJmZKtxkghM8zb3wKXS+t8VeVBfQyegsGJaJpjmUZU0IgiSBKruRxPXV0QRdrOvXy5PWeTLyRHGUd+XSSuSlspDvvf3xRIWCBz6Ez7gl5yALOxD1O2sbj/JIhragdIHNGza/jTil1MuHXmGUhGxH0hhWUZLmOvWGNWvq/Jhq2svicwFUk8m76OaliXiNnAd3EROpo0A5ttQ+TEeUrWtYsgFAXVeZG+r1Tt4nxh6g9B4y4YJg6gKsaef1z9q40vtlzMv5OCFxjxB2j5VwEdnTcOvEOypY6ttrTboXZfhTM8ItGZNAsvz+DUNRSZ5pcplXHsKE1giLxRtNOni6F213See22/s5RCBBcR8ocf46UbIp2UJYA/Wsufx3GsWkJeY501YiJwCqOqqNY3ceWp2h69VRD4xRra1Ddtv7Vs2Q3fBmsqh6NP17nnVGHQJxl/bIkjbR3EXzZEo6O/eoMhNuEMLoHxIL7r6qhdapcdelMDGHBYTKEuql/7whm+dh48FyQkvPwrT+HpXwkdNzfok4oDf0PCTcSXg2CyGpUIRv/X0ZSxgAMLcdm/jW6zjXOumIJF/d+lhmrrEfWaPpNihcgMd0jR86b13Vt5dKwUu3DRs6dH1oXoyxZKhWmFFQ7dw49Qyh0AG5/8hmv+I3+aluhP6QKKwjoJL2dC7z0s159/fJr3qGwXvRG8JcDu4COLpYUhLLLzRiqwcmamjaNz6JBcqLj0kUdcv+46GdGRd0FewA4WVzYNP7IjrarKlxhJDO4ud4DQbhluoseoxx6Ubk1TpFwBHmT5xbwBEvT8QuN0/LNbt5rymE8AESE80ckOLSaMdoR3xD+AqChmEBvD6Nu03uFmasC16/ggw2yTAAxFQRsWdHTb7WWJu05eTQU/P4JtynpSseGbfx0eMjn/3IMN597IwNNnFC4tYao1t3zrGZqTC1ZfVQMilAOMqoY2+tIb6Yn0nXakMGz0/RavrA9B9aU5tJb2TSd7m8mdFu78P8hE8nUoBNdxn2jRtSmyXRZ+BEdJ8lXmsDCqlwMF9PTZIeZzhI9RJ++XL+kNhAQkIxNdPgLU+vybx+pxLp8LOZaEChBKVYj0b9pCwSiKDOXRUvBXWEmbHk9pmo79MLsUAFfDSabvPi50uUwNM2fEOI8vg5fJjnRM9xKpDyGbHmBuWib0+3GTIWxibaAN7E1WuxQRPxWRnKyuf7kb3kd3s1pHxdJ30+lr5/M8txFwkl/CyOK8zh8hlPKvf4FN5dyTOGetEy+WF2YytaLZfmZAIQXzgOW4DesVp7oncQahoCRQtFPmB7tFz4vmHNlqls2ESI3qCmvM112QkcrHj3tgd38TqO9WL0mdGfCv5sRtkrzMkwKbTIMxaFwhZni+LI9eKHMZWFtMPKeykYlRdf0IpYE7VcSmhcP2x7M+1kLyelscexQpXcCW9z72zxdEAozxSIceXVsOO54+4TH1JzqoKmoKmAI6c4R2ZzAnRYBQ8mfg0C8bVnPqHfKwzEpWtvQWadYLhZoxTyLAXlgatLaB80rKM0Y0U5O6a2RvfGgxp3nH2q9IlYU8qZIlT9QUeeqYkqZtGVk2vef4pwe/wOcD6P5T7GGvqT1sGwtgfT9LK9GL6BEGhHjXzmQxR/mKNRUvHz/NUxlr1Se391avI1ShEwbk74J1aHOK/oQCyMeNCVndWKf8/KJgy9d3wS91zbwNj8n43EsGxLktdO5iJT/FVGnHRijMXdk2sG/ldBA7AAAAAAAAAA",
  "purlins": "https://th.bing.com/th/id/OIP.vylaB5yC0V0OFrwVV_W-EwHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "drywall": "https://th.bing.com/th/id/OIP.VJlP5V5Z41URyMlTqADDEwHaE3?w=285&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "flashing": "https://th.bing.com/th/id/OIP.6bDleqwyT4ZuyLP3qZ0WxAHaEK?w=319&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "skylights": "https://th.bing.com/th/id/OIP.h2UKoc1JmJPoDGs3kxpgNgHaFj?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
};

// Metals products - all products except fencing-related ones
export const metalsProducts = [
  {
    id: "gi-coils",
    icon: Package,
    title: "GI Mill Finish Coils",
    code: "A",
    image: productImages["gi-coils"],
    category: "Steel Coils",
    fullDescription: "Hot Dip Galvanized Steel Coils & Sheets (ASTM A653, JIS G3302, EN 10346)",
    description: "Hot Dip Galvanized Steel Coils & Sheets (ASTM A653, JIS G3302, EN 10346)",
  },
  {
    id: "ppgi-coils",
    icon: Layers,
    title: "PPGI Color Coated Coils",
    code: "B",
    image: productImages["ppgi-coils"],
    category: "Coated Steel",
    fullDescription: "Pre-Painted Galvanized Steel Coils in RAL colors (RAL 9002 & RAL 1001)",
    description: "Pre-Painted Galvanized Steel Coils in RAL colors (RAL 9002 & RAL 1001)",
  },
  {
    id: "sandwich-panels",
    icon: Building2,
    title: "Insulated Sandwich Panels",
    code: "C",
    image: productImages["sandwich-panels"],
    category: "Panels",
    fullDescription: "Roof, Wall Panels & Cold Room Solutions with PUR/PIR Insulation",
    subtitle: "Roof Panels / Wall Panels / Cold Room",
    description: "Roof, Wall Panels & Cold Room Solutions with PUR/PIR Insulation",
  },
  {
    id: "corrugated-sheets",
    icon: Grid,
    title: "Corrugated Color Sheets",
    code: "D",
    image: productImages["corrugated-sheets"],
    category: "Sheets",
    fullDescription: "Single Skin Profile Corrugated Sheets - Sinusoidal, Trapezoidal, Box Profiles",
    description: "Single Skin Profile Corrugated Sheets - Sinusoidal, Trapezoidal, Box Profiles",
  },
  {
    id: "decking-sheets",
    icon: Layers,
    title: "Decking Sheets",
    code: "E",
    image: productImages["decking-sheets"],
    category: "Decking",
    fullDescription: "Metal Floor Deck with Ribbed Profiles - 45/150 & 75/305",
    subtitle: "45/150 & 75/305",
    description: "Metal Floor Deck with Ribbed Profiles - 45/150 & 75/305",
  },
  {
    id: "purlins",
    icon: Wrench,
    title: "Z & C Purlins",
    code: "F",
    image: productImages["purlins"],
    category: "Structural",
    fullDescription: "Z & C Purlins produced in a variety of sizes with detailed punching options. Raw material conforms to ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel).",
    description: "Z & C Purlins produced in a variety of sizes with detailed punching options. Raw material conforms to ASTM A653 Grade 50 G90 (Structural Grade Galvanized Steel).",
  },
  {
    id: "drywall",
    icon: Building2,
    title: "Drywall Partition Systems",
    code: "J",
    image: productImages["drywall"],
    category: "Systems",
    fullDescription: "Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles.",
    description: "Drywall Partition System Components comprising of Stud, Track, Furring Channel, Main Channel & Wall Angles.",
  },
  {
    id: "flashing",
    icon: Wrench,
    title: "Roofing Flashings & Gutters",
    code: "K",
    image: productImages["flashing"],
    category: "Accessories",
    fullDescription: "Flashing, Rain Gutter, Ridge Ventilator, and Sliding components from Kredence Steel's Profiles & Cladding Division.",
    description: "Flashing, Rain Gutter, Ridge Ventilator, and Sliding components from Kredence Steel's Profiles & Cladding Division.",
  },
  {
    id: "skylights",
    icon: Layers,
    title: "GRP Translucent Sheets - Skylights",
    code: "L",
    image: productImages["skylights"],
    category: "Skylights",
    fullDescription: "GRP (Glass Reinforced Plastic) Translucent Sheets for skylights. Daylight improves the internal environment and energy efficiency of buildings.",
    description: "GRP (Glass Reinforced Plastic) Translucent Sheets for skylights. Daylight improves the internal environment and energy efficiency of buildings.",
  },
];

const MetalsPage = () => {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Metals"
        title="Premium Metal Products & Solutions"
        description="Explore our comprehensive range of high-quality metal products including steel coils, sheets, panels, and structural components designed for durability and performance."
        backgroundImages={[
          "https://th.bing.com/th/id/OIP.Q16_iq4gNPcXU8RyU7vWlAHaDt?w=286&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
          "https://th.bing.com/th/id/OIP.qc0jLLr7PB4an8ri6EHtwQHaEK?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
          "https://th.bing.com/th/id/OIP.xf2B6e0nfi1VpAqhQzzkywHaE8?w=295&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        ]}
        variant="contrast"
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-accent hover:shadow-glow text-white px-8 py-6 h-auto rounded-xl"
        >
          <Link to="/contact" className="font-semibold">
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </PageHeader>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Our Metal Products Range
            </h2>
            <p className="text-xl text-muted-foreground">
              Kredence Steel Trading offers a diverse portfolio of premium metal products, 
              each designed for durability, performance, and cost-efficiency for construction and industrial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metalsProducts.map((product) => {
              return (
                <Card 
                  key={product.id} 
                  className="group border border-border bg-white shadow-elegant overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col rounded-2xl"
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 flex-1 flex flex-col space-y-5">
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-foreground">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {product.fullDescription || product.description}
                    </p>

                    {/* View Details Button */}
                    <Button
                      asChild
                      className="w-full bg-[#2E6A92] hover:bg-[#245676] text-white mt-auto"
                    >
                      <Link to={`/products/${product.id}`} className="flex items-center justify-center gap-2 font-semibold">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-5xl font-bold text-foreground">
              Professional Metal Fabrication Services
            </h2>
            <p className="text-xl text-muted-foreground">
              In addition to our comprehensive metal product range, we offer professional fabrication services 
              to ensure your projects are completed to the highest standards. Our team of experts provides 
              end-to-end solutions from design to installation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent hover:shadow-glow text-white px-8 py-6 h-auto rounded-xl"
            >
              <Link to="/contact" className="font-semibold">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-primary-foreground/80">
              Contact us today for a free consultation and discover how our metal products can contribute to your project's success and efficiency.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:shadow-glow px-8 py-6 h-auto rounded-xl"
          >
            <Link to="/contact" className="font-semibold">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
};

export default MetalsPage;

