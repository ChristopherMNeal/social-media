import React from "react";

function SearchBar() {
  return (
    <form id="search-bar">
      <input type="text" id="search" placeholder="Search"></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SearchBar;

/* <input type="text">	Displays a single-line text input field
<input type="radio">	Displays a radio button (for selecting one of many choices)
<input type="checkbox">	Displays a checkbox (for selecting zero or more of many choices)
<input type="submit">	Displays a submit button (for submitting the form)
<input type="button">	Displays a clickable button */
