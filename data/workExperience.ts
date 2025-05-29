// data/workExperience.ts
import { FaPython, FaBook, FaGraduationCap, FaFileExcel } from 'react-icons/fa';
import { GiArchiveResearch } from "react-icons/gi";
import { FaMeta } from "react-icons/fa6";
import { IoFitnessSharp } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { SiOllama, SiScikitlearn, SiSimpleanalytics, SiDocker, SiJenkins, SiLangchain, SiOpenai, SiPandas, SiPytorch, SiFastapi, SiStreamlit } from 'react-icons/si';
import React from 'react';
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import UGAIcon from '@/components/icons/UGAIcon';
import { diceLabGra, internshipWorkAtBI, workAtOTF, workExpAtUGA, curoWorkAtUGA, internshipAtSSGA} from './jobDesc';
import { RiNextjsFill } from 'react-icons/ri';
import BILogo from '@/components/icons/BILogo';
import OTFIcon from '@/components/icons/OTFIcon';
import SSGALogo  from '@/components/icons/SSGAlogo';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: string;
  description: string | Promise<string>;
  skills: Skill[];
  logo: React.ComponentType<{ className?: string }>;
}

async function convertMarkDown(desc: string){
  const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeStringify);
  const file = await processor.process(desc);
  return String(file);
}


export const workExperiences: WorkExperience[] = [
{
    company: "University of Georgia",
    position: "Graduate Research Assistant",
    duration: "Jan 2025 - Jun 2025",
    year: "2025",
    description: convertMarkDown(diceLabGra),
    skills: [
      { name: "Python", icon: FaPython},
      { name: "PyTorch", icon: SiPytorch},
      { name: "Research", icon: GiArchiveResearch },
      { name: "Data Visualization", icon: SiSimpleanalytics},
    ],
    logo: UGAIcon,
  },
  {
    company: "Boehringer Ingelheim",
    position: "IT Advanced Applications Co-op",
    duration: "Jul 2024 - Dec 2024",
    year: "2024",
    description: convertMarkDown(internshipWorkAtBI),
    skills: [
      { name: "Python", icon: FaPython},
      { name: "Pandas", icon: SiPandas},
      { name: "PyTorch", icon : SiPytorch},
      { name: "Streamlit", icon: SiStreamlit},
      { name: "Scikit-learn", icon: SiScikitlearn},
      { name: "FastAPI", icon: SiFastapi},
      { name: "Data Visualization", icon: SiSimpleanalytics},
      { name: "Next.js", icon:  RiNextjsFill},
      { name: "LangChain", icon: SiLangchain},
      { name: "Meta", icon: FaMeta},
      { name: "Ollama", icon: SiOllama},
      { name: "OpenAI", icon: SiOpenai},
      { name: "Docker", icon: SiDocker},
      { name: "Jenkins", icon: SiJenkins},
    ],
    logo: BILogo,
  },
  {
    company: "University of Georgia",
    position: "Research Lab Assistant",
    duration: "Jun 2023 - Apr 2024",
    year: "2023-2024",
    description: convertMarkDown(workExpAtUGA),
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Pandas", icon: SiPandas},
      { name: "Research", icon: GiArchiveResearch },
    ],
    logo: UGAIcon
  },
  {
    company: "Orangetheory Fitness",
    position: "Head Fitness Coach",
    duration: "Oct 2017 - Dec 2023",
    year: "2017-2023",
    description: convertMarkDown(workAtOTF),
    skills: [
      { name: "Fitness", icon: IoMdFitness },
      { name: "Health", icon: IoFitnessSharp},
    ],
    logo: OTFIcon
  },
  {
    company: "University of Georgia",
    position: "CURO Summer Research Assistant",
    duration: "May 2020 - Aug 2020",
    year: "2020",
    description: convertMarkDown(curoWorkAtUGA),
    skills: [
      { name: "Book", icon: FaBook },
      {name: "Research", icon: GiArchiveResearch},
      { name: "Academia", icon: FaGraduationCap},
    ],
    logo: UGAIcon
  },
  {
    company: "State Street Global Advisors",
    position: "Investment Research Intern",
    duration: "May 2019 - Jun 2019",
    year: "2019",
    description: convertMarkDown(internshipAtSSGA),
    skills: [
      { name: "Research", icon: GiArchiveResearch },
      { name: "Excel", icon: FaFileExcel },
      { name: "Data Visualization", icon: SiSimpleanalytics},
    ],
    logo: SSGALogo
  },
];

