import { useState } from 'react'
import Title from './Components/Title.jsx'
import Header from './Components/Header.jsx'
import Intro from './Components/Intro.jsx'
import NavBar from './Components/NavBar.jsx'



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
      </div>
      <div>
      <Header header="Projects" />
      </div>
      <div>
      <Header header="Contact" />
      </div>
      
    </>
  )
}

export default App
