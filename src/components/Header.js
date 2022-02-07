import React from "react";
import NavBar from "./NavBar.js";
import SearchBar from "./SearchBar.js";

function Header() {
  return (
    <div id="navbar-div">
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default Header;
