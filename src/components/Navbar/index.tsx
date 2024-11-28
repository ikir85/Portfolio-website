import { useContext } from "react";
import { NavbarElement } from "./NavbarElement";
import { ThemeContext } from "../context/themeContext";
const navLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "À propos" },
  { href: "/gallery", name: "Gallerie" },
  { href: "/webProject", name: "Projets web" },
  { href: "/contact", name: "Contact" },
] as const;

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="relative z-10 flex cursor-pointer items-center">
      <input type="checkbox" id="toggle" className="peer sr-only" />
      <div
        onClick={toggleTheme}
        className={`relative block h-5 w-12 rounded-full ${theme === "light" ? "bg-black" : "bg-gray-300 border border-white"}  p-1 before:absolute before:left-1 before:h-3 before:w-3 before:rounded-full before:bg-zinc-100 before:p-1 before:transition-all before:duration-500 peer-checked:before:left-8 peer-checked:before:bg-zinc-800`}
      ></div>
    </label>
  );
};

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`relative mx-auto flex justify-end px-6 py-4 ${theme === "light" ? "bg-white" : "bg-black"}`}
      >
        <div className="absolute left-0 top-0 pl-9 pt-8">
          <div
            className={`${theme === "light" ? "text-black" : "text-white"} relative z-10`}
          >
            <span className="text-7xl font-bold">RIKI</span>
            <span className="block text-8xl font-bold">TINOZA</span>
          </div>
          <ThemeToggleButton />
        </div>
        <div className="flex gap-10">
          {navLinks.map((navLink) => (
            <NavbarElement
              href={navLink.href}
              name={navLink.name}
              key={navLink.href}
            />
          ))}
        </div>
      </div>
    </>
  );
}
