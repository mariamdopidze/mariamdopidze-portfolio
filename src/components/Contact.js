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
    <section id="contact" className="py-16 px-8 bg-[#301934] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">Feel free to reach out for collaborations or just to connect.</p>
        <div className="flex gap-4 justify-center">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-lg text-white hover:text-[#FFD700] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
