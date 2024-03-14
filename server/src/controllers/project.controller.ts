import { Request, Response } from "express";
import httpStatus from "http-status";
import { ProjectService } from "../services/project.service";

const addProject = async (req: Request, res: Response) => {
  try {
    await ProjectService.addProject(req.body);
    res.status(httpStatus.CREATED).json({
      message: "Project added",
      statusCode: httpStatus.CREATED,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to add Project",
      statusCode: 500,
    });
  }
};

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const data = await ProjectService.getAllProjects();
    res.status(httpStatus.OK).json({
      message: "Projects fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch Projects",
      statusCode: 500,
    });
  }
};

const getSingleProject = async (req: Request, res: Response) => {
  try {
    const data = await ProjectService.getSingleProject(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Project fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch Project",
      statusCode: 500,
    });
  }
};

const editProject = async (req: Request, res: Response) => {
  try {
    await ProjectService.editProject(req.params.id, req.body);
    res.status(httpStatus.OK).json({
      message: "Project updated successfully",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to update Project",
      statusCode: 500,
    });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    await ProjectService.deleteProject(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Project deleted successfully",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to delete Project",
      statusCode: 500,
    });
  }
};

export const ProjectController = {
  addProject,
  getAllProjects,
  getSingleProject,
  editProject,
  deleteProject,
};
