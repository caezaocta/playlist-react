// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlaylistPage from "../src/pages/createplaylist";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { useSelector } from "react-redux";
import WelcomePage from "../src/pages/welcomepage";
import { Provider } from "react-redux";
import store from '../src/redux/store'

function App() {
  const token = useSelector((state) => state.token.value);
  console.log("halo appjs" + token)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/home">
            {token ?
              <Redirect to="/create-playlist" >
              </Redirect>
              :
              <WelcomePage />
            }
          </Route>

          <Route exact path="/home">
            {token && <Redirect to="/create-playlist" />}
            <WelcomePage />
          </Route>

          <Route exact path="/create-playlist">
            {!token && <Redirect to="/home" />}
            <PlaylistPage />
          </Route>


          <Redirect from="*" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
