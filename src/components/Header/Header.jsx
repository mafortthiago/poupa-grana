import React from "react";
import "../../styles/components/Header.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import Logo from "../../assets/img/logo.png";
export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <h1>
          <img src={Logo} alt="Logo do site" />
          Poupa Grana
        </h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
