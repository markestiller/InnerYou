import React, { useState } from "react";
import "../Home.css";
import "../index.css";
import Activities from "../components/Activities";
import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import logo from "../assets/Group 9.svg";
import flame from "../assets/Vector.svg";
import clipboard from "../assets/board.svg";
import friend from "../assets/friend.svg";
import journal from "../assets/journal.svg";
import mascotfriend from '../assets/blob.svg';

function Main() {
  const NavContainerStyle = {
    position: "absolute",
    bottom: "150px", // Adjust the vertical position as needed
    left: "57%",
    transform: "translateX(-480%) translateY(18%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  };
  return (
    <div class="all" > 
    <div class="top-nav">
      <div class="flex items-left">
      <Link to="/">
        <img className="logoname" src={logo}/>
        </Link>
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
            <Link to="/todo">
              <img className="clipboard" src={clipboard} />
              </Link>
            </div>
            <div class="chat-button">
            <Link to="/main">
              <img className="friend" src={friend} />
              </Link>
            </div>
            <div class="write-button">
            <Link to="/journ">
              <img className="Journal" src={journal}/>
              </Link>
            </div>        
          </div>
          
        {/* </div> */}
       
      </div>
    <div className="w-full h-screen bg-[#EAF9F0]">
      <Chatbot />
      <div className="flex items-end" style={{ position: "absolute", bottom: 0, right: 0 , transform: "translateX(70%) transformY(60%) ",}}>
        <img
          className="mascotfriend"
          src={mascotfriend}
          style={{
            width: "450px", 
            height: "200px", 
          }}
          alt="Mascot Friend"
        />
      </div>
    </div>
    </div>
  );
}

export default Main;
