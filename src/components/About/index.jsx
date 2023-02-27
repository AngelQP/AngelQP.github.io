import React from 'react'
import './About.css'
import {CardAbout} from './CardAbout'

export const About = () => {

  const arraySkills = [
    {path: '/assets/icons-card/html.svg',
    alt: 'logo html',
    text: 'HTML'},
    {path: '/assets/icons-card/css.svg',
    alt: 'logo css',
    text: 'CSS'},
    {path: '/assets/icons-card/javascript.svg',
    alt: 'logo javascript',
    text: 'Javascript'},
    {path: '/assets/icons-card/bootstrap.svg',
    alt: 'logo bootstrap',
    text: 'Bootstrap'},
    {path: '/assets/icons-card/react.svg',
    alt: 'logo react',
    text: 'React'},
    {path: '/assets/icons-card/git.svg',
    alt: 'logo git',
    text: 'Git'},
    {path: '/assets/icons-card/github.svg',
    alt: 'logo github',
    text: 'Github'},
  ];

  return (
    <section id='about' className='container about-container'>

      <article className="about-text">
        <h2 className='about-title'>About</h2>
        <div className='about-description'>
          
          <img src='/assets/icons/line.svg' className='about-description--line' alt='Icono de linea' />

          <p className='about-paragraph'>Que tal soy Angel, curso la carrera de Ingeníera de Sistemas en la Universidad Tecnológica del Perú, <b className='about-paragraph--special'>me dedique aprender tecnologías para ser un frontend developer como HTML & CSS, Javascript, React, Bootstrap</b> entre otras. Además, me gusta mejorar mis Soft y Hard Skills para que cada proyecto que realice o participe tenga la mejor calidad, también se trabajar en equipo cumpliendo con mis responsabilidades y aportando diversos enfoques para la resolución de problemas.
          </p>

        </div>
      </article>

      <article className='about-skills'>
        <h2 className='skills-title'>My Skills</h2>

        <div className="container-skills">
          {arraySkills.map(skill => {
            return (
              <CardAbout path={skill.path} alt={skill.path} text={skill.text} />
            )
          })}
        </div>


      </article>

    </section>
  )
}
