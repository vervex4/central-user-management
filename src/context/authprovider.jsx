import React from 'react';

import { initialState, AuthReducer } from './reducer';

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const AuthStateConext = React.useContext('AuthState');
  const AuthDispatchConext = React.useContext('AuthDispatchConext');

  const [user, dispatch] = React.useReducer(AuthReducer, initialState);

  return (
    <AuthStateConext value={user}>
      <AuthDispatchConext value={dispatch}>{children}</AuthDispatchConext>
    </AuthStateConext>
  );
};

export default { AuthProvider };
