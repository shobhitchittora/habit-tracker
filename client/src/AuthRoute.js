import { useContext } from 'react';
import AppContext from './AppContext';


import {
  Redirect,
  Route
} from "react-router-dom";

function AuthRoute({ children, ...rest }) {
  let [context] = useContext(AppContext);
  const { user, isLoggedIn } = context;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (user && isLoggedIn) ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default AuthRoute;