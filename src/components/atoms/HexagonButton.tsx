import React, { ReactNode } from "react";
import "../../styles/HexagonButton.scss";
import HexagonBackgroundImage from "../assets/images/background/hexagon.svg";

interface HexagonButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const HexagonButton: React.FC<HexagonButtonProps> = ({ children, onClick }) => {
  return (
    <button className="hexagon" onClick={onClick}>
      <img src={HexagonBackgroundImage} alt="hexagon" className="bg-image" />
      {children}
    </button>
  );
};

export default HexagonButton;
