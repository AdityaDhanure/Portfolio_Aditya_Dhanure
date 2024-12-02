import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { SkillName } from "../components/SkillName";
import { useEffect, useRef, useState } from "react";

export const ProjectCard = ({proName, proDesc ,projectImg, arrayNames}) => {

    const ref = useRef(null);
    const constrols = useAnimation();
    const isInView = useInView(ref, {rootMargin: "10px"});

    useEffect(() => {
        if(isInView) {
            constrols.start("visible");
        } else{
            constrols.start("hidden");
        }
    }, [isInView, constrols]);

    const visibleVariant = {
        hidden: {
            scale: 0.5,
        },
        visible: {
            scale: 1,
            transition: {
                duration: 0.3
            },
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
    }

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
        <motion.div className="mb-6 w-full h-full bg-grey hover:text-palette hover:cursor-pointer" onClick={() => setIsVisible(true)}            
            ref={(el) => { ref.current = el; parentRef.current = el; }}
            variants={visibleVariant}
            animate={constrols}
            whileHover={"hover"}
        >
            <div className="w-full h-96 ">
                <img src={projectImg} alt={"projectImg"}/>
            </div>

            <div className="w-full h-fit ">

                <div className="py-8 px-8 h-4/5">
                    <motion.div
                        variants={{
                            hover:{
                                x : 8
                            }
                        }}
                        ><p className="text-2xl font-bold pb-4 ">{proName}</p>
                    </motion.div>
                    <div className="text-greyText text-lg">
                        <p>{proDesc}</p>
                    </div>
                </div>
                
                <AnimatePresence>{isVisible && (
                    <div className="px-10">
                       { setSkillsNames(arrayNames)}
                    </div>
                )}
                </AnimatePresence>
                
                <div className="h-10 flex justify-end">
                    <motion.button className="w-12 flex justify-center items-center bg-indigo-700"
                        initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
                        variants={{
                            hover: {
                                opacity: 1,
                                scale: 1,
                                x: 0,
                                y: 0,
                                duration: 0.08
                            }
                        }}
                    ><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </motion.button>
                </div>

            </div>

        </motion.div>
    </div>
}


function setSkillsNames(arrayNames) {
    return arrayNames.map((name, index) => <SkillName key={index} name={name} />);
}