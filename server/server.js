import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
const port = process.env.PORT || 8888;

// SEND API

app.post("/send", async (req, res) => {
  try {
    res.json({ msg: "Done" });
  } catch (error) {
    res.status(404).json({ msg: "ERROR" });
  }
});

app.listen(port, () => {
  console.log("Server is running on the port " + port);
});
