import FacebookIcon from '@mui/icons-material/Facebook';
import React from "react";
import { links } from "../../constants/contactLinks";

function Facebook({ }) {
  return (<a className='hover:cursor-pointer' href={links.facebook} target='_blank' rel="noreferrer">
    <FacebookIcon className=' text-sky-500 hover:text-sky-600' />
  </a>);
}

export default Facebook