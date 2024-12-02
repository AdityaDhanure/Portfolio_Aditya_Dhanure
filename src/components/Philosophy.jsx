import phylosophyBG from '../assets/phylosophyBG.png';
import insta from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { a } from 'motion/react-client';

export const Philosophy = () => { 

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

    const animationVariant = {
        initial: { 
            opacity: 0, 
            scale: 0.12,
        },
        visible: { 
            opacity: 1,
            y: -5, 
            scale: 1, 
            transition: {
                duration: 0.1, 
                type: 'spring', 
                stiffness: 120
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.12,
            transition: { 
                duration: 0.2,
                delay: 0.25 
            }
        },
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
    }


    return <div className="pt-10 h-full font-mono overflow-hidden" id="philosophy">
        <div className="flex w-full h-5/6">

            <div className="w-1/2 flex justify-center items-center ">
                <div className="w-full h-full px-20 py-32 bg-cream">
                    <div>
                        <p className="text-5xl font-bold">Philosophy & values</p>
                    </div>

                    <div className="h-4/5">
                        <p className="h-full py-5 text-lg font-sans text-zinc-500 ">I think everyone wants the same thing - relationship with humanity, 
                           peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                    </div>

                    <div className='flex'>
                        <motion.button className="w-fit h-10 z-30 flex justify-center items-center border-b border-b-zinc-500 hover:text-white  hover:bg-indigo-600"
                            onClick={() => setIsVisible(!isVisible)}
                            ref={parentRef}

                            initial={{ paddingRight: 0 }}
                            whileHover={{ paddingRight: 20, paddingLeft:20 ,transition: { duration: 0.2 }, }}
                        >
                            <p className=" ">More about me</p>
                        </motion.button>
                        <AnimatePresence>{isVisible && (
                            <motion.div className='bg-white w-96 h-96 z-20 bg-opacity-50 flex justify-end items-center overflow-hidden -ml-32 -mt-40 border border-black rounded-full absolute'                                
                                variants={animationVariant}
                                initial={"initial"}
                                animate={"visible"}
                                whileTap={"tap"}
                                exit={"exit"}
                            >
                                <div className='flex justify-center items-center '>
                                    <div className='text-black pb-52 w-52'>
                                        <p className='text-2xl '>Know more on Social Media!😃</p>
                                    </div>
                                    <div className=''>
                                        <motion.button className='p-3 hover:cursor-pointer z-50' onClick={() => {setIsVisible(true); window.open('https://www.instagram.com/adityadhanure0607/', '_blank')} }
                                            variants={animationVariant}
                                            whileHover={"hover"}
                                                ><img src={insta} alt='instagram' className='h-10 w-10'/>
                                        </motion.button>
                                        <motion.div className='p-3 hover:cursor-pointer z-50' onClick={() => {setIsVisible(true); window.open('https://www.linkedin.com/in/aditya-dhanure-ba610926b/', '_blank')} }
                                            variants={animationVariant}
                                            whileHover={"hover"}
                                                ><img src={linkedin} alt='linkedin' className='h-10 w-10' />
                                        </motion.div>
                                    </div>
                                </div>

                            </motion.div>
                        )}</AnimatePresence>
                    </div>

                </div>
            </div>

            <div className="w-1/2 flex justify-center items-center ">
                <div className='w-full h-full flex justify-center items-center'>
                    <img src={phylosophyBG} alt={"Phylosophy"}/>
                </div>
            </div>

        </div>
    </div>
}