/* eslint-disable consistent-return */
import 'bootstrap/dist/css/bootstrap.min.css';
import Proptypes from 'prop-types';
// Router
import { NavLink } from 'react-router-dom';
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
      <NavLink to="/" activeClassName="active" onClick={navbarToggle}>
        <AiFillDashboard />
      </NavLink>
      <NavLink to="/" activeClassName="active" onClick={navbarToggle}>
        Dashboard
      </NavLink>
    </li>
    <li
      className="nav-item my-2"
    >
      <NavLink to="/projects" activeClassName="active" onClick={navbarToggle}>
        <AiFillProject />
      </NavLink>
      <NavLink to="/projects" activeClassName="active" onClick={navbarToggle}>
        Projects
      </NavLink>
    </li>
    <li
      className="nav-item my-2"
    >
      <NavLink to="/our-customers" activeClassName="active" onClick={navbarToggle}>
        <BsFillPeopleFill />
      </NavLink>
      <NavLink to="/our-customers" activeClassName="active" onClick={navbarToggle}>
        Our Cutomers
      </NavLink>
    </li>
    <li
      className="nav-item my-2"
    >
      <NavLink to="/profile" activeClassName="active" onClick={navbarToggle}>
        <CgProfile />
      </NavLink>
      <NavLink to="/profile" activeClassName="active" onClick={navbarToggle}>
        Profile
      </NavLink>
    </li>
    <hr />
    <li
      className="nav-item my-2"
    >
      <NavLink to="/login" activeClassName="active" onClick={navbarToggle}>
        <BiLogOut />
      </NavLink>
      <NavLink to="/login" activeClassName="active" onClick={navbarToggle}>
        Log-Out
      </NavLink>
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
