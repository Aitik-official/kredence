import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import MetalsPage from "./pages/MetalsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import WhyUsPage from "./pages/WhyUsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
// Individual Product Pages
import GICoilsPage from "./pages/GICoilsPage";
import PPGICoilsPage from "./pages/PPGICoilsPage";
import SandwichPanelsPage from "./pages/SandwichPanelsPage";
import CorrugatedSheetsPage from "./pages/CorrugatedSheetsPage";
import DeckingSheetsPage from "./pages/DeckingSheetsPage";
import PurlinsPage from "./pages/PurlinsPage";
import FencingPanelsPage from "./pages/FencingPanelsPage";
import PVCFencePage from "./pages/PVCFencePage";
import WireMeshPage from "./pages/WireMeshPage";
import ChainLinkFencePage from "./pages/ChainLinkFencePage";
import DrywallPage from "./pages/DrywallPage";
import FlashingPage from "./pages/FlashingPage";
import SkylightsPage from "./pages/SkylightsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/metals" element={<MetalsPage />} />
          {/* Individual Product Pages */}
          <Route path="/GI-Mill-Finish-Coils" element={<GICoilsPage />} />
          <Route path="/PPGI-Color-Coated-Coils" element={<PPGICoilsPage />} />
          <Route path="/Insulated-Sandwich-Panels" element={<SandwichPanelsPage />} />
          <Route path="/Corrugated-Color-Sheets" element={<CorrugatedSheetsPage />} />
          <Route path="/Decking-Sheets" element={<DeckingSheetsPage />} />
          <Route path="/Z-and-C-Purlins" element={<PurlinsPage />} />
          <Route path="/Fencing-Panels-Hoarding" element={<FencingPanelsPage />} />
          <Route path="/Pvc-Eco-Fence" element={<PVCFencePage />} />
          <Route path="/Heras-Fence" element={<WireMeshPage />} />
          <Route path="/Chain-Link-Fence" element={<ChainLinkFencePage />} />
          <Route path="/Drywall-Partition-Systems" element={<DrywallPage />} />
          <Route path="/Roofing-Flashings-and-Gutters" element={<FlashingPage />} />
          <Route path="/GRP-Translucent-Sheets-Skylights" element={<SkylightsPage />} />
          {/* Fallback dynamic route for backward compatibility */}
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
