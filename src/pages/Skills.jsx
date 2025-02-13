import Footer from "../components/Footer";
import Header from "../components/Header";

const Skills =()=> {
  return (
    <div className="bg-[#F5E6E8]">
      <Header/>
    <section id="skills" className="py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
<div className="flex h-16 w-16 mx-auto gap-6  items-center justify-center "> 
        <img src= "/images/html-icon.png " alt="images"/>
        <img src= "/images/css-icon.png" alt="images" />
        <img src= "/images/js-icon.png" alt="images"/>
        <img src= "/images/figma-icon.png" alt="images"/>
        <img src= "/images/git-icon.png" alt="images"/> 
        <img src= "/images/react-icon.png" alt="images"/>
        <img src= "/images/bootstrap-icon.png" alt="images"/> 
        <img src= "/images/tailwind.png" alt="images"/> 
        <img src= "/images/github-icon.png" alt="images"/> 

</div>
        
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Skills;
