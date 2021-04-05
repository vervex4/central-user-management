import axios from 'axios';
import authheader from './auth-header';

const API_URL = 'https://securecosmic.azurewebsites.net/api';
// eslint-disable-next-line consistent-return
const getMyAllCustomers = async () => {
  try {
    const response = await axios.get(`${API_URL}/CustomerManagement/CustomerDetails`,
      { headers: authheader() },);
    if (response) { console.log(response); return response; }
  } catch (error) {
    console.log('error occured ');
    console.log(error);
    return null;
  }
};

const getMyCustomers = (id) => axios.get(`${API_URL}/CustomerManagement/${id}`, {
  headers: authheader(),
});

const addMyCustomer = (customerfName, customerlName) => axios.post(`${API_URL}/CustomerManagement`, {
  customerfName,
  customerlName,
});

export default {
  getMyAllCustomers,
  getMyCustomers,
  addMyCustomer,
};
