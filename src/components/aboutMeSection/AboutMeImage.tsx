const AboutMeImage = () => {
    return (
        <div className="h-[500px] w-[300px] relative">
            <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <img src="/images/ai-ml-profile.svg" alt="AI/ML Profile" className="h-full w-full object-contain p-8" />
            </div>
            <div className="h-[500px] w-[250px] bg-gradient-to-br from-blue-500 to-purple-500 absolute bottom-[-30px]
            left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 opacity-80">

            </div>
        </div>
    );
};

export default AboutMeImage;
