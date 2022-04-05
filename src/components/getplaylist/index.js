import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Playlist from '../playlist'


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
                setData(response.data.items)
            }).catch((error) => {
                console.log(error)
            });

        console.log(data.items)
    }

    return (
        <>
            <button onClick={handleGetPlaylists} className="btn btn-primary">Get Playlist</button>

            <div className="container">

                {/* {data.map((item) =>
                    <Playlist
                        key={item.id}
                        title={item.name}
                        desc={item.desc}
                    />
                )
                } */}

            </div>
        </>
    );
}

export default GetPlaylist;