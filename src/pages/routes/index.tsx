import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import PlaylistPage from "../createplaylist";
import WelcomePage from "../welcomepage";
import { tokenState } from "../../redux/redux-state";

function Routes() {
  const token = useSelector((state: tokenState) => state.token.value);

  return (
    <div className="container">
      <Switch>
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
    </div>
  );
}

export default Routes;
