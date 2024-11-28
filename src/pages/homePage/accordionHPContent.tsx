import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface props {
  title: string;
  children: ReactNode;
}
export default function AccordionHPContent({ title, children }: props) {
  return (
    <div className="w-7/12">
      <div className="my-8 overflow-hidden rounded">
        <div className="accordion-section outline-none" tabIndex={1}>
          <div className="ease group relative flex cursor-pointer items-center justify-between bg-gray-900 px-4 py-3 pr-10 text-gray-500 transition duration-500">
            <div className="ease transition duration-500 group-focus:text-white">
              {title}
            </div>
            <div className="ease absolute right-0 top-0 mb-auto ml-auto mr-2 mt-2 inline-flex h-8 w-8 transform items-center justify-center rounded-full border border-gray-700 transition duration-500 group-hover:-rotate-180 group-hover:text-white">
              <i className="fas fa-chevron-down"></i>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="ease max-h-0 overflow-hidden bg-gray-800 px-4 duration-500 group-hover:max-h-screen">
            <div className="p-2 text-justify text-gray-400">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
