import { ProjectCard } from '../DynamicComponents';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <ProjectCard
            title="Hardware Store Web Platform"
            description="I independently developed a web platform using Next.js for a hardware store, integrating Firebase authentication, which allows the owner to showcase and efficiently manage their stock."
            image="/construction.png"
            link="https://github.com"
            tags={["Next.js", "Firebase", "Authentication"]}
          />
          <ProjectCard
            title="Dental Clinic Management Platform"
            description="I built a web platform using React, Express and Mongoose where doctors can create appointments and manage other aspects of the clinic."
            image="/dental.png"
            link="https://github.com"
            tags={["React", "Express", "MongoDB"]}
          />
          <ProjectCard
            title="ANAF Information Platform"
            description="Web platform for accessing ANAF (Romanian Tax Administration) information, providing users with easy access to tax-related data."
            image="/anaf.png"
            link="https://github.com"
            tags={["JavaScript", "API Integration", "Web Development"]}
          />
          <ProjectCard
            title="Security System for Hearing Impaired"
            description="I worked on a team project which involves Arduino and sensors with the purpose of alarming people with hearing impairments of intruders."
            image="/arduino.png"
            link="https://github.com"
            tags={["Arduino", "IoT", "Sensors"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;