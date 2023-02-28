import React from 'react'
import { CardPortafolio } from './CardPortafolio';
import './Portafolio.css'

export const Portafolio = ({theme}) => {

  const appsWeb = [
  {
    pathProject: '/assets/images/bootstrap-platzi-2.png',
    title: 'Conferencia de Platzi',
    description: 'Es una pagina para la venta de tickets de una conferencia que dara platzi realizada con Bootstrap',
    sourceGit: 'https://github.com/AngelQP/Bootstrap-platzi',
    sourceWeb: 'https://bootstrap-platzi.netlify.app/'
  },
  {
    pathProject: '/assets/images/bootstrap-project.png',
    title: 'Nintendo Web',
    description: 'Es una pagina de nintendo realizada con Bootstrap donde se muestra algunos de sus productos',
    sourceGit: 'https://github.com/AngelQP/bootstrap-nintendo',
    sourceWeb: 'https://bootstrap-nintendo.netlify.app/'
  },
  {
    pathProject: '/assets/images/CSS-GRID.png',
    title: 'Blog con CSS GRID',
    description: 'Es un blog construido con CSS GRID donde contiene diversos articulos y es responsive',
    sourceGit: 'https://github.com/AngelQP/Blog-Grid',
    sourceWeb: 'https://blog-grid-css.netlify.app/'
  },
  {
    pathProject: '/assets/images/project-batatabit.png',
    title: 'Batatabit Project',
    description: 'Es un blog construido para saber los diferentes tipos de cambio de las criptomonedas.',
    sourceGit: 'https://github.com/AngelQP/batatabit-project',
    sourceWeb: 'https://batatabit-web.netlify.app/'
  },
  {
    pathProject: '/assets/images/todo-react.png',
    title: 'ToDo Project',
    description: 'Es una app web que permite gestionar las tareas por hacer y que sean remanentes con localstorage',
    sourceGit: 'https://github.com/AngelQP/todo-react',
    sourceWeb: 'https://todo-react-s327.vercel.app/'
  },
  {
    pathProject: '/assets/images/movie-project.png',
    title: 'Movie Project',
    description: 'Es una app web que permite revisar las películas en tendencia que se encuentran en estreno',
    sourceGit: 'https://github.com/AngelQP/Project-movies',
    sourceWeb: 'https://project-movies-seven.vercel.app/'
  },
  {
    pathProject: '/assets/images/pokemon-app.png',
    title: 'Pokemon Project',
    description: 'Es una app web que permite revisar a los diferentes pokemones de cada generacion y mostrar sus estidísticas si es seleccionado',
    sourceGit: 'https://github.com/AngelQP/pokemon-app',
    sourceWeb: 'https://pokemon-app-wine-zeta.vercel.app/'
  },
  ];

  return (
    <section className='container portafolio-container' id='portafolio'>
      <h2 className={theme ? 'portafolio-title' : 'portafolio-title--light'}>Portafolio</h2>
      <div className="container-pages">
        {
          appsWeb.map((app,index) => {
            return (
              <CardPortafolio 
              key={index}
              pathProject={app.pathProject} 
              title={app.title}
              description={app.description}
              sourceGit={app.sourceGit}
              sourceWeb={app.sourceWeb}
              theme={theme}
              />
            )
          })
        }
      </div>
    </section>
  )
}
