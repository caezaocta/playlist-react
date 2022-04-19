import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

interface CreatePlaylistProps {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  playlist: {
    title: string;
    description: string;
  };
}

const CreatePlaylist = ({
  handleSubmit,
  handleChange,
  playlist,
}: CreatePlaylistProps) => {
  return (
    <>
      <form className="mb-5" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <h4 className="mb-5">Create Playlist</h4>
          <label htmlFor="playlist-title">Title</label>
          <input
            // variant="standard"
            type="text"
            onChange={handleChange}
            className="form-control custom-range"
            id="playlist-title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter your playlist title"
            value={playlist.title}
            minLength={10}
            // minLength="10"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="playlist-desc">Description</label>
          <input
            // variant="standard"
            type="text"
            name="description"
            onChange={handleChange}
            className="form-control"
            id="playlist-desc"
            placeholder="Enter your playlist description"
            value={playlist.description}
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
