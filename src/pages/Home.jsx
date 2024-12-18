// Context imports.
import { SectionProvider } from '../contexts/SectionContext';

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

/**
 * Navigation links.
 * @type {Object}
 */
const links = {
  'About': { id: 'about-me', href: '#about-me', ref: 'aboutMe' },
  'Work': { id: 'work', href: '#work', ref: 'work' },
  'Projects': { id: 'projects', href: '#projects', ref: 'projects' },
  'Blogs': { id: 'blogs', href: '#blogs', ref: 'blogs' }
};

export default function Home() {
  return (
    <SectionProvider>
      <ThemeToggle />
      <Hero />
      <Waves />
      <NavBar links={links} />
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