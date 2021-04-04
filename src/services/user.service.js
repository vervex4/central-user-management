import axios from 'axios';
import authheader from './auth-header';

const API_URL = 'https://authserviceastrobasic.azurewebsites.net/api';
const getMyAllCustomers = () => {
  return axios.get(`${API_URL}CustomerManagement`, { headers: authheader() });
};

const getMyCustomers = (id) => {
  return axios.get(`${API_URL}CustomerManagement/${id}`, {
    headers: authheader(),
  });
};

const addMyCustomer = (customerfName, customerlName) => {
  return axios.post(`${API_URL}CustomerManagement`, {
    customerfName,
    customerlName,
  });
};

export default {
  getMyAllCustomers,
  getMyCustomers,
  addMyCustomer,
};
