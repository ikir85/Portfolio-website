import React, { MouseEventHandler, ReactNode, useState } from "react";

interface MyContextType {
  theme: string;
  toggleTheme: MouseEventHandler<HTMLDivElement>;
}

interface Props {
  children: ReactNode;
}

export const ThemeContext = React.createContext<MyContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
