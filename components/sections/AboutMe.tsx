"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { SiShowtime } from "react-icons/si";
import { GiSoccerKick } from "react-icons/gi";
import { FaLightbulb, FaCode, FaBookReader } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
             नमस्कार 🙏!! I'm Jayantha Nanduri, an aspiring machine learning engineer passionate about creating scalable AI-driven solutions. I focus on developing microservices and data pipelines and excel at designing, implementing, and optimizing intelligent systems that solve real-world challenges. Leveraging my expertise in container technologies, I efficiently deploy scalable applications on cloud platforms, ensuring high availability and seamless integration. My commitment to advancing machine learning capabilities reflects my drive for excellence in delivering impactful, future-ready technologies.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 

              After spending three years as a machine learning professional, I decided to return to school to pursue my master's degree. This journey significantly enhanced my skills as a problem-solver and critical thinker. I deepened my understanding of designing efficient algorithms, a vital aspect of building scalable systems. Along the way, I developed a passion for coding challenges, turning them into enjoyable and rewarding opportunities to sharpen my skills.            </p>
            <p>
              When I'm not crunching numbers or coding, you might find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><SiShowtime className="inline-block mr-2" /> Watching anime (Naruto and Openpiece are my all-time favourites)</li>
              <li><FaBookReader className="inline-block mr-2" /> Reading books (currently reading Atomic Habits)</li>
              <li><GiSoccerKick className="inline-block mr-2" /> Playing soccer (GGMU!!!)</li>
            </ul>
            <p>
            Currently, I'm deeply immersed in exploring Large Language Models (LLMs) while indulging in web development as a side hobby. I enjoy staying updated on the latest technical innovations from leading tech companies, which constantly inspire me to enhance my skills. As a firm believer in lifelong learning and self-improvement, I embrace every opportunity to grow and expand my knowledge, no matter the circumstances.            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
