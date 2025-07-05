import { useContext, useState } from "react";
import { NavbarElement } from "./NavbarElement";
import { ThemeContext } from "../context/themeContext";
import { BurgerMenu } from "./burgerMenu";
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
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div
        className={`relative w-full flex justify-end px-6 py-4 ${theme === "light" ? "bg-white" : "bg-black"}`}
      >
        <div className="absolute left-0 top-0 flex flex-col gap-4 pl-4 pt-4 md:gap-6 md:pl-9 md:pt-8">
          <div
            className={`${theme === "light" ? "text-black" : "text-white"} relative z-10 flex gap-4 md:gap-0 flex-row md:flex-col`}
          >
            <span className="text-3xl font-bold md:text-7xl">RIKI</span>
            <span className="block text-3xl font-bold md:text-8xl">TINOZA</span>
          </div>
          <div>
            <ThemeToggleButton />
          </div>
        </div>
        <div className="hidden gap-10 md:flex">
          {navLinks.map((navLink) => (
            <NavbarElement
              href={navLink.href}
              name={navLink.name}
              key={navLink.href}
            />
          ))}
        </div>
        <div className="md:hidden" onClick={toggleHamburger}>
          <BurgerMenu />
          {hamburgerOpen && (
            <div
              className={`fixed w-full inset-14 z-50 flex items-center justify-end bg-black bg-opacity-50 ${hamburgerOpen ? "flex" : "none"}`}
            >
              <div
                className="h-full w-full transform bg-white p-4 transition-transform duration-300 ease-in-out"
                style={{
                  transform: hamburgerOpen
                    ? "translateX(0)"
                    : "translateX(100%)",
                }}
              >
                <ul className="flex flex-col gap-6">
                  {navLinks.map((navLink) => (
                    <li key={navLink.href}>
                      <NavbarElement href={navLink.href} name={navLink.name} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
