import React from "react";
// import axios from "axios";
import ReactDOM from "react-dom";
import data from "./songTrack";

function App() {
  //   var form = document.getElementById("form");

  //   form.addEventListener("submit", function (event) {
  //     var title = document.getElementById("playlist-title").value;
  //     var desc = document.getElementById("playlist-desc").value;
  //     const errorElement = document.getElementById("error-messages");
  //     event.preventDefault();

  //     let messages = [];
  //     if (title === "" || title == null) {
  //       messages.push("Please enter playlist title");
  //     }

  //     if (desc === "" || desc == null) {
  //       messages.push("Please enter playlist description");
  //     }

  //     if (messages.length > 0) {
  //       event.preventDefault();
  //       errorElement.innerHTML = messages.join(", ");
  //       alert("Please check your input again");

  //       return;
  //     }
  //     document.querySelector("#title-return").innerHTML = title;
  //     document.querySelector("#desc-return").innerHTML = desc;

  //     alert("Your playlist title and desc have been added!");

  //     event.target.reset();
  //   });

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

  return (
    <div>
      <div className="container" id="container">
        <h1 className="page-title">
          Welcome to <span>GIGIH 2.0</span> Spotify Playlist
        </h1>

        <form action="" id="form" className="form">
          <h1 className="sub-title">Create Playlist</h1>
          <p className="helper">
            Please add your favorite song to our playlist
          </p>
          <ul>
            <label htmlFor="playlist-title">Playlist title</label>
            <li>
              <input
                id="playlist-title"
                name="playlist-title"
                type="text"
                placeholder="Song title"
              />
            </li>

            <label htmlFor="playlist-desc">Playlist description</label>
            <li>
              <textarea
                id="playlist-desc"
                name="playlist-desc"
                type="text"
                placeholder="Write some story behind the song here"
              ></textarea>
            </li>
            <p id="error-messages"></p>
            <li>
              <button id="submit" type="submit" value="Create!">
                Create!
              </button>
            </li>
          </ul>
        </form>

        <h1 className="sub-title">Songs on This Playlist</h1>

        <a className="callapi" onClick={handleClick}>
          Call Api
        </a>

        <h3 className="title-return-style">
          Playlist title: <span id="title-return"></span>{" "}
        </h3>
        <p className="desc-return-style">
          Playlist description: <span id="desc-return"></span>{" "}
        </p>

        <div className="playlist-container" id="playlist-container">
          <div className="card">
            <img
              src="https://www.the360mag.com/wp-content/uploads/2019/04/IMG_2513.jpg"
              alt=""
            />
            <h3 className="card-title">you were good to me</h3>
            <p className="card-artist">Jeremy Zucker, Chelsea Cutler</p>
            <h5 className="card-album">brent</h5>
            <p className="song-desc">
              “you were good to me” explores a heart-wrenching break up that
              left both parties emotionally wrecked.
            </p>
            <button className="card-button">Select</button>
          </div>
          <div className="card">
            <img
              src="https://i1.sndcdn.com/artworks-000496137453-02iti1-t500x500.jpg"
              alt=""
            />
            <h3 className="card-title">Crying Over You</h3>
            <p className="card-artist">Honne</p>
            <h5 className="card-album">Love Me / Love Me Not</h5>
            <p className="song-desc">
              TThis song is about two people who broke up broke up they say
              hurtful things to each other.
            </p>
            <button className="card-button">Select</button>
          </div>

          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/id/8/8f/Blink-182_-_Blink-182_cover.jpg"
              alt=""
            />
            <h3 className="card-title">I Miss You</h3>
            <p className="card-artist">Blink 182</p>
            <h5 className="card-album">blink-182</h5>
            <p className="song-desc">
              tells about depression can have on a relationship and its
              subsequent fallout.
            </p>
            <button onClick={handleClick} className="card-button">
              Select
            </button>
            {/* <button onClick={handleClick}>Call API</button> */}
          </div>

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
