import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`mx-auto flex w-full justify-end px-6 py-4 ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <div className="flex gap-10">
          <NavLink className="text-lg hover:underline" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}
