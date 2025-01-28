import { NavLink } from "react-router";
import NavBarLink from "./NavBarLink";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import menuIcon from "./../images/menuIcon.jpg";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <ul className="w-screen text-center justify-center">
          <NavBarLink path="/aboutSection">About me</NavBarLink>
          <NavBarLink path="/projects">Projects</NavBarLink>
          <NavBarLink path="/contact">Contact Me </NavBarLink>
        </ul>
      ) : (
        <div>
          <nav className="bg-transparent w-full p-5">
            <div className=" animate-dragon-glow flex justify-between flex-row">
              <div className="w-1/4 justify-start items-start">
                <NavLink to="/">
                  <img
                    className="rounded-full scale-50 hover:scale-75 transition-all duration-300 "
                    src={menuIcon}
                  />
                </NavLink>
              </div>
              <div className=" relative flex flex-col items-center w-4/5 lg:w-1/2 md:text-2xl lg:text-3xl ">
                <div className="absolute inset-0 bg-black opacity-110 blur-2xl"></div>
                <h1 className="text-center relative text:sm ">
                  My personal portfolio page
                </h1>
                <h2 className="text-center relative text:sm  mt-4 ">
                  Frontend Developer & Designer
                </h2>
              </div>
              <ul className="hidden lg:flex md:w-1/5 space-x-6 justify-end m-auto">
                <NavBarLink path="/aboutSection">About me</NavBarLink>
                <NavBarLink path="/projects">Projects</NavBarLink>
                <NavBarLink path="/contact">Contact Me </NavBarLink>
              </ul>
              <div className="lg:hidden w-1/4 relative">
                <div className="absolute left-10 sm:left-24"></div>
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
