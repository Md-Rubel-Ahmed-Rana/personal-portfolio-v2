import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Database connection successful!");
  } catch (error: any) {
    console.log({
      message: "There was an error to connect Database!",
      error: error.message,
    });
  }
};
