import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
// eslint-disable-next-line no-unused-vars
import { AuthProvider } from './context/authprovider';

const queryClient = new QueryClient();

const App = () => {
  const routing = useRoutes(routes);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {routing}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
