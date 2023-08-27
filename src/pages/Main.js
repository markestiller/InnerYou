import React from "react";
import Activities from "../components/Activities";
import Chatbot from "../components/Chatbot";

function Main() {
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
    <div className="w-full h-screen bg-gradient-to-b from-sky-600 to-sky-300">
      <Chatbot />
    </div>
    </div>
  );
}

export default Main;
