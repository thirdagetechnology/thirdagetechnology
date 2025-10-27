import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScamInfo from "./pages/ScamInfo";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
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
      </Routes>
      <Footer />
    </>
  );
}
