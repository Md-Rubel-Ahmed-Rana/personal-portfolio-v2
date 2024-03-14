import { IProject } from "../interfaces/project.interface";
import { Project } from "../models/project.model";

const addProject = async (data: IProject) => {
  await Project.create(data);
};

const getAllProjects = async () => {
  const data = await Project.find({});
  return data;
};

const getSingleProject = async (id: string) => {
  const data = await Project.findById(id);
  return data;
};

const editProject = async (id: string, data: IProject) => {
  await Project.findByIdAndUpdate(id, { $set: { ...data } });
};

const deleteProject = async (id: string) => {
  await Project.findByIdAndDelete(id);
};

export const ProjectService = {
  addProject,
  getAllProjects,
  getSingleProject,
  editProject,
  deleteProject,
};
