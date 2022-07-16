import { SecondCol } from './secondCol';
import { FirstCol } from './firstCol';
import { Box, Grid } from "@mui/material"
import React from "react"

import { Github, DevTo, MediumIcon, Twitter, Reddit, Facebook, LinkedIn, Email, Buttermilk } from '../Social/social';
import { links } from '../../constants/contactLinks';

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <footer className="bg-gray-900 w-full p-6 pt-12 bg-auto" >
      <h1 className='text-2xl text-center mb-8 tracking-widest' style={{ fontFamily: 'Satisfy, cursive' }}> About & Other Stuff</h1>
      <Grid container sx={{ flexDirection: 'column' }} ref={ref}>
        <Grid container mb={2} justifyContent='center' spacing={2}>
          <FirstCol />
          <SecondCol />
        </Grid>

        <Box className="flex justify-center gap-4 text-center w-full mt-2" sx={{ mb: { xs: 4, sm: 0 } }}>
          <Github />
          <DevTo />
          <MediumIcon />
          <Twitter />
          <Reddit />
          <Facebook />
          <LinkedIn />
          <Email />
          <Buttermilk />
        </Box>
        <p className='text-center text-slate-600 mt-2'> Made with love 🧡 and Nextjs</p>
      </Grid>
    </footer>
  )
})

export default Footer