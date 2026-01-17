import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { projects } from "../../constants/projectsData";
import { useTranslation } from "react-i18next";

const ProjectsMain = () => {
  const { t } = useTranslation();
  return (
    <div
      id={t("projectsSection.projects_text")}
      className="max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
