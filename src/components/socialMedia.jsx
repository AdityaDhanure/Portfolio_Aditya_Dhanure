import insta from '../assets/instagram.png';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linkedin.png';

import { motion } from "framer-motion";

export const SocialMedia = () => {
    return <div>
        <div className='flex gap-3'>
            <motion.div className='w-4 md:w-6  h-5 md:h-6 hover:cursor-pointer' onClick={()=>{window.open('https://www.instagram.com/adityadhanure0607/', '_blank')}}
                initial={{ scale: 1 }}
                whileHover={{ 
                    scale: 1.2,
                    transition: {
                         duration: 0.3 
                    }
                }}
                ><img src={insta} alt={"Instagram"} />
            </motion.div>
            <motion.div className='w-4 md:w-6  h-5 md:h-6 hover:cursor-pointer' onClick={()=>{window.open('https://www.linkedin.com/in/aditya-dhanure-ba610926b/', '_blank')}}
                initial={{ scale: 1 }}
                whileHover={{ 
                    scale: 1.2,
                    transition: {
                         duration: 0.3 
                    }
                }}
                > <img src={linkedin} alt={"Linkedin"} />
            </motion.div>
            <motion.div className='w-4 md:w-6  h-5 md:h-6 hover:cursor-pointer' onClick={()=>{window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDbtwjVwPtpvQhJnNrKbVqfCNdttMcgBQvRTrJLHWMDKWHzhlCwzSsZSJBtGrMwCwhPnmxF', '_blank')}}
                initial={{ scale: 1 }}
                whileHover={{ 
                    scale: 1.2,
                    transition: {
                         duration: 0.3 
                    }
                }}
                ><img src={gmail} alt={"Gmail"} />
            </motion.div>
        </div>
    </div>
}   