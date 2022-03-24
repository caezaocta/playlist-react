import React from "react";
import "./styles.css";
import "./formlogic.js";

const CreatePlaylist = () => {
  return (
    <form action="" id="form" className="form">
      <h1 className="sub-title">Create Playlist</h1>
      <p className="helper">Please add your favorite song to our playlist</p>
      <ul>
        <label htmlFor="playlist-title">Playlist title</label>
        <li>
          <input
            id="playlist-title"
            name="playlist-title"
            type="text"
            placeholder="Song title"
          />
        </li>

        <label htmlFor="playlist-desc">Playlist description</label>
        <li>
          <textarea
            id="playlist-desc"
            name="playlist-desc"
            // type="text"
            placeholder="Write some story behind the song here"
          ></textarea>
        </li>
        <p id="error-messages"></p>
        <li>
          <button id="submit" type="submit" value="Create!">
            Create!
          </button>
          
        </li>
      </ul>
    </form>
  );
};

export default CreatePlaylist;
