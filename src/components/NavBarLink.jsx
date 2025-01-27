/* eslint-disable react/prop-types */
import { NavLink } from "react-router";

const NavBarLink = ({ children, path }) => {
  return (
    <li>
      <NavLink
        className="hover:text-blue-400 hover:text-xl active:text-blue-400 transition-all duration-300"
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavBarLink;
