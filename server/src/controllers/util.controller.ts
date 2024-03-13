import { Request, Response } from "express";
import { UtilService } from "../services/util.service";
import httpStatus from "http-status";

const initiateUtil = async (req: Request, res: Response) => {
  try {
    await UtilService.initiateUtil();
    res.status(httpStatus.CREATED).json({
      message: "Util initiated",
      statusCode: httpStatus.CREATED,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to initiate util",
      statusCode: 500,
    });
  }
};

const updateBannerSectionContent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await UtilService.updateBannerSectionContent(id, req.body);
    res.status(httpStatus.OK).json({
      message: "Banner content added",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to add banner content",
      statusCode: 500,
    });
  }
};

const updateAboutSectionContent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await UtilService.updateAboutSectionContent(id, req.body);
    res.status(httpStatus.OK).json({
      message: "About content added",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to add about content",
      statusCode: 500,
    });
  }
};

const updateSocialLinks = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await UtilService.updateSocialLinks(id, req.body);
    res.status(httpStatus.OK).json({
      message: "Social links added",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to add social link",
      statusCode: 500,
    });
  }
};

const updateSkills = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await UtilService.updateSkills(id, req.body);
    res.status(httpStatus.OK).json({
      message: "Skills added",
      statusCode: httpStatus.OK,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to add skills",
      statusCode: 500,
    });
  }
};

const getUtil = async (req: Request, res: Response) => {
  try {
    const data = await UtilService.getUtil();
    res.status(httpStatus.OK).json({
      message: "Util data fetched successfully",
      statusCode: httpStatus.OK,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong to fetch util data",
      statusCode: 500,
    });
  }
};

export const UtilController = {
  initiateUtil,
  updateBannerSectionContent,
  updateAboutSectionContent,
  updateSocialLinks,
  updateSkills,
  getUtil,
};
