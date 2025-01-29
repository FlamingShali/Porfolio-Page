import MainNavLink from "../components/MainNavLink";
import DocumentTitle from "../hooks/DocumentTitle";

const MainPage = () => {
  DocumentTitle("Portfolio - Main");
  return (
    <main className="text-8xl relative opacity-[1] left-0">
      <div className="flex flex-col  absolute m-auto top-60 left-40 animate-appear-medium">
        <h1 className="bg-gradient-to-r from-teal-200 to-blue-200 inline-block text-transparent bg-clip-text">
          Front-End
          <br />
          Developer
        </h1>
        <br />
        <p className="text-2xl">My name is Michał, a front-end, web developer<p>
          from Poland, now living in Warsaw.
          </p> 
        I create beautiful and responsive websites that are easy to use. </p>
      </div>
    </main>
  );
};

export default MainPage;
