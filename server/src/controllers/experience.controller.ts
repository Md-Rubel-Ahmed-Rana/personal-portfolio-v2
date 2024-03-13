import { Request, Response } from "express";
import { ExperienceService } from "../services/experience.service";
import httpStatus from "http-status";

const addExperience = async (req: Request, res: Response) => {
  try {
    await ExperienceService.addExperience(req.body);
    res.status(httpStatus.CREATED).json({
      message: "Experience added",
      statusCode: httpStatus.CREATED,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to add Experience",
      statusCode: 500,
    });
  }
};

const getAllExperiences = async (req: Request, res: Response) => {
  try {
    const data = await ExperienceService.getAllExperiences();
    res.status(httpStatus.OK).json({
      message: "Experiences fetched",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch Experience",
      statusCode: 500,
    });
  }
};

const getSingleExperience = async (req: Request, res: Response) => {
  try {
    const data = await ExperienceService.getSingleExperience(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Experiences fetched",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch Experience",
      statusCode: 500,
    });
  }
};

const updateExperience = async (req: Request, res: Response) => {
  try {
    const data = await ExperienceService.updateExperience(
      req.params.id,
      req.body
    );
    res.status(httpStatus.OK).json({
      message: "Experience updated",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to update Experience",
      statusCode: 500,
    });
  }
};

const deleteExperience = async (req: Request, res: Response) => {
  try {
    const data = await ExperienceService.deleteExperience(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Experience deleted",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to delete Experience",
      statusCode: 500,
    });
  }
};

export const ExperienceController = {
  addExperience,
  getAllExperiences,
  getSingleExperience,
  updateExperience,
  deleteExperience,
};
