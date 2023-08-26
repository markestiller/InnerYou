import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as Background } from '../backgrounds/Desktop - 8 (1).svg';
// import "../StartingPage.css";


const StartingPage = () => {
  const buttonContainerStyle = {
    position: "absolute",
    bottom: "0px", // Adjust the vertical position as needed
    left: "50%",
    transform: "translateX(-50%) translateY(20%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  };
  return(
    <div className="flex justify-end items-center"> 
      <Background />
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
