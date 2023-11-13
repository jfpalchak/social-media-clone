import React from "react";

function Searchbar() {
  return (
    <React.Fragment>
    <form className="search-form">
      <input id="search-input" type="text" placeholder="Search..." />
      <button type="submit">Tweet</button>
    </form>
    </React.Fragment>
  );
}

export default Searchbar;