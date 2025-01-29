import { Link } from "react-router";
import DocumentTitle from "../hooks/DocumentTitle";

const MainPage = () => {
  DocumentTitle("Portfolio - Main");
  return (
    <main className="flex flex-col  opacity-[1] w-full">
      <div className="relative transition-all flex flex-col items-start m-5 sm:m-24 md:mx-32 lg:ml-40 xl:ml-52 2xl:ml-96 animate-appear-quick">
        <h1 className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-blue-600 to-blue-300 inline-block text-transparent bg-clip-text ">
          Front-End
          <br />
          Developer
        </h1>
        <br />
        <p className="animate-appear-quick md:text-2xl">
          My name is Michał, a front-end and aspiring full-stack developer
          <p>from Poland, now living in Warsaw.</p>I create beautiful and
          responsive websites that are easy to use.{" "}
        </p>
        <Link
          to="/projects"
          className=" duration-300 p-5 mt-5 rounded-[20px] bg-gradient-to-r from-blue-600 to-blue-400  w-40 hover:scale-105"
        >
          See my projects
        </Link>
      </div>
    </main>
  );
};

export default MainPage;
