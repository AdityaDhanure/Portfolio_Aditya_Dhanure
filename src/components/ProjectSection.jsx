import { ProjectCard } from "./ProjectCard"
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"
import pro4 from "../assets/pro4.png"
import { motion } from "framer-motion"
import { useState } from "react"



export const ProjectSection = () => {
    const [display, setDisplay] = useState(true);

    return <div>
        <section className="text-white h-full pt-5" id="projects">
            <div className=" my-24 mx-5 md:mx-8 lg:mx-20 flex gap-6">

                <div className="w-1/2  ">
                    <div className="">
                        <div>
                            <p className="font-semibold text-greyText py-2">MY PROJECTS</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-5xl lg:text-6xl  font-bold font-mono tracking-tighter pb-16">Work that I've done till now!</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <ProjectCard projectImg={pro2} proName={"YouTube-Clone"} arrayNames={["React", "NodeJS", "Tailwind CSS"]} proDesc={"I currently am the lead designer on the interaction design team for Google Play. Work that I've done for the past 8 years."} />
                        </div>
                        <div>
                            <ProjectCard projectImg={pro4} proName={"PayTM-App"} arrayNames={["React", "Tailwind CSS" , "NodeJS", "Express", "MongoDB"]} proDesc={"I currently am the lead designer on the interaction design team for Google Play. Work that I've done for the past 8 years."} />
                        </div>
                    </div>
                </div>

                <div className="w-1/2 h-full">
                    <div>
                        <div>
                            <ProjectCard projectImg={pro1} proName={"Netflix-Clone"} arrayNames={["HTML", "CSS", "JavaScript"]} proDesc={"I currently am the lead designer on the interaction design team for Google Play. Work that I've done for the past 8 years."} />
                        </div>
                        <div>
                            <ProjectCard projectImg={pro3} proName={"Text-to-Speech-App"} arrayNames={["HTML", "CSS", "JavaScript"]} proDesc={"I currently am the lead designer on the interaction design team for Google Play. Work that I've done for the past 8 years."} />
                        </div>
                        
                        
                    </div>
                    <div className="flex justify-center py-16 ">
                            <motion.div className="py-3 md:py-4 lg:py-5  w-36 md:w-44 lg:w-60  text-xs md:text-md lg:text-lg  text-center font-bold border border-indigo-700 hover:bg-indigo-700 hover:cursor-context-menu" 
                                animate = {{y: display ? 0 : 100, opacity: display ? 1 : 0}}
                                onClick={() => setDisplay(false)}
                                whileHover={{y: -3, transition: {duration: 0.1}}}
                                >VIEW ALL PROJECTS
                            </motion.div> 
                    </div>
                </div>

            </div>
        </section>
    </div>
}