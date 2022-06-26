import React, { useRef } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';

function TableRows() {
  const rowsRef = useRef<any[]>([]);
  rowsRef.current = [];
  const dispatch = useDispatch();
  const workers = useSelector((state: RootState) => state.workers.workers);
  const addRefs = (el: HTMLTableRowElement) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };

  // Change Details
  const changeDetails = (index: number) => {
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
  const items = workers.map((worker, index) => (
    <tr key={worker.id} ref={addRefs}>
      <td className="pe-2">
        <input type="text" defaultValue={worker.name} disabled={true} className="field" />
      </td>
      <td className="pe-2">
        <input type="text" defaultValue={worker.position} disabled={true} className="field" />
      </td>
      <td className="pe-2">
        <input type="text" defaultValue={worker.age} disabled={true} className="field" />
      </td>
      <td className="pe-2">
        <input type="text" defaultValue={worker.start_date} disabled={true} className="field" />
      </td>
      <td className="pe-2">
        <input type="text" defaultValue={worker.salary} disabled={true} className="field" />
      </td>
      <td className="pe-2">
        <input type="text" defaultValue={worker.status} disabled={true} className="field" />
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
