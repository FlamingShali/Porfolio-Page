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
        </ul>
      ) : (
        <div className="w-1/5">
          <header className="bg-transparent border fixed top-0 left-0 right-0 w-full flex justify-between items-center lg:p-[34px]  z-30 border-[#414a5a] rounded-[20px] my-0 mx-auto max-w-[1280px] h-24">
            <Link className="text-2xl animate-dragon-glow" to="/">
              Michał Klepner
            </Link>
            <ul className="uppercase hidden  lg:flex md:w-2/5 space-x-6 w-full">
              <NavBarLink path="/aboutSection">About me</NavBarLink>
              <NavBarLink path="/projects">Projects</NavBarLink>
              <NavBarLink path="/contact">Services </NavBarLink>
              <NavBarLink path="/contact">Contact Me </NavBarLink>
            </ul>
            <button className="w-[71px] p-[6px 32px 6px 8px]">EN</button>
          </header>
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
