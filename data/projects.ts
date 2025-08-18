// data/projects.ts
import { RiNextjsFill} from "react-icons/ri";
import { SiApplearcade, SiOllama } from "react-icons/si";
import { FaFootballBall, FaBook } from "react-icons/fa";
import { IoImages } from "react-icons/io5";
import { FaDna } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

async function convertMarkDown(desc: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify);
  const file =  processor.processSync(desc);
  return String(file);
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  isPopup: boolean;
  popupContent: Promise<string>;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "A single-page application portfolio website built using Next.js, TailwindCSS, and shadcn/ui components.",
    icon: RiNextjsFill,
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
    githubLink: "https://github.com/jacksettles/website",
    isPopup: false,
    popupContent: Promise.resolve(""),
  },
  {
    id: 2,
    title: "Knowledge Distillation For Syntax in LLMs",
    description: "Implemented a knowledge distillation pipeline between a syntactic language model (RNNG) and a sequential language model (transformer)",
    icon: GiArtificialIntelligence,
    technologies: ["Python", "PyTorch", "Transformers", "CUDA", "HPC"],
    githubLink: "https://github.com/jacksettles/llm-kd",
    isPopup: false,
    popupContent: Promise.resolve(""),
  },
  {
    id: 3,
    title: "NFL Analytics",
    description: "A demonstration of using different machine learning algorithms on NFL play-by-play data to predict play success",
    icon: FaFootballBall,
    technologies: ["Python", "Pandas", "PyTorch", "Scikit-learn", "Jupyter"],
    githubLink: "https://github.com/jacksettles/NFL-ML-Playground",
    isPopup: false,
    popupContent: Promise.resolve(""),
  },
  {
    id: 4,
    title: "Continuous Blitz Predictions w/ Deep Sequence Models",
    description: "Using Mamba models (Gu & Dao, 2024)",
    icon: FaFootballBall,
    technologies: ["Python", "Pandas", "PyTorch", "SQLite"],
    githubLink: "https://github.com/jacksettles/blitz_predict",
    isPopup: false,
    popupContent: Promise.resolve(""),
  },
  {
    id: 5,
    title: "Llama Attention Head Pruning",
    description: "Pruning attention heads in Llama 3 variants to assess the effects on accuracy, model size, and latency/throughput.",
    icon: SiOllama,
    technologies: ["Python", "PyTorch", "Transformers", "CUDA", "HPC"],
    githubLink: "https://github.com/jacksettles/llama_head_pruning",
    isPopup: false,
    popupContent: Promise.resolve(""),
  },
  {
    id: 6,
    title: "Modeling Microtubule Dynamic Instability",
    description: "Using sequence models to learn the rules of microtubule dynamic instability.",
    icon: FaDna,
    technologies: ["Python", "PyTorch", "Transformers", "CUDA", "HPC"],
    githubLink: "https://github.com/jacksettles/mt_modeling",
    isPopup: false,
    popupContent: Promise.resolve(""),
  },
  {
    id: 7,
    title: "Java Arcade",
    description: "An arcade style Asteroids video game where users play as a spaceship flying around shootng at asteroids. The game gets harder every time the user clears the screen of asteroids.",
    icon: SiApplearcade,
    technologies: ["Java", "JavaFX"],
    githubLink: "https://github.com/jacksettles/Java-arcade",
    isPopup: false,
    popupContent: Promise.resolve(""),
  },
  {
    id: 8,
    title: "Image Classification",
    description: "Built a small CNN model using the CIFAR10 dataset as an introduction into image classification",
    icon: IoImages,
    technologies: ["Python", "PyTorch", "Torchvision", "HPC"],
    githubLink: "https://github.com/jacksettles/CIFAR10-CNN",
    isPopup: false,
    popupContent: Promise.resolve(""),
  },
];
