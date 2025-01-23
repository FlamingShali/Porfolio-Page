import { NavLink } from "react-router";

const MainPage = () => {
  return (
    <div className="text-white transition-all absolute duration-300 flex flex-col justify-center text-center text-xl m-auto left-0 right-0 top-40 font-semibold w-1/6">
      <NavLink viewTransition
        className="hover:scale-110 transition-all m-10 text-3xl sm:text-sm md:text-xl lg:text-2xl border-2 rounded-full shadow-[0px_0px_100px_10px_rgba(51,196,251,1)]  "
        to="/aboutSection"
      >
        About
      </NavLink>
      <NavLink viewTransition
        className="hover:scale-110 transition-all m-10 text-3xl sm:text-sm md:text-xl lg:text-2xl border-2 rounded-full shadow-[0px_0px_100px_10px_rgba(51,196,251,1)]  "
        to="/projects"
      >
        My Projects
      </NavLink>
      <NavLink viewTransition
        className="hover:scale-110 transition-all m-10 text-3xl sm:text-sm md:text-xl lg:text-2xl border-2 rounded-full shadow-[0px_0px_100px_10px_rgba(51,196,251,1)]  "
        to="/contact"
      >
        Contact Me
      </NavLink>
    </div>
  );
};

export default MainPage;
