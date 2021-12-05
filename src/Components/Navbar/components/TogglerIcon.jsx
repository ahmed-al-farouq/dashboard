/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillCloseCircle } from 'react-icons/ai';
// Redux
import { useSelector } from 'react-redux';
import { toggleNavbar } from '../../../redux/action';

const TogglerIcon = ({ dispatch, navbarToggle }) => {
  const navbarIsOpened = useSelector((state) => state.navbarIsOpened);
  const navbarToggleState = () => {
    navbarToggle();
    navbarIsOpened
      ? dispatch(toggleNavbar(false))
      : dispatch(toggleNavbar(true));
  };
  return (
    <>
      <div
        className="navbar-toggler"
        onClick={navbarToggleState}
      >
        <span className="navbar-toggler-icon" aria-hidden="true" />
      </div>
      <div className="close-icon" onClick={navbarToggleState}>
        <AiFillCloseCircle />
      </div>
    </>
  );
};

export default TogglerIcon;
