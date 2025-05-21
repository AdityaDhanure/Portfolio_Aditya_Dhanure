import { motion } from "framer-motion";

export const LogoCard = ({img}) => {
    return <div className="flex justify-center items-center">
        <motion.div className="w-full md:w-56 lg:w-72   h-16 md:h-28 lg:h-32  flex justify-center items-center border border-zinc-900" 
            whileHover={"hover"}
            ><motion.div
                variants={{
                    hover: {
                        scale: 1.3,
                        transition: {
                            duration: 0.1
                        }
                    }
                }}
            ><img src={img} alt={"logo"}  className="w-8 md:w-8 lg:w-10  h-8 md:h-8 lg:h-10 rounded-lg" style={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 255)"}}/>
            </motion.div>  
        </motion.div>
    </div>
}