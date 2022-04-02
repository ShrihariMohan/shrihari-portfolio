import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function NavBar({ onSeeContact }: { onSeeContact: any }) {
  return (
    <nav className='py-4 md:px-12 px-6 text-lg sticky top-0 h-[60px] backdrop-blur-md	z-10' >
      <ul className='flex justify-between items-center'>
        <li className='tracking-wider text-cyan-500 font-extrabold' style={{ fontFamily: 'Satisfy, cursive' }}> 🙋🏽‍♂️ Shrihari M</li>
        <a onClick={onSeeContact} className="cursor-pointer tracking-wider" style={{ fontFamily: 'Satisfy, cursive' }}>
          About
        </a>  
      </ul>
    </nav>
  )
}

export default NavBar