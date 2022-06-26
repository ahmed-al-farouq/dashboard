import React, { useRef } from 'react';
// Redux
import { RootState } from '../../../redux/store';
import { useSelector, useDispatch, DefaultRootState } from 'react-redux';

interface Project {
  id: string;
  name: string;
  budget: string;
  deadLine: string;
  whoWorksOnIt: string;
}

function TableRows() {
  const rowsRef = useRef<any[]>([]);
  rowsRef.current = [];
  const dispatch = useDispatch();
  // const projects = useSelector((state : RootState["projects"]) => state.projects);
  const projects: Project[] = [
    {
      id: "Test",
      name: "Test",
      budget: "Test",
      deadLine: "Test",
      whoWorksOnIt: "Test",
    }
  ];
  const addRefs = (el : EventTarget) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

  // Change Details
  const changeDetails = (index : number) => {
    if (rowsRef.current[index].childNodes[0].childNodes[0].hasAttribute('disabled')) {
      for (let i = 0; i < 6; i += 1) {
        rowsRef.current[index].childNodes[i].childNodes[0].removeAttribute('disabled');
      }
      rowsRef.current[index].childNodes[6].childNodes[1].classList.toggle('d-none');
      rowsRef.current[index].childNodes[6].childNodes[2].classList.toggle('d-none');
    } else {
      for (let i = 0; i < 6; i += 1) {
        rowsRef.current[index].childNodes[i].childNodes[0].setAttribute('disabled', 'disabled');
      }
      rowsRef.current[index].childNodes[6].childNodes[1].classList.toggle('d-none');
      rowsRef.current[index].childNodes[6].childNodes[2].classList.toggle('d-none');
    }
  };
  // Set Items
  const items = projects.map((project : Project, index : number) => (
    <tr key={project.id}>
      <td className="pe-2">
        <input type="text" defaultValue={project.name} disabled={true} className="field" />
      </td>
      <td className="pe-2">
        <input type="text" defaultValue={project.budget} disabled={true} className="field" />
      </td>
      <td className="pe-2">
        <input type="text" defaultValue={project.deadLine} disabled={true} className="field" />
      </td>
      <td className="pe-2">
        <input type="text" defaultValue={project.whoWorksOnIt} disabled={true} className="field" />
      </td>
      <td className="pe-2 actions">
        <button type="button" className="btn btn-primary p-1 mx-1">
          Delete
        </button>
        <button
          type="button"
          className="btn btn-primary p-1 mb-2"
          onClick={() => {
            changeDetails(index);
          }}
        >
          Change Details
        </button>
        <button
          type="button"
          className="btn btn-primary p-1 mb-2 d-none"
          onClick={() => {
            changeDetails(index);
          }}
        >
          Save Changes
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      {items}
    </>
  );
}

export default TableRows;
