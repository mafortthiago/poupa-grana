import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import "../../styles/components/Navbar.scss";

export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [user, setUser] = useContext(AuthContext);
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
        {user && (
          <>
            <NavLink className="link-nav" to="/">
              Home
            </NavLink>
            <NavLink className="link-nav" to="/gestor">
              Gestor
            </NavLink>
            <NavLink
              onClick={() => setUser(null)}
              className="link-nav"
              to="/cadastro"
            >
              Sair
            </NavLink>
          </>
        )}
        {!user && (
          <>
            <NavLink className="link-nav" to="/login">
              Entre
            </NavLink>
            <NavLink className="link-nav" to="/cadastro">
              Cadastre-se
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
