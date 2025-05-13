import { useState } from 'react'
import './App.css'
import Header from '../src/components/header/Header';
import AboutMe from '../src/components/aboutme/AboutMe ';
import Contact from '../src/components/contact/Contact';
import Education from '../src/components/education/Education';
import Projects from '../src/components/project/Projects';
import Skills from '../src/components/skills/Skills';
import Work from '../src/components/work/Work';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AboutMe />
      <Work/>
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
