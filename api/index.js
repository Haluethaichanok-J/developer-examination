import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import homeRouter from "./routes/home.router.js";
async function init() {
  dotenv.config();
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
  //To create an express app
  const app = express();
  const port = 3000;
  app.use(cors());
  //To transfer data from frontend to the json format
  app.use(express.json());
  // Use the homeRouter for handling routes
  app.use("/", homeRouter);
  // Handle 404 Not Found
  app.get("*", (req, res) => {
    res.status(404).send("Not found");
  });
  // Start the server
  app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
}
init();
