import React, { useState } from "react";
import { Button, TextField } from "@mui/material"

const CreatePlaylist = ({ onSubmit, titleInput, descInput }) => {
  return (
    <>
      <form className="mb-5" onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <h4 className="mb-5">Create Playlist</h4>
          <label htmlFor="playlist-title">Title</label>
          <TextField variant="standard"
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
          <TextField variant="standard"
            type="text"
            onChange={descInput}
            className="form-control"
            id="playlist-desc"
            placeholder="Enter your playlist description"
          />
        </div>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default CreatePlaylist;
