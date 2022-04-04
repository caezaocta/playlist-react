// import logo from './logo.svg';
import "./App.css";
import CardItem from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GetPlaylist from './components/getplaylist'
import Navbar from './components/navbar'


function App() {
  const [tracks, setTracks] = useState([])
  const [searchKey, setSearchKey] = useState("");
  const [selectedTracksId, setSelectedTracksId] = useState([]);
  // const [uris, setUris] = useState([]);

  let token = window.localStorage.getItem("token");

  const handleSearchSong = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "track",
      },
    });

    const newData = data.tracks.items.map((item) => ({
      ...item,
      selected: false,
    }));
    setTracks(newData);
  };

  function getClassName(selected) {
    if (selected) {
      return "card btn btn-primary card-button mb-5  p-1 card d-flex text-dark";
    } else {
      return "card btn btn-outline-primary card-button mb-5 p-1 card d-flex text-dark";
    }
  }

  function onTrackItemClick(id) {
    setSelectedTracksId((selectedTracksId) =>
      selectedTracksId.filter((tracksId) => tracksId === id).length
        ? selectedTracksId.filter((tracksId) => tracksId !== id)
        : [...selectedTracksId, id]
    );
  }

  return (
    <div className="App">
      <Navbar />



      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            {token ? (
              <>
                <SearchBar
                  onChange={(e) => setSearchKey(e.target.value)}
                  onSubmit={handleSearchSong}
                />
              </>
            ) : (
              <h2>Please Login first</h2>
            )}
          </div>
        </div>

      </div>




      {/* <div className="selected-tracks-container">
          {renderCombinedTracks()}
        </div> */}
      {/* <p>{uris}</p> */}

      <div className="selected-tracks-container">
        {/* {renderUris()} */}
        {selectedTracksId.length > 0 && (
          <>
            {/* <h6>Selected Tracks List</h6> */}

            {tracks
              .filter((item) =>
                selectedTracksId.includes(item)
              )
              .map((newTrack) => (
                <CardItem
                  key={newTrack.id}
                  title={newTrack.name}
                  artist={newTrack.artists[0].name}
                  img={newTrack.album.images[0].url}
                  getClassName={getClassName(
                    selectedTracksId.includes(newTrack.id)
                  )}
                  onClick={onTrackItemClick}
                  // onClick={handleSelect}
                  // remove={removeSelectedTrack}
                  track={newTrack}
                  isSelected={
                    selectedTracksId.includes(newTrack.id)
                      ? "Selected"
                      : "Select"
                  }
                />
              ))}
          </>
        )}
      </div>

      <div className="row d-flex justify-content-center">
        {tracks.map((track) => (
          <CardItem
            key={track.id}
            title={track.name}
            artist={track.artists[0].name}
            img={track.album.images[0].url}
            getClassName={getClassName(selectedTracksId.includes(track.id))}
            onClick={onTrackItemClick}
            // onClick={handleSelect}
            track={track}
            isSelected={selectedTracksId.includes(track.id) ? "Selected" : "Select"}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

