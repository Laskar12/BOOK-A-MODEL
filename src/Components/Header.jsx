import React from 'react'
import { FaBars } from 'react-icons/fa'
import { GiEvilLove } from "react-icons/gi";
const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className='bg-gradient-to-r from-orange-600 to-red text-xs px-2.5 py-1.5 rounded-2xl flex font-extrabold'><GiEvilLove /> Book me </button>

      </div>
      <div>
        <FaBars />
      </div>
    </div>
  )
}

export default Header