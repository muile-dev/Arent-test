import React, { ReactNode } from "react";
import "./../../styles/CircleProgressBar.scss";

interface CircleProgressBarProps {
  percentage: number;
  strokeWidth: number;
  size: number;
  date: string | ReactNode;
}

const PercentageCircle: React.FC<CircleProgressBarProps> = ({
  percentage,
  date,
}) => {
  return (
    <div className="circle percentage-79">
      <span>
        <label className="small-text">{date}</label>
        {percentage}%
      </span>
      <div className="percentage-bar"></div>
    </div>
  );
};

export default PercentageCircle;
