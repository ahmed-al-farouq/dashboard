import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
// Icons
import { AiFillDashboard, AiFillProject } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';

const CloseNav = ({ closedNavRef }) => (
  <ul className="nav flex-column closen-nav" ref={closedNavRef}>
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
      <a href="/our-customers" className="nav-link">
        <BsFillPeopleFill title="Our Cutomers" />
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

CloseNav.propTypes = {
  closedNavRef: PropTypes.oneOfType([
    PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default CloseNav;