// import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div className=' fixed top-0 left-0 right-0  flex justify-around pt-3 pb-3 bg-yellow-950 text-red-700 hover:text-yellow-500  transition duration-[0.7s] text-[20px]'>
      <div>
        <NavLink  className=' hover:text-white  ' to={'/'}>Home</NavLink>
      </div>
      <div>
      <NavLink  className=' hover:text-white' to={'/botCollection'}>Collection</NavLink>

      </div>

      <div>
      <NavLink className=' hover:text-white'  to={'/yourBotArmy'}>My Bots</NavLink>
      </div>
    </div>
  )
}

export default Navbar
