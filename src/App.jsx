import { useState } from 'react'
import PortfolioNav from './components/navbar'
import HeroSection from './components/about'
import SkillPage from './components/skills'
import Projects from './components/project'
import Contact from './components/contact'
function App() {
  return (
    <div className="App">
      <PortfolioNav />
      <HeroSection />
      <SkillPage />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
