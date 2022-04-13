import React from "react";

const CardItem = ({ track, id, onClick, getClassName, img, artist, title, isSelected }) => {
  return (

    <div className={getClassName}
      style={{ width: "18rem", height: "100px" }}

      onClick={() => onClick(track.uri)}


    >
      <div className="row d-flex justify-content-between">
        <div className="col-4">
          <img src={img} alt="" width={"90px"} height={"90px"} className="" />
        </div>
        <div className="col-8">
          <p>{id}</p>
          <h3 className="song-title">{title}</h3>
          <h6 className="song-artist">{artist}</h6>
          <h6 className="song-artist btn btn-card btn-outline-success">{isSelected}</h6>
        </div>
      </div>


    </div>

  );
};

export default CardItem;

