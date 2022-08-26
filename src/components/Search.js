import React from "react";

function Search({search}) {



  return (


    <form>
      <input
        style={{marginLeft: "740px"}}
        type="text"
        placeholder="Search Contacts"
        onChange={(e) => search(e.target.value)}
      /> 
    </form>
  );
}

export default Search;
