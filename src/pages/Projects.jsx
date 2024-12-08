import ProjectListLtr from "../components/ProjectListLtr.jsx";
import { projects } from "../constants/projectLinks";
const Projects = () => {
  return (
    <div
      className="w-full bg-project-light dark:bg-project-dark bg-fixed bg-cover flex flex-col items-center"
      id="projects"
    >
      <span className="my-3 text-4xl  font-bold">My Projects</span>
      {projects.map((e, index) => (
        <ProjectListLtr
          imgUrl={e.imgUrl}
          title={e.title}
          description={e.description}
          repoLink={e.repoLink}
          demoLink={e.demoLink}
          index={index + 1}
          key={index}
        />
      ))}
    </div>
  );
};

export default Projects;
