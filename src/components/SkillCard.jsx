
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
        <motion.div className="mb-6 pr-16" id="skillCard"
            ref={ref2}
            variants={skillVariant}
            animate={controls}
            ><div className="w-10 h-10" id="img"   
                ><img src={logo} alt={"logo"} />
            </div>
            <div className="text-2xl font-bold py-4">{skillName}</div>
            <div className="text-greyText h-28">{description}</div>
        </motion.div>
    </div>
}