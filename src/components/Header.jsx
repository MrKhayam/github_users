import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="w-full text-white font-semibold text-xl h-16 bg-slate-500 flex justify-center items-center gap-5">
        <NavLink to="/" className={({isActive})=>`p-2 rounded-xl transition-all ${isActive ? 'bg-white text-black ' : null}`}>Home</NavLink>
        <NavLink to="/users" className={({isActive})=> `p-2 rounded-xl transition-all ${isActive ? 'bg-white text-black ' : null}`}>Github Users</NavLink>
    </div>
    </>
  )
}

export default Header