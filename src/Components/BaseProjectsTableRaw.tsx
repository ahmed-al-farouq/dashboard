import React, { useEffect, useRef, useState } from "react";
import { BiEdit, BiSave, BiTrash } from "react-icons/bi";
import { Project } from "../IFs";
// Redux
import { useAppDispatch } from "../redux/hooks";

interface Props {
  project: Project;
  all: boolean;
}

const BaseProjectsTableRaw = ({ project, all }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [editable, setEditable] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const nameInput = nameInputRef.current;

    if (nameInput) return nameInput.focus();
  }, [editable]);

  return (
    <tr>
      <td className="pe-2">
        <input
          type="text"
          value={project.name}
          disabled={!editable}
          className="field"
          ref={nameInputRef}
        />
      </td>
      {project.clientName && all && (
        <td className="pe-2">
          <input
            type="text"
            value={project.clientName}
            disabled={!editable}
            className="field"
          />
        </td>
      )}
      <td className="pe-2">
        <input
          type="text"
          value={project.budget}
          disabled={!editable}
          className="field"
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={project.deadLine}
          disabled={!editable}
          className="field"
        />
      </td>
      <td className="pe-2">
        <input
          type="text"
          value={project.teamNum}
          disabled={!editable}
          className="field text-ellipsis"
        />
      </td>
      {project.status && all && (
        <td className="pe-2">
          <input
            type="text"
            value={project.status}
            disabled={!editable}
            className="field"
          />
        </td>
      )}
      <td className="pe-2 d-flex align-items-center justify-content-center gap-3 h-full mt-3">
        <BiTrash
          type="button"
          className="btn btn-danger p-1 fs-3"
          tabIndex={0}
        />
        <BiEdit
          type="button"
          className={`btn btn-warning p-1 fs-3 ${
            editable ? "d-none" : "d-block"
          }`}
          onClick={() => setEditable(!editable)}
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && setEditable(!editable)}
        />
        <BiSave
          type="button"
          className={`btn btn-success p-1 fs-3 ${
            editable ? "d-block" : "d-none"
          }`}
          onClick={() => setEditable(!editable)}
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && setEditable(!editable)}
        />
      </td>
    </tr>
  );
};

export default BaseProjectsTableRaw;
