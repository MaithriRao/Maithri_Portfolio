import {motion, useScroll} from "motion/react";

const ProgressBarMain = () => {
    const {scrollYProgress} = useScroll();
    return (
        <motion.div
            className="w-full origin-left h-2 fixed top-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{
                scaleX: scrollYProgress
            }}
        >

        </motion.div>
    );
};

export default ProgressBarMain;
