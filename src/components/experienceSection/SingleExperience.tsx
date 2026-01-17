import { motion } from "motion/react";
import { Experience } from "../../constants/experienceData";
import React from "react";

interface SingleExperienceProps {
  experience: Experience;
}

const SingleExperience: React.FC<SingleExperienceProps> = ({ experience }) => {
  return (
    <motion.div
      className="md:h-[450px] md:w-[300px] sm:h-auto sm:w-full border-2 border-orange border-dashed
        rounded-2xl mt-12 p-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
    >
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-orange">{experience.location}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4">
        {experience.responsibilities.map((resp, index) => {
          return (
            <motion.li
              key={index}
              className="text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // stagger effect for responsibilities
            >
              {resp}
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
