import React from "react";

function FilterData({ onSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
}

export default FilterData;
