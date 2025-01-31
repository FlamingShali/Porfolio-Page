/* eslint-disable react/prop-types */
import { NavLink } from "react-router";

const NavBarLink = ({ children, path }) => {
  return (
    <li className="transition all hover:scale-125">
      <NavLink
        viewTransition
        className="hover:text-blue-400 scale-50  hover:scale-125 active:text-blue-400 transition-all duration-300
        sm:text-sm md:text-sm lg:text-lg  "
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavBarLink;
