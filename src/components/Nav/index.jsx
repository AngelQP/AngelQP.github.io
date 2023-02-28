import React from 'react'
import './Nav.css'

const Nav = ({theme, toggleTheme}) => {
  return (
    <nav className='nav container' id='nav'>
      {/* nav-logo */}
      <a href='#home' className='nav-logo'>
        <div /* src= {theme ? `/Logos/Angel-Web-dark.svg` : `/Logos/Angel-Web-light.svg`} */
        className={theme ? 'nav-logo--light' : 'nav-logo--dark'}></div>
      </a>
      {/* nav-menu */}
      <div className="nav-menu">
        <ul className={theme ?  'nav-list nav-list--dark' :  'nav-list nav-list--light'}>
          <li className="nav-item">
            <a href="#" className={ theme ? `nav-link` : `nav-link--light`}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className={ theme ? `nav-link` : `nav-link--light`}>About</a>
          </li>
          <li className="nav-item">
            <a href="#portafolio" className={ theme ? `nav-link` : `nav-link--light`}>Portafolio</a>
          </li>
          <li className="nav-item">
            <i onClick={toggleTheme} 
            className={theme ? `nav-link nav-img--dark` :`nav-link--light nav-img--light`}> </i>
          </li>
        </ul>

      </div>

      <a href="#nav" class="nav__hamburguer">
        <img src={theme ? "./assets/icons/menu.svg" : "./assets/icons/menu-light.svg"} alt="icono de apertura de menu" class="nav__icon" />
      </a>

      <a href="#" class="nav__close">
        <img src={theme ? "./assets/icons/close.svg" : "./assets/icons/close-light.svg"} alt="icono de cerrar" class="nav__icon" />
      </a>

    </nav>
  )
}

export { Nav }