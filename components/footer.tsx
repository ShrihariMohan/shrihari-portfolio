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
    <footer className="bg-gray-900 w-full pt-6 pb-8 px-3" >
      <Grid container sx={{ flexDirection: { xs: 'column-reverse', sm: 'column' } }} ref={ref}>
        <Grid container mb={4} justifyContent='center'>
          <FirstCol />
          <SecondCol />

        </Grid>

        <Box className="flex justify-center gap-4 text-center w-full" sx={{ mb: { xs: 4, sm: 0 } }}>
          <Github />
          <Twitter />
          <Reddit />
          <Facebook />
          <LinkedIn />
          <Email />
        </Box>
      </Grid>
    </footer>
  )
})

export default Footer