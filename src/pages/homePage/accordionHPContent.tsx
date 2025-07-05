import { ReactNode } from "react";

interface props {
  title: string;
  children: ReactNode;
}
export default function AccordionHPContent({ title, children }: props) {
  return (
    <div className="w-full md:w-7/12">
      <div className="my-8 overflow-hidden rounded">
        <div className="accordion-section outline-none" tabIndex={1}>
          <div className="ease group relative flex cursor-pointer items-center justify-between border-b-2 border-gray-900 py-3 pr-10 text-black transition duration-500">
            <div className="ease transition duration-500 group-focus:text-white">
              {title}
            </div>
          </div>
          <div className="ease max-h-0 overflow-hidden px-4 duration-500 group-hover:max-h-screen">
            <div className="p-2 text-justify text-black">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
