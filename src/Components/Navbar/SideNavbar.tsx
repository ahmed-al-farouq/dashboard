import React, { useRef, memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Icons
import { BiWorld } from 'react-icons/bi';
// Router
import { Link } from 'react-router-dom';
// Components
import TogglerIcon from './components/TogglerIcon';
import ClosedNav from './components/ClosedNav';
import MainNav from './components/MainNav';

function SideNavbar() {
  const navbarRef = useRef<HTMLUListElement>(null);
  const mainNavRef = useRef<HTMLUListElement>(null);
  const closedNavRef = useRef<HTMLUListElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Toggle Navbar
  const navbarToggle = () => {
    const navbar = navbarRef.current;
    if (navbar) {
      navbar.classList.toggle('close');
      navbar.classList.toggle('col-xl-2');
      navbar.classList.toggle('col-lg-3');
      navbar.classList.toggle('col-md-4');
      navbar.classList.toggle('col-sm-4');
      navbar.classList.toggle('col-12');
    }
    const nav = mainNavRef.current;
    if (nav) {
      nav.classList.toggle('hidden');
      nav.classList.toggle('d-none');
    }
    const closedNav = closedNavRef.current;
    if (closedNav)
      closedNav.classList.toggle('hidden');
    const logo = logoRef.current;
    if (logo)
      logo.classList.toggle('hidden');
  };
  return (
    <nav
      className="bg-light navbar-light d-flex flex-column
      align-items-center px-1 py-5 col-sm-1 col-2 close"
      ref={navbarRef}
    >
      <TogglerIcon navbarToggle={navbarToggle} />
      <div className="navbar-logo d-flex align-items-center justify-content-center hidden" ref={logoRef}>
        <BiWorld />
        <Link to="/" className="mb-0 mx-1">
          ALFAROUQ
        </Link>
      </div>
      <MainNav ref={mainNavRef} hiddenClass="hidden d-none" navbarToggle={navbarToggle} />
      <ClosedNav ref={closedNavRef} />
    </nav>
  );
}

export default memo(SideNavbar);
