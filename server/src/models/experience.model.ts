import { Schema, model } from "mongoose";
import { IExperience } from "../interfaces/experience.interface";

const experienceSchema = new Schema<IExperience>(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    workLocation: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    location: {
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
    website: {
      type: String,
    },
    linkedIn: {
      type: String,
      required: true,
    },
    responsibilities: [String],
    learnedNewTech: [String],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
    },
  }
);

export const Experience = model<IExperience>("Experience", experienceSchema);
