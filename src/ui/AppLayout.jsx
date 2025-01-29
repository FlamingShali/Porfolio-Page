import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="justify-center items-center flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
