import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="relative w-screen h-screen bg-cover bg-center bg-[url(/images/themeDragons.webp)]">
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Przyciemnienie tła */}
      <div className="relative z-10">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
