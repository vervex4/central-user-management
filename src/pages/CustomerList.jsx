/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerListResults from 'src/components/customer/CustomerListResults';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';

import useCustomers from '../hooks/usecustomers';

const CustomerList = () => {
  // eslint-disable-next-line object-curly-newline
  const resp = useCustomers();
  console.log('prinit data');
  console.log(resp);

  // eslint-disable-next-line object-curly-newline
  const { isLoading, error, data: customers, isFetching } = resp;

  if (isLoading) {
    return <div>loading........</div>;
  }

  return (
    <>
      <Helmet>
        <title>Customers</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default CustomerList;
