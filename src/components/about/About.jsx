import React from 'react'
import './About.css'
import ME from '../../assets/about.png'
import { FaAward } from 'react-icons/fa'
import { MdWorkOutline } from 'react-icons/md'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdWorkOutline className='about__icon' />
              <h5>Experience</h5>
              <small>5 Years Experience</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>B.E Computer Science and Engineering</small>
            </article>
          </div>

          <p>
            With 5+ years of experience in crafting robust web applications, I specialize in frontend development using React.js and Angular, backed by strong expertise in backend technologies like Node.js and Spring Boot. I bridge the gap between development and operations by integrating DevOps practices, including Docker, CI/CD pipelines, and Kubernetes deployments on AWS.

            From building responsive UIs to deploying scalable microservices, I bring end-to-end ownership to every project. I thrive in agile teams, write clean and maintainable code, and constantly explore new technologies to stay ahead.

            <p>🛠️ Tech Stack: React.js, Angular, Node.js, Express, Spring Boot, MongoDB, MySQL, Docker, Kubernetes, AWS</p>
            🚀 Interests: Performance optimization, cloud-native development, and automation.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about
