import React from 'react'
import './CardPortafolio.css'

export const CardPortafolio = ({pathProject, title, description, sourceGit, sourceWeb, theme}) => {
  return (
    <div className='portafolio-card-container'>

      <img src={pathProject} alt='Project' className='portafolio-card-image' />

      <div className={theme ? "portafolio-card--effect" : "portafolio-card--effect light"}>
        <h3 className={theme ? 'portafolio-card-title' : 'portafolio-card-title--light'}>{title}</h3>
        <p className={theme ? 'portafolio-card-paragraph' : 'portafolio-card-paragraph--light'}>{description}</p>
        <div className="container--cta">
          <a href={sourceGit} target="_blank" className={theme ? 'cta' : 'cta--light'}>Github</a>
          <a href={sourceWeb} target="_blank" className={theme ? 'cta' : 'cta--light'}>Web</a>
        </div>
      </div>
      
    </div>
  )
}
