// import logo from './logo.svg';
import "./App.css";
import CardItem from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/searchbar";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import CreatePlaylist from "./components/createplaylist";
import PlaylistPage from "../src/pages/createplaylist"
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/create-playlist">
            <PlaylistPage />

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
