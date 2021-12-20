import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const CloseNav = ({ closedNavRef }) => (
  <ul className="nav flex-column closen-nav" ref={closedNavRef}>
    <li className="nav-item">
      <NavLink to="/" className="nav-link" activeClassName="active">
        <AiFillDashboard title="Dashboard" />
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/projects" className="nav-link" activeClassName="active">
        <AiFillProject title="Projects" />
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/our-customers" className="nav-link" activeClassName="active">
        <BsFillPeopleFill title="Our Cutomers" />
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/profile" className="nav-link" activeClassName="active">
        <CgProfile title="Profile" />
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/login" className="nav-link" activeClassName="active">
        <BiLogOut title="Log-Out" />
      </NavLink>
    </li>
  </ul>
);

CloseNav.propTypes = {
  closedNavRef: PropTypes.oneOfType([
    PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default CloseNav;
