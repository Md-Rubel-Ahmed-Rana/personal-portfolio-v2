import { Request, Response } from "express";
import httpStatus from "http-status";
import { CourseService } from "../services/course.service";

const addCourse = async (req: Request, res: Response) => {
  try {
    await CourseService.addCourse(req.body);
    res.status(httpStatus.CREATED).json({
      message: "Course added",
      statusCode: httpStatus.CREATED,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to add course",
      statusCode: 500,
    });
  }
};

const getAllCourses = async (req: Request, res: Response) => {
  try {
    const data = await CourseService.getAllCourses();
    res.status(httpStatus.OK).json({
      message: "Courses fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch courses",
      statusCode: 500,
    });
  }
};

const getSingleCourse = async (req: Request, res: Response) => {
  try {
    const data = await CourseService.getSingleCourse(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Course fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch course",
      statusCode: 500,
    });
  }
};

const editCourse = async (req: Request, res: Response) => {
  try {
    await CourseService.editCourse(req.params.id, req.body);
    res.status(httpStatus.OK).json({
      message: "Course updated successfully",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to update course",
      statusCode: 500,
    });
  }
};

const deleteCourse = async (req: Request, res: Response) => {
  try {
    await CourseService.deleteCourse(req.params.id);
    res.status(httpStatus.OK).json({
      message: "Course deleted successfully",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to delete course",
      statusCode: 500,
    });
  }
};

export const CourseController = {
  addCourse,
  getAllCourses,
  getSingleCourse,
  editCourse,
  deleteCourse,
};
