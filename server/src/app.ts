import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import httpStatus from "http-status";

const app = express();

// allow env to use
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

// health check endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Portfolio server is working fine!",
    statusCode: httpStatus.OK,
  });
});

export default app;
