import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/meme.png'
import Headersocials from './Headersocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bharani Dharan</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA/>
        <Headersocials/>

        <div className='me'> 
          <img src={ME} alt='me'/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
      </header>
  )
}

export default header