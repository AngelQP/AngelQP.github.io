import { useState } from 'react'
import { Header } from './components/Header'
import {Hero} from './components/Hero'
import {About} from './components/About'
import { Portafolio } from './components/Portafolio'
import { Contact } from './components/Contact'

function App() {

  /* Por defecto en oscuro */

  const [theme, setChangeTheme] = useState(true);

  const toggleTheme = () => {
    setChangeTheme(!theme);
    console.log(theme);
  }


  return (
    <div className={theme ? 'App' : 'App-light'}>
      <Header theme={theme} toggleTheme={toggleTheme}></Header>
      <Hero theme={theme}></Hero>
      <About theme={theme}></About>
      <Portafolio theme={theme}></Portafolio>
      <Contact theme={theme}></Contact>
    </div>
  )
}

export default App
