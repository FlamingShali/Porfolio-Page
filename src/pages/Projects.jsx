import ProjectCards from "../components/ProjectCards";
import DocumentTitle from "../hooks/DocumentTitle";

export default function Projects() {
  DocumentTitle("Portfolio - Projects");
  return (
    <div className="absolute md:m-auto left-0 right-0 md:top-40 top-60 flex flex-col">
      <div className="flex flex-row justify-between">
        <ProjectCards />
      </div>
    </div>
  );
}
