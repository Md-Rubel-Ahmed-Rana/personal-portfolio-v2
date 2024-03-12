import { Schema, model } from "mongoose";
import { IProject } from "../interfaces/project.interface";

const projectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: [String],
    techStack: [String],
    sourceCode: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
    },
    projectLength: {
      startDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
      },
    },
    isDeveloping: {
      type: Boolean,
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

export const Project = model<IProject>("Project", projectSchema);
