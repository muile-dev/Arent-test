import { FC } from "react";
import { NavLink, MenuItem } from "src/types/common";
import Logo from "../assets/images/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";

import LineNav from "./LineNav";
import MenuDropdown from "./MenuDropdown";

interface HeaderProps {
  navLinks: NavLink[];
  dropdownLinks: MenuItem[];
  handleOnNavLink: (url: string) => void;
}

const Header: FC<HeaderProps> = ({ navLinks, dropdownLinks, handleOnNavLink }) => {
  const menuButton = <img src={MenuIcon} alt="menu button" />;

  return (
    <div className="header wapper">
      <div className="left-panel">
        <div className="logo">
          <a onClick={(_) => handleOnNavLink("/")}>
            <img alt="App-logo" src={Logo} />
          </a>
        </div>
      </div>
      <div className="right-panel">
        <nav className="header-nav">
          <LineNav links={navLinks} handleOnNavLink={handleOnNavLink} />
        </nav>
        <div className="header-dropdown">
          <MenuDropdown
            menuButton={menuButton}
            items={dropdownLinks}
            handleOnNavLink={handleOnNavLink}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
