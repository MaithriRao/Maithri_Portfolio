import SingleSkill from "./SingleSkill";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { skills } from "../../constants/skillsData";

const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px]">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            key={index}
          >
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
