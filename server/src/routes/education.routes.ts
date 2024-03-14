import { Router } from "express";
import { EducationController } from "../controllers/education.controller";

const router = Router();

router.post("/add", EducationController.addEducation);

router.get("/", EducationController.getAllEducations);

router.get("/single/:id", EducationController.getSingleEducation);

router.patch("/update/:id", EducationController.editEducation);

router.delete("/delete", EducationController.deleteEducation);

export const EducationRoutes = router;
