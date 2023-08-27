import React from "react";
import Hero from "../components/Hero";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import RectangleComponent from "../components/RectangleComponent";
import { ReactComponent as Background } from '../backgrounds/Desktop - 10 (1).svg';
import "../Home.css";
import logo from "../assets/Group 9.svg";
import flame from "../assets/Vector.svg";
import clipboard from "../assets/board.svg";
import friend from "../assets/friend.svg";
import journal from "../assets/journal.svg";
import mascot from '../assets/Group 4 (1).svg';


const Home = () => {
  const NavContainerStyle = {
    position: "absolute",
    bottom: "150px", // Adjust the vertical position as needed
    left: "50%",
    transform: "translateX(-480%) translateY(22%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  };
  
  return (
    <div class="all" > 
    <div class="top-nav">
      <div class="flex items-left">
        <img className="logoname" src={logo}/>
      </div>
      <div class="flex items-right">
      <div class="progress-out mt-3"> 
        <div class="progress-in"> </div>
        </div>
      <div class="flame">
        <img className="flame-image" src={flame} style={{ width: '50px', height: '45px', marginTop: 2, marginLeft: 3}}/>
        <h1 class="streak">1</h1>
        </div>
      
        </div>
      
      
    </div>
      {/* <Background /> */}
      {/* <div className="flex items-left" style={{ position: "relative" }}> */}
        <div style={NavContainerStyle}>
          <div class="side-nav"> 
            <div class="list-button">
            <Link to="/">
              <img className="clipboard" src={clipboard} />
              </Link>
            </div>
            <div class="chat-button">
            <Link to="/main">
              <img className="friend" src={friend} />
              </Link>
            </div>
            <div class="write-button">
            <Link to="/journal">
              <img className="journal" src={journal}/>
              </Link>
            </div>        
          </div>
          
        {/* </div> */}
       
      </div>
       <div className="flex items-end">
        
     
      <img
          className="mascot"
          src={mascot}
          style={{
            transform: "translateX(125%) translateY(20%)",
            width: "500px", 
            height: "500px", 
          }}
          alt="Mascot"
        />
     </div>


    {/* /*
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
    
    */ }
    </div>
  );
};

export default Home;
