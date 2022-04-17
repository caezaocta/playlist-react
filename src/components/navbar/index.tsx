import LoginButton from "../login";
import { useState, useEffect, FC } from "react";
import { login } from "../../redux/token-slice.js";
import { useDispatch } from "react-redux";

const Navbar: FC = () => {
  const CLIENT_ID = "dfc1111bb28e42208f37905662121d74";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPES =
    "playlist-modify-public playlist-read-private playlist-modify-private";

  const dispatch = useDispatch();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = (
        hash
          .substring(1)
          .split("&")
          .find((elem: string) => elem.startsWith("access_token")) as string
      ).split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
    dispatch(login(token));
    console.log("navbar " + token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    dispatch(login(""));
  };

  return (
    <>
      <div className="container">
        <ul className="nav justify-content-end py-3">
          <li className="nav-item">
            {!token ? (
              <LoginButton
                href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}`}
                header={"Login"}
              />
            ) : (
              <button className="btn btn-outline-warning" onClick={logout}>
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
