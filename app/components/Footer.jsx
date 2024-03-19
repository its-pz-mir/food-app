import React from 'react'

import { FaFacebookF, FaLinkedinIn, FaGithubAlt, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <div className="top"></div>
      <div className="bottom flex justify-between items-center">
        <p className=''>Copyright - &copy;  All rights Reserved to Usman Shouket</p>
        <div className="icons flex justify-center items-center">
          <p>Follow</p>
          <FaFacebookF />
          <FaGithubAlt />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
      </div>
    </div>
  )
}

export default Footer