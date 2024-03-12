export type IProject = {
  name: string;
  description: string;
  features: string[];
  techStack: string;
  sourceCode: string;
  liveLink: string;
  isDeveloping: boolean;
  projectLength: {
    startDate: Date;
    endDate: Date;
  };
};
