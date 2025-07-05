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
        <div className="mx-auto grid grid-cols-2 grid-rows-2 gap-4">
          <div className="col-span-2 flex flex-col items-center justify-center gap-6">
            <h1 className="whitespace-nowrap text-2xl font-bold">
              Web Projects
            </h1>
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    className="hover:text-gray-500"
                    to={`/webProject/${project.id}`}
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="row-start-2 flex flex-col gap-6">
            <h3 className="font-medium text-gray-500">(Projet Récentt)</h3>
            <ul className="flex flex-col gap-4 space-y-1">
              <li>
                <ProjectInfo
                  title="Les archives"
                  projectLink="https://lesarchives.net/"
                  techno="e.commerce wordpress"
                ></ProjectInfo>
              </li>
              <li>
                <ProjectInfo
                  title="By-gregoire"
                  projectLink="https://by-gregoire.com"
                  techno="wordpress"
                ></ProjectInfo>
              </li>
            </ul>
          </div>
          <div className="row-start-2 flex flex-col gap-6">
            <h3 className="font-medium text-gray-500">Portfolio photo</h3>
            <ul className="flex flex-col gap-4 space-y-1 text-lg font-bold">
              <li>
                <a
                  className="hover:text-gray-600"
                  href="https://cargocollective.com/riki-tinoza"
                >
                  cargocollective.com/riki-tinoza
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-600"
                  href="https://riki-tinoza.tumblr.com/"
                >
                  riki-tinoza.tumblr.com/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*<ImageManipulation />*/}
    </>
  );
}
