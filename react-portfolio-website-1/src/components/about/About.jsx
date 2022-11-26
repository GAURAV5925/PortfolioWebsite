import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
<h5>Get to Know</h5>
<h2>About Me</h2>

<div className="container about_container">
  <div className="about_me">
    <div className="about_me-image">
      <img src={ME} alt="aboutme" />
      </div>
      </div>

<div className="about_content">
      <div className="about_cards">
        <article className='about_card'>
          <FaAward className='about_icon' />
          <h5>Experience</h5>
          <small>Fresher</small>
        </article>

        <article className='about_card'>
          <FiUsers className='about_icon' />
          <h5>Clients</h5>
          <small>3+ Worldwide</small>
        </article>

        <article className='about_card'>
          <VscFolderLibrary className='about_icon' />
          <h5>Projects</h5>
          <small>20+ Completed</small>
        </article>

      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consequuntur dignissimos perspiciatis suscipit. Accusamus nulla blanditiis, unde perferendis quos omnis eligendi, nisi voluptates illo ipsa adipisci enim dolore assumenda animi?
      </p>
      <a href="#contact" className='btn btn-primary'> Let's Talk</a>
    </div>

  </div>

    </section>
  )
}

export default About