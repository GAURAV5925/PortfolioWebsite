import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Gaurav Jha</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/gauravjha5925/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/GAURAV5925"><BsGithub/></a>
        <a href="https://twitter.com/jhagaurav5925"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small> No &copy; Gaurav Jha | It's Open For all</small>
      </div>
    </footer>
  )
}

export default Footer