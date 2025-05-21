import phylosophyBG from '../assets/phylosophyBG.png';
import insta from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
        <div className="md:flex w-full  md:h-4/5 lg:5/6 ">

            <div className="md:w-1/2 flex justify-center items-center ">
                <div className="w-full h-fit   px-8 md:px-10 lg:px-20   py-16 md:py-8 lg:py-28  bg-cream">
                    <div>
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold">Philosophy & values</p>
                    </div>

                    <div className="pb-5  md:pb-0 lg:pb-28  h-4/5">
                        <p className="h-full py-5  text-xs md:text-sm lg:text-lg  font-sans text-zinc-500 ">I think everyone wants the same thing - relationship with humanity, 
                           peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>
                    </div>

                    <div className='flex pt-7'>
                        <motion.button className="w-fit  text-xs md:text-sm lg:text-base  h-6 md:h-8 lg:h-10  z-30 flex justify-center items-center border-b border-b-zinc-500 hover:text-white  hover:bg-indigo-600"
                            onClick={() => setIsVisible(!isVisible)}
                            ref={parentRef}

                            initial={{ paddingRight: 0 }}
                            whileHover={{ paddingRight: 20, paddingLeft:20 ,transition: { duration: 0.2 }, }}
                        >
                            <p className=" ">More about me</p>
                        </motion.button>
                        <AnimatePresence>{isVisible && (
                            <motion.div className='bg-white  w-52 md:w-64 lg:w-96 h-40 md:h-64 lg:h-96  z-20  -ml-16 md:-ml-16 lg:-ml-32  -mt-16 md:-mt-28 lg:-mt-40  bg-opacity- flex justify-end items-center overflow-hidden border border-black rounded-r-full rounded-t-full md:rounded-full absolute'                                
                                variants={animationVariant}
                                initial={"initial"}
                                animate={"visible"}
                                exit={"exit"}
                            >
                                <div className='flex gap-4 justify-center items-center '>
                                    <div className='text-black  pb-24 md:pb-32 lg:pb-52  w-28 md:w-40 lg:w-52'>
                                        <p className='text-xs md:text-lg lg:text-2xl '>Know more on Social Media!😃</p>
                                    </div>
                                    <div className=''>
                                        <motion.button className='md:p-1.5 lg:p-3 hover:cursor-pointer z-50' onClick={() => {setIsVisible(true); window.open('https://www.instagram.com/adityadhanure0607/', '_blank')} }
                                            variants={animationVariant}
                                            whileHover={"hover"}
                                                ><img src={insta} alt='instagram' className='h-4 md:h-7 lg:h-10  w-4 md:w-7 lg:w-10'/>
                                        </motion.button>
                                        <motion.div className='md:p-1.5 lg:p-3 hover:cursor-pointer z-50' onClick={() => {setIsVisible(true); window.open('https://www.linkedin.com/in/aditya-dhanure-ba610926b/', '_blank')} }
                                            variants={animationVariant}
                                            whileHover={"hover"}
                                                ><img src={linkedin} alt='linkedin' className='h-4 md:h-7 lg:h-10  w-4 md:w-7 lg:w-10' />
                                        </motion.div>
                                    </div>
                                </div>

                            </motion.div>
                        )}</AnimatePresence>
                    </div>

                </div>
            </div>

            <div className="md:w-1/2 flex justify-center items-center z-50">
                <div className='w-full h-full  flex justify-center items-center'>
                    <img src={phylosophyBG} alt={"Phylosophy"} className='md:h-full'/>
                </div>
            </div>

        </div>
    </div>
}