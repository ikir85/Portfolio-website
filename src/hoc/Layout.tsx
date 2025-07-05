import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../components/context/themeContext";
import { useContext } from "react";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="flex h-screen flex-col">
        <Navbar />
        <main
          className={`relative flex-grow bg-gray-200 ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
