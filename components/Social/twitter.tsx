import React from "react";
import { links } from "../../constants/contactLinks";
import TwitterIcon from '@mui/icons-material/Twitter';

function Twitter({ }) {
  return (<a className='hover:cursor-pointer' href={links.twitter} target='_blank' rel="noreferrer">
    <TwitterIcon className=' text-blue-500 hover:text-blue-600' />
  </a>);
}

export default Twitter

