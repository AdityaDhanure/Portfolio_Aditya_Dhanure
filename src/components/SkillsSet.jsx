import { SkillCard } from "./SkillCard";
import { LogoCard } from "./LogoCard";

import FE from '../assets/FE.png';
import BE from '../assets/BE.png';
import MERN from '../assets/MERN.png';
import Webflow from '../assets/webflow.png';

import react from '../assets/react.svg';
import next from '../assets/nextJS.jpg';
import JS from '../assets/JS.png';
import postgreSQL from '../assets/postgreSQL.png';
import node from '../assets/node.png';
import html_css from '../assets/html_css.png';
import postman from '../assets/postman.png';
import tailwind from '../assets/Tailwind_CSS.png';
import mongoDB from '../assets/mongoDB.png';
import prisma from '../assets/prismaORM.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import docker from '../assets/docker.png';

import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";


export const SkillsSet = () => {
    const skillsArray = [html_css, JS, node, prisma, mongoDB, docker, react, next, postgreSQL, tailwind, postman, git, github];
    
    const ref1 = useRef(null); //referencing the element, initially to null
    const ref2 = useRef(null); 
    const controls = useAnimation(); //controls the animation
    const isInView1 = useInView(ref1, { rootMargin: "10px" }) //referenced margin to detect the element on screen
    const isInView2 = useInView(ref2, { rootMargin: "10px" })

    useEffect(() => {
        if(isInView1) {
            controls.start("start");
        } else{
            controls.start("initial");
        }

        if(isInView2) {
            controls.start("visible");
        } else{
            controls.start("hidden");
        }
    }, [isInView1,isInView2, controls]);

    const animationVariant = {
        initial: {
            x: "-100vh",
            opacity: 0
        },
        start:{
            x: 0,
            opacity: 1,
            transition:{
                delay: 0.1,
                duration: 1.5, 
                type: "spring", 
                stiffness: 80
            }
        }
    }
    const visibleVariant = {
        hidden: {
            x: "-50%",
            opacity: 0
        },
        visible:{
            x: 0,
            opacity: 1,
            transition:{
                delay: 0.1,
                duration: 1,
                type: "spring",
                stiffness: 100
            }
        }
    }

    return <div>
        <section className="h-full pt-10 z-50" id="skills">
            <div className="h-28 w-full z-50 -mt-10 bg-black absolute"></div>

                <div className="my-20 mb-26  mx-5 md:mx-8 lg:mx-20 md:flex gap-10 text-white pb-12">

                    <div className="md:w-1/3 md:pr-10 lg:pr-16  pb-10">
                        <div>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold pb-6">Skillset</p>
                        </div>
                        <div>
                            <p className=" md:text-md lg:text-lg py-2 text-greyText">With skills in over 4 different fields of development, I am the perfect person to hire when it comes to a
                            full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
                        </div>
                    </div>

                    <div className="w-1/2 md:w-1/3 flex gap-6 md:flex-col md:gap-0">
                        <SkillCard logo={FE} skillName={"Frontend Developer"} description={'"Building projects in frontend development has been so rewarding—turning ideas into interactive, functional designs. 💻✨ #FrontendDevelopment"'} />
                        <SkillCard logo={BE} skillName={"Backend Developer"} description={'"Building projects in backend development has been an incredible journey—creating seamless functionality and powering ideas behind the scenes. 🔧💻 #BackendDevelopment"'} />
                    </div>

                    <div className="w-1/2 md:w-1/3 flex gap-6 md:flex-col md:gap-0">
                        <SkillCard logo={MERN} skillName={"MERN Stack"} description={'"Diving into the MERN stack has been like crafting both the engine and the cockpit of a web app—seamless synergy between frontend and backend, all in JavaScript. 🚀✨ #MERNStackJourney"'} />   
                        <SkillCard logo={Webflow} skillName={"Webflow Software"} description={'"Exploring Webflow feels like designing and developing on turbo mode—bringing creativity to life with precision, no code required. 🚀🎨 #WebflowMagic"'} /> 
                    </div>
                    
                </div>
                
                <motion.div className="hidden md:flex md:overflow-scroll md:relative"
                    ref={ref1}
                    variants={animationVariant}
                    animate={controls}
                    ><div className="text-white mb-5 flex bg-black ">
                        {skillsArray.map((skill, index) => {
                            return <div className="overflow-hidden">
                                <LogoCard key={index} img={skill} />
                            </div>
                        })}
                    </div>
                </motion.div>

                <motion.div className=" md:hidden "
                    ref={ref2}
                    variants={visibleVariant}
                    animate={controls}
                    ><div className="text-white mb-5 grid grid-cols-3 grid-rows-5 gap-1 bg-black ">
                        {skillsArray.map((skill, index) => {
                            return <div className="">
                                <LogoCard key={index} img={skill} />
                            </div>
                        })}
                    </div>
                </motion.div>
            
        </section>
    </div>
}