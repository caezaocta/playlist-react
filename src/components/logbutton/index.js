// import { useEffect, useState } from 'react'
// import SearchBar from '../searchbar'
// import axios from 'axios'

// const LoginButton = () => {
//     const CLIENT_ID = "dfc1111bb28e42208f37905662121d74"
//     const REDIRECT_URI = "http://localhost:3000"
//     const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
//     const RESPONSE_TYPE = "token"

//     const [token, setToken] = useState("")
//     const [tracks, setTracks] = useState([]);
//     const [keyword, setKeyword] = useState("");

//     useEffect(() => {
//         const hash = window.location.hash
//         let token = window.localStorage.getItem("token")

//         if (!token && hash) {
//             token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]

//             window.location.hash = ""
//             window.localStorage.setItem("token", token)

//         }
//         setToken(token)
//     }, [])

//     const logout = () => {
//         setToken("")
//         window.localStorage.removeItem("token")
//     }



//     const handleSearchSong = (e) => {
//         setKeyword(e.target.value)
//     }

//     const handleSubmitSong = async (e) => {
//         e.preventDefault()
//         const { data } = await axios.get("https://api.spotify.com/v1/search", {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             },
//             params: {
//                 q: keyword,
//                 type: "artist"
//             }
//         })
//         // console.log(data.artists.items)
//         setTracks(data.artists.items)
//     }

//     const renderTracks = () => {
//         return tracks.map(track => (
//             <div key={track.id}>
//                 {track.images.length ? <img src={track.image[0].url} alt="" /> : <div>No Image</div>}
//                 {track.name}

//             </div>
//         ))
//     }



//     return (
//         <>

//             {!token ?
//                 <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="login">Login</a>
//                 : <a href="#" className="login" onClick={logout}>Logout</a>}

//             {token ?
//                 <form onSubmit={handleSubmitSong}>
//                     <input type="text" onChange={handleSearchSong} />
//                     <button type={"submit"}>go</button>
//                 </form>
//                 :
//                 <h2>Please Login first</h2>
//             }

//             {renderTracks()}


//         </>
//     );
// }

// export default LoginButton;