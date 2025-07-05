import { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";

interface Props {
  children: React.ReactNode;
}

export default function WebProjectBasicLayout({ children }: Props) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`flex flex-col gap-12 items-center justify-center ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      >
        {children}
      </div>
    </>
  );
}
