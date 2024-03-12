import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import httpStatus from "http-status";
import { RootRoute } from "./routes/root.routes";

const app = express();

// allow env to use
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.ORIGIN }));

// health check endpoint
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    message: "Portfolio server is working fine!",
    statusCode: httpStatus.OK,
  });
});

// app routes
app.use("/api/v2", RootRoute);

// not found endpoint
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    message: "The requested route was not found!",
    statusCode: httpStatus.NOT_FOUND,
  });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "There was a server error occurred",
    statusCode: 500,
    error: error.message,
  });
});

export default app;
