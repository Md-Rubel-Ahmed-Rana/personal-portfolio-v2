import { IEducation } from "../interfaces/education.interface";
import { Education } from "../models/education.model";

const addEducation = async (data: IEducation) => {
  await Education.create(data);
};

const getAllEducations = async () => {
  const data = await Education.find({});
  return data;
};

const getSingleEducation = async (id: string) => {
  const data = await Education.findById(id);
  return data;
};

const editEducation = async (id: string, data: IEducation) => {
  await Education.findByIdAndUpdate(id, { $set: { ...data } });
};

const deleteEducation = async (id: string) => {
  await Education.findByIdAndDelete(id);
};

export const EducationService = {
  addEducation,
  getAllEducations,
  getSingleEducation,
  editEducation,
  deleteEducation,
};
