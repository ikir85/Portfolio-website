import { useContext } from "react";
import { AccordionProvider } from "../../components/context/AccordionContext";
import Accordion from "./accordionHP";
import { ThemeContext } from "../../components/context/themeContext";

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AccordionProvider>
      <div
        className={`relative h-[calc(100vh-120px)] ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      >
        <Accordion />
      </div>
    </AccordionProvider>
  );
};
