import Footer from "../components/Footer";
import Header from "../components/Header";

const contactLinks = [
  {
    id: 1,
    name: "Email",
    href: "mailto:mariam.dopidze@gmail.com",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mariam-dopidze-a708b3287/",
  },
  {
    id: 3,
    name: "GitHub",
    href: "https://github.com/mariamdopidze?tab=repositories",
  },
];

const Contact = () => {
  return (
    <div className="">
      <Header/>
    <section id="contact" className="py-16 px-8 bg-[#F5E6E8] text-[#1E3A8A]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out for collaborations or just to connect.</p>
        <div className="flex gap-4 justify-center">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-lg text-[#1E3A8A] hover:text-[#FFD700] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Contact;
