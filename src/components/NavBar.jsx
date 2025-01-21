import { NavLink } from "react-router";
import MenuIcon from "../components/MenuIcon";
export default function NavBar() {
  return (
    <nav className="bg-transparent text-white w-full  px-12  z-20 font-serif ">
      <div className="flex justify-between place-items-start flex-row">
        <div className="w-1/4 justify-start items-start">
          <NavLink to="/HeroPage">
            <MenuIcon
              classNameIcon={
                "rounded-full scale-50 hover:scale-75 transition-all duration-300 "
              }
            />
          </NavLink>
        </div>

        <div className="flex flex-col items-center w-1/2">
          <h1 className=" animate-dragon-glow text-4xl font-bold">
            My personal portfolio page
          </h1>
          <p className=" text-2xl font-semibold mt-4 ">
            Frontend Developer & Designer
          </p>
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
            <a
              href="#projects"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
