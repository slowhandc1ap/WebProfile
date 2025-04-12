import Navbar from "./components/Navbar";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
;
import Projects from "./components/Project";



const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-gray-900">
      <Navbar />
      <Welcome />
      <About />
      <Projects />
      <Contact />
   
    </div>
  );
};

export default Home;
