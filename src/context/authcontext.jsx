import React from 'react';

export function useAuthDispatch() {
  const context = React.useContext('AuthDispatchConext');
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return context;
}

export function useAuthState() {
  const context = React.useContext('AuthState');
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
}
export default {
  useAuthDispatch,
  useAuthState
};
