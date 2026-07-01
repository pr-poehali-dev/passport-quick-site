
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChildrenPassport from "./pages/ChildrenPassport";
import WithoutRegistration from "./pages/WithoutRegistration";
import WithoutMilitaryId from "./pages/WithoutMilitaryId";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";
import FloatingMessengers from "@/components/FloatingMessengers";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/deti-do-14-let" element={<ChildrenPassport />} />
          <Route path="/zagranpasport-bez-propiski-moskva" element={<WithoutRegistration />} />
          <Route path="/zagranpasport-bez-voennogo-bileta" element={<WithoutMilitaryId />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingMessengers />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;