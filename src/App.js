import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";

function App() {
  const url =
    "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

  const handleClick = () => {
    axios
      .get(url)
      .then(function (response) {
        console.log("API successfully called");
        // console.log(response.data.album.artists[0].name);
        const artist = response.data.album.artists[0].name;
        let song = response.data.album.name;
        const album = response.data.album.type;
        const relDate = response.data.album.release_date;
        const rate = response.data.popularity;
        const img = response.data.album.images[0].url;
        console.log(artist);
        console.log(song);
        console.log(album);
        console.log(relDate);
        console.log(rate);
        console.log(img);

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

        // console.log(album);
        // document.querySelector("#img-api").src = img;
        // document.querySelector("#card-artist-api").innerHTML = artist;
        // document.querySelector("#card-title-api").innerHTML = song;
        // document.querySelector("#card-album-api").innerHTML = album;
        // document.querySelector("#song-desc-api").innerHTML =
        //   `This song was released in ` +
        //   relDate +
        //   ` with the popularity rated ` +
        //   rate +
        //   " accross the US billboard top chart";
      })
      .catch(function (error) {
        const errorMessage = "API gagal dipanggil: ";
        alert(errorMessage + error);
        console.log(error);
      })
      .then(function () {});
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
