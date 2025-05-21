import { NavBar } from "./NavBar"
import { Name } from "./Name"
import photo from "../assets/profile2.png"


import { AnimatePresence, motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"



const visibleVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            duration: 1
        } 
    }
}
const moveRVariants = {
    hidden: { x: "-50%", opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.15
        } 
    }
}
const moveLVariants = {
    hidden: { x: "50%", opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.15
        } 
    }
}
const visibleMenuVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: {
            duration: 0.5,
        } 
    },
    exit: { 
        opacity: 0,
        transition: { 
            duration: 0.1,
            delay: 0.25 
        }
    },
}

export const About = () => {

    const [isVisible, setIsVisible] = useState(false);
    const parentRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (parentRef.current && !parentRef.current.contains(event.target)) {
            setIsVisible(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
       
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
         
        };
    }, []);

    return <div>
        <section className="text-white flex " id="home">

            <div className="w-1/2 md:w-1/3 lg:w-2/6 ">
                <motion.div
                    variants={visibleVariants}
                    initial={"hidden"}
                    animate={"visible"}
                    ><Name />
                </motion.div>
                <div className=" md:flex justify-center items-center absolute mt-5  h-80 md:h-4/5   w-full md:w-1/2  " /*style={{backgroundImage: `url(${photo})`, backgroundSize: "cover"}}*/ >
                    <motion.div className="w-80 md:w-full  h-fit  md:mb-20 lg:mb-10"
                        variants={moveRVariants}
                        initial={"hidden"}
                        animate={"visible"}
                        ><img src={photo} className="" />
                    </motion.div>

                    <div>
                        <div className="md:absolute z-50 w-96 md:w-full   mt-3 md:-mt-44 ml-14  md:-ml-10 lg:-ml-20">

                            <div className="font-mono font-bold flex justify-center items-center">
                                <motion.div className="text-2xl md:text-5xl lg:text-7xl lg:py-2"
                                    variants={moveLVariants}
                                    initial={"hidden"}
                                    animate={"visible"}    
                                >
                                    <p>I'm Aditya Dhanure.</p>   
                                    <p>A web Developer </p>
                                    <p className="text-zinc-400">based in Chh. Sambhaji Nagar.</p> 
                                </motion.div>
                            </div>
                            
                            <motion.div className="  py-5 text-xs md:text-md lg:text-lg font-mono"
                                initial={{x: "100vw", opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: 1.5, delay: 0.05}}
                            >
                                <p>I'm probably the most passionate developer you will ever get to work with. If you have a great
                                   project that needs some amazing skills, I'm your guy.</p>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="hidden md:block bg-grey  w-1/2 md:w-2/3 lg:w-4/6  h-96 md:h-screen  ">
                <motion.div
                    variants={visibleVariants}
                    initial={"hidden"}
                    animate={"visible"}
                    ><NavBar />
                </motion.div>
            </div>

            <div className="block md:hidden bg-grey  w-1/2 md:w-2/3 lg:w-4/6  h-96 md:h-screen ">
                <motion.div
                    variants={visibleVariants}
                    initial={"hidden"}
                    animate={"visible"}
                    >
                    <div className="flex justify-end mr-3 mt-2 " id="menu" > 
                        <motion.svg className="w-7 h-7 z-50 hover:cursor-pointer text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                            onClick={() => {setIsVisible(!isVisible)}}
                            ref={parentRef}
                            
                            whileHover={{scale: 1.2, transition: {duration: 0.2}}}
                            animate={{rotate: isVisible ? 180 : 0}}
                        >
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                        </motion.svg>
                    </div>
                    <AnimatePresence>{isVisible && (
                        <div className="flex justify-end">
                            <motion.div className="w-52 ml-10 -mt-10 h-80 bg-slate-700 absolute" id="menuDiv"
                                variants={visibleMenuVariants}
                                initial={"hidden"}
                                animate={"visible"}
                                exit={"exit"}
                            >
                                <ul className=" text-white pt-12">
                                    <li className="py-2  px-10  hover:cursor-pointer hover:text-palette " onClick={() => {ScrollToExper()}}>Experience</li>
                                    <li className="py-2  px-10  hover:cursor-pointer hover:text-palette " onClick={() => {ScrollToSkill()}}>Skills</li>
                                    <li className="py-2  px-10  hover:cursor-pointer hover:text-palette " onClick={() => {ScrollToPros()}}>Projects</li>
                                    <li className="py-2  px-10 flex justify-center gap-1 w-fit  hover:cursor-pointer hover:text-palette " onClick={()=>{window.open("https://drive.google.com/file/d/1tkVk5w8ueL5rjhjiE2ysaX_GvutYCPrv/view?usp=sharing", "_blank")}}>
                                        <p>Resume</p>
                                        <div>
                                            <svg id="icon" class="w-6 h-6 dark:text-greyText" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="py-2  px-10  hover:cursor-pointer hover:text-palette " onClick={() => {ScrollToContact()}}>Contact</li>
                                </ul>
                            </motion.div> 
                        </div> 
                    )}</AnimatePresence>
                </motion.div>
            </div>

        </section>
    </div>
}



function ScrollToExper() {
    const section = document.getElementById('experience');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToSkill() {
    const section = document.getElementById('skills');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToPros() {
    const section = document.getElementById('projects');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function ScrollToContact() {
    const section = document.getElementById('contact');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
