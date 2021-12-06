import 'bootstrap/dist/css/bootstrap.min.css';
import Proptypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';

const TogglerIcon = ({ navbarToggle }) => (
  <>
    <div
      className="navbar-toggler"
      onClick={navbarToggle}
      onKeyPress={navbarToggle}
      role="button"
      tabIndex="0"
    >
      <span className="navbar-toggler-icon" aria-hidden="true" />
    </div>
    <div
      className="close-icon"
      onClick={navbarToggle}
      onKeyPress={navbarToggle}
      role="button"
      tabIndex="0"
    >
      <AiFillCloseCircle />
    </div>
  </>
);

TogglerIcon.propTypes = {
  navbarToggle: Proptypes.func.isRequired,
};
export default TogglerIcon;
