import { useContext } from "react";
import ContactForm from "./contactForm";
import { ThemeContext } from "../../components/context/themeContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`flex justify-center ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      >
        <div className="mx-auto h-[calc(100vh-120px)] max-w-7xl pt-20">
          <h1 className="text-center text-5xl font-bold">
            Formulaire de contact
          </h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
