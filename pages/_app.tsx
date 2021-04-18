import "nprogress/nprogress.css";
import "@styles/styles.css";

import { Router } from "next/router";
import NProgress from "nprogress";
import Head from "next/head";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const header = require("./header.json");

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* TODO: Create better meta data */}
        <meta name={"description"} content={header.description} />
        <meta name={"keywords"} content={header.keywords} />
        <meta name={"robot"} content={"index, follow"} />

        <meta name={"og:title"} content={header.title} />
        <meta name={"og:type"} content={"website"} />
        <meta name={"og:url"} content={"https://arkoisystems.com/"} />
        <meta name={"og:name"} content={"ArkoiSystems"} />
        <meta name={"og:description"} content={header.description} />

        <meta name={"twitter:title"} content={header.title} />
        <meta name={"twitter:description"} content={header.description} />

        <meta
          name={"viewport"}
          content={"width=device-width, initial-scale=1.0"}
        />
        <meta httpEquiv={"Content-Type"} content={"text/html;charset=UTF-8"} />
        <meta charSet={"UTF-8"} />

        <title>ArkoiSystems</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
