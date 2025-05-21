import { About } from "../components/About"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { Philosophy } from "../components/Philosophy"
import { ProjectSection } from "../components/ProjectSection"
import { SkillsSet } from "../components/SkillsSet"
import { WorkExp } from "../components/WorkExp"


import { motion } from "framer-motion"

   
    

export const Landing = () => {

    return <motion.div className="">
        <About />
        <WorkExp />
        <Philosophy />
        <SkillsSet />
        <ProjectSection />
        <Contact />
        <Footer />
       
    </motion.div>
}