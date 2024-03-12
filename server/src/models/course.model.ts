import { Schema, model } from "mongoose";
import { ICourse } from "../interfaces/course.interface";

const courseSchema = new Schema<ICourse>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    passingYear: {
      type: Number,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
    },
  }
);

export const Course = model<ICourse>("Course", courseSchema);
