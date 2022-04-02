import React from "react";
import { links } from "../../constants/contactLinks";
import GitHubIcon from '@mui/icons-material/GitHub';

function Github({ }) {
  return (<a className='hover:cursor-pointer' href={links.github} target='_blank' rel="noreferrer">
    <GitHubIcon className='text-violet-500 hover:text-violet-600' />
  </a>);
}
export default Github

