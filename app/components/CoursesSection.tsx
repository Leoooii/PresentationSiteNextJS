const CoursesSection = () => {
    return (
      <section id="courses" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-white">
            Self-Taught Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all bg-black/50">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                The Complete 2023 Web Development Bootcamp
              </h3>
              <p className="text-blue-200 mb-4">2023</p>
              <div className="flex items-center text-sm text-blue-100">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>HTML, CSS, JavaScript</span>
              </div>
              <div className="flex items-center text-sm text-blue-100 mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center text-sm text-blue-100 mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>Frontend Frameworks</span>
              </div>
            </div>
            <div className="rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all bg-black/50">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">JavaScript - The Complete Guide 2023</h3>
              <p className="text-blue-200 mb-4">2023</p>
              <div className="flex items-center text-sm text-blue-100">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>Advanced JavaScript</span>
              </div>
              <div className="flex items-center text-sm text-blue-100 mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>ES6+ Features</span>
              </div>
              <div className="flex items-center text-sm text-blue-100 mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>Asynchronous Programming</span>
              </div>
            </div>
            <div className="rounded-lg border border-blue-500/30 p-6 shadow-lg shadow-blue-500/5 backdrop-blur-sm hover:shadow-blue-500/10 transition-all bg-black/50">
              <h3 className="text-xl font-semibold mb-2 text-blue-300">
                React, NodeJS, Express & MongoDB - The MERN Fullstack Guide
              </h3>
              <p className="text-blue-200 mb-4">2023</p>
              <div className="flex items-center text-sm text-blue-100">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>React & Redux</span>
              </div>
              <div className="flex items-center text-sm text-blue-100 mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>Node.js & Express</span>
              </div>
              <div className="flex items-center text-sm text-blue-100 mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                <span>MongoDB & Mongoose</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CoursesSection;