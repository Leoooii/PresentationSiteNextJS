import { Experience } from '../DynamicComponents';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
          Experience
        </h2>
        <Experience />
      </div>
    </section>
  );
};

export default ExperienceSection;