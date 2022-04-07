// import logo from './logo.svg';
import "./App.css";
import CardItem from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchbar";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import CreatePlaylist from "./components/createplaylist";
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector(state => state.token.value)
  console.log(token);

  const [tracks, setTracks] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedTracksId, setSelectedTracksId] = useState([]);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [playlists, setPlaylists] = useState([])

  // let token = window.localStorage.getItem("token");
  const TokenHeader = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }


  const handleSearchSong = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`https://api.spotify.com/v1/search?q=${searchKey}&type=track`, TokenHeader())
    //   {
    //     // headers: {
    //     //   Authorization: `Bearer ${token}`,
    //     // },
    //     // params: {
    //     //   q: searchKey,
    //     //   type: "track",
    //     // },
    //   },
    // );
    const newData = data.tracks.items.map((item) => ({
      ...item,
      selected: false,
    }));
    setTracks(newData);
  };

  const handleCreatePlaylist = async e => {
    e.preventDefault();
    const uris = selectedTracksId.map(item => item.uri);
    console.log(uris);
    axios
      .get("https://api.spotify.com/v1/me", TokenHeader())
      .then(function (response) {
        axios
          .post(
            `https://api.spotify.com/v1/users/${response.data.id}/playlists`,
            {
              "name": title,
              "description": desc,
              "public": false,
            },
            TokenHeader(),
            // {
            //   headers: {
            //     Authorization: `Bearer ${token}`
            //   },
            // }
          )
          .then(function (response) {

            axios.post(
              `https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
              {
                uris: selectedTracksId
              },
              TokenHeader(),
              // {
              //   headers: {
              //     Authorization: `Bearer ${token}`
              //   },
              // }
            );
          });
      });
    alert('New Playlist added')
  };

  function getClassName(selected) {
    if (selected) {
      return "card btn btn-primary card-button mb-5  p-1 card d-flex text-dark";
    } else {
      return "card btn btn-outline-primary card-button mb-5 p-1 card d-flex text-dark";
    }
  }

  function onTrackItemClick(id) {
    console.log(id);
    setSelectedTracksId((selectedTracksId) =>
      selectedTracksId.filter((tracksId) => tracksId === id).length
        ? selectedTracksId.filter((tracksId) => tracksId !== id)
        : [...selectedTracksId, id]
    );
    console.log(selectedTracksId)
  }


  const handleTitleInput = (val) => {
    setTitle(val.target.value)
    setPlaylists(false)
  }

  const handleDescInput = (val) => {
    setDesc(val.target.value)
    setPlaylists(false)
  }

  const handleSubmit = (val) => {
    alert('data submitted', val);
    val.preventDefault()
    console.log(val.target.value)
    setPlaylists(true)

  }

  return (
    < div className="App" >
      <Navbar />
      <div className="row d-flex justify-content-center">
        <div className="col-4"></div>{" "}
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-4">
          <>
            <div className="row d-flex justify-content-center">
              {playlists ? (
                <h3 className="title-return-style page-title sub-title">{title}</h3>
              ) : (
                <p className="hint">Your playlist title will be written here</p>
              )}
              {playlists ? (
                <p className="desc-return-style page-title" id="desc-return">
                  {desc}
                </p>
              ) : null}
              <div className="col">
                {/* <Playlist
                  img={"https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FkJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
                  title={title}
                  desc={desc}
                /> */}
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col">
                <CreatePlaylist
                  titleInput={handleTitleInput}
                  descInput={handleDescInput}
                  onSubmit={handleCreatePlaylist}
                />
              </div>
            </div>
          </>

        </div>{" "}
      </div>
      <div className="container">
        <div className="row"></div>{" "}
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            {" "}
            {token ? (
              <>
                <SearchBar
                  onChange={(e) => setSearchKey(e.target.value)}
                  onSubmit={handleSearchSong}
                />{" "}
              </>
            ) : (
              <h2> Please Login first </h2>
            )}{" "}
          </div>{" "}
        </div>
      </div>
      {/* <div className="selected-tracks-container">
                      {renderCombinedTracks()}
                    </div> */} {" "}
      {/* <p>{uris}</p> */}
      <div className="selected-tracks-container">
        {" "}
        {/* {renderUris()} */}{" "}
        {selectedTracksId.length > 0 && (
          <>
            {/* <h6>Selected Tracks List</h6> */}
            {tracks
              .filter((item) => selectedTracksId.includes(item))
              .map((newTrack) => (
                <CardItem
                  key={newTrack.uri}
                  title={newTrack.name}
                  artist={newTrack.artists[0].name}
                  img={newTrack.album.images[0].url}
                  getClassName={getClassName(
                    selectedTracksId.includes(newTrack.uri)
                  )}
                  onClick={onTrackItemClick}
                  // onClick={handleSelect}
                  // remove={removeSelectedTrack}
                  track={newTrack}
                  isSelected={
                    selectedTracksId.includes(newTrack.uri)
                      ? "Selected"
                      : "Select"
                  }
                />
              ))}{" "}
          </>
        )}{" "}
      </div>

      <div className="row d-flex justify-content-center">
        {" "}
        {tracks.map((track) => (
          <CardItem
            key={track.uri}
            title={track.name}
            artist={track.artists[0].name}
            img={track.album.images[0].url}
            getClassName={getClassName(selectedTracksId.includes(track.uri))}
            onClick={onTrackItemClick}
            // onClick={handleSelect}
            track={track}
            isSelected={
              selectedTracksId.includes(track.uri) ? "Selected" : "Select"
            }
          />
        ))}{" "}
      </div>{" "}
    </div >
  );
}

export default App;
