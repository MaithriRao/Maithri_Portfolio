import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { Project } from "../../constants/projectsData";
import { useTranslation } from "react-i18next";

const SingleProject: React.FC<Project> = ({
  name,
  year,
  align,
  image,
  link,
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange ">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          href={link}
          target="_blank"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          {t("projectsSection.projects_btn_view")}{" "}
          <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div
        className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden
            hover:scale-110 transform
            transition-all duration-500 relative border border-white"
      >
        <div
          className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0
                hover:opacity-0 transition-all duration-500 md:block sm:hidden"
        ></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
