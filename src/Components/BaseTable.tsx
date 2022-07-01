import React from 'react';
import { Link } from 'react-router-dom';
import BaseEmployeesTableRaw from './BaseEmployeesTableRaw';
// Components
import BaseProjectsTableRaw from './BaseProjectsTableRaw';
// Import Interfaces
import { Project, Employee } from '../IFs';

interface Props {
  tableTitle: string;
  tableHeaders: string[];
  employees: Employee[];
  projects: Project[];
  colSpan: number,
}

const BaseTable = ({ tableTitle, tableHeaders, employees, projects, colSpan }: Props) => (
  <section className='base-table mt-4'>
    <h2 className='text-muted mb-3 mt-4 pb-2 fs-4'>{ tableTitle }</h2>
    <table className='m-auto my-2 w-100'>
      <thead>
        <tr>
          {
            tableHeaders.map((header: string) => (<th className='pe-2 text-muted' key={header} scope='col'>{ header }</th>))
          }
          <th className='pe-2 text-muted' scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          projects.length ?
          (projects.map((project) => <BaseProjectsTableRaw key={project.id} project={project} />)) :
          (employees.map((employee) => <BaseEmployeesTableRaw key={employee.id} employee={employee} />))
        }
      </tbody>
      <tfoot className='text-center'>
        <tr>
          <td colSpan={colSpan}>
            <Link to={projects.length ? '/projects' : '/employees'} className='btn btn-primary'>
              View All {projects.length ? 'Projects' : 'Employees'}
            </Link>
          </td>
        </tr>
      </tfoot>
    </table>
  </section>
);

export default BaseTable;
