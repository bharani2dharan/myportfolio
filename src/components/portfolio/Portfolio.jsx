import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/me.png'

const data =[
  {
    id:1,
    image:IMG,
    title:'This is a portfolio item1 title',
    github:'https://github.com',
    demo:'https://youtube.com'
  },
  {
    id:2,
    image:IMG,
    title:'This is a portfolio item2 title',
    github:'https://github.com',
    demo:'https://youtube.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id,image,title,github,demo}) => {
          return(
<article key={id}className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt=''/>
          </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href={github} className='btn' target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Demo Video</a>
        </div>
        </article>
         )
         })
      }
        

        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG} alt=''/>
          </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com' className='btn' target='_blank'>Github</a>
        <a href='https://youtube.com' className='btn btn-primary' target='_blank'>Demo Video</a>
        </div>
        </article> */}
        
      </div>
    </section>
  )
} 

export default Portfolio