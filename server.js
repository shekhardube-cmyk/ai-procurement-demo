const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: "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"
});

app.post("/generate-rfq", async (req, res) => {
  const { requirement } = req.body;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: `Create a professional RFQ for: ${requirement}`
      }
    ]
  });

  res.json({ rfq: response.choices[0].message.content });
});

app.listen(3000, () => console.log("Server running on port 3000"));