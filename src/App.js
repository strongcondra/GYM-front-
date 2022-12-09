import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import "aos/dist/aos.css"
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Fragment>

      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Data Science, Analytics, Data, sass, software company" />
        <meta name="description"
          content="GYM & Training" />
        <meta property="og:site_name" content="GYM" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GYM & Training" />
      </Helmet>
      <ScrollToTop />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
