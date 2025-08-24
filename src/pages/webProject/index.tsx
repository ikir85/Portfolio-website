import { useContext } from "react";
import { ThemeContext } from "../../components/context/themeContext";
import ProjectInfo from "./ProjectInfo";
import { Link } from "react-router-dom";
import projects from "../../dataTable/webProject";

export default function WebProject() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`flex flex-col gap-12 items-center justify-center h-full ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
      >
        <div className="mx-auto flex w-10/12 flex-col items-center gap-2 md:w-full md:gap-6">
          <h2 className="text-2xl font-bold md:text-3xl">Stack techno</h2>
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg">
              HTML CSS TAILWIND Javascript PHP React TWIG Wordpress Bolt CMS
            </p>
          </div>
        </div>
        <div className="grid gap-8 px-4 md:grid-cols-2 lg:px-0">
          <div className="flex flex-col gap-2 md:gap-6">
            <h1 className="whitespace-nowrap text-xl font-bold md:text-2xl">
              Pratiques React
            </h1>
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    className="hover:text-gray-500 hover:underline"
                    to={`/webProject/${project.id}`}
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <h3 className="text-xl font-bold md:text-2xl">Récent site web</h3>
            <ul className="flex flex-col gap-4 space-y-1">
              <li>
                <ProjectInfo
                  title="Site web e-commmerce - Les archives"
                  projectLink="https://lesarchives.net/"
                  techno="Custom Theme Wordpress - Stripe - Tailwind - JS"
                ></ProjectInfo>
              </li>
              <li>
                <ProjectInfo
                  title="Sitz web vitrine By-gregoire"
                  projectLink="https://by-gregoire.com"
                  techno="Custom Theme Wordpress - Tailwind - JS"
                ></ProjectInfo>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*<ImageManipulation />*/}
    </>
  );
}
