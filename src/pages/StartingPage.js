import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import "../StartingPage.css";
import starter from '../assets/starter.svg';



const StartingPage = () => {
  const buttonContainerStyle = {
    position: "absolute",
    bottom: "0px", // Adjust the vertical position as needed
    left: "50%",
    transform: "translateX(-50%) translateY(-30%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  };
  return(
    <div className="flex justify-end items-center"> 
    <div class="promt">
      {/* <img src={starter} style={{transform: "translateX(-50%) translateY(20%)"}} /> */}
      <img
          className="starter"
          src={starter}
          style={{
            transform: "translateX(-40%) translateY(10%)",
            width: "800px", 
            height: "700px", 
          }}
          alt="Mascot"
        />
    </div>
      <div  style={buttonContainerStyle}>
        {/* <div className="flex"> */}
          <Button sx={[
              { color: 'white', 
                backgroundColor: '#252B48',
                width: 550,
                height: 100,
                marginBottom: 3,
                borderRadius:10,
                fontFamily:'Bubblegum Regular',
                fontSize: 35,
                '&:hover': {
                  color: '#252B48',
                  backgroundColor: 'white',
                },
              },
            ]} >
            <Link to="/login">Login</Link>
          </Button>
          <Button sx={[
              { color: 'white', 
                backgroundColor: '#252B48',
                width: 550,
                height: 100,
                borderRadius:10,
                marginBottom: 2,
                fontFamily:'Bubblegum Regular',
                fontSize: 35,
                '&:hover': {
                  color: '#252B48',
                  backgroundColor: 'white',
                },
              },
            ]} >
            <Link to="/signup">Signup</Link>
          </Button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default StartingPage;
