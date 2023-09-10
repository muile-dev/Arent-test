import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "src/types/common";

import CircleCountInfoButton from "./../atoms/CircleCountInfoButton";

interface LineNavProps {
  links: NavLink[];
}

const LineNav: React.FC<LineNavProps> = ({ links }) => {
  const isActive = (link: NavLink) => window.location.pathname === link.url;
  const navigate = useNavigate();

  const handleClick = (link: string) => navigate(link);

  const renderCounter = (count: number) => {
    return <CircleCountInfoButton count={count}></CircleCountInfoButton>;
  };

  return (
    <ul className="line-nav">
      {links.map((link, index) => (
        <li key={index} className={`${isActive(link) ? "active" : ""}`}>
          <img src={link.icon} alt="" />
          {link.count && renderCounter(link.count)}
          <a onClick={(_) => handleClick(link.url)}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default LineNav;
