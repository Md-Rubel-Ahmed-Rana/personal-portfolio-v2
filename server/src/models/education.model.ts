import { Schema, model } from "mongoose";
import { IEducation } from "../interfaces/education.interface";

const courseSchema = new Schema<IEducation>(
  {
    className: {
      type: String,
      required: true,
    },
    board: {
      type: String,
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

export const Education = model<IEducation>("Course", courseSchema);
