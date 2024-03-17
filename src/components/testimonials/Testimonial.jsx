import React from 'react'
import './Testimonial.css'
import IMG1 from '../../assets/testimonialpic1.png'
import IMG2 from '../../assets/testimonialpic2.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar:IMG2,
    client:'Dinesh Gowdhom',
    Review:'Dear Bharani, I appreciate everything that you have done over the past several years since you have joined us. The endless hours you have spent working with us, and the professionalism you have shown has motivated the entire management team luckily we did the crazy things in autonom8 when we worked on the platform tool called A8studio. A very supportive people that I guess'
  },
  {
    avatar:IMG1,
    client:'Arun Pandian',
    Review:'Mr.Bharani Dharan is a good developer, He had developed one of the best web application for our rental cab business. He is good, efficient and time consistent. '
  }
]

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Former Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial_container'
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
        data.map(({avatar,client,Review},index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt="Client Pic"/>
               </div>
               <h5 className='client__name'>{client}</h5>
                <small className='client__review'>
                  {Review}</small>
            </SwiperSlide>
            )
        })
        }
       
      </Swiper>
    </section>
  )
}

export default testimonial