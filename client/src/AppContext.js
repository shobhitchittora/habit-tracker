import React from 'react';

const DEFAULT_APP_CONTEXT = {
  isLoggedIn: false
};

const AppContext = React.createContext();

export default AppContext;
export { DEFAULT_APP_CONTEXT }