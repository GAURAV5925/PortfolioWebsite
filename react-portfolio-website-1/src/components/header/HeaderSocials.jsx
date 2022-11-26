import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{FiGithub} from 'react-icons/fi'
import{AiOutlineTwitter} from 'react-icons/ai'

const  HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/gauravjha5925/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/GAURAV5925" target="_blank"><FiGithub /></a>
        <a href="https://twitter.com/home" target="_blank"><AiOutlineTwitter /></a>
    </div>
  )
}

export default HeaderSocials