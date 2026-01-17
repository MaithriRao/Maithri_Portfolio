import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import AboutMeHero from "./AboutMeHero";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const AboutMeMain = () => {
  const { t } = useTranslation();
  return (
    <div
      id={t("aboutMeSection.aboutMe_text")}
      className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto py-20"
    >
      {/* Hero Section integrated into About Me */}
      <AboutMeHero />
      
      {/* Traditional About Me Content */}
      <div className="flex flex-col lg:flex-row gap-16 justify-between items-center">
        <motion.div
          className="flex-1"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <AboutMeText />
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <AboutMeImage />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeMain;
