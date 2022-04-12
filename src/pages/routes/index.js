import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import PlaylistPage from '../createplaylist';
import WelcomePage from '../welcomepage';

function Routes() {
    const token = useSelector(state => state.token.value);

    return (
        <div className='container'>
            <Switch>
                {/* <Route exact path="/">
                    <PlaylistPage />
                </Route> */}
                {/* <Route exact path='/'>
                    <Redirect to='/home' />
                </Route>

                <Route exact path='/home'>
                    {token && <Redirect to='/create-playlist' />}
                    <WelcomePage />
                </Route>

                <Route exact path='/create-playlist'>
                    {!token && <Redirect to='/home' />}
                    <PlaylistPage />
                </Route>
                <Redirect from='*' to='/home' /> */}
            </Switch>
        </div>
    );
}

export default Routes;