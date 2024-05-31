import { useState } from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import './App.css'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
        <Header />
        <Home />
    </div>
  )
}

export default App
