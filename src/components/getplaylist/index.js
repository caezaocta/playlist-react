import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'


const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists"

const GetPlaylist = () => {
    const [token, setToken] = useState("")
    const [data, setData] = useState({})

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        }
    }, [])

    const handleGetPlaylists = () => {
        axios
            .get(PLAYLISTS_ENDPOINT, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then(response => {
                setData(response.data)
            }).catch((error) => {
                console.log(error)
            });

        console.log(data)
    }

    return (
        <>
            <button onClick={handleGetPlaylists} className="btn btn-primary">Get Playlist</button>

            <div className="container">
                {/* {data.items ? data.items.map((item) =>
                    <h1>{item.name}</h1>
                )
                    : null} */}
            </div>
        </>
    );
}

export default GetPlaylist;