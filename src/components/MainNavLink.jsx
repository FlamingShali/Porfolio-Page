import { NavLink } from "react-router";

const MainNavLink = ({ children,speed,path }) => {
    
  return (
    <NavLink
      viewTransition
      className={`animate-appear-${speed} hover:scale-110 transition-all m-10 text-sm  md:text-sm lg:text-xl border-2 rounded-full shadow-[0px_0px_100px_10px_rgba(51,196,251,1)] w-44 relative self-center `}
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default MainNavLink;
