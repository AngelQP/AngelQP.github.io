import React from 'react'
import './Hero.css'

export const Hero = ({theme}) => {
  return (
    <section className={theme ? 'container hero-container' : 'container hero-container hero-container--light'} >
      <article className='hero-texts'>
        <h1 className={ theme ? 'title' : 'title title--light'}>I'm <strong className='title--name'>Angel Eduardo</strong></h1>
        <h3 className={theme ? 'title--second' : 'title--second--light'}>Front end Developer</h3>
        <h3 className="hero--second"></h3>
        <a href="#" className='hero-cta' >Dowloand CV</a>
      </article>
      <figure className='hero-figure'>
        <img src={theme ? "/assets/icons/hero.svg" : "/assets/icons/hero-light.svg"} alt="Imagen de hero" className='hero-image' />
      </figure>
    </section>
  )
}
