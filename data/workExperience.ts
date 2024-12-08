// data/workExperience.ts
import { FaPython, FaChartBar, FaAws, FaChalkboardTeacher, FaJava} from 'react-icons/fa';
import { SiApachekafka, SiApachespark, SiBoehringeringelheim, SiDjango, SiDocker, SiJenkins, SiLangchain, SiMlflow, SiOpenai, SiPandas, SiPostgresql, SiPytorch, SiRedis, SiStreamlit, SiTableau } from 'react-icons/si';
import React from 'react';
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import NortheasternIcon from '@/components/icons/NortheasternIcon';
import { internshipWorkAtBI, workAtJocata, workExpAtNEU } from './jobDesc';
import { RiNextjsFill } from 'react-icons/ri';
import BILogo from '@/components/icons/BILogo';
import JocataIcon from '@/components/icons/JocataIcon';


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
    company: "Boehringer Ingelheim",
    position: "IT Advanced Applications Co-op",
    duration: "Aug 2024 - Jan 2024",
    year: "2024",
    description: convertMarkDown(internshipWorkAtBI),
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Next.js", icon:  RiNextjsFill},
      { name: "PowerBI", icon: FaChartBar},
      { name: "MLFlow", icon: SiMlflow},
      { name: "Kafka", icon: SiApachekafka},
      { name: "LangChain", icon: SiLangchain},
      { name: "OpenAI", icon: SiOpenai},
      { name: "PostgreSQL", icon: SiPostgresql},
      { name: "Docker", icon: SiDocker},
      { name: "Jenkins", icon: SiJenkins},
      { name: "AWS", icon: FaAws},
    ],
    logo: BILogo,
  },
  {
    company: "Northeastern University",
    position: "Graduate Teaching Assistant",
    duration: "Aug 2023 - Jul 2024",
    year: "2023-2024",
    description: convertMarkDown(workExpAtNEU),
    skills: [
      { name: "Teaching", icon: FaChalkboardTeacher },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
    ],
    logo: NortheasternIcon
  },
  {
    company: "Jocata",
    position: "Machine Learning Engineer",
    duration: "Jan 2020 - Dec 2022",
    year: "2020-2023",
    description: convertMarkDown(workAtJocata),
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Pandas", icon: SiPandas},
      { name: "Pytorch", icon:  SiPytorch},
      { name: "PySpark", icon: SiApachespark},
      { name: "MLFlow", icon: SiMlflow},
      { name: "Redis", icon: SiRedis},
      { name: "PostgreSQL", icon: SiPostgresql},
      { name: "Docker", icon: SiDocker},
      { name: "AWS", icon: FaAws},
    ],
    logo: JocataIcon
  },
];

