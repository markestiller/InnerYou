const express = require("express");
const app = express();
const port = 3002; // You can choose any available port

app.use(express.json());

app.get("/analyze", async (req, res) => {
  const { text } = req.body;

  const url = "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "c2a1ab95a9msh06b55a6183fe502p146ceajsn92427349b715",
      "X-RapidAPI-Host": "twinword-emotion-analysis-v1.p.rapidapi.com",
    },
    body: new URLSearchParams({ text }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
