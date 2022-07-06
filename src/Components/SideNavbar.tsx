import React, { useRef, memo, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Icons
import { BiWorld } from "react-icons/bi";
// Router
import { useNavigate } from "react-router-dom";
// Components
import TogglerIcon from "./Navbar/TogglerIcon";
import ClosedNav from "./Navbar/ClosedNav";
import MainNav from "./Navbar/MainNav";

function SideNavbar() {
  const navbarRef = useRef<HTMLUListElement>(null);
  const mainNavRef = useRef<HTMLUListElement>(null);
  const closedNavRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();

  // Toggle Navbar
  const navbarToggle = () => {
    const navbar = navbarRef.current;
    const toggleList: string[] = [
      "close",
      "col-xl-2",
      "col-lg-3",
      "col-md-4",
      "col-sm-4",
      "col-12",
    ];
    if (navbar)
      toggleList.map((item: string) => {
        navbar.classList.toggle(item);
      });

    const nav = mainNavRef.current;
    if (nav) {
      nav.classList.toggle("hidden");
      nav.classList.toggle("d-none");
    }
    const closedNav = closedNavRef.current;
    if (closedNav) closedNav.classList.toggle("hidden");
  };

  const goHome = () => {
    navbarToggle();
    navigate("/");
  };

  return (
    <nav
      className="bg-light navbar-light d-flex flex-column
      align-items-center px-1 py-5 col-sm-1 col-2 close"
      style={{ zIndex: 10 }}
      ref={navbarRef}
    >
      <TogglerIcon navbarToggle={navbarToggle} />
      <div className="navbar-logo d-flex align-items-center justify-content-center" onClick={goHome}>
        <BiWorld />
        <span className="mb-0 mx-1">
          ALFAROUQ
        </span>
      </div>
      <MainNav
        ref={mainNavRef}
        hiddenClass="hidden d-none"
        navbarToggle={navbarToggle}
      />
      <ClosedNav ref={closedNavRef} />
    </nav>
  );
}

export default memo(SideNavbar);
