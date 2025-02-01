import React from 'react'
import './About.css'
import ME from '../../assets/about.png'
import {FaAward} from 'react-icons/fa'
import {MdWorkOutline} from 'react-icons/md'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"/>
          </div>
        </div>

        <div className='about__content'>
           <div className='about__cards'>
             <article className='about__card'>
              <MdWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>4.5+ Years Experience</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>B.E Computer Science and Engineering</small>
            </article>
         </div>

         <p>
         Full Stack Web Developer with a demonstrated history of working in the computer software industry. Skilled in Java, HTML, CSS, Javascript, Jquery, Bootstrap, MySQL, API Integration, Typescript, React JS and Node JS. Strong engineering professional with a Bachelor of Engineering - BE focused in Computer Science and Engineering from P.S.N.A. College of Engineering and Technology, Dindigul.
         </p>
         
         <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
      </section>
  )
}

export default about
