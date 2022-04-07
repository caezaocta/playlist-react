import React, { useState } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import Navbar from "../../components/navbar";
import SearchBar from "../../components/searchbar";
import CardItem from "../../components/card";
import CreatePlaylist from "../../components/createplaylist";


const PlaylistPage = () => {
    const token = useSelector(state => state.token.value)
    console.log(token);

    const [tracks, setTracks] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [selectedTracksId, setSelectedTracksId] = useState([]);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [playlists, setPlaylists] = useState([])

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

    return (<>
        <Navbar />
        <div className="row d-flex justify-content-center">
            <div className="col-4"></div>{" "}
        </div>
        <div className="row d-flex justify-content-center mb-5">
            <div className="col-4">
                <>
                    <div className="row d-flex justify-content-center">
                        <div className="col">
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
    </>
    );
}

export default PlaylistPage;