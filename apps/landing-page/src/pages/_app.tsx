import { ThemeProvider } from '@tereza-tech/theme';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
