import React, { useState } from "react";

const Chatbot = () => {
  const [daySummary, setDaySummary] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [generatedActivities, setGeneratedActivities] = useState("");
  const [generatedActivities, setGeneratedActivities] = useState([]);

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
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">
          Share Your Day in Under 200 Characters
        </h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="border rounded w-full py-2 px-3 mb-3"
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
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
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
