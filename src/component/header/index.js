import React from "react";
import "./index.css";
import logo from "./logoAirbnb.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} height={32} alt="logo" />
    </header>
  );
}
