import React from "react";
import { Field, ErrorMessage } from "formik";

interface Props {
  name: string;
  label: String;
  type: String;
}

const BaseInput = ({ name, label, type }: Props) => {
  return (
    <div className="form-control d-flex flex-column">
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <Field type={type} id={name} name={name} />
      <ErrorMessage component="span" className="error" name={name} />
    </div>
  );
};
export default BaseInput;
