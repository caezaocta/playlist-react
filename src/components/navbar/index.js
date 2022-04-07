import LoginButton from "../login";
import { useState, useEffect } from "react";
import GetPlaylist from "../getplaylist";
import { login } from "../../redux/token-slice.js"
import { useDispatch } from "react-redux";

const Navbar = () => {
  const CLIENT_ID = "dfc1111bb28e42208f37905662121d74";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES = 'playlist-modify-public playlist-read-private playlist-modify-private';

  const dispatch = useDispatch()
  const [token, setToken] = useState("");


  useEffect(() => {
    const hash = window.location.hash;
    // let token = window.localStorage.getItem("token");

    if (!token && hash) {
      setToken(
        hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token"))
          .split("=")[1]
      );

      window.location.hash = "";
      // window.localStorage.setItem("token", token);
    }
    // setToken(token);
    dispatch(login(token))
  }, [dispatch, token]);

  const logout = () => {
    setToken("");
    // window.localStorage.removeItem("token");
    dispatch(login(""))
  };

  const redirectCreatePlaylist = () => {

  }

  return (
    <>
      <div className="container">
        <ul className="nav justify-content-end py-3">
          {/* <li className="nav-item mx-3">
            <GetPlaylist />
          </li> */}
          <li className="nav-item">
            {!token ? (
              <LoginButton
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}
                // onClick={() => history.push("/create-playlist")}
                // href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                header={"Login"}

              />
            ) : (
              <LoginButton onClick={logout} header="Logout" />
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
