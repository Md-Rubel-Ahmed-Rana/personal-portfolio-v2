import { ICourse } from "../interfaces/course.interface";
import { Course } from "../models/course.model";

const addCourse = async (data: ICourse) => {
  await Course.create(data);
};

const getAllCourses = async () => {
  const data = await Course.find({});
  return data;
};

const getSingleCourse = async (id: string) => {
  const data = await Course.findById(id);
  return data;
};

const editCourse = async (id: string, data: ICourse) => {
  await Course.findByIdAndUpdate(id, { $set: { ...data } });
};

const deleteCourse = async (id: string) => {
  await Course.findByIdAndDelete(id);
};

export const CourseService = {
  addCourse,
  getAllCourses,
  getSingleCourse,
  editCourse,
  deleteCourse,
};
