import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import ProductShowcase from "@/components/ProductShowcase";
import ProductsShowcase from "@/components/ProductsShowcase";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <SiteLayout>
      <Hero />
      <ProductsShowcase />
      <ProductShowcase />
      <Benefits />
      <Testimonials />
      <Contact />
    </SiteLayout>
  );
};

export default Index;
