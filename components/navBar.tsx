import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
function NavBar({ onSeeContact, showNavItems = true }: { onSeeContact?: any, showNavItems?: boolean }) {
  return (
    <nav className='py-4 md:px-12 px-6 text-lg sticky top-0 h-[60px] backdrop-blur-md	z-10' >
      <ul className='flex justify-between items-center'>
        <Link href='/'>
          <li className='tracking-widest text-cyan-500 font-extrabold cursor-pointer' style={{ fontFamily: 'Satisfy, cursive' }}> 🙋🏽‍♂️ Shrihari M</li>
        </Link>
        {
          showNavItems && <div>
            <Link href='/blogs' >
              <span className="cursor-pointer tracking-widest font-bold mr-4" style={{ fontFamily: 'Satisfy, cursive' }}> Blogs </span>
            </Link>
            <button onClick={onSeeContact} className="cursor-pointer tracking-widest font-bold" style={{ fontFamily: 'Satisfy, cursive' }}>
              About
            </button>  
          </div>
        }
      </ul>
    </nav>
  )
}

export default NavBar