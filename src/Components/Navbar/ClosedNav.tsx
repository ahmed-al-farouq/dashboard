import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Icons
import { AiFillDashboard, AiFillProject } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

const ClosedNav = React.forwardRef(
  (props, ref: React.Ref<HTMLUListElement>) => {
    return (
      <ul className="nav flex-column closed-nav" ref={ref}>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <AiFillDashboard title="Dashboard" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/projects" className="nav-link">
            <AiFillProject title="Projects" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/our-clients" className="nav-link">
            <BsFillPeopleFill title="Our Clients" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/profile" className="nav-link">
            <CgProfile title="Profile" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">
            <BiLogOut title="Log-Out" />
          </a>
        </li>
      </ul>
    );
  }
);

export default ClosedNav;
