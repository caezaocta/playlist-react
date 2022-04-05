import Playlist from '../playlist';
import axios from "axios"
import CreatePlaylist from '../createplaylist'
import { useState } from 'react'


const PlaylistContainer = ({ token }) => {
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [print, setPrint] = useState(false);
    const [playlists, setPlaylists] = useState([])
    const [uris, setUris] = useState([])

    const handleSearchSong = async (e) => {
        e.preventDefault();
        await axios
            .get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(function (response) {
                console.log(response)
                axios
                    .post(
                        `https://api.spotify.com/v1/users/${response.data.id}/playlists)`,
                        {
                            name: title,
                            description: desc,
                            public: false
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            },
                        }
                    )
                    .then(function (response) {
                        axios.post(
                            `https://api.spotify.com/v1/users/${response.data.id}/playlists)`,
                            { uris: uris },
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                },
                            }
                        );
                    });
            });
        // console.log(data)
        // setPlaylists(data)
    };

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
        <></>)
}

export default PlaylistContainer;