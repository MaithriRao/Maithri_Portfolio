import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { HiDownload } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const CVSection = () => {
  const { t } = useTranslation();

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/cv/CV_KavuMaithriRao.pdf'; // Place your CV in public/cv/ folder
    link.download = 'CV_KavuMaithriRao.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="CV"
      className="max-w-[1200px] mx-auto mt-[100px] px-4"
    >
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-6xl text-cyan mb-10 text-center">
          {t("cvSection.cv_text")}
        </h2>
      </motion.div>

      <motion.div
        className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* CV Preview */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* PDF Embed */}
              <div className="w-full h-[600px] lg:h-[700px]">
                <iframe
                  src="/cv/CV_KavuMaithriRao.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  width="100%"
                  height="100%"
                  className="border-0"
                  title="Kavu Maithri Rao CV"
                >
                  <p className="text-center text-slate-600 p-8">
                    Your browser does not support PDF preview. 
                    <a 
                      href="/cv/CV_KavuMaithriRao.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline ml-2"
                    >
                      Click here to view the PDF
                    </a>
                  </p>
                </iframe>
              </div>
            </div>
          </div>

          {/* CV Info & Download */}
          <div className="lg:w-80 w-full">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("cvSection.cv_title")}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {t("cvSection.cv_description")}
              </p>
              
              {/* Download Button */}
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 mx-auto lg:mx-0"
              >
                <HiDownload className="text-xl" />
                {t("cvSection.cv_download_btn")}
              </button>

              {/* CV Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-cyan">3+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-cyan">20+</div>
                  <div className="text-sm text-slate-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CVSection;
