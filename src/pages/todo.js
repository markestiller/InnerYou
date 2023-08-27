import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import "../index.css";
import logo from "../assets/Group 9.svg";
import flame from "../assets/Vector.svg";
import clipboard from "../assets/board.svg";
import friend from "../assets/friend.svg";
import journal from "../assets/journal.svg";
import mascot from "../assets/Group 4 (1).svg";
import ProgressBar from "../components/progressBar";

const ToDo = ({ generatedActivities = []}) => {
//   const [tasks, setTasks] = useState(generatedActivities.map((activity, index) => ({
//     id: index + 1,
//     text: activity,
//     completed: false,
//   })));

//   const handleTaskToggle = (taskId) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };
const [tasks, setTasks] = useState([
    { id: 1, text: "Brush your teeth", completed: false },
    { id: 2, text: "Go out on a Walk to the Park", completed: false },
    { id: 3, text: "Drink 8 glasses of water", completed: false },
    { id: 4, text: "Add to your happiness jar", completed: false },
  ]);
  const [progress, setProgress] = useState(0);
  const handleTaskToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    if(progress < 100){
        setProgress(progress + 25);
     }
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
    transform: "translateX(0%) translateY(-100%)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  };
  const backgroundBoxStyle1 = {
    backgroundColor: "#F3CCFF", // Change to your desired background color
    width: "500px",
    height: "50px",
    margin: "15px",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid", 
    borderColor: "#252B48",
    textAlign: "left",
    transform: "translateX(0%) translateY(-60%)",
    display: "flex",
    alignItems: "left",
    
         
    // transform: "translateX(-200%) translateY(-120%)",
    fontFamily: 'Bubblegum Sans, sans-serif',
    fontSize: "30px", // Change the font size if needed
    fontWeight: "bold", // Change the font weight if needed


  };
  const formTodoStyle = {
    transform: "translateX(65%) translateY(20%)", // Center horizontally and vertically
    width: "600px",
    height: "500px",
    backgroundColor: "#F9EAF7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 20,
    borderWidth: "0.5px",
    borderStyle: "solid",
    borderColor: "#582869",
  };
  const headingStyle = {
    fontFamily: 'Bubblegum Sans, sans-serif',
    fontSize: "30px", // Change the font size if needed
    fontWeight: "bold", // Change the font weight if needed
    color: "white", // Change the text color if needed
    
  };
//   const taskStyle = {
//     fontFamily: 'Bubblegum Sans, sans-serif',
//     fontSize: "25px", // Change the font size if needed
//     fontWeight: "bold", // Change the font weight if needed
//     textDecoration: task.completed ? 'line-through' : 'none',
//     color: task.completed ? 'gray' : 'black',
    
//   };
  return (
    
    <div class="all">
      <div class="top-nav">
        <div class="flex items-left">
        <Link to="/">
        <img className="logoname" src={logo}/>
        </Link>
        </div>
        
        <div class="flex items-right">
          {/* <div class="progress-out mt-3"> */}
            <ProgressBar progress={progress} /> 
          {/* </div> */}
          <div class="flame">
            <img
              className="flame-image"
              src={flame}
              style={{
                width: "50px",
                height: "45px",
                marginTop: 2,
                marginLeft: 3,
              }}
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
            <Link to="/journ">
              <img className="Journal" src={journal} alt="Journal" />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="todo-page" > */}
      <div className="form-todo" style={formTodoStyle}>
        <div style={backgroundBoxStyle}>
        <h1 style={headingStyle}>Daily Objectives</h1>
        </div>
        <ul>
      {tasks.map((task) => (
         <div style={backgroundBoxStyle1}>
          <div>
        <li key={task.id}>
            <label>
              <input
                style={{width: 35, height: 35,marginTop: 7, marginLeft: 7}}
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskToggle(task.id)}
                
              />
              <span className={task.completed ? "completed" : ""}>
                {/* {task.text} */}
              </span>
             
            </label>
          </li>
          <h1 style={{
         
         transform: " translateY(-120%)",
         fontFamily: 'Bubblegum Sans, sans-serif',
         fontSize: "30px", // Change the font size if needed
         fontWeight: "bold", // Change the font weight if needed
         textDecoration: task.completed ? 'line-through' : 'none',
         color: task.completed ? 'gray' : 'black',
         marginLeft: 50,
        //  paddingInlineEnd:10,
       }}>{task.text}</h1>
        </div>
          </div>
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
