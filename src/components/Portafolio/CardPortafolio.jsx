import React from 'react'
import './CardPortafolio.css'

export const CardPortafolio = ({pathProject, title, description, sourceGit, sourceWeb}) => {
  return (
    <div className='portafolio-card-container'>

      <img src={pathProject} alt='Project' className='portafolio-card-image' />

      <div className="portafolio-card--effect">
        <h3 className='portafolio-card-title'>{title}</h3>
        <p className='portafolio-card-paragraph'>{description}</p>
        <div className="container--cta">
          <a href={sourceGit} target="_blank" className='cta cta--Git'>Github</a>
          <a href={sourceWeb} target="_blank" className='cta cta--Web'>Web</a>
        </div>
      </div>
      
    </div>
  )
}
