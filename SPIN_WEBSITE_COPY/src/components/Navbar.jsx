import React from 'react'
import { logo } from '../assets'


const Navbar = () => (
    <nav className=' w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt = "SPIN" className="w-[124px] h-[32px]"/> 
    </nav>
    
  )

export default Navbar