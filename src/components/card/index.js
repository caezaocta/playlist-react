import React from "react";

const CardComponent = ({ img, title, artist, album, desc, id, button }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3 className="card-title">{title}</h3>
      <p className="card-artist">{artist}</p>
      <h5 className="card-album">{album}</h5>
      <p className="song-desc">{desc}</p>
      <a href={button} className="card-button">Select</a>
    </div>
  );
};

export default CardComponent;
