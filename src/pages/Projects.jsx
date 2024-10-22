import React from "react";
import cms from "./../assets/projects/cms.png";
import ProjectListLtr from "../components/ProjectListLtr";
const Projects = () => {
  return (
    <div
      className="w-full bg-project-light dark:bg-project-dark bg-fixed bg-cover flex flex-col items-center"
      id="projects"
    >
      <span className="my-3 text-4xl font-bold">My Projects</span>
      <ProjectListLtr
        imgUrl={cms}
        title={"College Management System"}
        description={
          "A college management system is an ERP solution that enables the institutes to conduct online admissions, generate reports, create ID cards, enable online communication, manage curriculum, time tables and conduct online evaluations, track student progress, conduct data analysis, teach remotely, and handle enquiries and etc..."
        }
        href={""}
      />
    </div>
  );
};

export default Projects;
