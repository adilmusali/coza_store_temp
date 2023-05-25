import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Catalog from "../components/Catalog";
import Products from "../components/Products";
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      {/* <Header/> */}
      <Slider />
      <Catalog />
      <Products />
    </>
  );
};

export default Home;
