import ExperienceTop from "./ExperienceTop";
import ExperienceText from "./ExperienceText";
import AllExperiences from "./AllExperiences";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react"; // Import useEffect and useState

const ExperienceMain = () => {
  const { t } = useTranslation();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // Adjust breakpoint

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024); // Adjust breakpoint
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id={t("experienceSection.experience_text")}
      className="max-w-[1300px] mx-auto px-1"
    >
      {isLargeScreen ? ( // Conditional rendering based on screen size
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ExperienceText />
        </motion.div>
      ) : (
        <ExperienceText /> // No animation for small/medium screens
      )}
      {isLargeScreen ? ( // Conditional rendering for ExperienceTop
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <ExperienceTop />
        </motion.div>
      ) : (
        <ExperienceTop /> // No animation for small/medium screens
      )}
      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllExperiences />
    </div>
  );
};

export default ExperienceMain;
