// import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className=' flex justify-around pt-3 pb-3 bg-yellow-950 text-red-700 hover:text-yellow-500  transition duration-[0.7s] text-[20px]'>
      <div>
        <NavLink  className=' hover:text-white  ' to={'/'}>Home</NavLink>
      </div>
      <div>
      <NavLink  className=' hover:text-white' to={'/botCollection'}>Collection</NavLink>

      </div>
    </div>
  )
}

export default Navbar
