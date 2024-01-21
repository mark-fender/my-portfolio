import Intro from '../components/Intro';
import Projects from '../components/Projects';
import SectionDivider from '../components/SectionDivider';
import Skills from '../components/Skills';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className='flex flex-col items-center px-8 relative'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </main>
  );
};

export default Home;
