import React from "react";
import Hero from "../components/Hero";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import RectangleComponent from "../components/RectangleComponent";

const Home = () => {
  return (
    <div className="fixed w-full h-screen bg-gradient-to-b from-sky-600 to-sky-300">
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
    </div>
  );
};

export default Home;
