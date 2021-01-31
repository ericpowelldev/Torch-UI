import React from "react";
import Head from "next/head";

import "@public/css/index.scss";

import { createUseStyles } from "react-jss";
import { FyreFlyUIProvider } from "@lib/FyreFlyUI";

//////////////////////// COMPONENT ////////////////////////
export default function App({ Component, pageProps }) {
  return (
    <FyreFlyUIProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </FyreFlyUIProvider>
  );
}

//////////////////////// STYLES ////////////////////////
const useStyles = createUseStyles({
  "@global": {
    body: {
      background: `blue`,
    },
  },
});
