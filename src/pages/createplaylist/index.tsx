import { useState, FC, FormEvent } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchbar";
import CardItem from "../../components/card";
import CreatePlaylist from "../../components/createplaylist";
import GridSystem from "../../components/gridsystem";
import { tokenState } from "../../reduxState";

interface Item {
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  isSelected?: Item;
}

const PlaylistPage: FC = () => {
  const token = useSelector((state: tokenState) => state.token.value);
  console.log(token);

  const [tracks, setTracks] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedTracksId, setSelectedTracksId] = useState<Item[]>([]);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [playlists, setPlaylists] = useState<Item[]>([]);

  const TokenHeader = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const handleSearchSong = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://api.spotify.com/v1/search?q=${searchKey}&type=track`,
      TokenHeader()
    );
    const newData = data.tracks.items.map((item: Object) => ({
      ...item,
      selected: false,
    }));
    setTracks(newData);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKey(e.currentTarget.value);
  };

  const handleCreatePlaylist = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const uris = selectedTracksId.map((item: Item) => item.uri);
    console.log(uris);
    axios
      .get("https://api.spotify.com/v1/me", TokenHeader())
      .then(function (response) {
        axios
          .post(
            `https://api.spotify.com/v1/users/${response.data.id}/playlists`,
            {
              name: title,
              description: desc,
              public: false,
            },
            TokenHeader()
          )
          .then(function (response) {
            axios.post(
              `https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
              {
                uris: selectedTracksId,
              },
              TokenHeader()
            );
          });
      });
    alert("New Playlist added");
  };

  function getClassName(selected: string) {
    if (selected) {
      return "card btn btn-primary card-button mb-5  p-1 card d-flex text-dark";
    } else {
      return "card btn btn-outline-primary card-button mb-5 p-1 card d-flex text-dark";
    }
  }

  const onTrackItemClick = (id: number) => {
    console.log(id);

    setSelectedTracksId((selectedTracksId) =>
      selectedTracksId.filter((tracksId) => tracksId === id).length
        ? selectedTracksId.filter((tracksId) => tracksId !== id)
        : [...selectedTracksId, id]
    );

    console.log(selectedTracksId);
  };

  const handleTitleInput = (e: React.FormEvent<HTMLFormElement>) => {
    setTitle(e.currentTarget.value);
    setPlaylists(false);
  };

  const handleDescInput = (e: React.FormEvent<HTMLFormElement>) => {
    setDesc(e.currentTarget.value);
    setPlaylists(false);
  };

  return (
    <>
      <Navbar />
      <div className="row d-flex justify-content-center">
        <div className="col-4"></div>{" "}
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-4">
          <>
            <div className="row d-flex justify-content-center">
              <div className="col"></div>
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
        <div className="row d-flex justify-content-center">
          {" "}
          {token ? (
            <>
              <div className="col-4">
                <SearchBar
                  handleSearchChange={handleSearchChange}
                  handleSearchSong={handleSearchSong}
                />{" "}
              </div>{" "}
              <div className="selected-tracks-container">
                {selectedTracksId.length > 0 && (
                  <>
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
              <GridSystem colCount={4} md={6}>
                {tracks.length > 0 ? (
                  tracks.map((track) => (
                    <CardItem
                      key={track.uri}
                      title={track.name}
                      artist={track.artists[0].name}
                      img={track.album.images[0].url}
                      getClassName={getClassName(
                        selectedTracksId.includes(track.uri)
                      )}
                      onClick={onTrackItemClick}
                      track={track}
                      isSelected={
                        selectedTracksId.includes(track.uri)
                          ? "Selected"
                          : "Select"
                      }
                    />
                  ))
                ) : (
                  <p>No song</p>
                )}
              </GridSystem>
              <div className="custom-container">
                <div className="grid-item">
                  {}
                  {}{" "}
                </div>{" "}
              </div>
            </>
          ) : (
            <h2>You are not Logged In</h2>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default PlaylistPage;
