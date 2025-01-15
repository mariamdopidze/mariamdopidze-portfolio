const projects = [
  {
    id: 1,
    title: "Website page",
    description: "This project is a dynamic and responsive portfolio website built using React and Tailwind CSS. It showcases a collection of my front-end development projects, highlighting my skills in web design, coding, and user interface design. The site is fully responsive.",
    image: "/images/home.png",
    viewLink: "",
    codeLink: "https://github.com/mariamdopidze/final-projcet",
  },
  {
    id: 2,
    title: "Animate",
    description: "Using design and animation elements, I created interactive experiences where images move and rotate with the help of CSS. This project showcases my ability to implement even simple, yet visually striking effects.",
    image: "/images/animation.jpeg",
    viewLink: "https://mariamdopidze.github.io/animations/",
    codeLink: "https://github.com/mariamdopidze/animations",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A short description of the project.",
    image: "/images/home.png",
    viewLink: "#",
    codeLink: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-gradient-to-r text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white text-gray-900 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <img className="h-auto w-auto mb-4" src={project.image} alt={project.title} />
              <h3 className="text-2xl font-semibold mb-2 text-[#1E3A8A]">{project.title}</h3>
              <p className="mb-4 text-[#1E3A8A]">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.viewLink}
                  className="inline-block bg-[#F2D1D1]  text-white font-medium py-2 px-4 rounded hover:bg-[#1E3A8A] transition-colors"
                >
                  View
                </a>
                <a
                  href={project.codeLink}
                  className="inline-block bg-[#F2D1D1] text-white font-medium py-2 px-4 rounded hover:bg-[#1E3A8A] transition-colors"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
