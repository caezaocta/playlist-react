import React from "react";

const CardComponent = ({ img, title, artist, album, desc, id, button, setIsActive, isActive }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3 className="card-title">{title}</h3>
      <p className="card-artist">{artist}</p>
      <h5 className="card-album">{album}</h5>
      <p className="song-desc">{desc}</p>
      <a href={button} className="card-button">Play</a>
      <a href={'#'} className="card-select" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Select' : 'Selected'}
      </a>
      {/* <button type="submit" onClick={status} className="card-button-favorite">Add to Favorite</button> */}
    </div>
  );
};

export default CardComponent;
