// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between bg-slate-700 text-white py-3 w-full'>
      <div className='logo'>
      <span className=' font-bold text-xl mx-8'> <NavLink to="/">iTask</NavLink></span>
      </div>
        <ul className='flex gap-10'>
            <li className='cursor-pointer hover:font-bold transition-all duration-100'><NavLink to="/">Home</NavLink></li>
            {/* <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Task</li> */}
            <li className='cursor-pointer hover:font-bold transition-all duration-100 mr-3'><NavLink to="/weather">See weather</NavLink></li>
            
        </ul> 
      </nav>
    </div>
  )
}

export default Navbar
