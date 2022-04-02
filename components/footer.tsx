import { SecondCol } from './Footer/secondCol';
import { FirstCol } from './Footer/firstCol';
import { Box, Grid } from "@mui/material"
import React from "react"

import Email from "./Social/emailIcon";
import LinkedIn from "./Social/linkedIn";
import Twitter from "./Social/twitter";
import Github from "./Social/github";

import Reddit from "./Social/reddit";
import Facebook from './Social/facebook';

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <footer className="bg-gray-900 w-full pt-6  px-3" >
      <h1 className='text-2xl text-center mb-8' style={{ fontFamily: 'Satisfy, cursive' }}> About & Other Stuff</h1>
      <Grid container sx={{ flexDirection: 'column' }} ref={ref}>
        <Grid container mb={2} justifyContent='center'>
          <FirstCol />
          <SecondCol />
        </Grid>

        <Box className="flex justify-center gap-4 text-center w-full mt-2" sx={{ mb: { xs: 4, sm: 0 } }}>
          <Github />
          <Twitter />
          <Reddit />
          <Facebook />
          <LinkedIn />
          <Email />
        </Box>
        <p className='text-center text-slate-600 mt-4'> Feel Free to use this as a <a href='https://github.com/ShrihariMohan/shrihari-portfolio' className='cursor-pointer text-cyan-600 hover:scale-110' target='_blank'> template</a> for your portfolio</p>
      </Grid>
    </footer>
  )
})

export default Footer