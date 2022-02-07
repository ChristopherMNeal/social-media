import React from "react";
import NavBar from "./NavBar.js";
import SearchBar from "./SearchBar.js";

function Header() {
  return (
    <React.Fragment>
      <NavBar />
      <SearchBar />
    </React.Fragment>
  );
}

export default Header;
