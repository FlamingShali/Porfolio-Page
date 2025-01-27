import { NavLink } from "react-router";
import MenuIcon from "../components/MenuIcon";
import NavBarLink from "./NavBarLink";
import { useState } from "react";
import { X, Menu } from "lucide-react";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <ul className="absolute md:m-auto left-44  w-32 top-10 ">
          <NavBarLink path="/aboutSection">About me</NavBarLink>

          <li>
            <NavBarLink path="/projects">Projects</NavBarLink>
          </li>
          <li>
            <NavBarLink path="/contact">Contact Me </NavBarLink>
          </li>
        </ul>
      ) : (
        <div>
          <nav className="bg-transparent text-white w-full p-5 z-20">
            <div className=" animate-dragon-glow flex justify-between flex-row">
              <div className="w-1/4 justify-start items-start">
                <NavLink to="/">
                  <MenuIcon
                    classNameIcon={
                      "rounded-full scale-50 hover:scale-75 transition-all duration-300 "
                    }
                  />
                </NavLink>
              </div>
              <div className=" relative flex flex-col items-center w-4/5 lg:w-1/2 ">
                <div className="absolute inset-0 bg-black opacity-110 blur-2xl"></div>
                <h1 className="text-center relative text:sm md:text-base ">
                  My personal portfolio page
                </h1>

                <p className="text-center relative text:sm md:text-2xl mt-4 ">
                  Frontend Developer & Designer
                </p>
              </div>
              <ul className="hidden lg:flex md:w-1/5 space-x-6 justify-end m-auto text-sm">
                <li>
                  <NavBarLink path="/aboutSection">About me</NavBarLink>
                </li>
                <li>
                  <NavBarLink path="/projects">Projects</NavBarLink>
                </li>
                <li>
                  <NavBarLink path="/contact">Contact Me </NavBarLink>
                </li>
              </ul>
              <div className="lg:hidden w-1/4 relative">
                <div className=" absolute left-10 sm:left-24"></div>
              </div>
            </div>
          </nav>
        </div>
      )}
      <button
        className="absolute top-5 right-5 lg:hidden"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <X />
        ) : (
          <div>
            <Menu />
          </div>
        )}
      </button>
    </>
  );
}
