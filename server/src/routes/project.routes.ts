import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";

const router = Router();

router.post("/add", ProjectController.addProject);

router.get("/", ProjectController.getAllProjects);

router.get("/single/:id", ProjectController.getSingleProject);

router.patch("/update/:id", ProjectController.editProject);

router.delete("/delete/:id", ProjectController.deleteProject);

export const ProjectRoutes = router;
