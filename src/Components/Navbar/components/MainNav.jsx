/* eslint-disable consistent-return */
import 'bootstrap/dist/css/bootstrap.min.css';
import Proptypes from 'prop-types';
// Router
import { Link } from 'react-router-dom';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const MainNav = ({
  navbarToggle, hiddenClass, navRef,
}) => (
  <ul className={`nav nav-pills flex-column fs-6 mt-4 align-self-center ${hiddenClass}`} ref={navRef}>
    <li
      className="nav-item my-2"
    >
      <div
        onClick={navbarToggle}
        onKeyPress={navbarToggle}
        role="button"
        tabIndex="0"
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
        onClick={navbarToggle}
        onKeyPress={navbarToggle}
        role="button"
        tabIndex="0"
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
        onClick={navbarToggle}
        onKeyPress={navbarToggle}
        role="button"
        tabIndex="0"
      >
        <Link to="/our-customers">
          <BsFillPeopleFill />
        </Link>
        <Link to="/our-customers">
          Our Cutomers
        </Link>
      </div>
    </li>
    <li
      className="nav-item my-2"
    >
      <div
        onClick={navbarToggle}
        onKeyPress={navbarToggle}
        role="button"
        tabIndex="0"
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
        onClick={navbarToggle}
        onKeyPress={navbarToggle}
        role="button"
        tabIndex="0"
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

MainNav.propTypes = {
  navbarToggle: Proptypes.func.isRequired,
  hiddenClass: Proptypes.string.isRequired,
  navRef: Proptypes.oneOfType([
    Proptypes.func,
    Proptypes.shape({ current: Proptypes.instanceOf(Element) }),
  ]).isRequired,
};
export default MainNav;
