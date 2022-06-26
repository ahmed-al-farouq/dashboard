import React from 'react';
import { Link } from 'react-router-dom';
// Components
import TableRows from './TableRows';

const ProjectsTable = () => (
  <section className="projects-table mt-4">
    <h2 className="text-muted mb-3 mt-4 pb-2 fs-4">Our Projects</h2>
    <table className="m-auto my-2 w-100">
      <thead>
        <tr>
          <th className="pe-2 text-muted" scope="col">Name</th>
          <th className="pe-2 text-muted" scope="col">Budget</th>
          <th className="pe-2 text-muted" scope="col">Dead Line</th>
          <th className="pe-2 text-muted" scope="col">Who Works On It</th>
          <th className="pe-2 text-muted" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <TableRows />
      </tbody>
      <tfoot className="text-center">
        <tr>
          <td colSpan={7}>
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </td>
        </tr>
      </tfoot>
    </table>
  </section>
);

export default ProjectsTable;
