import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import mascot from '../assets/Group 5 (1).svg';
import "../Login.css";
import "../index.css";
import mascotfriend from '../assets/blob.svg';

const Login = () => {
  return (
    <div className="flex justify-between items-end" style={{ backgroundColor: "#EAF9F0", height: "100vh", padding: "0px" }}>
      <div className="flex items-end">
        <img
          className="mascot"
          src={mascot}
          style={{
            width: "100%", 
            height: "auto", 
          }}
          alt="Mascot"
        />
      </div>
      <div class="form" style={{transform: "translateX(-70%) translateY(0%)"}}>
    <h1 class="log">Log In Now!</h1>
    <div class="username">
      <h1 class="username-text">Username</h1>
      <div class="username-box">

        <textarea class="words" />
      </div>
    </div>
    <div class="password">
      <h1 class="password-text">Password</h1>
      <div class="password-box">
      <textarea class="words" />
      </div>
    </div>
    <Button sx={[
              { color: '#252B48', 
                backgroundColor: '#EAF9F0',
                width: 250,
                height: 70,
                marginTop: 5,
                marginBottom: 0,
                borderRadius:3,
                fontFamily:'Bubblegum Regular',
                fontSize: 35,
                '&:hover': {
                  color: 'white',
                  backgroundColor:'#64CCC5',
                },
              },
            ]} >
            <Link to="/">Log In</Link>
          </Button>
  </div>
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
  );
};

export default Login;
