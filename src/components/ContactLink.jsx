import { NavLink } from "react-router";

const ContactLink = ({ children, path, clickHandler, target }) => {
  return (
    <NavLink
      onClick={clickHandler}
      className="m-6 p-3 transition-all duration-100 hover:border-2 border-sky-200"
      to={path}
      target={target}
    >
      {children}
    </NavLink>
  );
};

export default ContactLink;
