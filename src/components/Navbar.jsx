import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate, NavLink } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center py-4'>
        <img onClick={() => navigate('/')} src={assets.logo} alt='Logo Prescripto' className='w-44 cursor-pointer' />
        
        <ul>
            <NavLink to='/'>
                <li className=''>HOME</li>
            </NavLink>
            <NavLink to='/about'>
                <li className=''>ALL DOCTORS</li>
            </NavLink>
            <NavLink to='/appointment'>
                <li className=''>ABOUT</li>
            </NavLink>
            <NavLink to='/contact'>
                <li className=''>CONTACT</li>
            </NavLink>
        </ul>
        <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>

    </div>
  )
}

export default Navbar