// Context imports.
import { SectionProvider } from '../contexts/SectionContext';
import ControlOverlay from '../components/ControlOverlay';
import { navLinks } from '../constants';

// Component imports.
import ThemeToggle from '../components/ThemeToggle';
import Hero from '../components/Hero/Hero'
import Waves from '../components/Waves';
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe';
import Work from '../components/Work';
import Education from '../components/Education';
import Tools from '../components/Tools';
import Projects from '../components/Projects/Projects';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <SectionProvider>
      <ThemeToggle />
      <Hero />
      <Waves />
      <ControlOverlay />
      <NavBar links={navLinks} />
      <AboutMe />

      <div id="web-based-resume">
        <Work />
        <Education />
        <Tools />
        <Projects />
        <Blogs />
      </div>

      <Footer />

    </SectionProvider>
  )
}