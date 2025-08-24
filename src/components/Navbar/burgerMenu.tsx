interface Props {
  isOpen: boolean;
  theme: string;
}

export const BurgerMenu = ({ isOpen, theme }: Props) => {
  return (
    <div className="z-10 flex h-8 w-8 flex-col flex-nowrap justify-around">
      <div
        className={`h-1 w-8 origin-[1px] rounded-xl ${theme === "light" ? "bg-black" : "bg-white"} transition-all duration-75 ease-linear ${
          isOpen ? "rotate-45 translate-y-0" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-8 origin-[1px] rounded-xl ${theme === "light" ? "bg-black" : "bg-white"} transition-all duration-75 ease-linear ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-8 origin-[1px] rounded-xl ${theme === "light" ? "bg-black" : "bg-white"} transition-all duration-75 ease-linear ${
          isOpen ? "-rotate-45 -translate-y-0" : ""
        }`}
      ></div>
    </div>
  );
};
