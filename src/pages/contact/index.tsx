import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <>
      <div className="flex justify-center">
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
