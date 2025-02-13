const Header= () =>{
  return (
    <header className="bg-[#301934] text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        < a href="/">
        <h1 className="text-2xl font-semibold">My Portfolio</h1>
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/about" className="hover:text-gray-200">About</a></li>
            <li><a href="/skills" className="hover:text-gray-200">Skills</a></li>
            <li><a href="/project" className="hover:text-gray-200">Projects</a></li>
            <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
