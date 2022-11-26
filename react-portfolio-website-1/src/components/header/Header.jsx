import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Gaurav Jha</h1>
      <h5 className="text-light">MERN Stack Developer</h5>
<CTA/>
<HeaderSocials />
<div className="me">
<img src={ME} alt="me" />
</div>
<a href="#contact" className='scroll_down'>Scroll Down</a>

    </div>
   </header>
  )
}

export default Header