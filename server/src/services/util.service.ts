import { IUtil } from "../interfaces/util.interface";
import { UtilModel } from "../models/util.model";

const initiateUtil = async () => {
  await UtilModel.create();
};

const updateBannerSectionContent = async (
  id: string,
  content: Partial<IUtil>
) => {
  await UtilModel.findByIdAndUpdate(id, { $set: { ...content } });
};

const updateAboutSectionContent = async (
  id: string,
  content: Partial<IUtil>
) => {
  await UtilModel.findByIdAndUpdate(id, { $set: { ...content } });
};

const updateSocialLinks = async (id: string, content: Partial<IUtil>) => {
  await UtilModel.findByIdAndUpdate(id, { $set: { ...content } });
};

const updateSkills = async (id: string, content: Partial<IUtil>) => {
  await UtilModel.findByIdAndUpdate(id, { $set: { ...content } });
};

const getUtil = async () => {
  const data = await UtilModel.find({});
  return data[0];
};

export const UtilService = {
  initiateUtil,
  updateBannerSectionContent,
  updateAboutSectionContent,
  updateSocialLinks,
  updateSkills,
  getUtil,
};
