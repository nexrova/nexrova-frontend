import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import RequestDemo from "./pages/RequestDemo";
import NotFound from "./pages/NotFound";
import LiquidEther from "./components/LiquidEther";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
//         {/* LiquidEther Background */}
//         <LiquidEther
//           colors={['#5227FF', '#FF9FFC', '#B19EEF']}
//           mouseForce={20}
//           cursorSize={100}
//           isViscous={false}
//           viscous={30}
//           iterationsViscous={32}
//           iterationsPoisson={32}
//           resolution={0.5}
//           isBounce={false}
//           autoDemo={true}
//           autoSpeed={0.5}
//           autoIntensity={2.2}
//           takeoverDuration={0.25}
//           autoResumeDelay={3000}
//           autoRampDuration={0.6}
//         />

//         {/* Your main app content above LiquidEther */}
//         <div style={{ position: "relative", zIndex: 10 }}>
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/solutions" element={<Solutions />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/careers" element={<Careers />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/request-demo" element={<RequestDemo />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </BrowserRouter>
//         </div>
//       </div>
//     </TooltipProvider>
//   </QueryClientProvider>
// );


export default App;
