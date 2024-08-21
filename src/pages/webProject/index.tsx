import { useEffect, useRef } from "react";
import Parallax from "./parallax";

const projectSections = [
  {
    title: "Les archives",
    description: "e-commerce, catalogue",
    imageBackground:
      "https://images.unsplash.com/photo-1707574133815-f52116ad01c2?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageProject: "http://rikitinoza.com/cv/img/lesarchives.png",
  },
  {
    title: "Cargo Collective",
    description: "Portfolio photos, interactive project",
    imageBackground:
      "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    imageProject: "http://rikitinoza.com/cv/img/rikitinoza-cargo.png",
  },
] as const;

export default function WebProject() {
  const cardRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    //const elementInfo = cardRef.current.getBoundingClientRect();
    const scrollHandle = () => {
      //console.log(elementInfo.left.toFixed());
      const postionLeft = 596;
      cardRef.current.style.left = `-${(postionLeft - window.scrollY) * 0.5}px`;
    };

    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  const onClickPosition = () => {
    const position = cardRef.current.getBoundingClientRect();
    console.log(position);
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex pt-20">
          <div className="z-0 h-[650px] w-1/2 bg-black"></div>
          <div className="relative flex w-1/2 flex-col bg-white p-6">
            <div className="flex flex-col pt-10">
              <p className="text-6xl text-black">Stacks *</p>
              <div className="flex"></div>
            </div>
            <div
              ref={cardRef}
              onClick={onClickPosition}
              className="absolute bottom-0 left-[-298px] z-10 flex h-60 w-full items-center justify-center bg-white"
            >
              <h1 className="text-center text-7xl font-bold text-black">
                Projet web
              </h1>
            </div>
          </div>
        </div>
        {projectSections.map((projectSection, index) => (
          <Parallax
            key={projectSection.title}
            imageBackground={projectSection.imageBackground}
            side={index % 2 ? "left" : "right"}
          >
            <div className="parallax-content z-10 flex flex-col gap-10 p-8 text-white">
              <div className="mt-6 flex flex-col items-center justify-center gap-2">
                <h1 className="text-5xl">{projectSection.title}</h1>
                <p className="text-3xl">{projectSection.description}</p>
              </div>
              <div
                className={`flex ${index % 2 ? "flex-row-reverse" : ""} gap-10`}
              >
                <div className="w-1/2 overflow-hidden rounded-2xl border border-gray-200">
                  <img src={projectSection.imageProject} className={`w-full`} />
                </div>
              </div>
            </div>
          </Parallax>
        ))}
      </div>
    </>
  );
}
