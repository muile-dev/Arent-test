import React, { ReactNode, useState } from "react";
import { MenuItem } from "../../types/common";

interface MenuDropdownProps {
  menuButton: ReactNode;
  items: MenuItem[];
  handleOnNavLink: (url: string) => void;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  menuButton,
  items,
  handleOnNavLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="menu-dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {menuButton}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className={"item"}>
              <a onClick={(_) => handleOnNavLink(item.url)}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuDropdown;
