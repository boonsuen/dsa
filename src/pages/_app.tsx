import Head from 'next/head';
import GlobalStyle from '../ui/GlobalStyle.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
