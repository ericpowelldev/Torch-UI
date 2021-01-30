import React from "react";
import Head from "next/head";

import "@public/css/index.scss";

// import Header from "@components/_Header";
// import Layout from "@components/_Layout";
// import Footer from "@components/_Footer";
// import ScrollToTop from "@components/util/ScrollToTop";

// import { GlobalProvider } from "@lib/Global";
// import { NotifyProvider } from "@lib/Notify";
// import api from "@lib/api";

//////////////////////// COMPONENT ////////////////////////
export default function App({ Component, pageProps }) {
  // const [loading, setLoading] = React.useState(true);
  // React.useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <>
      {/* <GlobalProvider>
        <NotifyProvider> */}

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      {/* {!loading ? (
        <div id="root">
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
          <ScrollToTop />
        </div>
      ) : null} */}
      {/* </NotifyProvider>
      </GlobalProvider> */}
    </>
  );
}
