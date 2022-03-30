import React from "react";
import "./styles.css";

const SearchBarComponent = ({ searchSong, submitSong, halo }) => {

  return (
    <div className="search-bar">
      <form onSubmit={submitSong}>
        <input type="text" onChange={searchSong} placeholder="Search your favorite song here ..." />
        <p>{halo}</p>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBarComponent;
