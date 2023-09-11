import React from "react";
import { NavLink } from "src/types/common";

import CircleCountInfoButton from "./../atoms/CircleCountInfoButton";

interface LineNavProps {
  links: NavLink[];
  handleOnNavLink: (url: string) => void;
}

const LineNav: React.FC<LineNavProps> = ({ links, handleOnNavLink }) => {
  const isActive = (link: NavLink) => window.location.pathname === link.url;

  const handleClick = (link: string) => handleOnNavLink(link);

  const renderCounter = (count: number) => {
    return <CircleCountInfoButton count={count}></CircleCountInfoButton>;
  };

  return (
    <ul className="line-nav">
      {links.map((link, index) => (
        <li key={index} className={`${isActive(link) ? "active" : ""}`}>
          <img src={link.icon} alt="" />
          {link.count && renderCounter(link.count)}
          {/* eslint-disable-next-line */}
          <a href="javascript:void(0)" onClick={(_) => handleClick(link.url)}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LineNav;
