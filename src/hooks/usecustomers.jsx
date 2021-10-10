import { useQuery } from 'react-query';
import getMyAllCustomers from '../services/user.service';

const fetchCustomerData = async () => {
  const {
    data: {
      value: { model: allCustomerData }
    }
  } = await getMyAllCustomers.getMyAllCustomers();
  if (allCustomerData) {
    console.log(allCustomerData);

    return allCustomerData;
  }

  return null;
};

const useCustomers = () => useQuery('allcustomers', fetchCustomerData);

export default useCustomers;
