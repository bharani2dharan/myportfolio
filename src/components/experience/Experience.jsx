import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
      <div className='experience__frontend'>
       <h3>Frontend Development</h3>
       <div className='experience__content'>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Intermediate</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Javascript</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Bootstrap</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>React</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Angular</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Typescript</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>API Integration</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
       </div>
      </div>
      
      <div className='experience__backend'>
      <h3>Backend Development</h3>
       <div className='experience__content'>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Node JS</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Mongo DB</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>MySQL</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Java Spring Boot</h4>
             <small className='text-light'>Intermediate</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>API Development</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Python</h4>
             <small className='text-light'>Beginner</small>
             </div>
        </article>
       </div>
      </div>
    </div>
    </section>
  )
}

export default experience