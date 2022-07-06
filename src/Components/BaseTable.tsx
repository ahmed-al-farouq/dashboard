import React from "react";
import { Link } from "react-router-dom";
import BaseEmployeesTableRaw from "./BaseEmployeesTableRaw";
// Components
import BaseProjectsTableRaw from "./BaseProjectsTableRaw";
// Import Interfaces
import { Project, Employee } from "../IFs";

interface Props {
  tableTitle: string;
  tableHeaders: string[];
  employees: Employee[];
  projects: Project[];
  all: boolean;
  colSpan: number;
}

const BaseTable = ({
  tableTitle,
  tableHeaders,
  employees,
  projects,
  all,
  colSpan,
}: Props) => (
  <section className="base-table mt-4">
    <h2 className="text-muted mb-3 mt-4 pb-2 fs-4">{tableTitle}</h2>
    <table className="m-auto my-2 w-100">
      <thead>
        <tr>
          {tableHeaders.map((header: string) => (
            <th className="pe-2 text-muted" key={header} scope="col">
              {header}
            </th>
          ))}
          <th className="pe-2 text-muted" scope="col">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
      {projects.length && !all
          ? projects.slice(0, 3).map((project) => (
              <BaseProjectsTableRaw all={all} key={project.id} project={project} />
            ))
          : projects.map((project) => (
              <BaseProjectsTableRaw all={all} key={project.id} project={project} />
            ))}
        {employees.length && !all
          ? employees.slice(0, 3).map((employee) => (
              <BaseEmployeesTableRaw key={employee.id} employee={employee} />
            ))
          : employees.map((employee) => (
              <BaseEmployeesTableRaw key={employee.id} employee={employee} />
            ))}
      </tbody>
      {!all && (
        <tfoot className="text-center">
          <tr>
            <td colSpan={colSpan}>
              <Link
                to={projects.length ? "/projects" : "/employees"}
                className="btn btn-primary"
              >
                View All {projects.length ? "Projects" : "Employees"}
              </Link>
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  </section>
);

export default BaseTable;
