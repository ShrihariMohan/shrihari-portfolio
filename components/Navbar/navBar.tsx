import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip } from '@mui/material';
import { links } from '../../constants/contactLinks';
import { Buttermilk } from '../Social/social';
import ThemeSwitcher from '../UI components/themeSwitcher';
function NavBar({ onSeeAbout, showNavItems = true, showBlogsItems = true, showAboutItems = true }: { onSeeAbout?: any, showNavItems?: boolean, showBlogsItems?: boolean, showAboutItems?: boolean }) {
  return (
    <nav className='py-4 md:px-12 px-6 text-lg sticky top-0 h-[60px] backdrop-blur-md	z-10' >
      <ul className='flex justify-between items-center'>
        <Link href='/'>
          <li className='flex items-center tracking-widest text-cyan-500 font-extrabold cursor-pointer'>
            <Image src='/profile-pic.png' width={20} height={20} className="rounded-full drop-shadow-lg" />
            <span style={{ fontFamily: 'Satisfy, cursive' }} className="ml-2"> Shrihari M </span>
          </li>
        </Link>
        {
          showNavItems && <div>
            {
              showBlogsItems &&
              <Link href='/blogs' >
                <span className="cursor-pointer tracking-widest font-bold mr-4" style={{ fontFamily: 'Satisfy, cursive' }}> Blogs </span>
              </Link>
            }
            {
              showAboutItems &&
              <button onClick={onSeeAbout} className="cursor-pointer tracking-widest font-bold mr-4" style={{ fontFamily: 'Satisfy, cursive' }}>
                About
              </button>
            }
            <Buttermilk />
          </div>
        }

      </ul>
    </nav>
  )
}

export default NavBar