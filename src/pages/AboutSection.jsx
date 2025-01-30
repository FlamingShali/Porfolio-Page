import Paragraph from "../components/Paragraph";
import DocumentTitle from "../hooks/DocumentTitle";
import HtmlIcon from "./../images/html.png";
import JSIcon from "./../images/javascript.png";
import ReactIcon from "./../images/react.png";
import CSSIcon from "./../images/css.png";
import PythonIcon from "./../images/python.png";
import CSharpIcon from "./../images/c-sharp.png";
import TechIcon from "../components/TechIcon";
import { Link } from "react-router";

const AboutSection = () => {
  DocumentTitle("Portfolio - About me");
  return (
    <div className=" absolute md:m-auto left-0 right-0 md:top-40 top-60  md:text-2xl flex flex-col bg-transparent justify-items-center text-center">
      <h1 className="m-10 font-semibold">Something about me</h1>
      <div className="font-sans relative animate-appear-down md:m-11 lg:text-lg p-3">
        <Paragraph>
          Hello! I'am very happy you reached here. My name is Michał, an
          aspiring programmer.
        </Paragraph>

        <Paragraph>
          I'm a passionate and dedicated front-end developer with a strong
          foundation in HTML, CSS, JavaScript, and React. I enjoy building
          responsive, user-friendly websites and web applications that not only
          look great but also provide an intuitive experience for users.
        </Paragraph>
        <Paragraph>
          I'm always eager to learn and grow as a developer. In the future, I
          plan to expand my skill set by diving into Python, C#, and SQL to
          explore full-stack development and backend technologies.
        </Paragraph>
        <Paragraph>
          When I'm not coding, you can find me exploring new tech trends,
          solving coding challenges, or brainstorming ideas for innovative
          projects. I'm excited about creating meaningful digital experiences
          and contributing to projects that make a difference.
        </Paragraph>
      </div>

      <h1 className="m-10 font-semibold">Technologies</h1>
      <div className=" flex flex-row  justify-center">
        <TechIcon srcIcon={HtmlIcon} />
        <TechIcon srcIcon={JSIcon} />
        <TechIcon srcIcon={ReactIcon} />
        <TechIcon srcIcon={CSSIcon} />
        <TechIcon srcIcon={PythonIcon} />
        <TechIcon srcIcon={CSharpIcon} />
      </div>
      <p className="text-sm">
        Icons provided by{" "}
        <Link
          className="text-blue-500"
          target="_blank"
          to="https://www.freepik.com/"
        >
          Freepik.com
        </Link>
      </p>
    </div>
  );
};

export default AboutSection;
