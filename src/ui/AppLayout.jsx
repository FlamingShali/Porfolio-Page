import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div className="absolute w-screen h-screen bg-black bg-cover bg-center bg-no-repeat lg:bg-[url(/src/images/theme.webp)]">
      <div className="absolute inset-0 bg-black opacity-60 blur-2xl"></div>
      {/* Przyciemnienie tła */}
      <div className="relative">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
