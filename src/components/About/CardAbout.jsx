import React from 'react'
import './CardAbout.css'

export const CardAbout = ({path, alt, text, theme}) => {
  return (
    <div className={theme ? 'card' : 'card--light'}>
      <img src={path} alt={alt} className='card-image' />
      <p className={theme ? 'card-text' : 'card-text--light'}>{text}</p>
    </div>
  )
}
