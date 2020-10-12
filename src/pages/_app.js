import { ApplicationStateProvider } from '../ApplicationState';

const App = ({ Component, pageProps }) => (
  <ApplicationStateProvider>
    <Component {...pageProps} />
  </ApplicationStateProvider>
);

export default App;
