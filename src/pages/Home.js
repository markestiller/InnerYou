import React from "react";
import Hero from "../components/Hero";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import RectangleComponent from "../components/RectangleComponent";
import { ReactComponent as Background } from '../backgrounds/Desktop - 10 (1).svg';
import "../Home.css";
import logo from "../assets/logo-name.png";


const Home = () => {
  return (
    <div class="all"> 
    <div class="top-nav">
      <div class="logo">
        <img className="logo-text" src={logo}  alt="logo" />
      </div>
      <div class="progress-out"> 
        <div class="progress-in"> </div>
      </div>
      <div class="flame">
        <img className="flame-image" src="public/flame-image.png" alt="flame" />
      </div>
    </div>
      <Background />
      <div class="side-nav"></div>
    </div>


    /*
    <div
      className="max-w-screen-lg mx-auto 
        flex flex-col items-center justify-center h-full p-10 md:flex-row  relative"
    >
      <div className="flex flex-col">
        <Hero />
        <div className="flex">
          <Button variant="outlined">
            <Link to="/main">Get Started!</Link>
          </Button>
        </div>
      </div>

      <div className="flex w-full ">
        <img
          className="absolute top-[188.62px] left-[500px] w-[900.34px] h-[809.44px]"
          alt=""
          src="/group-16.svg"
        />
      </div>
    </div>
    */
  );
};

export default Home;
