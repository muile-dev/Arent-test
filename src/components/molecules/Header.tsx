import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, MenuItem } from "src/types/common";
import Logo from "../assets/images/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";

import LineNav from "./LineNav";
import MenuDropdown from "./MenuDropdown";

interface HeaderProps {
  navLinks: NavLink[];
  dropdownLinks: MenuItem[];
}

const Header: FC<HeaderProps> = ({ navLinks, dropdownLinks }) => {
  const navigate = useNavigate();
  const menuButton = <img src={MenuIcon} alt="menu button" />;

  return (
    <div className="header wapper">
      <div className="left-panel">
        <div className="logo">
          <a onClick={(_) => navigate("/")}>
            <img alt="App-logo" src={Logo} />
          </a>
        </div>
      </div>
      <div className="right-panel">
        <nav className="header-nav">
          <LineNav links={navLinks} />
        </nav>
        <div className="header-dropdown">
          <MenuDropdown menuButton={menuButton} items={dropdownLinks} />
        </div>
      </div>
    </div>
  );
};

export default Header;
