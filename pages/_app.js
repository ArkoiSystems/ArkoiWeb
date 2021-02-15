import 'nprogress/nprogress.css';
import '../styles/global.css'

import { Router } from 'next/router';
import  NProgress  from 'nprogress';
import Head from 'next/head';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* TODO: Create better meta data */}
        <meta name={"description"} content={"ArkoiSystems offers you high quality" +
        " software with cheap prices. Moreover, there is a collection of open source" +
        " projects that contribute to the ongoing process of ArkoiSystems."} />
        <meta name={"keywords"} content={"obfuscator, java, c++, protection, ares," +
        " arkoisystems, open-source"} />
        <meta name={"robot"} content={"index, follow"} />

        <meta name={"og:title"} content={"ArkoiSystems: The place where you can get" +
        " your software and participate in the process."} />
        <meta name={"og:type"} content={"website"} />
        <meta name={"og:url"} content={"https://arkoisystems.com/"} />
        <meta name={"og:name"} content={"ArkoiSystems"}/>
        <meta name={"og:description"} content={"ArkoiSystems offers you a wide range" +
        " of software for cheap prices."} />

        <meta name={"twitter:title"} content={"ArkoiSystems: The place where you can get" +
        " your software and participate in the process."} />
        <meta name={"twitter:description"} content={"ArkoiSystems offers you a wide range" +
        " of software for cheap prices."} />

        <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
        <meta httpEquiv={"Content-Type"} content={"text/html;charset=UTF-8"} />
        <meta charSet={"UTF-8"} />

        <title>ArkoiSystems</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;