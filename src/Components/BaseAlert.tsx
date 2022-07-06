import React from "react";
import { BsHeartFill } from "react-icons/bs";

interface Props {
  header: string;
  descLineOne: string;
  descLineTwo: string;
}

const BaseAlert = ({ header, descLineOne, descLineTwo }: Props) => {
  return (
    <section className="base-alert alert alert-primary position-absolute" role="alert">
      <h3 className="alert-heading"> {header} </h3>
      <article>
        <span className="d-block">{descLineOne}</span>
        {descLineTwo}
        <hr />
        <b>
          Enjoy. <BsHeartFill />{" "}
        </b>
      </article>
    </section>
  );
};

export default BaseAlert;
