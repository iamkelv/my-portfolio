import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import classes from './App.module.css'
import { About } from './pages/About'
import Project from './pages/Project'
import { Contact } from './pages/Contact'
import { Footer } from './pages/Footer'
import { useEffect, useRef, useState } from 'react'
function App() {
  return (
    <div className={classes.container}>
      <Home />
      <Nav />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
