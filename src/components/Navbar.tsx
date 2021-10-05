import React, { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Todo+Typescript
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список Дел</NavLink>
          </li>
          <li>
            <NavLink to="/about">Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
