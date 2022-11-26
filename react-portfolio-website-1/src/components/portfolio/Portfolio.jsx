import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/website1.jpg'
import IMG2 from '../../assests/portfolio1.jpg'
import IMG3 from '../../assests/portfolio2.jpg'
import IMG4 from '../../assests/portfolio3.jpg'
import IMG5 from '../../assests/portfolio4.jpg'
import IMG6 from '../../assests/portfolio5.png'

const data = [
  {
    id:1,
    image: IMG5,
    title : 'Student Point Portfolio',
    github: 'https://github.com/GAURAV5925/studentspoint.github.io',
    demo: 'https://studentspointsd.netlify.app/'
  },
  {
    id:2,
    image: IMG2,
    title : 'Student Point Portfolio',
    github: 'https://github.com/GAURAV5925/studentspoint.github.io',
    demo: 'https://studentspointsd.netlify.app/'
  },
  {
    id:3,
    image: IMG3,
    title : 'Student Point Portfolio',
    github: 'https://github.com/GAURAV5925/studentspoint.github.io',
    demo: 'https://studentspointsd.netlify.app/'
  },
  {
    id:4,
    image: IMG4,
    title : 'Student Point Portfolio',
    github: 'https://github.com/GAURAV5925/studentspoint.github.io',
    demo: 'https://studentspointsd.netlify.app/'
  },
  {
    id:5,
    image: IMG5,
    title : 'Student Point Portfolio',
    github: 'https://github.com/GAURAV5925/studentspoint.github.io',
    demo: 'https://studentspointsd.netlify.app/'
  },
  {
    id:6,
    image: IMG6,
    title : 'Student Point Portfolio',
    github: 'https://github.com/GAURAV5925/studentspoint.github.io',
    demo: 'https://studentspointsd.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
        data.map(({id,image,title,github,demo}) => {
          return (
          <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank'>GitHub</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio