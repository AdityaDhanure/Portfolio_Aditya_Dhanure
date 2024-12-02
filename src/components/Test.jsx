import { useState, useEffect, useRef } from "react";

export const useOutsideClick = () => {
  const [isVisible, setIsVisible] = useState(false);
  const parentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (parentRef.current && !parentRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isVisible, setIsVisible, parentRef };
};




// <motion.div className="flex overflow-scroll relative"
//     ref={ref1}
//     variants={animationVariant}
//     animate={controls}
//         ><motion.div className="text-white mb-5 flex bg-black cursor-grab"
//             drag="x"
//             dragConstraints={{ left: -1500, right: 0 }}
//             >
//             {skillsArray.map((skill, index) => {
//                 return <motion.div className="overflow-hidden">
//                     <LogoCard key={index} img={skill} />
//                 </motion.div>
//             })}
//     </motion.div>
// </motion.div>

