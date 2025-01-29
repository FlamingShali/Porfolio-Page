import { Link, NavLink } from "react-router";
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
          <button className="lg:hidden" onClick={toggleNavbar}>
            {isOpen ? (
              <X />
            ) : (
              <div>
                <Menu />
              </div>
            )}
          </button>
        </ul>
      ) : (
        <header className="bg-transparent border w-10/12 flex justify-between items-center p-[15px] lg:p-[34px]  z-30 border-[#414a5a] rounded-[20px]   md:max-w-[1920px] lg:h-24">
          <Link className="text-2xl  animate-dragon-glow" to="/">
            Michał Klepner
          </Link>
          <ul className="uppercase hidden  lg:flex md:w-2/5 space-x-6 w-full">
            <NavBarLink path="/aboutSection">About me</NavBarLink>
            <NavBarLink path="/projects">Projects</NavBarLink>
            <NavBarLink path="/contact">Services </NavBarLink>
            <NavBarLink path="/contact">Contact Me </NavBarLink>
          </ul>
          <div className="flex flex-row">
            <button className="lg:hidden" onClick={toggleNavbar}>
              {isOpen ? (
                <X />
              ) : (
                <div>
                  <Menu />
                </div>
              )}
            </button>
            <button className="px-2 sm:px-5">EN</button>
          </div>
        </header>
      )}
    </>
  );
}
