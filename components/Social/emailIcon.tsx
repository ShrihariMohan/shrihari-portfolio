import React from "react";
import { links } from "../../constants/contactLinks";
import EmailIcon from '@mui/icons-material/Email';

function Email({ }) {
  return (
    <a type='email' href={'mailto:' + links.email} className='hover:cursor-pointer'>
      <EmailIcon className='text-red-500 hover:text-red-600' />
    </a>);
}

export default Email

