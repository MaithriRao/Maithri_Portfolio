import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const SkillsMain = () => {
  const { t } = useTranslation();
  return (
    <div id={t("skillsSection.skills")}>
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        {/* Ensure AllSkills is hidden on small screens */}
        <div className="hidden lg:block absolute bottom-[50px] left-[50%] -translate-x-[50%]">
          <AllSkills />
        </div>
        {/* Display AllSkillsSM on small and medium screens, hidden on large */}
        <div className="block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
