import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import GlobalBackground from "./components/GlobalBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";
import CustomCursor from "./components/CustomCursor";

const queryClient = new QueryClient();

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [introTransitioning, setIntroTransitioning] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          {!introComplete && (
            <IntroAnimation
              onComplete={() => setIntroComplete(true)}
              onTransitionStart={() => {
                setIntroTransitioning(true);
                // Reset transition state after animation completes
                setTimeout(() => setIntroTransitioning(false), 1500);
              }}
            />
          )}
          <GlobalBackground />
          <CustomCursor />
          <div className="relative min-h-screen flex flex-col">
            {introComplete && <Header />}
            <div className="flex-1">
              <Routes>
                <Route
                  path="/"
                  element={<Index introTransitioning={introTransitioning} />}
                />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
