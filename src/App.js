import React, { useState } from "react";
// import axios from "axios";
import ReactDOM from "react-dom";
import data from "./songTrack";
import SearchBar from "./components/searchbar";
import CreatePlaylist from "./components/createplaylist";
import CardComponent from "./components/card"
import NavComponent from "./components/navbar"


function App() {
  const songData = [
    {
      img: 'https://www.the360mag.com/wp-content/uploads/2019/04/IMG_2513.jpg',
      title: 'you were good to me',
      artist: 'Jeremy Zucker, Chelsea Cutler',
      album: 'brent',
      desc: 'you were good to me” explores a heart-wrenching break up that left both parties emotionally wrecked.',
    },
    {
      img: 'https://i.scdn.co/image/ab67616d0000b273210933bff4e6e68dc23472b0',
      title: 'Crying over you',
      artist: 'Honne',
      album: 'Love Me / Love Me Not',
      desc: 'This song is about two people who broke up broke up they say hurtful things to each other.',
    },
    {
      img: 'https://i.scdn.co/image/ab67616d0000b2730a4ae12eb3a9fb7e3815001c',
      title: 'I Miss Yout',
      artist: 'Blink 182',
      album: 'blink-182',
      desc: 'tells about depression can have on a relationship and its subsequent fallout.',
    }

  ]

  const handleClick = () => {
    const artist = data.album.artists[0].name;
    const song = data.album.name;
    const album = data.album.type;
    const relDate = data.album.release_date;
    const rate = data.popularity;
    const img = data.album.images[0].url;

    let addCard = React.createElement(
      "div",
      { className: "card" },
      React.createElement("img", { src: img }),
      React.createElement("h3", { className: "card-title" }, song),
      React.createElement("p", { className: "card-artist" }, artist),
      React.createElement("h5", { className: "card-album" }, album),
      React.createElement(
        "p",
        { className: "song-desc" },
        `This song was released in ` +
        relDate +
        ` with the popularity rated ` +
        rate +
        " accross the US billboard top chart"
      ),
      React.createElement("button", { className: "card-button" }, "Select")
    );
    ReactDOM.render(addCard, document.getElementById("card-api"));
  };

  const firstData = songData[0];
  const secondData = songData[1];
  const thirdData = songData[2];

  return (
    <div >
      <NavComponent />
      <div className="container" id="container" >
        <CreatePlaylist
        />
        <SearchBar />
        <div className="playlist-container" id="playlist-container">

          <h1 className="sub-title">Songs on This Playlist <span><a className="callapi" onClick={handleClick}>
            Add song
          </a></span> </h1>



          <CardComponent
            img={firstData.img}
            title={firstData.title}
            album={firstData.album}
            artist={firstData.artist}
            desc={firstData.desc}
          />

          <CardComponent
            {...secondData}
          />

          <CardComponent
            {...thirdData}
          />





          <div id="card-api"></div>
          {/* <div className="card">
            <img id="img-api" src="" alt="" />
            <h3 className="card-title" id="card-title-api"></h3>
            <p className="card-artist" id="card-artist-api"></p>
            <h5 className="card-album" id="card-album-api"></h5>
            <p className="song-desc" id="song-desc-api"></p>
            <button className="card-button" id="card-button-api">
              Select
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
