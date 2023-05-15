import React from "react";
import { NavLink } from "react-router-dom"; // <== IMPORT

function Header() {
  return (
    <nav>
      <NavLink to="/">
        <i class="fa-solid fa-house fa-2xl" style={{ color: "#ffffff" }}></i>
      </NavLink>
    </nav>
  );
}

export default Header;
