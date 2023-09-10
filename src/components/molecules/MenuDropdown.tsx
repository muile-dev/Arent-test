import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MenuItem } from "../../types/common";

interface MenuDropdownProps {
  menuButton: ReactNode;
  items: MenuItem[];
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ menuButton, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  return (
    <div className="menu-dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {menuButton}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className={"item"}>
              <a onClick={(_) => navigate(item.url)}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuDropdown;
