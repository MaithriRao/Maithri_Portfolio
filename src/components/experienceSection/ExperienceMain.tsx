import ExperienceCard from "./ExperienceCard";

const experiences: any[] = [];

const ExperienceMain = () => {
  return (
    <section id="Experience" className="max-w-[1100px] mx-auto px-4 mt-32">
      <h2 className="text-6xl text-cyan mb-16 text-center">
        Professional Experience
      </h2>

      {experiences.map((exp, index) => (
        <ExperienceCard key={index} item={exp} />
      ))}
    </section>
  );
};

export default ExperienceMain;
