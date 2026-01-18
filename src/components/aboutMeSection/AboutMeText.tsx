import { connectText, shortIntro } from "../../constants/aboutMeData";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const AboutMeText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:items-start items-center md:text-left text-center">
      {/* Title: Reduced to 4xl and lightened the weight */}
      <h2 className="text-4xl md:text-5xl text-cyan mb-6 font-medium tracking-tight">
        {t("aboutMeSection.aboutMe_text")}
      </h2>

      {/* Content Container: Unified sizes and balanced colors */}
      <div className="space-y-4 max-w-2xl">
        {/* Paragraph 1: Matched the style you preferred, just slightly brighter */}
        <p className="text-white text-lg leading-relaxed font-normal opacity-95">
          {t(`aboutMeSection.${shortIntro}`)}
        </p>
        
        {/* Paragraph 2: The style you liked */}
        <p className="text-gray-300 text-lg leading-relaxed font-normal">
          {t(`aboutMeSection.${connectText}`)}
        </p>
      </div>

      {/* Button: Slimmer and more minimalist */}
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to={t("aboutMeSection.aboutMe_btn_link_projects")}
        className="mt-10 group"
      >
        <button className="border border-orange/60 rounded-full py-2 px-6 text-base flex gap-3 items-center hover:bg-orange hover:border-orange transition-all duration-300 cursor-pointer">
          <span className="text-white group-hover:text-white">
            {t("aboutMeSection.aboutMe_btn_text_projects")}
          </span>
          <span className="text-orange group-hover:text-white transition-transform group-hover:translate-x-1">→</span>
        </button>
      </Link>
    </div>
  );
};

export default AboutMeText;