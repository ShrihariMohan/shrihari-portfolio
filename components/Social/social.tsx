import React from "react";
import Image from "next/image"
import Tooltip from '@mui/material/Tooltip';


import { links } from "../../constants/contactLinks";

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import FacebookIcon from '@mui/icons-material/Facebook';
import RedditIcon from '@mui/icons-material/Reddit';

import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

function Twitter({ }) {
  return (
    <Tooltip title="Twitter" arrow placement="top">
      <a className='hover:cursor-pointer' href={links.twitter} target='_blank' rel="noreferrer">
        <TwitterIcon className=' text-blue-500 hover:text-blue-600' />
      </a>
    </Tooltip>
  );
}


function Reddit({ }) {
  return (
    <Tooltip title="Reddit" arrow placement="top">
      <a href={links.reddit} className='hover:cursor-pointer' target='_blank'>
        <RedditIcon className='text-orange-600 hover:text-orange-500' />
      </a>
    </Tooltip>
  );
}

function Notion() {
  return (
    <Tooltip title="Notion" arrow placement="top">
      <img
        className="align-middle bg-white"
        src="/notion.png"
        width={22}
        height={22}
      />
    </Tooltip>
  )
}

function MediumIcon({ }) {

  const handleClick = () => {
    window.open(links.medium, '_blank');
  }

  return (
    <Tooltip title="Medium" arrow placement="top">
      <img onClick={handleClick}
          className="rounded align-middle"
          src='/medium-icon.jpeg'
        width={24}
        height={24}
      />
    </Tooltip>
  );
}


function LinkedIn({ }) {
  return (
    <Tooltip title="LinkedIn" arrow placement="top">
      <a className='hover:cursor-pointer' href={links.linkedIn} target='_blank' rel="noreferrer">
        <LinkedInIcon className=' text-cyan-500 hover:text-sky-600' />
      </a>
    </Tooltip>
  );
}

function Github({ }) {
  return (
    <Tooltip title="Github" arrow placement="top">
      <a className='hover:cursor-pointer' href={links.github} target='_blank' rel="noreferrer">
        <GitHubIcon className='text-violet-500 hover:text-violet-600' />
      </a>
    </Tooltip>
  );
}

function Facebook({ }) {
  return (
    <Tooltip title="Facebook" arrow placement="top">
      <a className='hover:cursor-pointer' href={links.facebook} target='_blank' rel="noreferrer">
        <FacebookIcon className=' text-sky-500 hover:text-sky-600' />
      </a>
    </Tooltip>
  );
}

function Email({ }) {
  return (
    <Tooltip title="Opens default email app" arrow placement="top">
      <a type='email' href={'mailto:' + links.email} className='hover:cursor-pointer'>
        <EmailIcon className='text-red-500 hover:text-red-600' />
      </a>
    </Tooltip>
  );
}

function DevTo({ }) {
  return (
    <Tooltip title="Devto community" arrow placement="top">
      <a href={links.devto} target='_blank' className='hover:cursor-pointer'>
        <LogoDevIcon className='text-slate-300 hover:text-slate-200' />
      </a>
    </Tooltip>
  );
}

function Buttermilk({ }) {
  return (
    <Tooltip title="Buy me a buttermilk" arrow placement="top">
      <a href={links.buttermilk} target='_blank' className='hover:cursor-pointer'>
        <LocalDrinkIcon className='text-yellow-200 hover:text-yellow-300' />
      </a>
    </Tooltip>
  );
}

function StackOverflow() {
  return (
    <Tooltip title="Stack Overflow" arrow placement="top">
      <img
          className=" align-middle"
          src="/stack-overflow.png"
          width={22}
          height={22}
      />
    </Tooltip>
  );
}

export {
  DevTo,
  Notion,
  MediumIcon,
  Reddit,
  Email,
  Github,
  Facebook,
  LinkedIn,
  Twitter,
  Buttermilk,
  StackOverflow,
};