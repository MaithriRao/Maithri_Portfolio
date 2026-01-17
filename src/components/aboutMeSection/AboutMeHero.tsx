import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const AboutMeHero = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-20">
      {/* Profile Image */}
      <motion.div
        className="flex justify-center mb-12"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <div className="relative">
          <img
            src="/images/folio-web.jpg"
            alt="Kavu Maithri Rao"
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover object-top shadow-lg border-2 border-slate-600/30"
          />
        </div>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        className="max-w-3xl mx-auto"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Kavu Maithri <span className="text-cyan-400">Rao</span>
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
        </div>

        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-slate-300 mb-6 leading-relaxed">
          {t("heroSection.hero_text_designation")}
        </h2>

        <div className="text-base md:text-lg text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
          <p>
            Bringing data and algorithms to life through intelligent solutions. 
            Passionate about creating meaningful impact through technology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 rounded-lg font-medium">
            View My Work
          </button>
          <button className="px-6 py-3 text-slate-300 border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300 rounded-lg font-medium">
            Get In Touch
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMeHero;
