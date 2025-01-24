import { NavLink } from "react-router";
import MenuIcon from "../components/MenuIcon";
export default function NavBar() {
  return (
    <nav className="bg-transparent text-white w-full  px-12  z-20">
      <div className=" animate-dragon-glow flex justify-between place-items-start flex-row">
        <div className="w-1/4 justify-start items-start">
          <NavLink to="/">
            <MenuIcon
              classNameIcon={
                "rounded-full scale-50 hover:scale-75 transition-all duration-300 "
              }
            />
          </NavLink>
        </div>
        <div className=" relative flex flex-col items-center w-1/2">
        <div className="absolute inset-0 bg-black opacity-110 blur-2xl"></div>
          <h1 className=" relative text-4xl ">My personal portfolio page</h1>
          <p className="relative text-2xl mt-4 ">Frontend Developer & Designer</p>
        </div>
        <ul className="flex w-1/4 space-x-6 justify-end m-auto text-l">
          <li>
            <NavLink
              to="/aboutSection"
              className="hover:text-blue-400 hover:text-xl active:text-blue-400 transition-all duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="hover:text-blue-400 hover:text-xl active:text-blue-400 transition-all duration-300"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-blue-400 hover:text-xl active:text-blue-400 transition-all duration-300"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
