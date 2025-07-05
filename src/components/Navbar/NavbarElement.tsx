import { NavLink } from "react-router-dom";

interface Props {
  href: string;
  name: string;
}

export const NavbarElement = ({ href, name }: Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive ? "text-lg font-bold" : "text-lg"} dark:text-white`
      }
      to={href}
    >
      {name}
    </NavLink>
  );
};
