import { Link } from "react-router-dom";

interface props {
  title: string;
  projectLink: string;
  techno?: string;
}

export default function ProjectInfo({ title, projectLink, techno }: props) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg font-bold text-slate-700 md:text-xl">
        {title}
      </span>
      <Link className="hover:text-gray-500" to={`${projectLink}`}>
        {projectLink}
      </Link>
      <span>{techno}</span>
    </div>
  );
}
