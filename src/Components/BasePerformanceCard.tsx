import React from 'react';
// Icons
import { AiOutlineArrowUp } from 'react-icons/ai';

interface Props {
  title: String;
  value: String;
  icon: JSX.Element;
  incrementPercent: String;
  time: String;
};

const BasePerformanceCard = ({ title, value, icon, incrementPercent: incrementPercent, time } : Props) => {
  return (
    <div className="card border-bottom border-info my-2">
      <div className="card-header bg-primary d-flex justify-content-between text-white">
        <div className="text mx-1">
          <h3 className="title">{title}</h3>
          <span>{value}</span>
        </div>
        {icon}
      </div>
      <div className="card-body">
        <span className="increment-percent d-block mb-1">
          <AiOutlineArrowUp />
          {incrementPercent}
        </span>
        <span className="time text-muted">{time}</span>
      </div>
    </div>
  );
};

export default BasePerformanceCard;
