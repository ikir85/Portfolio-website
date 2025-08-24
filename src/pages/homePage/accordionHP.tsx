import React, { useContext, useEffect } from "react";
import { useAccordion } from "../../components/context/AccordionContext";
import { ThemeContext } from "../../components/context/themeContext";
import AccordionHPContent from "./accordionHPContent";

interface AccordionPanelProps extends React.ImgHTMLAttributes<HTMLDivElement> {
  index: number;
  title: string;
  children: React.ReactNode;
}

const AccordionPanel = ({ index, title, children }: AccordionPanelProps) => {
  const { theme } = useContext(ThemeContext);
  const { openIndex, setOpenIndex, translations, setTranslations } =
    useAccordion();

  const accordionBg = () => {
    switch (index) {
      case 0:
        if (theme === "light") {
          return "bg-gray-100";
        } else {
          return "bg-gray-800";
        }
      case 1:
        if (theme === "light") {
          return "bg-gray-300";
        } else {
          return "bg-gray-700";
        }
      case 2:
        if (theme === "light") {
          return "bg-gray-500";
        } else {
          return "bg-gray-600";
        }
      default:
        return "bg-gray-300";
    }
  };

  useEffect(() => {
    setTranslations((prev) => {
      const newTranslations = { ...prev };

      if (index === 0 && index === openIndex) {
        newTranslations[0] = "left-0";
        newTranslations[1] = "left-[60%]";
        newTranslations[2] = "left-[70%]";
      } else if (index === 1 && index === openIndex) {
        newTranslations[0] = "left-0";
        newTranslations[1] = "left-[10%]";
        newTranslations[2] = "left-[70%]";
      } else if (index === 2 && index === openIndex) {
        newTranslations[2] = "left-[20%]";
        newTranslations[1] = "left-[10%]";
        newTranslations[0] = "left-0";
      }

      return newTranslations;
    });
  }, [openIndex]);

  return (
    <div
      className={`flex w-full absolute group top-0 cursor-pointer duration-300 ease-in-out h-full flex-col justify-center items-center rounded-l-3xl transition-all group ${translations[index] || ""} ${accordionBg()}`}
      onMouseOver={() => setOpenIndex(index)}
      onClick={() => setOpenIndex(index)}
    >
      <div className="w-full px-20 py-10 text-left">
        <div
          className={`text-left text-2xl font-bold ${theme === "light" ? "text-black" : "text-white"}`}
        >
          {title}
        </div>
        <div className="mt-3 text-left transition-all [&_.faded-texte]:h-16 [&_.faded-texte]:overflow-hidden [&_.faded-texte]:text-red-600 [&_.faded-texte]:group-hover:h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Accordion() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex h-full flex-col">
      <div
        className={`flex h-full w-full flex-col items-center justify-center md:hidden ${theme === "light" ? "bg-gray-500" : "bg-black"}`}
      >
        <div className="flex w-10/12 flex-col gap-8">
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
            <p className="text-base font-bold md:text-3xl">
              Integrateur web - Developpeur Front end
            </p>
            <ul className="list-disc pl-10">
              <li>Intégration de site web depuis 10 ans</li>
              <li>Developement front end (React JS)</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
            <p className="text-base font-bold md:text-3xl">Photographie</p>
            <ul className="list-disc pl-10">
              <li>Phographe en studio</li>
              <li>Portraitiste</li>
              <li>Retoucheur</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
            <p className="text-base font-bold md:text-3xl">Actualités</p>
            <ul className="list-disc pl-10">
              <li>Formation ambient IT - Mais 2025</li>
              <li>Site e-commerce - https://lesarchives.net</li>
              <li>Site produit déco (À venir)- http://ninaé.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <AccordionPanel index={0} title="Actualité">
          <p>Formations React - Site web e-commerce</p>
          <AccordionHPContent title="Voir plus">
            <ul className="list-disc">
              <li>Formation ambient IT - Mais 2025</li>
              <li>Site e-commerce - https://lesarchives.net</li>
              <li>Site produit déco (À venir)- http://ninaé.com</li>
            </ul>
          </AccordionHPContent>
        </AccordionPanel>
        <AccordionPanel index={1} title="Photographie">
          <p>Photographe portraitiste Studio</p>
          <AccordionHPContent title="Voir plus">
            <ul className="list-disc">
              <li>Phographe en studio</li>
              <li>Portraitiste</li>
              <li>Retoucheur</li>
            </ul>
          </AccordionHPContent>
        </AccordionPanel>
        <AccordionPanel index={2} title="Web">
          <p>Integrateur web - Developpeur Front end</p>
          <AccordionHPContent title="Voir plus">
            <ul className="list-disc">
              <li>Intégration de site web depuis 10 ans</li>
              <li>Developement front end (React JS)</li>
            </ul>
          </AccordionHPContent>
        </AccordionPanel>
      </div>
    </div>
  );
}
