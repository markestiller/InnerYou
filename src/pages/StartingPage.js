import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import background from "../backgrounds/Desktop - 8.svg";

function StartingPage() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>Helloworld</div>
  );
}

export default StartingPage;
