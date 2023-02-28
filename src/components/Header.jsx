import React from 'react'
import {Nav} from './Nav'
import './Header.css'

export const Header = ({theme, toggleTheme}) => {
  return (
    <header className='header'>
      <Nav theme={theme} toggleTheme={toggleTheme}></Nav>
    </header>
  )
}
