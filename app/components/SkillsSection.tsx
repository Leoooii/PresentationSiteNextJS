import { TechStack } from '../DynamicComponents';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
          Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Technical Skills</h3>
            <TechStack />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Soft Skills</h3>
            <div className="grid gap-4">
              <div className="bg-black/50 rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-blue-100">Time management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-blue-100">Good communication skills</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-blue-100">Fast learner</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-blue-100">Teamwork</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-blue-100">Leadership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;