import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import PrincipalMessage from "./pages/PrincipalMessage";
import DirectorMessage from "./pages/DirectorMessage";
import Academics from "./pages/Academics";
import StudentLife from "./pages/StudentLife";
import Teachers from "./pages/Teachers";
import Facilities from "./pages/Facilities";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewsArticle from "./pages/NewsArticle";
import AllNews from "./pages/AllNews";
import AllCirculars from "./pages/AllCirculars";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/principal-message" element={<PrincipalMessage />} />
            <Route path="/director-message" element={<DirectorMessage />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/news" element={<AllNews />} />
            <Route path="/circulars" element={<AllCirculars />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
