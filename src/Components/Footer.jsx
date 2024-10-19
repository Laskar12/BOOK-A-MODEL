import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col gap-12'>
      <ul className='flex gap-6 text-2xl'>
        <li>
          <a href="#"><FaFacebook /></a>
        </li>
        <li>
          <a href="#"><FaInstagram /></a>
        </li>
        <li>
          <a href="#"><FaSquareXTwitter /></a>
        </li>
        <li>
          <a href="#"><FaTelegram />
           </a>
        </li>
        <li>
          <a href="#"><FaReddit /></a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="/public/assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className='font-playfair font-medium'>Have any question?</p>
          <a href="#" className='font-lato font-medium'>Talk our Executive</a>
        </div>
      </div>
    </div>
  )
}

export default Footer