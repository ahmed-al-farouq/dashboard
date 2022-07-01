import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { IoCheckmark } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-primary px-3 py-2 text-center mt-4 d-flex gap-4 md:gap-0 align-items-center justify-content-around flex-wrap">
      <div>
        <p className="text-white fs-6 m-0">
          All rights reserved &copy; 2022
        </p>
        <span>
          Designed with <BsHeartFill className="text-danger" /> by
          {" "}
          <a href="https://www.linkedin.com/in/ahmed-al-farouq/" target="_blank" className="link link-light">
            Ahmed Al-Farouq
          </a>
        </span>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center gap-1">
        <p className="text-white fs-5 mb-0 d-flex align-items-center">
          <GiTechnoHeart className="me-1" />
          Used Technologies
        </p>
        <ul className="list-unstyled d-flex flex-column align-items-start text-left" style={{ color: "#e3d9d9" }}>
          <li className="d-flex align-items-center gap-2"><IoCheckmark /> React JS</li>
          <li className="d-flex align-items-center gap-2"><IoCheckmark /> Redux & Redux ToolKit</li>
          <li className="d-flex align-items-center gap-2"><IoCheckmark /> TS</li>
          <li className="d-flex align-items-center gap-2"><IoCheckmark /> Bootstrap 5</li>
          <li className="d-flex align-items-center gap-2"><IoCheckmark /> Firebase</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
