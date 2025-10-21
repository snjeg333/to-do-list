import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

import { Helmet } from "react-helmet-async";

export const Layout = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Outlet />
    </>
  );
};
