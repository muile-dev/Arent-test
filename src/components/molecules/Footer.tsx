import React from "react";

import { footerLinks } from "../../constants/common";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-nav">
        {footerLinks.map((link, index) => (
          <li key={index}>
            {/* eslint-disable-next-line */}
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
