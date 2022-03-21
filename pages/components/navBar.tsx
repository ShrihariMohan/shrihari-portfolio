import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { links } from '../constants/contactLinks'

function NavBar() {
  return (
    <nav className='py-4 md:px-12 sm:px-6 text-lg sticky top-0 h-[60px] backdrop-blur-md	z-10' >
      <ul className='flex justify-between items-center'>
        <li className='tracking-wider' style={{ fontFamily: 'Satisfy, cursive' }}> 🙋🏽‍♂️ Shrihari M</li>
        <div className='flex '>
          <a type='email' href={'mailto:' + links.email} className='hover:cursor-pointer'>
            <EmailIcon className='mr-3 text-red-400 hover:text-red-500' />
          </a>
          <a className='hover:cursor-pointer' href={links.linkedIn} target='_blank' rel="noreferrer">
            <LinkedInIcon className='mr-3 text-cyan-400 hover:text-sky-500' />
          </a>
          <a className='hover:cursor-pointer' href={links.twitter} target='_blank' rel="noreferrer">
            <TwitterIcon className='mr-3 text-blue-400 hover:text-blue-500' />
          </a>
          <a className='hover:cursor-pointer' href={links.github} target='_blank' rel="noreferrer">
            <GitHubIcon className='text-violet-400 hover:text-violet-500' />
          </a>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar