import React from "react";
import Hero from "../components/Hero";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-600 to-sky-300">
      <div
        className="max-w-screen-lg mx-auto 
        flex flex-col items-center justify-center h-full p-10  relative"
      >
        <div className="flex">
          <Hero />
        </div>
        <div className="flex">
          <Button variant="outlined">
            <Link to="/main">Get Started!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
