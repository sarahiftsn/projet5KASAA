import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../layout/Banner";
import Footer from "../layout/Footer";
import Cards from "../components/Cards";
import About from "../assets/Pages/About";
import Home from "../assets/Pages/Home";
import Main from "../layout/Main";


const HeaderFooterLayout = () => {
  return (
    <>
        <Navbar/>
        <Main>
        <Outlet />
        </Main>
        <Footer/>

    </>
  );
};

export const router = createBrowserRouter([
  {
   
    element: <HeaderFooterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cards",
        element: <Cards />,
      },
      // Ajoutez d'autres routes ici si nécessaire
    ],
  },
    
   
    
]);