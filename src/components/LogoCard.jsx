import { motion } from "framer-motion";

export const LogoCard = ({img}) => {
    return <div>
        <motion.div className="w-72 h-32 flex justify-center items-center border border-zinc-900"
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
            ><img src={img} alt={"logo"}  className="w-10 h-10 rounded-lg" />
            </motion.div>  
        </motion.div>
    </div>
}