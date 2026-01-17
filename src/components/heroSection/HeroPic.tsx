import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      className="h-full flex items-center justify-center relative mb-20 md:mb-0 md:w-[40%]"
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div className="relative">
        {/* Profile Image */}
        <div className="relative z-10">
          <img
            src="/images/folio-web.jpg"
            alt="Kavu Maithri Rao"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover object-top shadow-2xl border-4 border-slate-700/50"
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        
        {/* Floating Elements */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-2xl">✨</span>
        </div>
        
        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-2xl">🚀</span>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent rounded-2xl"></div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
