import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const WorkExp = () => {
    const ref1 = useRef(null); //referencing the element, initially to null
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const controls = useAnimation(); //controls the animation

    const isInView1 = useInView(ref1, { rootMargin: "10px" }) //referenced margin to detect the element on screen
    const isInView2 = useInView(ref2, { rootMargin: "10px" })
    const isInView3 = useInView(ref3, { rootMargin: "10px" })

    useEffect(() => {
        if(isInView1) {
            controls.start("start");
        } else{
            controls.start("initial");
        }

        if(isInView2) {
            controls.start("start");
        } else{
            controls.start("initial");
        }

        if(isInView3) {
            controls.start("start");
        } else{
            controls.start("initial");
        }
    }, [isInView1,isInView2, isInView3, controls]);
    
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
        <section className="text-white my-16 md:my-28 md:-mt-28 lg:my-20" id="experience">
            <div className="mt-60  mx-5 md:mx-8 lg:mx-20">

                <div>
                    <p className="text-greyText py-4 font-semibold">WORK EXPERIENCE</p>
                </div>

                <div>
                    <p className="text-4xl md:text-5xl lg:text-6xl  w-11/12 md:9/12 lg:w-7/12  pr-10 font-bold pb-6">Organisations I have worked for in the past.</p>
                </div>

                <div className="md:flex w-full  md:gap-4 lg:gap-8">

                    <motion.div className="px-3 md:px-0 md:w-1/3 "
                        ref={ref1}
                        variants={moveRVariant1}
                        animate={controls}    
                    >
                        <div>
                            <ul>
                                <li className="text-7xl lg:text-8xl py-3 text-greyText">01</li>
                            </ul>
                        </div>
                        <div className="flex md:flex-col lg:flex-row  md:h-20 lg:h-fit  ">
                            <div className="flex ">
                                <p className="text-xl md:text-2xl font-bold md:pt-2 lg:py-2 text-green-400">C³(C-Cube),</p>
                                <p  className="text-xl md:text-2xl font-bold md:pt-2 lg:py-2  pl-1.5">Head of</p>
                            </div>
                            <p  className="text-xl md:text-2xl font-bold lg:py-2  pl-1.5 md:pl-0 lg:pl-1.5">Web Developers</p>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm lg:text-lg  md:pr-3 lg:pr-10   py-2 md:h-28">Coordinated seminars with industry experts, facilitating knowledge sharing and networking opportunities for
                            students with professionals in the tech industry.</p>
                        </div>
                        <div className="pt-5 px-2 flex justify-end  text-xs lg:text-sm  text-greyText">Mar 2024 - Present</div>
                    </motion.div>

                    <motion.div className="px-3 md:px-0 md:w-1/3 "
                        ref={ref2}
                        variants={moveRVariant2}
                        animate={controls}
                        
                    >
                        <div>
                            <ul>
                                <li className="text-7xl lg:text-8xl py-3 text-greyText">02</li>
                            </ul>
                        </div>
                        <div className="flex md:flex-col lg:flex-row  md:h-20 lg:h-fit">
                            <div className="flex">
                                <p className="text-xl md:text-2xl font-bold md:pt-2 lg:py-2 text-blue-400">Catalyst,</p>
                                <p className="text-xl md:text-2xl font-bold md:pt-2 lg:py-2  pl-1.5"> Web</p>
                            </div>
                            <p className="text-xl md:text-2xl font-bold lg:py-2  pl-1.5 md:pl-0 lg:pl-1.5"> Developer</p>
                        </div>
                        <div className="text-xs md:text-sm lg:text-lg  md:pr-3 lg:pr-10  py-2 md:h-28 ">
                            <p>Contributed in making club's website using Webflow Software.</p>
                            <p>Participated as a coordinator in the club's event Vichardhara 2024.</p>
                        </div>
                        <div className="pt-5 px-2 flex justify-end  text-xs lg:text-sm  text-greyText">Jan 2023 - Aug 2024</div>
                    </motion.div>

                    <motion.div className="px-3 md:px-0 md:w-1/3 "
                        ref={ref3}
                        variants={moveRVariant3}
                        animate={controls}
                        
                    >
                        <div>
                            <ul>
                                <li className="text-7xl lg:text-8xl py-3 text-greyText">03</li>
                            </ul>
                        </div>
                        <div className="flex md:flex-col lg:flex-row  md:h-20 lg:h-fit">
                            <div className="flex">
                                <p className="text-xl md:text-2xl font-bold md:pt-2 lg:py-2 text-pink-400">B.Tech-CSE,</p>
                                <p className="text-xl md:text-2xl font-bold md:pt-2 lg:py-2  pl-1.5">Student</p>
                            </div>
                            <p className="text-xl md:text-2xl font-bold lg:py-2  pl-1.5 md:pl-0 lg:pl-1.5">in GECA</p>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm lg:text-lg  md:pr-3 lg:pr-10  py-2 md:h-28">Government College of Engineering, Aurangabad, (CGPA: 8.315 - Current), Relevant Courses: OOP, DBMS, DAA, DSA.</p>
                        </div>
                        <div className="pt-5 px-2 flex justify-end  text-xs lg:text-sm  text-greyText">Nov 2022 - Present</div>
                    </motion.div>

                </div>

            </div>
        </section>
    </div>
}