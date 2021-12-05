import React from 'react';
import PropTypes from 'prop-types';
// Icons
import { AiOutlineArrowUp } from 'react-icons/ai';

const Card = ({
  title, value, icon, increasementPercent, time,
}) => (
  <div className="card border-bottom border-info my-2">
    <div className="card-header bg-primary d-flex justify-content-between">
      <div className="text mx-1">
        <h3 className="title">{title}</h3>
        <span>{value}</span>
      </div>
      {icon}
    </div>
    <div className="card-body">
      <span className="increasement-percent d-block mb-1">
        <AiOutlineArrowUp />
        {increasementPercent}
      </span>
      <span className="time text-muted">{time}</span>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.element,
  increasementPercent: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

Card.defaultProps = {
  icon: '',
};
export default Card;
