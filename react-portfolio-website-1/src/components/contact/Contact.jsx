import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_anet8pb', 'template_pxsb7kl', form.current, 'vrGf2LDac0fwa6wwH')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>jhagaurav5925@gmail.com</h5>
            <a href="mailto:jhagaurav5925@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <BsTwitter className='contact_option-icon' />
            <h4>Twitter</h4>
            <h5>@jhagaurav5925</h5>
            <a href="https://twitter.com/jhagaurav5925" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 93728 81572</h5>
            <a href="https://api.whatsapp.com/send?phone=9372881572" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact