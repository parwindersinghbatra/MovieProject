import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingMovie from "../components/TrendingMovie";

const Home = () => {
  return (
    <div>
      <Navbar /> 
      <TrendingMovie/>
      <Footer />
    </div>
  );
};

export default Home;
