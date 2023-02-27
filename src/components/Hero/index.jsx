import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='container hero-container'>
      <article className='hero-texts'>
        <h1 className='title'>I'm <strong className='title--name'>Angel Eduardo</strong></h1>
        <h3 className='title--second'>Front end Developer</h3>
        <h3 className="hero--second"></h3>
        <a href="#" className='hero-cta' >Dowloand CV</a>
      </article>
      <figure className='hero-figure'>
        <img src="/assets/icons/hero.svg" alt="Imagen de hero" className='hero-image' />
      </figure>
    </section>
  )
}
