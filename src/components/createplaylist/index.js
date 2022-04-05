import React, { useState } from "react";

const CreatePlaylist = ({ onSubmit, titleInput, descInput }) => {
  // const [title, setTitle] = useState(null);
  // const [desc, setDesc] = useState(null);
  // const [print, setPrint] = useState(false);

  // function getTitle(val) {
  //   setTitle(val.target.value);
  //   setPrint(false);
  //   console.warn(val.target.value);
  // }

  // function getDesc(val) {
  //   setDesc(val.target.value);
  //   setPrint(false);
  //   console.warn(val.target.value);
  // }

  return (
    <>
      <form className="mb-5" onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <h4 className="mb-5">Create Playlist</h4>
          <label htmlFor="playlist-title">Title</label>
          <input
            type="text"
            onChange={titleInput}
            className="form-control custom-range"
            id="playlist-title"
            aria-describedby="emailHelp"
            placeholder="Enter your playlist title"
            minLength="10"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="playlist-desc">Description</label>
          <input
            type="text"
            onChange={descInput}
            className="form-control"
            id="playlist-desc"
            placeholder="Enter your playlist description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePlaylist;
