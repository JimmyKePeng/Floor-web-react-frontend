import "./App.css";
import Navbar from "./components/Narbar/Navbar";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Refinishing from "./pages/Refinishing";
import Installation from "./pages/Installation";
import Videos from "./pages/Videos";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="body">
      <Navbar />
      <ScrollToTop />
      <main className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/refinishing" element={<Refinishing />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <ContactMe />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
