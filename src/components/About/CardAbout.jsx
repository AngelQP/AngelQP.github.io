import React from 'react'
import './CardAbout.css'

export const CardAbout = ({path, alt, text}) => {
  return (
    <div className='card'>
      <img src={path} alt={alt} className='card-image' />
      <p className='card-text'>{text}</p>
    </div>
  )
}
