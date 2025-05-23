import { PiLinkSimpleBold } from "react-icons/pi"

interface ProjectLink {
  name: string;
  url: string;
  icon: any;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  date: string;
  links: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    title: "Logistics Solution for Transport Management System",
    description: "Working on high-priority, time-sensitive features for optimizing tour planning.",
    tags: ["NestJS", "Angular", "PostgreSQL", "Docker", "Kubernetes"],
    date: "September 2021 - Ongoing",
    links: []
  },
  {
    title: "Brain Hemorrhage Detection using ML/DL",
    description: "Research and Development to create a novel system capable of detecting and segmenting the presence, type and location of intracanial hemorrhage in brain CT Scans. Techniques: Faster R-CNN, U-Net.",
    tags: ["Machine Learning", "Deep Learning", "Python", "Research"],
    date: "Jul 2021 – Published Research",
    links: [
      {
        name: "Publication",
        url: "https://iksp.org/journals/index.php/ijcse/article/view/105",
        icon: PiLinkSimpleBold,
      }
    ]
  }
]
