import axios from "axios";
import { useEffect, useState, FC } from "react";
import { useSelector } from "react-redux";
import CardItem from "../../components/card";
import CreatePlaylist from "../../components/createplaylist";
import GridSystem from "../../components/gridsystem";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchbar";
import { Item } from "../../module/tracks";
import { tokenState } from "../../reduxState";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: JSX.Element | JSX.Element[];
}

const PlaylistPage: FC = () => {
  const token = useSelector((state: tokenState) => state.token.value);

  const [tracks, setTracks] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedTracksId, setSelectedTracksId] = useState<Item[]>([]);
  const [combinedTracks, setCombinedTracks] = useState<Item[]>([]);
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });

  const TokenHeader = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const handleSearchSong = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchKey}&type=track`,
        TokenHeader()
      )
      .then(function (response) {
        console.log(response.data.tracks.items);
        setTracks(response.data.tracks.items);
      })
      .catch(() => {
        alert("Search error");
      });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKey(e.currentTarget.value);
  };

  const handleCreatePlaylist = async (e: React.FormEvent<HTMLFormElement>) => {
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
              name: playlist.title,
              description: playlist.description,
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

  const handlePlaylistChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setPlaylist({ ...playlist, [name]: value });
  };

  function getClassName(selected: string) {
    if (selected) {
      return "card btn btn-primary card-button mb-5  p-1 card d-flex text-dark";
    } else {
      return "card btn btn-outline-primary card-button mb-5 p-1 card d-flex text-dark";
    }
  }

  const onTrackItemClick = (track: Item) => {
    const alreadySelected = selectedTracksId.find(
      (t: Item) => t.uri === track.uri
    );
    alreadySelected
      ? setSelectedTracksId(
          selectedTracksId.filter((t: Item) => t.uri !== track.uri)
        )
      : setSelectedTracksId((selectedTracksId: Item[]) => [
          ...selectedTracksId,
          track,
        ]);
  };

  useEffect(() => {
    const combinedTrackWithSelectedTrack = tracks.map((track: Item) => ({
      ...track,
      isSelected: selectedTracksId.find((t: Item) => t.uri === track.uri),
    }));
    setCombinedTracks(combinedTrackWithSelectedTrack);
  }, [selectedTracksId, tracks]);

  const renderSearchSong = () =>
    combinedTracks.map((item: Item) => {
      const { uri } = item;
      return (
        <CardItem
          key={uri}
          selectedList={false}
          onTrackItemClick={onTrackItemClick}
          track={item}
        />
      );
    });
  {
  }

  const renderSelectedItems = () =>
    selectedTracksId.map((item: Item) => {
      const { uri } = item;
      return (
        <CardItem
          key={uri}
          track={item}
          onTrackItemClick={onTrackItemClick}
          selectedList={true}
        />
      );
    });

  // const handleTitleInput = (e: React.FormEvent<HTMLFormElement>) => {
  //   setTitle(e.currentTarget.value);
  //   setPlaylists([]);
  // };

  // const handleDescInput = (e: React.FormEvent<HTMLFormElement>) => {
  //   setDesc(e.currentTarget.value);
  //   setPlaylists([]);
  // };

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
                  playlist={playlist}
                  handleChange={handlePlaylistChange}
                  handleSubmit={handleCreatePlaylist}
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
                />
              </div>{" "}
              <div className="selected-tracks-container"></div>
              <GridSystem colCount={3} md={8}>
                {tracks.length > 0 ? renderSearchSong() : <p>No song</p>}
              </GridSystem>
              {/* {renderSelectedItems()} */}
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
