import React from 'react';
import Proptypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

function Input({ name, label, type }) {
  return (
    <div className="form-control d-flex flex-column">
      <label className="mb-1" htmlFor={name}>{label}</label>
      <Field type={type} id={name} name={name} />
      <ErrorMessage component="span" className="error" name={name} />
    </div>
  );
}

Input.propTypes = {
  name: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
};
export default Input;
