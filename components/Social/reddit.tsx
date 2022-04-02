import React from "react";
import { links } from "../../constants/contactLinks";
import RedditIcon from '@mui/icons-material/Reddit';

function Reddit({ }) {
  return (
    <a href={links.reddit} className='hover:cursor-pointer' target='_blank'>
      <RedditIcon className='text-orange-600 hover:text-orange-500' />
    </a>);
}

export default Reddit

