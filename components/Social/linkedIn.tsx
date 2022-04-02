import React from "react";
import { links } from "../../constants/contactLinks";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function LinkedIn({ }) {
  return (<a className='hover:cursor-pointer' href={links.linkedIn} target='_blank' rel="noreferrer">
    <LinkedInIcon className=' text-cyan-500 hover:text-sky-600' />
  </a>);
}

export default LinkedIn

