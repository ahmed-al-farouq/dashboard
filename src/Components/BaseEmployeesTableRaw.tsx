import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import { Employee } from "../IFs";
// Redux
import { useAppDispatch } from "../redux/hooks";
import { deleteEmployee, editEmployee } from "../redux/slices/employeesSlice";

interface Props {
  employee: Employee;
}

const BaseEmployeesTableRaw = ({ employee }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [editable, setEditable] = useState(false);
  const [employeeData, setEmployeeData] = useState<Employee>(employee);
  const dispatch = useAppDispatch();
  const handleVal = (e: SyntheticEvent, input: string) => {
    const target = e.target as HTMLInputElement;
    setEmployeeData({ ...employeeData, [input]: target.value });
  };
  const saveChanges = () => {
    dispatch(editEmployee(employeeData));
    setEditable(!editable);
  };

  useEffect(() => {
    const nameInput = nameInputRef.current;

    if (nameInput) return nameInput.focus();
  }, [editable]);

  return (
    <tr>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.name}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "name")}
          ref={nameInputRef}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.position}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "position")}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.age}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "age")}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.start_date}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "start_date")}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.salary}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "salary")}
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={employeeData.status}
          disabled={!editable}
          className="field"
          onInput={(e) => handleVal(e, "status")}
        />
      </td>
      <td className="pe-2 d-flex align-items-center justify-content-center gap-3 h-full mt-3">
        <BiTrash
          type="button"
          className="btn btn-danger p-1 fs-3"
          onClick={() => dispatch(deleteEmployee(employeeData.id))}
          onKeyPress={(e) =>
            e.key === "Enter" && dispatch(deleteEmployee(employeeData.id))
          }
          tabIndex={0}
        />
        <BiEdit
          type="button"
          className={`btn btn-warning p-1 fs-3 ${
            editable ? "d-none" : "d-block"
          }`}
          onClick={() => setEditable(!editable)}
          onKeyPress={(e) => e.key === "Enter" && setEditable(!editable)}
          tabIndex={0}
        />
        <BiSave
          type="button"
          className={`btn btn-success p-1 fs-3 ${
            editable ? "d-block" : "d-none"
          }`}
          onClick={saveChanges}
          onKeyPress={(e) => e.key === "Enter" && saveChanges()}
          tabIndex={0}
        />
      </td>
    </tr>
  );
};

export default BaseEmployeesTableRaw;
