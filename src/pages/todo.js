import React, { useState } from "react";
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


const ToDo= () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: false },
        { id: 3, text: "Task 3", completed: false },
        { id: 4, text: "Task 4", completed: false },
        { id: 5, text: "Task 5", completed: false },
        { id: 6, text: "Task 6", completed: false },
        { id: 7, text: "Task 7", completed: false },
        { id: 8, text: "Task 8", completed: false },
        { id: 9, text: "Task 9", completed: false },
        { id: 10, text: "Task 10", completed: false },
      ]);
    
      const handleTaskToggle = (taskId) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      };
  const NavContainerStyle = {
    position: "absolute",
    bottom: "150px", // Adjust the vertical position as needed
    left: "57%",
    transform: "translateX(-480%) translateY(18%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  };
  const backgroundBoxStyle = {
    backgroundColor: "#582869", // Change to your desired background color
    width: "600px",
    height: "100px",
    padding: "20px",
    textAlign: "center",
    marginTop: 0,
  };
  const formTodoStyle = {
    transform: "translateX(65%) translateY(20%)", // Center horizontally and vertically
    width: "600px",
    height: "500px",
    backgroundColor: "#F9EAF7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  };
  return (
    <div class="all">
      <div class="top-nav">
        <div class="flex items-left">
          <img className="logoname" src={logo} alt="Logo" />
        </div>
        <div class="flex items-right">
          <div class="progress-out mt-3">
            <div class="progress-in"> </div>
          </div>
          <div class="flame">
            <img
              className="flame-image"
              src={flame}
              style={{ width: "50px", height: "45px", marginTop: 2, marginLeft: 3 }}
              alt="Flame"
            />
            <h1 class="streak">1</h1>
          </div>
        </div>
      </div>
      <div style={NavContainerStyle}>
        <div class="side-nav">
          <div class="list-button">
            <Link to="/todo">
              <img className="clipboard" src={clipboard} alt="Clipboard" />
            </Link>
          </div>
          <div class="chat-button">
            <Link to="/main">
              <img className="friend" src={friend} alt="Friend" />
            </Link>
          </div>
          <div class="write-button">
            <Link to="/journal">
              <img className="Journal" src={journal} alt="Journal" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="todo-page" > */}
        <div className="form-todo" style={formTodoStyle}>
        <div style={backgroundBoxStyle}>
        <h1>Daily Objectives</h1>
      </div>
        <ul>
            {tasks.map((task) => (
            <li key={task.id}>
                <label>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleTaskToggle(task.id)}
                />
                <span className={task.completed ? "completed" : ""}>{task.text}</span>
                </label>
            </li>
            ))}
        </ul>
        </div>
        {/* </div> */}
      <div className="flex items-end">
        
      <img
          className="mascot"
          src={mascot}
          style={{
            transform: "translateX(300%) translateY(-50%)",
            width: "350px", 
            height: "350px", 
          }}
          alt="Mascot"
        />
     </div>
    </div>
  
  );
};

export default ToDo;