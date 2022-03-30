import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import LoginButton from './logbutton'

const SpotifyLogin = () => {
    const CLIENT_ID = "dfc1111bb28e42208f37905662121d74"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState('')
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")


        if (!token && hash) {
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
            setToken(token)


        }
    }, [])


    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }


    return (
        <>
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="login">Login</a>
                : <a href="#" className="login" onClick={logout}>Log Out</a>}


        </>
    );
}

export default SpotifyLogin;