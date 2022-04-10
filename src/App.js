// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import PlaylistPage from "../src/pages/createplaylist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import WelcomePage from "../src/pages/welcomepage";

function App() {
  const token = useSelector((state) => state.token.value);
  console.log("halo appjs" + token)
  return (
    <div className="App">
      {/* <PlaylistPage /> */}
      <Router>
        <Route exact path="/">
          {token ? <Redirect to="/create-playlist" />
            :
            <Redirect to="/home">
            </Redirect>
          }
        </Route>

        <Route exact path="/home">
          <WelcomePage />
        </Route>

        <Route exact path="/create-playlist">
          <PlaylistPage />
        </Route>

        {/* <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/home">
            {token &&
              <Redirect to="/create-playlist">
                <PlaylistPage />
              </Redirect>
            }
          </Route>

          <Route exact path="/create-playlist">
            {!token && <Redirect to="/home" />}
            <PlaylistPage />
          </Route>

          <Redirect from="*" to="/home" />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
