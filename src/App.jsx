import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ToastProvider } from "./components/ToastProvider";
import ShaderBackground from "./components/ShaderBackground";

import { ScrollToTop } from "./components/ui/ScrollToTop";

function App(){
  return (
    <ToastProvider>
    <BrowserRouter>
      <ShaderBackground />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </ToastProvider>
  );
}
export default App;