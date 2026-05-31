import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ToastProvider } from "./components/ToastProvider";
import ShaderBackground from "./components/ShaderBackground";
import LoadingScreen from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ui/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ToastProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <BrowserRouter>
        {/* Futuristic WebGL Grid Plasma Background */}
        <ShaderBackground />
        
        {/* Scroll helper */}
        <ScrollToTop />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;