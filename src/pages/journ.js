import React from "react";
import Hero from "../components/Hero";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import RectangleComponent from "../components/RectangleComponent";
import { ReactComponent as Background } from '../backgrounds/Desktop - 10 (1).svg';
import "../Home.css";
import "../journ.css";
import "../index.css";
import logo from "../assets/Group 9.svg";
import flame from "../assets/Vector.svg";
import clipboard from "../assets/board.svg";
import friend from "../assets/friend.svg";
import journal from "../assets/journal.svg";
import mascot from "../assets/Group 4 (1).svg";
import blob from "../assets/journal-blob.svg";


const Journ= () => {
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
    <div class="all-after">
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
              <img className="journal" src={journal}/>
              </Link>
            </div>        
          </div>
          
        {/* </div> */}
       
      </div>
        <div class="journal-sec"> 
          <div class="title-sec">
            <h1 class="title">Journal Your Heart!</h1>
          </div>
          <form class="diary">
            <label class="diary-label">
            Title
            <input class="text1" type="text" name="name" 
               placeholder="Name of entry ✏️"
            />
            </label>
            <label class="diary-label">
            Entry
            <textarea class="text2"
              placeholder="What's on your mind today? 💭"
              
            />
            </label>
            <Button sx={[
              { color: 'white', 
                backgroundColor: '#582869',
                width: 250,
                height: 70,
                marginTop: 5,
                marginBottom: 0,
                borderRadius:3,
                fontFamily: 'Bubblegum Sans, sans-serif',
                fontSize: 35,
                '&:hover': {
                  color: '#252B48;',
                  backgroundColor:'#64CCC5',
                },
              },
            ]} >
            <Link to="/journ">Submit</Link>
          </Button>
          </form>
        </div>
      <div class="character-blob">
        <img class="blob" src={blob} />
      </div>
    </div>
  </div>
  );
};

export default Journ;
