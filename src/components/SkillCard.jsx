
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const SkillCard = ({logo, skillName, description}) => {

    const ref2 = useRef(null);
    const controls = useAnimation();
    const isInView2 = useInView(ref2, { rootMargin: "10px" })

    useEffect(() => {
        if(isInView2) {
            controls.start("visible");
        } else{
            controls.start("hidden");
        }
    }, [controls, isInView2]);

    const skillVariant = {
        hidden: {
            opacity: 0,
            scale: -0.1,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
               
            }
        },
    }

    return <div>
        <motion.div className=" md:mb-3 lg:mb-6  lg:pr-16 w-44 md:w-full h-fit " id="skillCard"
            ref={ref2}
            variants={skillVariant}
            animate={controls}
            whileHover={"hover"}
            ><motion.div className="w-7 md:w-8 lg:w-10  h-7 md:h-8 lg:h-10" id="img"  
                variants={{
                    hover:{
                    scale: 1.2,
                    transition: {
                        duration: 0.15,
                        }
                    }
                }}
                ><img src={logo} alt={"logo"} />
            </motion.div>
            <div className="text-lg md:text-xl lg:text-2xl  font-bold   py-1 md:py-2 lg:py-4">{skillName}</div>
            <div className="text-greyText  text-sm md:text-md lg:text-lg  h-44 md:h-28 lg:h-32">{description}</div>
        </motion.div>
    </div>
}