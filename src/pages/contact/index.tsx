import { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center h-full ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="fon-bold text-2xl">Contact</p>
          <span>
            <a href="riki.ndinga@gmail.com">
              <p className="text-lg font-bold hover:underline">
                riki.ndinga@gmail.com
              </p>
            </a>
          </span>
        </div>
        {/*<div className="mx-auto max-w-7xl pt-20">
          <h1 className="text-center text-5xl font-bold">
            Formulaire de contact
          </h1>
          <ContactForm />
        </div>*/}
      </div>
    </>
  );
}
