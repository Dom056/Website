import { useState } from 'react'
import Title from './Components/Title.jsx'
import Header from './Components/Header.jsx'
import Intro from './Components/Intro.jsx'
import NavBar from './Components/NavBar.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Project from './Components/Project.jsx'
import Contact from './Components/Contact.jsx'



function App() {

  return (
    <>
      <NavBar />
      <></>
      <div>
      <Title/>
      <Intro />
      </div>
      <div>
      <Header header="About Me" />
      <AboutMe />
      </div>
      <div>
      <Header header="Projects" />
      <Project />
      </div>
      <div>
      <Header header="Contact" />
      <Contact />
      </div>
      
    </>
  )
}

export default App
