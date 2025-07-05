import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/homePage";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Inspiration from "./pages/inspiration";
import Contact from "./pages/contact";
import WebProject from "./pages/webProject";
import WebProjectDetail from "./pages/WebProjectDetail";
import Layout from "./hoc/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/webProject" element={<WebProject />} />
        <Route path="/webProject/:id" element={<WebProjectDetail />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
