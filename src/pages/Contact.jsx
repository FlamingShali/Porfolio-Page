import { NavLink } from "react-router";

export default function Contact() {
  const mailHandler = () => {
    window.location.href =
      "mailto:michal.klepner2@gmail.com?subject=Contact Me&body=Tell me, what can I do for you.";
  };
  return (
    <div className="md:h-96 text-center flex flex-col justify-center md:w-1/4 absolute md:m-auto left-0 right-0 md:top-40 top-60 ">
      <h2 className="mb-5 text-xl font-black">
        You can reach me via socials bellow
      </h2>
      <div className="flex flex-col border-4 [background:linear-gradient(45deg,#172033,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.sky.300)_86%,_theme(colors.sky.300)_90%,_theme(colors.sky.300)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl  border-transparent animate-border">
        <NavLink
          className="m-6 p-3 transition-all duration-100 hover:border-2 border-sky-200"
          to="https://github.com/FlamingShali"
        >
          Check my GitHub for more creativity
        </NavLink>
        <NavLink
          className="m-6 p-3 transition-all duration-100 hover:border-2 border-sky-200"
          to="https://linkedin.com/in/michał-klepner-076510247"
        >
          Contact me via Linkedin
        </NavLink>
        <button
          onClick={mailHandler}
          className="m-6 p-3 transition-all duration-100 hover:border-2 border-sky-200"
          to="/"
        >
          Contact me via e-mail
        </button>
      </div>
    </div>
  );
}
