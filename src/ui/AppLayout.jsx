import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <div
      className="flex  flex-col relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/images/themeDragons.webp)" }}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
