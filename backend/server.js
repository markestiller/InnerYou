// const express = require("express");
// const app = express();
// const port = 3000; // You can choose any available port

// app.use(express.json());

// // Define a route handler for the root path
// app.get("/", (req, res) => {
//   res.send("Welcome to the chatbot backend!");
// });

// app.post("/analyze", async (req, res) => {
//   const { text } = req.body;

//   const url = "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/";
//   const options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/x-www-form-urlencoded",
//       "X-RapidAPI-Key": "c2a1ab95a9msh06b55a6183fe502p146ceajsn92427349b715",
//       "X-RapidAPI-Host": "twinword-emotion-analysis-v1.p.rapidapi.com",
//     },
//     body: new URLSearchParams({ text }),
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the chatbot backend!");
});

app.post("/analyze", async (req, res) => {
  const { text } = req.body;

  // Perform emotion analysis with Twinword's API
  const twinwordApiKey = "c2a1ab95a9msh06b55a6183fe502p146ceajsn92427349b715";
  const twinwordUrl =
    "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/";
  const twinwordOptions = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": twinwordApiKey,
      "X-RapidAPI-Host": "twinword-emotion-analysis-v1.p.rapidapi.com",
    },
    body: new URLSearchParams({ text }),
  };

  try {
    const twinwordResponse = await fetch(twinwordUrl, twinwordOptions);
    const emotionAnalysisResult = await twinwordResponse.json();
    console.log(emotionAnalysisResult);
    const latestEmotion = emotionAnalysisResult.emotions_detected[0]; // Get the latest emotion
    console.log(latestEmotion);

    // Integrate CohereAPI
    const cohereApiKey = "KtYIDE9Cl5NK0bo3tWBPrxuDSeT3LWMFUlUtOXfF";
    const cohereUrl = "https://api.cohere.ai/v1/generate";
    const cohereOptions = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${cohereApiKey}`,
      },
      body: JSON.stringify({
        max_tokens: 100,
        truncate: "END",
        return_likelihoods: "NONE",
        prompt: `Generate 3 engaging activities based on ${latestEmotion} concisely`, // Use the emotion result as the prompt
      }),
    };

    const cohereResponse = await fetch(cohereUrl, cohereOptions);
    const cohereResult = await cohereResponse.json();
    console.log(cohereResult);

    // Combine emotion analysis and generated activities
    // const responsePayload = {
    //   emotionAnalysis: emotionAnalysisResult,
    //   generatedActivities: cohereResult.choices.map((choice) => choice.text),
    // };

    res.json(cohereResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
