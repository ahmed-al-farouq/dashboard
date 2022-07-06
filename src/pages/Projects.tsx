import React, { useRef } from "react";
import AddProjectForm from "../components/AddProjectForm";
import BaseAlert from "../components/BaseAlert";
import BaseTable from "../components/BaseTable";
import { useAppSelector } from "../redux/hooks";

const Projects = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const projectsHeaders = [
    "Name",
    "Client Name",
    "Budget",
    "Deadline",
    "Team Number",
    "Status",
  ];
  const projects = useAppSelector((state) => state.projects.projects);
  const toggleForm = () => {
    if (formRef.current)
      formRef.current.classList.toggle("hidden");
  }
  return (
    <main className="container">
      <div className="row position-relative flex-column align-items-center">
      <BaseAlert
        header="Dear Visitor,"
        descLineOne="You'll find all projects here. You can add, delete, and modify any project's details."
        descLineTwo="Please, be careful because there's no chance to take a step back."
      />
      <BaseTable
        all={true}
        tableTitle={"All Projects"}
        tableHeaders={projectsHeaders}
        employees={[]}
        projects={projects}
        colSpan={5}
      />
      <button className="btn btn-primary col-lg-3 col-md-6 col-sm-11" onClick={toggleForm}>Add New Project</button>
      <AddProjectForm ref={formRef}
        closeForm={toggleForm} />
      </div>
    </main>
  );
};

export default Projects;
