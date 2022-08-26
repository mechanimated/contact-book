import React from "react";

// Function to pass search value back up via state.
function Search({search}) {

  return (
    <form>
      <input
        type="text"
        placeholder="Search Contacts"
        onChange={(e) => search(e.target.value)}
      /> 
    </form>
  );
}

export default Search;
