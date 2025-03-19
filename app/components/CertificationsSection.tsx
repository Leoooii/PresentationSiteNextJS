const CertificationsSection = () => {
    return (
      <section id="certifications" className="py-12 md:py-24 lg:py-32 bg-blue-950/30 backdrop-blur-sm rounded-xl">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
            Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-black/50 rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Bachelor's Degree in System Engineering</h3>
              <p className="text-blue-200 mb-2">2020-2024</p>
              <p className="text-sm text-blue-100">
                Comprehensive education in system design, software engineering, and IT infrastructure management.
              </p>
            </div>
            <div className="bg-black/50 rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                Certificate in Public Procurement Expertise
              </h3>
              <p className="text-blue-200 mb-2">2022</p>
              <p className="text-sm text-blue-100">
                Specialized training in public procurement procedures, regulations, and best practices.
              </p>
            </div>
            <div className="bg-black/50 rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Certificate in Fitness Training</h3>
              <p className="text-blue-200 mb-2">2021</p>
              <p className="text-sm text-blue-100">
                Professional certification in fitness instruction, nutrition, and personalized training programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CertificationsSection;