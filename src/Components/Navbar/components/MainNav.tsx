import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Router
import { Link } from 'react-router-dom';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const MainNav = React.forwardRef((
  props: {
    navbarToggle: () => void,
    hiddenClass: string,
  },
  ref: React.Ref<HTMLUListElement>
  ) => {
  return (
    <ul className={`nav nav-pills flex-column fs-6 mt-5 align-self-center ${props.hiddenClass}`} ref={ref}>
      <li
        className="nav-item my-2"
      >
        <div
          onClick={props.navbarToggle}
          onKeyPress={props.navbarToggle}
          role="button"
          tabIndex={0}
        >
          <Link to="/">
            <AiFillDashboard />
          </Link>
          <Link to="/">
            Dashboard
          </Link>
        </div>
      </li>
      <li
        className="nav-item my-2"
      >
        <div
          onClick={props.navbarToggle}
          onKeyPress={props.navbarToggle}
          role="button"
          tabIndex={0}
        >
          <Link to="/projects">
            <AiFillProject />
          </Link>
          <Link to="/projects">
            Projects
          </Link>
        </div>
      </li>
      <li
        className="nav-item my-2"
      >
        <div
          onClick={props.navbarToggle}
          onKeyPress={props.navbarToggle}
          role="button"
          tabIndex={0}
        >
          <Link to="/our-customers">
            <BsFillPeopleFill />
          </Link>
          <Link to="/our-customers">
            Our Customers
          </Link>
        </div>
      </li>
      <li
        className="nav-item my-2"
      >
        <div
          onClick={props.navbarToggle}
          onKeyPress={props.navbarToggle}
          role="button"
          tabIndex={0}
        >
          <Link to="/profile">
            <CgProfile />
          </Link>
          <Link to="/profile">
            Profile
          </Link>
        </div>
      </li>
      <hr />
      <li
        className="nav-item my-2"
      >
        <div
          onClick={props.navbarToggle}
          onKeyPress={props.navbarToggle}
          role="button"
          tabIndex={0}
        >
          <Link to="/login">
            <BiLogOut />
          </Link>
          <Link to="/login">
            Log-Out
          </Link>
        </div>
      </li>
    </ul>
  );
});

export default MainNav;
