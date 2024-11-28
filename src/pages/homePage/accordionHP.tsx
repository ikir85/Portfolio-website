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
        return "bg-gray-300";
      case 1:
        return "bg-gray-500";
      case 2:
        return "bg-gray-700";
      default:
        return "bg-gray-500";
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
      className={`flex w-full absolute top-0 cursor-pointer duration-300 ease-in-out h-full flex-col justify-center items-center rounded-l-3xl transition-all group ${translations[index] || ""} ${accordionBg()}`}
      onMouseOver={() => setOpenIndex(index)}
    >
      <div className="w-full px-20 py-10 text-left">
        <div
          className={`text-left text-2xl font-bold ${theme === "light" ? "text-black" : "text-white"}`}
        >
          {title}
        </div>
        <div className="mt-3 text-left">{children}</div>
      </div>
    </div>
  );
};

export default function Accordion() {
  return (
    <div className="flex flex-row">
      <AccordionPanel index={0} title="À propos">
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus</p>
        <AccordionHPContent title="Tab panel 1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit,
        </AccordionHPContent>
      </AccordionPanel>
      <AccordionPanel index={1} title="Projet 1">
        <p>similique sunt in culpa qui officia deserunt mollitia</p>
        <AccordionHPContent title="Tab panel 2">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit
        </AccordionHPContent>
      </AccordionPanel>
      <AccordionPanel index={2} title="Projet 2">
        <p>Nam libero tempore, cum soluta nobis est eligendi</p>
        <AccordionHPContent title="Tab panel 3">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </AccordionHPContent>
      </AccordionPanel>
    </div>
  );
}
