"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { GiWeightLiftingUp } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { FaLightbulb, FaCode, FaBookReader, FaFootballBall } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';

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
              My name is Jack Settles, and I am a machine learning engineer. My background is in philosophy and cognitive science where I focused on studying language from as many different perspectives as possible. I am deeply passionate about how language can encode meaning, and how that meaning is conveyed from one person to the next. My research focuses on language modeling with a goal of training LLMs to understand language in a way that approximates how humans acquire language.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              I have always possessed diverse interests, and I have never been able to contain my curiosity for life. Philosophy provided a platform for me to ask questions about things that people might typically overlook, such as the nature of God, the essence of a just society, or the role of meaning in life. By "meaning", I intentionally mean (!) both what people might call purpose, as well as semantic meaning in language. I found in my studies that these things are not entirely separable: semantic meaning allows us to convey information to others, and living life with others provides a greater purpose for our actions. This love for language led me to studying artificial intelligence and computational linguistics. If we can teach machines language in conditions similar to humans, then perhaps we can learn more about how humans possess it in the first place.        </p>
            <p>
              When I am not learning new programming skills, you might find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><GiWeightLiftingUp className="inline-block mr-2" /> Lifting weights (I was a personal trainer for nearly 6 years and played football growing up)</li>
              <li><FaBookReader className="inline-block mr-2" /> Reading philosophy or anything about science (I am particularly interested in neuroscience and psychopharmacology)</li>
              <li><FaFootballBall className="inline-block mr-2" /> Watching football (Go Dawgs/Falcons)</li>
              <li><ImHeadphones className="inline-block mr-2" /> Listening to music. My favorites: Van Morrison, Beach House, Max Richter, Marvin Gaye, Peter Cat Recording Co., Khruangbin, Mulatu Astatke, Michael Kiwanuka, Sturgill Simpson, Palace, Frank Ocean, Outkast, the Wu-Tang Clan, Denzel Curry, Kendrick Lamar, Mac Miller, SZA, Maggie Rogers, the Fugees, Erykah Badu.... I could go on forever</li>
            </ul>
            <p>
            My current research is about training language models on the structure of language, rather than just computing the probability of the next word given an input sequence of words (or tokens). I am also nterested in how microtubules within cells self organize and proviide structure to the cell, as well as facilitate information passing between organelles.            </p>
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
