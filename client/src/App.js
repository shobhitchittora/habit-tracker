import './App.css';
import { Button, ToolBar, Grid, Text } from './components';
import { LoginPage, SignupPage } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

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
              <Text> <Link to="/login">Login</Link> </Text>
              <Text> <Link to="/signup">Signup</Link> </Text>
            </Grid>
          </Grid>

        </ToolBar>

        <Switch>
          <Route exact path="/">
            <Text component="h1">Habit App</Text>
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
