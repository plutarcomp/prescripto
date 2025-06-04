import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate, NavLink } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='flex justify-between items-center py-4'>
        <img onClick={() => navigate('/')} src={assets.logo} alt='Logo Prescripto' className='w-44 cursor-pointer' />
        
        <ul className='inline-flex gap-3 font-semibold'>
            <NavLink to='/'>
                <li className=''>HOME</li>
            </NavLink>
            <NavLink to='/doctors'>
                <li className=''>ALL DOCTORS</li>
            </NavLink>
            <NavLink to='/about'>
                <li className=''>ABOUT</li>
            </NavLink>
            <NavLink to='/contact'>
                <li className=''>CONTACT</li>
            </NavLink>
        </ul>

        <button
          onClick={() => navigate("/auth")}
          className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          Create account
        </button>

    </div>
    <hr className='my-4'/>
    </>
  )
}

export default Navbar