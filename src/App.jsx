import { useState } from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto px-4">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
    </>
  )
}

export default App
