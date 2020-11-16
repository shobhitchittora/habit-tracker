import './App.css';
import { ToolBar, Grid, Text } from './components';
import {
  LoginPage,
  SignupPage,
  HomePage,
  NotFound,
  JournalPage,
  TodayPage
} from './pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App({ isLoggedIn = false }) {
  return (
    <div className="App">
      <Router>

        <Header isLoggedIn={isLoggedIn} />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          {
            isLoggedIn && <>
              <Route path="/journal">
                <JournalPage />
              </Route>
              <Route path="/today">
                <TodayPage />
              </Route>

            </>
          }
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}


function Header({ isLoggedIn }) {
  return (
    <ToolBar>
      <Grid
        style={{ width: '100%' }}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid>
          <Text> <Link to="/">Habit App</Link> </Text>
        </Grid>
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {
            isLoggedIn &&
            <>
              <Text> <Link to="/journal">Journal</Link> </Text>
              <Text> <Link to="/today">Today View</Link> </Text>
            </>
          }

          <Text> <Link to="/login">Login</Link> </Text>
          <Text> <Link to="/signup">Signup</Link> </Text>
        </Grid>
      </Grid>

    </ToolBar>
  );
}
export default App;
