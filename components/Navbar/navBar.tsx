import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

type props = {
  onSeeAbout?: any,
  showNavItems?: boolean,
  showBlogsItems?: boolean,
  showAboutItems?: boolean,
  showRandomItems?: boolean,

}
function NavBar({ onSeeAbout, showNavItems = true, showBlogsItems = true, showAboutItems = true, showRandomItems = true }: props) {
  return (
    <nav className={'py-4 sm:px-8 md:px-12  px-6 text-lg sticky top-0 h-[60px] backdrop-blur-md	z-10 '} >
      <ul className='flex justify-between items-center'>
        <Link href='/'>
          <li className='flex items-center tracking-widest text-cyan-500 font-extrabold cursor-pointer'>
            <Image src='/profile-pic.png' width={24} height={24} className="rounded-full drop-shadow-lg" />
            <span style={{ fontFamily: 'Satisfy, cursive' }} className="ml-2 hidden sm:block"> Shrihari M </span>
          </li>
        </Link>
        {
          showNavItems && <div className='flex gap-4 sm:gap-8'>

            {
              showRandomItems &&
              <Link href='/random' >
                <span className="cursor-pointer tracking-widest font-bold" style={{ fontFamily: 'Satisfy, cursive' }}> Random </span>
              </Link>
            }

            {
              showBlogsItems &&
              <Link href='/blogs' >
                  <span className="cursor-pointer tracking-widest font-bold" style={{ fontFamily: 'Satisfy, cursive' }}> Blogs </span>
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