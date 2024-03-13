import { Router } from "express";
import { UtilController } from "../controllers/util.controller";

const router = Router();

router.post("/initiate", UtilController.initiateUtil);

router.patch("/banner-content/:id", UtilController.updateBannerSectionContent);

router.patch("/about-content/:id", UtilController.updateAboutSectionContent);

router.patch("/social-links/:id", UtilController.updateSocialLinks);

router.patch("/skills/:id", UtilController.updateSkills);

router.get("/", UtilController.getUtil);

export const UtilRoutes = router;
