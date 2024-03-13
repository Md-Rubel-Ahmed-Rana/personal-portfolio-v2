import { IExperience } from "../interfaces/experience.interface";
import { Experience } from "../models/experience.model";

const addExperience = async (data: IExperience) => {
  await Experience.create(data);
};

const getAllExperiences = async () => {
  const data = await Experience.find({});
  return data;
};

const getSingleExperience = async (id: string) => {
  const data = await Experience.findById(id);
  return data;
};

const updateExperience = async (id: string, data: IExperience) => {
  await Experience.findByIdAndUpdate(id, { $set: { ...data } });
};

const deleteExperience = async (id: string) => {
  await Experience.findByIdAndDelete(id);
};

export const ExperienceService = {
  addExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
