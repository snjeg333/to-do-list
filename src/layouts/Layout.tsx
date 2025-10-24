import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

import { Helmet } from "react-helmet-async";

import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import { GlobalStyle } from "../styles/GlobalStyle";
import { RootState } from "../store";

export const Layout = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme);
  return (
    <>
      <ThemeProvider theme={theme}>
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
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
