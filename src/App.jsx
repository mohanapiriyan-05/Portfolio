import "./App.css";

import Hero from "./components/sections/Hero/Hero";
import TechStack from "./components/sections/TechStack/TechStack";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Stats from "./components/sections/Stats/Stats";
import Projects from "./components/sections/Projects/Projects";
import Timeline from "./components/sections/Timeline/Timeline";
import Achievements from "./components/sections/Achievements/Achievements";
import Awards from "./components/sections/Awards/Awards";
import Certifications from "./components/sections/Certifications/Certifications";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";
import CreativeEffects from "./components/CreativeEffects/CreativeEffects";
import Extras from "./components/sections/Extras/Extras";
import AdminMessages from "./components/sections/AdminMessages/AdminMessages";

export default function App() {
  return (
    <main className="app">
      <CreativeEffects />

      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Timeline />
      <Achievements />
      <Awards />
      <Certifications />
      <Contact />
      <AdminMessages/>
      <Extras/>
      <Footer />
      
    </main>
  );
}