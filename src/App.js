
import './App.css';
import About from './section/About';
import Contact from './section/Contact';
import CustomCursor from './section/CustomCursor';
import Education from './section/Education';
import Footer from './section/Footer';
import Hero from './section/Hero';
import Navbar from './section/Navbar';
import Projects from './section/Projects';
import Skills from './section/Skills';

function App() {
  return (
    < div className='app'>
      <CustomCursor/>
   <Navbar/>
   <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
