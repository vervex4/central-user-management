import axios from 'axios';

const API_URL = 'https://securecosmic.azurewebsites.net/api';

const register = (email, password, firstName, lastName) => axios.post(`${API_URL}/Accounts`, {
  email,
  password,
  firstName,
  lastName,
});

const login = async (userName, password) => {
  const resp = await axios.post(`${API_URL}/auth/login`, {
    userName,
    password,
  });
  if (resp) {
    localStorage.setItem('user', JSON.stringify(resp.data));
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

const getStorageItem = (key) => {
  const locStorage = JSON.parse(localStorage.getItem('user'));
  if (!localStorage) return new Error('Something went wrong');

  return locStorage[key];
};

export default {
  logout,
  login,
  register,
  getCurrentUser,
  getStorageItem,
};
