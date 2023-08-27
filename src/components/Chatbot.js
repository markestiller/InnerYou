import React, { useState } from "react";
import ToDo from "../pages/todo";

const Chatbot = () => {
  const [daySummary, setDaySummary] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [generatedActivities, setGeneratedActivities] = useState("");
  const [generatedActivities, setGeneratedActivities] = useState([]);
  const backgroundBoxStyle = {

    transform: "translateX(-3%) translateY(-30%)",

      width: "1100px",
      height: "100px",
      backgroundColor: "#582869",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
  };
  const formTodoStyle = {
    transform: "translateX(-30%) translateY(-10%)",// Center horizontally and vertically
    width: "1100px",
    height: "600px",
    backgroundColor: "#F9EAF7", 
    borderRadius: "20px",
    marginLeft: "auto",
    marginTop: "0px",
    marginRight: "-250px",
    borderWidth: "0.5px",
    borderStyle: "solid",
    borderColor: "#582869",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (daySummary.length <= 200) {
      try {
        const response = await fetch("/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: daySummary }), // Send the day summary to the server
        });
        const result = await response.json();
        console.log(result);
        const activitiesArray = result.generations[0].text
          .split("\\n") // Split by new lines
          .map((activity) => activity.trim()); // Remove extra spaces
        setGeneratedActivities(activitiesArray); // Store the latest generated activities in state
        // setGeneratedActivities(result.generations[0].text); // Store the latest generated activities in state
        {
          /* Pass generatedActivities to ToDo component */
        }

        setErrorMessage("");
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrorMessage("Please keep your summary under 200 characters.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF9F0]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96" style={formTodoStyle}>
      <div style={backgroundBoxStyle}>
        <h1 className="font-bold mb-4 " style={{color:"white", fontSize: "44px",}}>
          Share Your Day in Under 200 Characters
        </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            style={{fontFamily: 'Bubblegum Sans, sans-serif', fontSize: 27,borderRadius: 20,width: "1000px",height: "300px ", transform: "translateX(1.5%) translateY(3%)", paddingLeft: 5}}
            className="border rounded"
            rows="4"
            placeholder="Write about your day (200 characters or less)"
            value={daySummary}
            onChange={(e) => setDaySummary(e.target.value)}
          />
          {errorMessage && (
            <p className="text-red-500 text-sm mb-3">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="bg-[#582869] text-white rounded hover:bg-[#64CCC5]"
            style={{fontFamily: 'Bubblegum Sans, sans-serif', borderRadius: 20,fontSize:30,width: 200,height: 78 , transform: "translateX(200%) translateY(33%)"}}
          >
            SUBMIT
          </button>
        </form>
        {/* {generatedActivities && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">
              Generated Activities:<br></br>
              {generatedActivities}
            </h2>
          </div>
        )} */}
        {generatedActivities.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">
              Suggested Activities:
            </h2>
            <ul className="list-disc pl-6">
              {generatedActivities.map((activity, index) => (
                <li key={index} className="mb-2">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Chatbot;
