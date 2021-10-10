import reds from '../constants/reds';

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : '';
const token = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')).appUserToken
  : '';
export const initialState = {
  userDetails: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null
};

// eslint-disable-next-line no-shadow
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case reds.REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false
      };
    case 'LOGOUT':
      return {
        ...initialState,
        user: '',
        token: ''
      };

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
