import { useEffect, useState } from 'react';
import './App.css';
import Header from '../src/components/header/Header';
import AboutMe from '../src/components/aboutme/AboutMe ';
import Contact from '../src/components/contact/Contact';
import Education from '../src/components/education/Education';
import Projects from '../src/components/project/Projects';
import Skills from '../src/components/skills/Skills';
import Work from '../src/components/work/Work';
import { InputSwitch } from 'primereact/inputswitch';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = (e) => {
    const newTheme = e.value ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <div className='darklight'>
        <span style={{ fontSize: '0.9rem' }}>{theme === 'light' ? '☀️' : '🌙'}</span>
        <InputSwitch checked={theme === 'dark'} onChange={toggleTheme} />
      </div>
      <Header />
      <AboutMe />
      <Work />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
