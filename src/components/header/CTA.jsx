import React from 'react'
import CV from '../../assets/Bharanidharan_Resume_Updated.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn d-none'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA