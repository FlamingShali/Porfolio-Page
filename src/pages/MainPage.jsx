import MainNavLink from "../components/MainNavLink";
import DocumentTitle from "../hooks/DocumentTitle";

const MainPage = () => {
  DocumentTitle("Portfolio - Main");
  return (
    <div className="text-white transition-all absolute duration-300 flex flex-col justify-center text-center m-auto left-0 right-0 top-56 md:top-40 font-semibold md:w-1/6">
      <MainNavLink path="/aboutSection" speed={"quick"}>
        About me
      </MainNavLink>
      <MainNavLink path="/projects" speed={"medium"}>
        My Projects
      </MainNavLink>
      <MainNavLink path="/contact" speed={"long"}>
        Contact Me
      </MainNavLink>
    </div>
  );
};

export default MainPage;
