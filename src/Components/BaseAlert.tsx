import React from "react";
import { BsHeartFill } from "react-icons/bs";

interface Props {
  header: string;
  descLineOne: string;
  descLineTwo: string;
}

const BaseAlert = ({ header, descLineOne, descLineTwo }: Props) => {
  return (
    <section className="base-alert position-relative">
      <p className="alert alert-primary position-absolute" role="alert">
        <h3 className="alert-heading"> {header} </h3>
        {descLineOne} <br />
        {descLineTwo}
        <hr />
        <b>Enjoy. <BsHeartFill /> </b>
      </p>
    </section>
  );
};

export default BaseAlert;
