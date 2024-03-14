import { Request, Response } from "express";
import httpStatus from "http-status";
import { EducationService } from "../services/education.service";

const addEducation = async (req: Request, res: Response) => {
  try {
    await EducationService.addEducation(req.body);
    res.status(httpStatus.CREATED).json({
      message: "Education added",
      statusCode: httpStatus.CREATED,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to add Education",
      statusCode: 500,
    });
  }
};

const getAllEducations = async (req: Request, res: Response) => {
  try {
    const data = await EducationService.getAllEducations();
    res.status(httpStatus.OK).json({
      message: "Educations fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch Educations",
      statusCode: 500,
    });
  }
};

const getSingleEducation = async (req: Request, res: Response) => {
  try {
    const data = await EducationService.getSingleEducation(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Education fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch Education",
      statusCode: 500,
    });
  }
};

const editEducation = async (req: Request, res: Response) => {
  try {
    await EducationService.editEducation(req.params.id, req.body);
    res.status(httpStatus.OK).json({
      message: "Education updated successfully",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to update Education",
      statusCode: 500,
    });
  }
};

const deleteEducation = async (req: Request, res: Response) => {
  try {
    await EducationService.deleteEducation(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Education deleted successfully",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to delete Education",
      statusCode: 500,
    });
  }
};

export const EducationController = {
  addEducation,
  getAllEducations,
  getSingleEducation,
  editEducation,
  deleteEducation,
};
