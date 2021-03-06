import React from "react";
// Form
import { Formik, Form } from "formik";
import * as Yup from "yup";
// Icons
import { AiFillCloseCircle } from "react-icons/ai";
// Components
import BaseInput from "./BaseInput";

interface Props {
  closeForm(): void;
}

interface FormValues {
  name: string;
  position: string;
  age: string;
  start_date: string;
  salary: string;
  status: string;
}

const AddEmployeesForm = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLFormElement>) => {
    const initValues = {
      name: "",
      position: "",
      age: "",
      start_date: "",
      salary: "",
      status: "",
    };
    const validation = Yup.object({
      name: Yup.string()
        .trim("Remove Start And End Spaces")
        .matches(/[a-z]/gi, "It Takes Only Letters")
        .required("Name Is Required"),
      position: Yup.string()
        .trim("Remove Start And End Spaces")
        .matches(/[a-z]/gi, "It Takes Only Letters")
        .required("Position Is Required"),
      age: Yup.number()
        .positive("It Must Be A Positive Number")
        .min(20, "The Age Can Not Be Lower Than 20")
        .max(50, "The Age Can Not Be Larger Than 50")
        .required("Age Is Required"),
      start_date: Yup.date().required("Date Is Required"),
      salary: Yup.number()
        .positive("It Must Be A Positive Number")
        .min(3000, "It Can Not Be Under 3000")
        .max(15000, "It Can Not Be Above 15000")
        .required("Salary Is Required"),
      status: Yup.string()
        .trim("Remove Start And End Spaces")
        .matches(/[a-z]/gi, "It Takes Only Letters")
        .required("Statues Is Required"),
    });

    const onSubmit = () => {
      props.closeForm();
    };

    return (
      <section
        ref={ref}
        className="hidden"
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <Formik
          initialValues={initValues}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          <div className="pop-up-form">
            <AiFillCloseCircle onClick={props.closeForm} />
            <Form>
              <BaseInput type="text" name="name" label="Name" />
              <BaseInput type="text" name="position" label="Position" />
              <BaseInput type="text" name="age" label="Age" />
              <BaseInput type="text" name="start_date" label="Start Date" />
              <BaseInput type="text" name="salary" label="Salary" />
              <BaseInput type="text" name="status" label="Status" />
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </Form>
          </div>
        </Formik>
      </section>
    );
  }
);

export default AddEmployeesForm;
