import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScamInfo from "./pages/ScamInfo";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import ThirdAgeLogin from "./pages/ThirdAgeLogin";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";

import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scam-awareness" element={<ScamInfo />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/third-age-login" element={<ThirdAgeLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}
