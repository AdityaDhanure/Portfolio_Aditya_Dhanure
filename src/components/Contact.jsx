import { delay, motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export const Contact = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const controls = useAnimation();
    
    const isInView1 = useInView(ref1, { rootMargin: "10px" });
    const isInView2 = useInView(ref2, { rootMargin: "10px" });

    useEffect(() => {
        if(isInView1) {
            controls.start("visible");
        } else{
            controls.start("hidden");
        }

        if(isInView2) {
            controls.start("visit");
        } else{
            controls.start("hide");
        }
    },[isInView1, controls]);

    const moveRVariants = {
        hidden: { opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.2
            } 
        }
    }
    const moveLVariants = {
        hide: { opacity: 0 },
        visit: { 
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.2
            } 
        }
    }
    

    return <div>
        <section className="text-white h-full" id="contact">
            <motion.div className="lg:px-40  py-16 md:py-20 lg:py-40 w-full md:flex "
                ref={ref1}
                variants={moveRVariants}
                animate={controls}
            >

                <div className="md:w-1/2  px-20 md:px-12 lg:px-20 ">
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold">Let's talk business</p>
                        <p className="py-4 md:py-5 lg:py-8  text-xs md:text-md lg:text-lg  text-greyText">Feel free to reach out to me for any project ideas or collaboration</p>
                </div>
                <div className="md:w-1/2 ">
                    <section className="pl-20 md:pl-3 lg:pl-5  pr-20 md:pr-12 lg:pr-20">
                        <form id="form" onSubmit={(e) => { e.preventDefault(); contactMe(); }}>
                            <div className=" pb-4 md:pb-7 lg:pb-10">
                                <label htmlFor="name" className="font-bold">Name</label>
                                <input type="text" id="name" name="name" required  className="w-full  h-7 md:h-10  px-1.5 md:px-3  mt-0.5 md:mt-2 bg-grey"/>
                            </div>
                            <div className=" pb-4 md:pb-7 lg:pb-10">
                                <label htmlFor="email" className="font-bold">Email</label>
                                <input type="email" id="email" name="email" required className="w-full  h-7 md:h-10 px-1.5 md:px-3  mt-0.5 md:mt-2 bg-grey"/>
                            </div>
                            <div className=" pb-4 md:pb-7 lg:pb-10">
                                <label htmlFor="message" className="font-bold">Message</label>
                                <textarea id="message" name="message" required className="w-full  h-20 md:h-24 px-1.5 md:px-3  mt-0.5 md:mt-2 bg-grey" />
                            </div>
                            <div>
                                <motion.input type="submit" id="submit" value="LET'S GET STARTED" className="w-full py-3 md:py-4 lg:py-5 text-center font-bold font-mono  text-xs md:text-lg  bg-indigo-700 hover:cursor-pointer" 
                                    whileHover={{y: -3, transition: {duration: 0.1}}}
                                ></motion.input>
                            </div>
                        </form> 
                    </section>
                </div>

            </motion.div>
        </section>
    </div>
}

function contactMe(){
    const form = document.getElementById("form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const submit = document.getElementById("submit");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.value !== "" && email.value !== "" && message.value !== "") {
        if(emailPattern.test(email.value)) {
            submit.value = "Submitting...";

            try{
                setTimeout(() =>{
                    form.reset();
                    submit.value = "LET'S GET STARTED";
                    const successMessage = document.createElement("div");
                    successMessage.className = "w-full  py-3 md:py-4 lg:py-5  text-center font-bold font-mono  text-xs md:text-lg  bg-green-500";
                    successMessage.innerHTML = '<div>Thank you! Your submission has been received!</div>';
                    form.parentNode.appendChild(successMessage);
                    form.style.display = "none";
                }, 2000)
            } catch {
                form.reset();
                submit.value = "LET'S GET STARTED";
                const successMessage = document.createElement("div");
                successMessage.className = "w-full  py-3 md:py-4 lg:py-5  text-center font-bold font-mono  text-xs md:text-lg  bg-red-500";
                successMessage.innerHTML = '<div>Oops! Something went wrong while submitting the form.</div>';
                form.parentNode.appendChild(successMessage);
                form.style.display = "none";
            }
        } 
    } 
    return true;
}

function ifSuccess(){

}