import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";
import Technologies from "./pages/Technologies.jsx";
import Careers from "./pages/Careers.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import RSE from "./pages/RSE.jsx";
import Confidentialite from "./pages/Confidentialite.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import EcoIndicators from "./components/EcoIndicators.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/carrieres" element={<Careers />} />
          <Route path="/references" element={<CaseStudies />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rse" element={<RSE />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <Footer />
      <EcoIndicators />
    </div>
  );
}
