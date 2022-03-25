import React, { useState } from "react";
import "./styles.css";

const CreatePlaylist = () => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [print, setPrint] = useState(false);

  function getTitle(val) {
    setTitle(val.target.value);
    setPrint(false);
    console.warn(val.target.value);
  }

  function getDesc(val) {
    setDesc(val.target.value);
    setPrint(false);
    console.warn(val.target.value);
  }

  return (
    <div>
      <div className="return">
        {print ? (
          <h3 className="title-return-style page-title sub-title">{title}</h3>
        ) : (
          <p className="hint">Your playlist title will be written here</p>
        )}
        {print ? (
          <p className="desc-return-style page-title" id="desc-return">
            {desc}
          </p>
        ) : null}
      </div>
      <div className="form-container">
        <div id="form" className="form">
          <h1 className="sub-title">Create Playlist</h1>
          <p className="helper">
            Please add your favorite song to our playlist
          </p>
          <ul>
            <label htmlFor="playlist-title" className="label">
              Playlist title
            </label>
            <li>
              <input
                id="playlist-title"
                name="playlist-title"
                type="text"
                placeholder="Song title"
                onChange={getTitle}
              />
            </li>

            <label htmlFor="playlist-desc" className="label">
              Playlist description
            </label>
            <li>
              <textarea
                id="playlist-desc"
                name="playlist-desc"
                // type="text"
                placeholder="Write some story behind the song here"
                onChange={getDesc}
              ></textarea>
            </li>
            <p id="error-messages"></p>
            <li>
              <button
                id="submit"
                type="submit"
                value="Create!"
                onClick={() => {
                  setPrint(true);
                  alert("Your playlist has been modified");
                }}
              >
                Create!
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;
