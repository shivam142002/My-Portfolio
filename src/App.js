
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About";
import Projects from "./components/Projects"
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <SocialLinks />
      <Contact />
    </div>
  );
}

export default App;
