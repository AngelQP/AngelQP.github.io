import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav container' id='nav'>
      {/* nav-logo */}
      <a href='#home' className='nav-logo'>
        <img src="/Logos/Angel-Web-2.svg" alt="Logo" className='nav-logo--main'/>
      </a>
      {/* nav-menu */}
      <div className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className='nav-link active-link'>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className='nav-link'>About</a>
          </li>
          <li className="nav-item">
            <a href="#portafolio" className='nav-link'>Portafolio</a>
          </li>
        </ul>

      </div>

      <a href="#nav" class="nav__hamburguer">
        <img src="./assets/icons/menu.svg" alt="icono de apertura de menu" class="nav__icon" />
      </a>

      <a href="#" class="nav__close">
        <img src="./assets/icons/close.svg" alt="icono de cerrar" class="nav__icon" />
      </a>

    </nav>
  )
}

export { Nav }