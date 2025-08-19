import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../components/context/themeContext";
import projects from "../../dataTable/webProject";

export default function WebProjectDetail() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();

  const currentIndex = projects.findIndex((project) => project.id === id);

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div
      className={`relative flex items-center justify-center h-full ${theme === "light" ? "bg-white" : "bg-black text-white"}`}
    >
      <div className="flex flex-col gap-8 pt-20">
        <div className="flex w-full flex-col items-center gap-8">
          <h1>Détails du projet</h1>
          {/*<p>
            Project ID: {id} : {currentIndex}
          </p>*/}
        </div>
        {projects[currentIndex]?.component}
      </div>
      <div className="absolute bottom-8 flex w-full justify-center">
        <div className="relative flex w-8/12 justify-between">
          {prevProject && (
            <Link
              className="absolute left-8"
              to={`/webProject/${prevProject.id}`}
            >
              <button>Previous</button>
            </Link>
          )}

          {/* Next Button */}
          {nextProject && (
            <Link
              className="absolute right-8"
              to={`/webProject/${nextProject.id}`}
            >
              <button>Next</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
