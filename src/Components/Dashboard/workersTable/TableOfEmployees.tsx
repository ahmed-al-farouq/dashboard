import React, { useRef } from 'react';
// Components
// import AddEmployeesForm from './components/AddEmployeesForm';
import TableRows from './components/TableRows';

const TableOfEmployees = () => {
  const formRef = useRef<HTMLFormElement>(document.createElement('form'));
  const toggleForm = () => {
    const form = formRef.current;
    if (form)
      form.classList.toggle('hidden')
  };

  return (
    <section className="workers-table mt-4">
      <h2 className="text-muted mb-3 mt-4 pb-2 fs-4">Our Employees</h2>
      <table className="m-auto my-2 w-100">
        <thead>
          <tr>
            <th className="pe-2 text-muted" scope="col">Name</th>
            <th className="pe-2 text-muted" scope="col">Position</th>
            <th className="pe-2 text-muted" scope="col">Age</th>
            <th className="pe-2 text-muted" scope="col">Start Date</th>
            <th className="pe-2 text-muted" scope="col">Salary</th>
            <th className="pe-2 text-muted" scope="col">Status</th>
            <th className="pe-2 text-muted" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRows />
        </tbody>
        <tfoot className="text-center">
          <tr>
            <td colSpan={7}>
              <button type="button" className="btn btn-primary" onClick={toggleForm}>
                Add More
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      {/* <AddEmployeesForm formRef={formRef.current} toggleForm={toggleForm} /> */}
    </section>
  );
};

export default TableOfEmployees;
