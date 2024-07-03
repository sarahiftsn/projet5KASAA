import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../layout/Banner";
import Cards from "../../components/Cards";

import "./Home.scss";



function Home() {
  return (
    <>
    <div className="home-container">
    <Banner/>
    <Cards/>
    </div>
    </>
  );
}

export default Home;