import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, memo } from 'react';
// Icons
import { BiWorld } from 'react-icons/bi';
// Router
import { Link } from 'react-router-dom';
// Components
import TogglerIcon from './components/TogglerIcon';
import ClosedNav from './components/closedNav';
import MainNav from './components/MainNav';

const SideNavbar = () => {
  const navbarRef = useRef();
  const navRef = useRef();
  const closedNavRef = useRef();
  const logoRef = useRef();
  // Toggle Navbar
  const navbarToggle = () => {
    navbarRef.current.classList.toggle('close');
    navbarRef.current.classList.toggle('col-xl-2');
    navbarRef.current.classList.toggle('col-lg-3');
    navbarRef.current.classList.toggle('col-md-4');
    navbarRef.current.classList.toggle('col-sm-4');
    navbarRef.current.classList.toggle('col-12');
    navRef.current.classList.toggle('hidden');
    navRef.current.classList.toggle('d-none');
    closedNavRef.current.classList.toggle('hidden');
    logoRef.current.classList.toggle('hidden');
  };
  return (
    <nav
      className="bg-light navbar-light d-flex flex-column
      align-items-center px-1 py-5 col-sm-1 col-2 close"
      ref={navbarRef}
    >
      <TogglerIcon navbarToggle={navbarToggle} />
      <div className="navbar-logo d-flex align-items-center justify-content-center" ref={logoRef}>
        <BiWorld />
        <Link to="/" clLinkssName="mb-0 mx-1">
          ALFAROUQ
        </Link>
      </div>
      <MainNav navRef={navRef} hiddenClass="hidden d-none" navbarToggle={navbarToggle} />
      <ClosedNav closedNavRef={closedNavRef} />
    </nav>
  );
};

export default memo(SideNavbar);
