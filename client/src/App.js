import { useContext, useState } from 'react';
import AppContext, { DEFAULT_APP_CONTEXT } from './AppContext';
import AuthRoute from './AuthRoute';
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


function App() {
  const [context, setContext] = useState(DEFAULT_APP_CONTEXT);

  return (
    <AppContext.Provider value={[context, setContext]}>
      <div className="App">
        <Router>

          <Header />

          <Switch>
            <Route exact path="/">
              <HomePage />

            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/signup">
              <SignupPage />
            </Route>

            <AuthRoute exact path="/journal">
              <JournalPage />
            </AuthRoute>

            <AuthRoute exact path="/today">
              <TodayPage />
            </AuthRoute>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

        </Router>
      </div>
    </AppContext.Provider>
  );
}


function Header() {

  const [context] = useContext(AppContext);
  const { isLoggedIn } = context;

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

          {
            !isLoggedIn &&
            <>
              <Text> <Link to="/login">Login</Link> </Text>
              <Text> <Link to="/signup">Signup</Link> </Text>
            </>
          }

        </Grid>
      </Grid>

    </ToolBar>
  );
}
export default App;
