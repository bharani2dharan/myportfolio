import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>

     <div className='container services_container'>
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Web Designing Service</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Mobile App Design Service</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>

        <ul className='service_list'>
        <li>
            <BiCheck className='service_list-icon'/>
            <p>Web Application Development</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Custom Website Development</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Website Maintenance</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>E-commerce Web Application Development</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Responsive Website Development</p>
          </li>
        </ul>
      </article>

      <article className='service'>
        <div className='service__head'>
          <h3>Content Creation</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Video Content Service</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Blog Posts Service</p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>Interactive Content</p>
          </li>
        </ul>
      </article>
     
     </div>
    </section>
  )
}

export default Services