import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";

interface props {
  title: string;
  children: ReactNode;
}
export default function AccordionHPContent({ title, children }: props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-full md:w-7/12">
      <div className="my-8 overflow-hidden rounded">
        <div
          className={`accordion-section outline-none ${theme === "light" ? "text-black" : "text-white"}`}
          tabIndex={1}
        >
          <div
            className={`ease group relative flex cursor-pointer items-center justify-between border-b-2 py-3 pr-10 transition duration-500 ${theme === "light" ? "border-gray-900" : "border-white"}`}
          >
            <div className="ease transition duration-500 group-focus:text-white">
              {title}
            </div>
          </div>
          <div className="ease max-h-0 overflow-hidden px-4 duration-500 group-hover:max-h-screen">
            <div className="p-2 text-justify">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
