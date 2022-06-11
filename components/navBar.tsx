import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
function NavBar({ onSeeAbout, showNavItems = true, showBlogsItems = true, showAboutItems = true }: { onSeeAbout?: any, showNavItems?: boolean, showBlogsItems?: boolean, showAboutItems?: boolean }) {
  return (
    <nav className='py-4 md:px-12 px-6 text-lg sticky top-0 h-[60px] backdrop-blur-md	z-10' >
      <ul className='flex justify-between items-center'>
        <Link href='/'>
          <li className='tracking-widest text-cyan-500 font-extrabold cursor-pointer' style={{ fontFamily: 'Satisfy, cursive' }}> 🙋🏽‍♂️ Shrihari M</li>
        </Link>
        {
          showNavItems && <div>
            {
              showBlogsItems &&
              <Link href='/blogs/top' >
              <span className="cursor-pointer tracking-widest font-bold mr-4" style={{ fontFamily: 'Satisfy, cursive' }}> Blogs </span>
            </Link>
            }
            {
              showAboutItems &&
              <button onClick={onSeeAbout} className="cursor-pointer tracking-widest font-bold" style={{ fontFamily: 'Satisfy, cursive' }}>
              About
            </button>  
            }
          </div>
        }
      </ul>
    </nav>
  )
}

export default NavBar