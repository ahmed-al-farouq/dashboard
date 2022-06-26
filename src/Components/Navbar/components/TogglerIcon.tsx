import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiFillCloseCircle } from 'react-icons/ai';

interface Props {
  navbarToggle(): void;
}

function TogglerIcon({ navbarToggle }: Props) {
  return (
    <>
      <div
        className="navbar-toggler"
        onClick={navbarToggle}
        onKeyPress={navbarToggle}
        role="button"
        tabIndex={0}
      >
        <span className="navbar-toggler-icon" aria-hidden="true" />
      </div>
      <div
        className="close-icon"
        onClick={navbarToggle}
        onKeyPress={navbarToggle}
        role="button"
        tabIndex={0}
      >
        <AiFillCloseCircle />
      </div>
    </>
  );
}

export default TogglerIcon;
