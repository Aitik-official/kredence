import { Link } from "react-router-dom";

const products = [
  {
    id: "gi-coils",
    title: "GI Mill Finish Coils",
    description:
      "High-quality galvanized steel coils and sheets designed for durability and performance in various industrial applications including transportation, construction, and home appliances.",
    image: "/gicoils.jpeg",
    highlight: true,
  },
  {
    id: "ppgi-coils",
    title: "PPGI Color Coated Coils",
    image: "https://tse4.mm.bing.net/th/id/OIP.5OP1iIcHK5ASGZh1lGhHEgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Pre-painted galvanized steel coils available in a wide range of RAL colors with superior weather resistance and aesthetic appeal.",
  },
  {
    id: "wire-mesh",
    title: "Wire Mesh Fence / Weld Mesh Fence / Heras Fence",
    image: "https://th.bing.com/th/id/OIP.bK4Z7_oDGcSjmVY-73tG7wHaFj?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "Lightweight insulated panels with rigid core providing excellent thermal insulation for roofs, walls, and cold rooms.",
  },
  {
    id: "fencing-panels",
    title: "Fencing Panels & Hoardings",
    image: "/fencing1.jpeg",
    description: "Comprehensive fencing solutions including temporary fencing panels, hoardings, and complete accessories for construction and security.",
  },
  {
    id: "pvc-fence",
    title: "PVC Eco Fence",
    image: "https://th.bing.com/th/id/OIP.mVouMujOUdUe8jqvq9wc3wHaDV?w=335&h=157&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "Metal decking profiles and structural purlins designed for multi-story buildings, mezzanines, and industrial applications.",
  },
];

const ProductShowcase = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {products.map((product, index) => {
            const isHighlight = Boolean(product.highlight);
            const colSpan =
              index === 0
                ? "lg:col-span-6"
                : index === 1
                  ? "lg:col-span-6"
                  : "lg:col-span-4";

            return (
              <Link
                key={product.title}
                to={`/${product.id}`}
                className={`group relative aspect-[4/3] overflow-hidden rounded-lg bg-black shadow-lg transition-transform duration-500 hover:-translate-y-1 block ${colSpan}`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/75 opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] sm:text-3xl">
                      {product.title}
                    </h3>
                    <span className="mt-3 block h-[3px] w-12 origin-left bg-[#2E6A92] transition-[width] duration-500 ease-out group-hover:w-32" />
                  </div>
                  <p
                    className={`mt-6 text-sm font-medium leading-relaxed text-white/85 transition-all duration-500 ease-out sm:text-base ${
                      isHighlight ? "" : ""
                    } translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100`}
                  >
                    {product.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

