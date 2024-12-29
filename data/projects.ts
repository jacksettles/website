// data/projects.ts
import { RiNextjsFill} from "react-icons/ri";
import { SiApplearcade } from "react-icons/si";
import { FaFootballBall } from "react-icons/fa";
import { IoImages } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";


export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "A single-page application portfolio website built using Next.js, TailwindCSS, and shadcn/ui components.",
    icon: RiNextjsFill,
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
    githubLink: "https://github.com/jacksettles/portfolio-website",
  },
  {
    id: 2,
    title: "Knowledge Distillation For Syntax in LLMs",
    description: "Implemented a knowledge distillation pipeline between a syntactic language model (RNNG) and a sequential language model (transformer)",
    icon: GiArtificialIntelligence,
    technologies: ["Python", "PyTorch", "Transformers", "CUDA", "HPC"],
    githubLink: "https://github.com/jacksettles/llm-kd",
  },
  {
    id: 3,
    title: "NFL Analytics",
    description: "A demonstration of using different machine learning algorithms on NFL play-by-play data to predict play success",
    icon: FaFootballBall,
    technologies: ["Python", "Pandas", "PyTorch", "Scikit-learn", "Jupyter"],
    githubLink: "https://github.com/jacksettles/NFL-ML-Playground",
  },
  {
    id: 4,
    title: "Java Arcade",
    description: "An arcade style Asteroids video game where users play as a spaceship flying around shootng at asteroids. The game gets harder every time the user clears the screen of asteroids.",
    icon: SiApplearcade,
    technologies: ["Java", "JavaFX"],
    githubLink: "https://github.com/jacksettles/Java-arcade",
  },
  {
    id: 5,
    title: "Image Classification",
    description: "Built a small CNN model using the CIFAR10 dataset as an introduction into image classification",
    icon: IoImages,
    technologies: ["Python", "PyTorch", "Torchvision", "HPC"],
    githubLink: "https://github.com/jacksettles/CFAR10-CNN",
  },
];
