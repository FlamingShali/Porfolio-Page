export default function NavBar() {
    return (
      <nav className="bg-transparent text-white w-full py-4 px-8 fixed top-0 left-0 z-20">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Name</h1>
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  