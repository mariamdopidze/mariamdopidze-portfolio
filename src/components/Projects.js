const Projects = ()=> {
  return (
    <section id="projects" className="py-16 px-8 bg-gradient-to-r text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-gray-900 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <img
              className="h-auto w-auto mb-4"
              src="/images/home.png"
              alt="Project 1"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#1E3A8A]">
              Website page
            </h3>
            <p className="mb-4 text-[#1E3A8A]">
              This project is a dynamic and responsive portfolio website built
              using React and Tailwind CSS. It showcases a collection of my
              front-end development projects, highlighting my skills in web
              design, coding, and user interface design. The site is fully
              responsive
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-block bg-[#FFD700] text-white font-medium py-2 px-4 rounded hover:bg-[#1E3A8A] transition-colors"
              >
                View
              </a>
              <a
                href="https://github.com/mariamdopidze/final-projcet"
                className="inline-block bg-[#FFD700] text-white font-medium py-2 px-4 rounded hover:bg-[#1E3A8A] transition-colors"
              >
                Code
              </a>
            </div>
          </div>
          <div className="bg-white text-gray-900 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <img
              className="h-auto w-auto mb-4"
              src="/images/home.png"
              alt="Project 2"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#1E3A8A]">
              Project 2
            </h3>
            <p className="mb-4 text-[#1E3A8A]">
              A short description of the project.
            </p>
            <div className="flex gap-4">
              <a
                href="https://mariamdopidze.github.io/lesson/"
                className="inline-block bg-[#FFD700] text-white font-medium py-2 px-4 rounded hover:bg-[#1E3A8A] transition-colors"
              >
                View
              </a>
              <a
                href="https://github.com/mariamdopidze/lesson"
                className="inline-block bg-[#FFD700] text-white font-medium py-2 px-4 rounded hover:bg-[#1E3A8A] transition-colors"
              >
                Code
              </a>
            </div>
          </div>
          <div className="bg-white text-gray-900 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <img
              className="h-auto w-auto mb-4"
              src="/images/home.png"
              alt="Project 3"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#1E3A8A]">
              Project 3
            </h3>
            <p className="mb-4 text-[#1E3A8A] ">
              A short description of the project.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-block bg-[#FFD700] text-white font-medium py-2 px-4 rounded hover:bg-[#1E3A8A] transition-colors"
              >
                View
              </a>
              <a
                href="#"
                className="inline-block bg-[#FFD700] text-white font-medium py-2 px-4 rounded hover:bg-[#1E3A8A] transition-colors"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
