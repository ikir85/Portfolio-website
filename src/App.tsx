import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/homePage";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Inspiration from "./pages/inspiration";
import Contact from "./pages/contact";
import Footer from "./components/Footer";
import WebProject from "./pages/webProject";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/webProject" element={<WebProject />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
