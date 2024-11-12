import { createContext, useContext, useState, ReactNode } from "react";

type AccordionContextType = {
  openIndex: number;
  setOpenIndex: (index: number) => void;
  translations: Record<number, string>;
  setTranslations: React.Dispatch<React.SetStateAction<Record<number, string>>>;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

export const AccordionProvider = ({ children }: { children: ReactNode }) => {
  const [openIndex, setOpenIndex] = useState(2);
  const [translations, setTranslations] = useState<Record<number, string>>({});

  return (
    <AccordionContext.Provider
      value={{ openIndex, setOpenIndex, translations, setTranslations }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
};
