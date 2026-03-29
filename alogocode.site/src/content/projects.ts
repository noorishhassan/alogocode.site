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
    title: "Pattern Discovery in Classics and Forgotten Novels",
    description: `Hypothesis: Classics contain recurrent narrative/semantic motifs that modern forgotten novels do not, and these motifs can be discovered with pattern mining.`,
    tags: ["Python", "Pattern Mining", "Minimum Description Length"],
    date: "April 2025 - August 2025",
    links: [
      {
        name: "Source Code and Paper",
        url: "https://github.com/noorishhassan/classics-pattern-mining",
        icon: PiLinkSimpleBold,
      }
    ]
  },
  // {
  //   title: "Finding Meaningful Patterns in Observational Data using Causally-enhanced Pattern-mining",
  //   description: `Worked on an industry-driven project analyzing large-scale German health insurance survey data. 
  //   Designed and implemented a multi-stage pipeline combining causal inference and pattern mining technique
  //   s to identify the key drivers behind customer switching behavior. 
  //   The project involved advanced data preprocessing, causal effect estimation, pattern extraction 
  //   using the Minimum Description Length (MDL) principle, and robustness validation through statistical confirmation techniques. 
  //   The final deliverables included actionable insights, visual summaries, and a milestone submission targeting 
  //   a potential academic publication.`,
  //   tags: ["Python", "Causal Inference", "Pattern Mining", "Minimum Description Length", "Robustness Validation"],
  //   date: "April 2025 - August 2025",
  //   links: []
  // },
  {
    title: "Logistics Solution for Transport Management System",
    description: "Working on high-priority, time-sensitive features for optimizing tour planning.",
    tags: ["NestJS", "Angular", "PostgreSQL", "Docker", "Kubernetes"],
    date: "September 2021 - September 2025",
    links: []
  },
  {
    title: "Bachelor Thesis and Publication: Brain Hemorrhage Detection using ML/DL",
    description: "Research and Development to create a novel system capable of detecting and segmenting the presence, type and location of intracanial hemorrhage in brain CT Scans. Techniques: Faster R-CNN, U-Net.",
    tags: ["Machine Learning", "Deep Learning", "Python", "Research"],
    date: "August 2020 – August 2021",
    links: [
      {
        name: "Publication",
        url: "https://iksp.org/journals/index.php/ijcse/article/view/105",
        icon: PiLinkSimpleBold,
      }
    ]
  }
]
