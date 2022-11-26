
import React from "react"
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Rumble',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus qui vero esse repellat doloribus expedita ut ipsa, ad repellendus tempora iure perspiciatis, maxime, facilis in delectus temporibus debitis quasi.'
  },
  {
    avatar: AVTR2,
    name: 'John Walter',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus qui vero esse repellat doloribus expedita ut ipsa, ad repellendus tempora iure perspiciatis, maxime, facilis in delectus temporibus debitis quasi.'
  },
  {
    avatar: AVTR3,
    name: 'Jesse Floyd',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus qui vero esse repellat doloribus expedita ut ipsa, ad repellendus tempora iure perspiciatis, maxime, facilis in delectus temporibus debitis quasi.'
  },
  {
    avatar: AVTR4,
    name: 'Samina Riyaz',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus qui vero esse repellat doloribus expedita ut ipsa, ad repellendus tempora iure perspiciatis, maxime, facilis in delectus temporibus debitis quasi.'
  }
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
        {
          data.map(({avatar,name,review}, index) => {
            return(
              <SwiperSlide key ={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} />
            
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
        

        
      </Swiper>
      </section>
  )
}

export default testimonials