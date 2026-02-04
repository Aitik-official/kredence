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
          <Route path="/gi-coils" element={<GICoilsPage />} />
          <Route path="/ppgi-coils" element={<PPGICoilsPage />} />
          <Route path="/sandwich-panels" element={<SandwichPanelsPage />} />
          <Route path="/corrugated-sheets" element={<CorrugatedSheetsPage />} />
          <Route path="/decking-sheets" element={<DeckingSheetsPage />} />
          <Route path="/purlins" element={<PurlinsPage />} />
          <Route path="/fencing-panels" element={<FencingPanelsPage />} />
          <Route path="/pvc-fence" element={<PVCFencePage />} />
          <Route path="/wire-mesh" element={<WireMeshPage />} />
          <Route path="/chain-link-fence" element={<ChainLinkFencePage />} />
          <Route path="/drywall" element={<DrywallPage />} />
          <Route path="/flashing" element={<FlashingPage />} />
          <Route path="/skylights" element={<SkylightsPage />} />
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
