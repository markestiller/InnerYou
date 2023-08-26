import React, {useState} from "react";

const Chatbot = () => {
  const [daySummary, setDaySummary] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (daySummary.length <= 30) {
      // Submit the day summary or perform further actions
      console.log("Submitted:", daySummary);
      setErrorMessage("");
    } else {
      setErrorMessage("Please keep your summary under 30 words.");
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-500 to-sky-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">
          Share Your Day in Under 30 Words
        </h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="border rounded w-full py-2 px-3 mb-3"
            rows="4"
            placeholder="Write about your day (30 words or less)"
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
      </div>
    </div>
  );
};

export default Chatbot;
