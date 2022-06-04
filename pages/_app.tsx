import '../styles/globals.css';
import '../styles/app.css';
import '../styles/custom.css';

import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
        </head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
