import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oivgk3d', 'template_anpc1mv', form.current, 'p6Nbktn5b-et-HQUb')
    
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>bharani2dharan@gmail.com</h5>
              <a href='mailto:bharani2dharan@gmail.com' target='_blank'>Send a Message</a>
            </article>
            <article className='contact_option'>
              <BsLinkedin className='contact_option-icon'/>
              <h4>LinkedIn</h4>
              <h5>Bharani Dharan</h5>
              <a href='https://www.linkedin.com/in/bharani-dharan-a-920728169/' target='_blank'>Send a Message</a>
            </article>
            <article className='contact_option'>
              <BsWhatsapp className='contact_option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+919751707231</h5>
              <a href='https://wa.me/+919751707231' target='_blank'>Send a Message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send a Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contact