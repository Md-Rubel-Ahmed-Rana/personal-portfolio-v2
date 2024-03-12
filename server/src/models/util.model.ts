import { Schema, model } from "mongoose";
import { IUtil } from "../interfaces/util.interface";

const utilSchema = new Schema<IUtil>(
  {
    bannerSection: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      resumeLink: {
        type: String,
        required: true,
      },
    },
    aboutSection: {
      image: {
        type: String,
        required: true,
      },
      description1: {
        type: String,
        required: true,
      },
      description2: {
        type: String,
        required: true,
      },
    },
    socialLinks: [
      {
        name: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
    },
  }
);

export const UtilModel = model<IUtil>("Util", utilSchema);
