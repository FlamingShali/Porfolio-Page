import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="bg-transparent text-white w-full py-4 px-8  z-20">
      <div className="flex justify-between items-center flex-row">
        <h1 className="text-xl font-bold">Coś o czym jeszcze pomyślę</h1>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">Hi! My name is Michał</h1>
          <p className=" text-2xl font-semibold mt-4 ">
            Frontend Developer & Designer
          </p>
        </div>
        <ul className="flex space-x-8">
          <li>
            <NavLink to="/aboutSection" className="hover:text-blue-400">
              About
            </NavLink>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
