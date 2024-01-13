import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/Navbar.scss";
export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div className="menu" onClick={() => setMenuActive(true)}>
        <div className="menu-item mni1"></div>
        <div className="menu-item mni2"></div>
        <div className="menu-item mni3"></div>
      </div>
      <nav className={menuActive ? "nav nav-mobile" : "nav"}>
        <span className="close-menu" onClick={() => setMenuActive(false)}>
          x
        </span>
        <NavLink className="link-nav" to="/Entrada">
          Home
        </NavLink>
        <NavLink className="link-nav" to="/Entrada">
          Inserir Entrada
        </NavLink>
        <NavLink className="link-nav" to="/Saída">
          Inserir Saída
        </NavLink>
        <NavLink className="link-nav" to="/Gestor">
          Gestor
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
