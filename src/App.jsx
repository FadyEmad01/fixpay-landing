import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DownloadAppHero from "./components/landing/download";
import FixpayLanding from "./components/landing/fixpay/FixpayLanding";
import { HeroHeader } from "./components/layout/header";
import HeroSection from "./components/landing/HeroSection";
import LandingPage from "./pages/landing";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen  ">
        {/* Navigation */}
        {/* <nav className="bg-primary/90 text-primary-foreground px-4 py-6">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
              Fixpay
            </Link>
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-primary-foreground/80 transition-colors">
                Home
              </Link>
              <Link to="/download" className="hover:text-primary-foreground/80 transition-colors">
                Download
              </Link>
            </div>
          </div>
        </nav> */}
        {/* <HeroHeader/> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/download" element={<DownloadAppHero />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;