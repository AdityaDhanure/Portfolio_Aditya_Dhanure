import { motion, useInView, useAnimation, delay } from "framer-motion";
import { tr } from "motion/react-client";
import { useEffect, useRef } from "react";

export const WorkExp = () => {
    const ref = useRef(null); //referencing the element, initially to null
    const controls = useAnimation(); //controls the animation
    const isInView = useInView(ref, { rootMargin: "10px" }) //referenced margin to detect the element on screen

    useEffect(() => {
        if(isInView) {
            controls.start("start");
        } else{
            controls.start("initial");
        }
    }, [isInView, controls]);
    
    const moveRVariant1 = {
        initial: {
            x: "-50%",
            opacity: 0
        },
        start:{
            x: 0,
            opacity: 1,
            transition:{
                delay: 0.1,
                duration: 0.5,
            }
        }
    }
    const moveRVariant2 = {
        initial: {
            x: "-50%",
            opacity: 0
        },
        start:{
            x: 0,
            opacity: 1,
            transition:{
                delay: 0.4,
                duration: 0.5,
            }
        }
    }
    const moveRVariant3 = {
        initial: {
            x: "-50%",
            opacity: 0
        },
        start:{
            x: 0,
            opacity: 1,
            transition:{
                delay: 0.7,
                duration: 0.5,
            }
        }
    }

    return <div>
        <section className="text-white my-20" id="experience">
            <div className="mt-60  mx-20">

                <div>
                    <p className="text-greyText py-4 font-semibold">WORK EXPERIENCE</p>
                </div>

                <div>
                    <p className="text-6xl w-7/12 pr-10 font-bold pb-6">Organisations I have worked for in the past.</p>
                </div>

                <div className="flex w-full gap-8">

                    <motion.div className="w-1/3 "
                        ref={ref}
                        variants={moveRVariant1}
                        animate={controls}    
                    >
                        <div>
                            <ul>
                                <li className="text-8xl py-3 text-greyText">01</li>
                            </ul>
                        </div>
                        <div className="flex">
                            <p className="text-2xl font-bold py-2 text-green-400">C³(C-Cube)</p>
                            <p  className="text-2xl font-bold py-2">, Head of Web Developer</p>
                        </div>
                        <div>
                            <p className="pr-10 py-2 h-28">Coordinated seminars with industry experts, facilitating knowledge sharing and networking opportunities for
                            students with professionals in the tech industry.</p>
                        </div>
                        <div className="pt-5 px-2 flex justify-end text-sm text-greyText">Mar 2024 - Present</div>
                    </motion.div>

                    <motion.div className="w-1/3"
                        ref={ref}
                        variants={moveRVariant2}
                        animate={controls}
                        
                    >
                        <div>
                            <ul>
                                <li className="text-8xl py-3 text-greyText">02</li>
                            </ul>
                        </div>
                        <div className="flex">
                            <p className="text-2xl font-bold py-2 text-blue-400">Catalyst</p>
                            <p className="text-2xl font-bold py-2">, Web Developer</p>
                        </div>
                        <div className="pr-10 py-2 h-28 ">
                            <p>Contributed in making club's website using Webflow Software.</p>
                            <p>Participated as a coordinator in the club's event Vichardhara 2024.</p>
                        </div>
                        <div className="pt-5 px-2 flex justify-end text-sm text-greyText">Jan 2023 - Aug 2024</div>
                    </motion.div>

                    <motion.div className="w-1/3"
                        ref={ref}
                        variants={moveRVariant3}
                        animate={controls}
                        
                    >
                        <div>
                            <ul>
                                <li className="text-8xl py-3 text-greyText">03</li>
                            </ul>
                        </div>
                        <div className="flex">
                            <p className="text-2xl font-bold py-2 text-pink-400">B.Tech-CSE</p>
                            <p className="text-2xl font-bold py-2">, Student</p>
                        </div>
                        <div>
                            <p className="pr-10 py-2 h-28">Government College of Engineering, Aurangabad, (CGPA: 8.315 - Current), Relevant Courses: OOP, DBMS, DAA, DSA.</p>
                        </div>
                        <div className="pt-5 px-2 flex justify-end text-sm text-greyText">Nov 2022 - Present</div>
                    </motion.div>

                </div>

            </div>
        </section>
    </div>
}