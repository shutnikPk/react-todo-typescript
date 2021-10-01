import React, { FC } from "react";

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
            <a href="/">Список Дел</a>
          </li>
          <li>
            <a href="/">Информация</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
