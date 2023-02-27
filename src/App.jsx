import { useState } from 'react'
import { Header } from './components/Header'
import {Hero} from './components/Hero'
import {About} from './components/About'
import { Portafolio } from './components/Portafolio'
import { Contact } from './components/Contact'

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Portafolio></Portafolio>
      <Contact></Contact>
    </div>
  )
}

export default App
