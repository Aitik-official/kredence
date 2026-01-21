import { useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import ProductShowcase from "@/components/ProductShowcase";
import ProductsShowcase from "@/components/ProductsShowcase";
import Testimonials from "@/components/Testimonials";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Fencing Suppliers in Dubai,UAE – www.kredencesteel.com";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Trusted fencing suppliers in Dubai and UAE offering chain link, GI, PVC coated & security fencing. Quality fencing solutions with fast delivery across UAE."
      );
    }
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "Fencing Suppliers in Dubai,UAE, About Fence Trades in Oman, Fencing Panels and Hoardings Supplier in Dubai, Pvc eco fence supplier in Dubai, Heras Fence contractor in Dubai, Chain link fence supplier in UAE, GI Mill Finish Coils supplier in Dubai, PPGI Color Coated Coils Supplier in Dubai, Insulated Sandwich Panels Supplier in Dubai, Corrugated Color Sheets suppliers in Dubai, Decking Sheets suppliers in Dubai, Z and C Purlins Supplier in Dubai, Roofing Flashings and Gutters supplier in Dubai, GRP Translucent Sheets Skylights supplier in Dubai, Contact us for fence supplier."
    );
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <ProductsShowcase />
      <ProductShowcase />
      <Benefits />
      <Testimonials />
      <Contact />
      <FloatingActionButtons />
    </SiteLayout>
  );
};

export default Index;
