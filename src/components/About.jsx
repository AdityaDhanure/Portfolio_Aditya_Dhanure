import { NavBar } from "./NavBar"
import { Name } from "./Name"
import photo from "../assets/profile2.png"

import { motion } from "framer-motion"

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
    hidden: { x: "-100vw", opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1
        } 
    }
}
const moveLVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1,
        } 
    }
}


export const About = () => {
    return <div>
        <section className="text-white flex " id="home">

            <div className="w-2/6 ">
                <motion.div
                variants={visibleVariants}
                    initial={"hidden"}
                    animate={"visible"}
                    ><Name />
                </motion.div>
                <div className=" flex justify-center items-center absolute h-4/5 w-1/2  z-50 " /*style={{backgroundImage: `url(${photo})`, backgroundSize: "cover"}}*/ >
                    <motion.div className=" w-full"
                        variants={moveRVariants}
                        initial={"hidden"}
                        animate={"visible"}
                        ><img src={photo} className="" />
                    </motion.div>

                    <div>
                        <div className="absolute  w-full -mt-56  -ml-20">

                            <div className="font-mono font-bold flex justify-center items-center">
                                <motion.div className="text-7xl py-5"
                                    variants={moveLVariants}
                                    initial={"hidden"}
                                    animate={"visible"}    
                                >
                                    <p>I'm Aditya Dhanure.</p>   
                                    <p>A web Developer </p>
                                    <p className="text-zinc-400">based in Chh. Sambhaji Nagar.</p> 
                                </motion.div>
                            </div>
                            
                            <motion.div className="  py-5  text-lg font-mono"
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

            <div className="bg-grey  w-4/6 h-screen gap-96 z-0 ">
                <motion.div
                    variants={visibleVariants}
                    initial={"hidden"}
                    animate={"visible"}
                    ><NavBar />
                </motion.div>
            </div>

        </section>
    </div>
}