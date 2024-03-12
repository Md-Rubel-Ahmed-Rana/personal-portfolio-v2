import { Router } from "express";
import { CourseRoutes } from "./course.routes";
import { EducationRoutes } from "./education.routes";
import { ProjectRoutes } from "./project.routes";
import { UtilRoutes } from "./util.routes";

const router = Router();

// course endpoints
router.use("/course", CourseRoutes);

// education endpoints
router.use("/education", EducationRoutes);

// project endpoints
router.use("/project", ProjectRoutes);

// util endpoints
router.use("/util", UtilRoutes);

export const RootRoute = router;
