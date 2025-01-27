import { NavLink } from "react-router";

const MainPage = () => {
  return (
    <div className="text-white transition-all absolute duration-300 flex flex-col justify-center text-center m-auto left-0 right-0 top-56 md:top-40 font-semibold md:w-1/6">
      <NavLink
        viewTransition
        className="animate-appear-quick hover:scale-110 transition-all m-10 text-sm  md:text-sm lg:text-xl border-2 rounded-full shadow-[0px_0px_100px_10px_rgba(51,196,251,1)] w-44 relative self-center "
        to="/aboutSection"
      >
        About
      </NavLink>
      <NavLink
        viewTransition
        className="animate-appear-medium hover:scale-110 transition-all m-10 text-sm lg:text-xl border-2 rounded-full shadow-[0px_0px_100px_10px_rgba(51,196,251,1)] w-44 relative self-center  "
        to="/projects"
      >
        My Projects
      </NavLink>
      <NavLink
        viewTransition
        className="animate-appear-long hover:scale-110 transition-all m-10 text-sm  lg:text-xl  border-2 rounded-full shadow-[0px_0px_100px_10px_rgba(51,196,251,1)]  w-44 relative self-center"
        to="/contact"
        delay={2000}
      >
        Contact Me
      </NavLink>
    </div>
  );
};

export default MainPage;
