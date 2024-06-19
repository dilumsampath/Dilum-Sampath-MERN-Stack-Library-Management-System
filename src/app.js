//Due to using ES7, we need to import the modules ; if we use older ES then we should use require("express") likewise

import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2>📚 Library Management System API</h2>");
  next();
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
