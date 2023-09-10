import React from "react";

interface CircleCountInfoButtonProps {
  count: number;
}

const CircleCountInfoButton: React.FC<CircleCountInfoButtonProps> = ({
  count,
}) => {
  return (
    <button className="circle-count-info-button">
      <span className="count">{count}</span>
    </button>
  );
};

export default CircleCountInfoButton;
