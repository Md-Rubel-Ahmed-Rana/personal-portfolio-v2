import { Schema, model } from "mongoose";
import { IUtil } from "../interfaces/util.interface";

const utilSchema = new Schema<IUtil>(
  {
    bannerSection: {
      name: {
        type: String,
        default: "",
      },
      image: {
        type: String,
        default: "",
      },
      position: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      resumeLink: {
        type: String,
        default: "",
      },
    },
    aboutSection: {
      image: {
        type: String,
        default: "",
      },
      description1: {
        type: String,
        default: "",
      },
      description2: {
        type: String,
        default: "",
      },
    },
    socialLinks: [
      {
        name: {
          type: String,
          default: "",
        },
        link: {
          type: String,
          default: "",
        },
      },
    ],
    skills: [String],
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
